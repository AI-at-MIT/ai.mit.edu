import {
  CalendarEventData,
  max_calendar_events_render,
  NoEventData,
  InitiativeInterface,
  initiative_data,
  dateOptions,
  timeOptions,
} from "./constants";
import DOMPurify from "dompurify";
import ICAL from "ical.js";

const CALENDAR_ID =
  "c_17a0804f0b23934eca81b9e59fc82b83d2d485cd65741bc426ebdbd0c4592a5a@group.calendar.google.com";
const ICAL_URL = `https://calendar.google.com/calendar/ical/${CALENDAR_ID}/public/basic.ics`;

function getEventStatus(start: string, end: string) {
  const now = new Date();
  const eventStart = new Date(start);
  const eventEnd = new Date(end);

  if (eventEnd < now) return "Done";
  if (eventStart < now && now < eventEnd) return "Now";

  const isToday = (d1: Date, d2: Date) =>
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate();

  if (isToday(now, eventStart)) return "Today";

  const tomorrow = new Date(now);
  tomorrow.setDate(now.getDate() + 1);
  if (isToday(tomorrow, eventStart)) return "Tomorrow";

  return "Future";
}

function parseTitle(title: string) {
  const match = title.match(/\[(.*?)\]/);
  const cleanTitle = title.replace(/\[(.*?)\]/, "").trim();

  if (!match)
    return { title: cleanTitle, initiative: "aim", isImportant: false };

  const tag = match[1].trim();
  const isImportant = tag.endsWith("!");
  let initial = tag.replace(/!/g, "").toLowerCase()[0];

  if (initial === "a") initial = "aim";
  const initiative = Object.keys(initiative_data).includes(initial)
    ? initial
    : "aim";

  return { title: cleanTitle, initiative, isImportant };
}

function parseDescription(desc: string) {
  const match = desc.match(/\[(.*?)\]/);
  if (!match) return { description: desc, link: "" };

  const urlMatch = match[1].match(/(https?:\/\/[^\s]+)/);
  return {
    description: desc.replace(/\[(.*?)\]/, "").trim(),
    link: urlMatch ? urlMatch[0] : "",
  };
}

function parseICalEvent(vevent: any): CalendarEventData | null {
  const event = new ICAL.Event(vevent);
  if (!event.summary) return null;

  const startDate = event.startDate.toJSDate();
  const endDate = event.endDate.toJSDate();
  const isAllDay = event.startDate.isDate;

  const start = isAllDay
    ? startDate.toISOString().split("T")[0]
    : startDate.toISOString();
  const end = isAllDay
    ? endDate.toISOString().split("T")[0]
    : endDate.toISOString();

  const { title, initiative, isImportant } = parseTitle(event.summary);
  const { description, link } = parseDescription(event.description || "");

  return {
    Type: initiative,
    Important: isImportant ? "true" : "",
    Date: startDate.toLocaleDateString("en-US", dateOptions),
    Time: isAllDay ? "" : startDate.toLocaleTimeString("en-US", timeOptions),
    Location: event.location || "",
    Link: link,
    Title: title,
    Description: description,
    DateTimeStr: start,
    EndDateTimeStr: end,
    EventStatus: getEventStatus(start, end),
  };
}

function filterAndSort(
  events: CalendarEventData[],
  initiative: InitiativeInterface
) {
  const twoDaysAgo = new Date();
  twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);

  const isRelevant = (card: CalendarEventData) =>
    card.Type === initiative.key || initiative.key === "aim";

  const recent = events.filter(
    (e) => new Date(e.DateTimeStr) >= twoDaysAgo && isRelevant(e)
  );

  if (recent.length < max_calendar_events_render) {
    const older = events
      .filter((e) => new Date(e.DateTimeStr) < twoDaysAgo && isRelevant(e))
      .sort(
        (a, b) =>
          new Date(b.DateTimeStr).getTime() - new Date(a.DateTimeStr).getTime()
      )
      .slice(0, max_calendar_events_render - recent.length);

    recent.push(...older);
  }

  const statusPriority: Record<string, number> = {
    Now: 3,
    Today: 2,
    Future: 1,
    Done: 0,
  };

  return recent
    .sort((a, b) => {
      const statusDiff =
        statusPriority[b.EventStatus] - statusPriority[a.EventStatus];
      if (statusDiff !== 0) return statusDiff;

      return (
        new Date(b.DateTimeStr).getTime() - new Date(a.DateTimeStr).getTime()
      );
    })
    .slice(0, max_calendar_events_render);
}

export const sanitizeHtml = (html: string): string => {
  const clean = DOMPurify.sanitize(html, {
    ADD_TAGS: ["a", "p"],
    ADD_ATTR: ["target", "rel", "class"],
    ALLOWED_URI_REGEXP: /^https?:\/\//i,
    FORBID_TAGS: ["script"],
  });

  const parser = new DOMParser();
  const doc = parser.parseFromString(clean, "text/html");

  doc.querySelectorAll("a").forEach((a) => {
    a.classList.add("text-blue-500", "underline", "hover:text-blue-700");
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noopener noreferrer");
  });

  doc
    .querySelectorAll("p")
    .forEach((p) => p.classList.add("text-sm", "gray-text"));

  Array.from(doc.body.childNodes).forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE && node.textContent?.trim()) {
      const p = doc.createElement("p");
      p.classList.add("text-sm", "gray-text");
      p.textContent = node.textContent;
      doc.body.replaceChild(p, node);
    }
  });

  return doc.body.innerHTML;
};

export async function get_google_calendar_data(
  initiative: InitiativeInterface
): Promise<CalendarEventData[]> {
  try {
    const response = await fetch(
      `https://api.allorigins.win/raw?url=${encodeURIComponent(ICAL_URL)}`
    );
    if (!response.ok) return [NoEventData];

    const icalData = await response.text();
    const comp = new ICAL.Component(ICAL.parse(icalData));
    const vevents = comp.getAllSubcomponents("vevent");

    const events = vevents
      .map(parseICalEvent)
      .filter((e): e is CalendarEventData => e !== null);

    if (events.length === 0) return [NoEventData];

    const filtered = filterAndSort(events, initiative);
    return filtered.length > 0 ? filtered : [NoEventData];
  } catch (err) {
    console.error("Calendar fetch error:", err);
    return [NoEventData];
  }
}
