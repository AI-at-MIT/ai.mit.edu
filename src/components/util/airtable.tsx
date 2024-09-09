import Airtable from 'airtable'

import {CalendarEventData, max_calendar_events_render, NoEventData, InitiativeInterface, initiative_data, dateOptions, timeOptions} from './constants'
import DOMPurify from 'dompurify';



function get_event_status(date_str:string, end_date_str:string){
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setDate(now.getDate() + 1);

  const eventDate = new Date(date_str);
  const endEventDate = new Date(end_date_str);

  if (endEventDate < now) {
    return "Done";
  } 
  
  
  if (eventDate < now && now < endEventDate) {
    return "Now";
  } 
  
  if (
    now.getFullYear() === eventDate.getFullYear() &&
    now.getMonth() === eventDate.getMonth() &&
    now.getDate() === eventDate.getDate()
  ) {
    console.log(eventDate,now)
    return "Today"
  }
  if (
    tomorrow.getFullYear() === eventDate.getFullYear() &&
    tomorrow.getMonth() === eventDate.getMonth() &&
    tomorrow.getDate() === eventDate.getDate()
  ) {
    return "Tommorow"
  }
  return "Future"

}

const parseTitle = (title_raw:string) => {
  let isImportant = false
  let initiative = "aim"
  let real_title = ""
  const regex = /\[(.*?)\]/;

  let valid_keys = Object.keys(initiative_data)
  
  if (typeof title_raw === 'string'){
    real_title = title_raw.replace(regex, '').trim() 
    let title_match = title_raw.match(regex);  

    if(title_match ) {
      let title_bracket_content = title_match[1].trim()

    if (title_bracket_content){
      let initial = title_bracket_content.replace(/!/g, '').toLowerCase()[0]
        if (initial == "a"){
          initial = "aim"
        }
        if(valid_keys.includes(initial)){
          initiative = initial
        }
  
        isImportant = title_bracket_content.endsWith('!')
      }
  
    }
   }

   return {real_title, initiative, isImportant}
}


const parseDesc = (description_raw: string) => {
  const regex = /\[(.*?)\]/;
  let real_desc = ""
  let url_link = ""
  if (typeof description_raw === 'string'){
    real_desc=description_raw
    let desc_match = description_raw.match(regex);  
    if(desc_match){

      let desc_bracket_content = desc_match[1].trim()
      if(desc_bracket_content){
        real_desc = description_raw.replace(regex, '').trim() 
  
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        let url_match = desc_bracket_content.match(urlRegex)
        if (url_match){
          url_link = url_match[0];
        }
      }

  }
  }
  return {real_desc, url_link}

}
function parseAirTableRow(fields:Airtable.FieldSet){
    //console.log(record.fields)
    const title_raw = fields["Title"] as string
    const location = fields["Location"] as string 
    
    const description_raw = fields["Description"] as string 
    let start_date_time = fields["Start"] as string
    let end_date_time = fields["End"] as string 
 
    const date = new Date(typeof start_date_time === 'string' || typeof start_date_time === 'number' ? start_date_time : 0);
    const dateInEST = date.toLocaleDateString('en-US', dateOptions);
    const all_day = fields["All Day"] === true;

    let timeInEST = all_day ? "" : date.toLocaleTimeString('en-US', timeOptions);
    const {real_title, initiative, isImportant } = parseTitle(title_raw);
 
    const {real_desc, url_link} = parseDesc(description_raw)
 
    start_date_time = start_date_time ?? ""
    end_date_time = end_date_time ?? ""

    const event_status = get_event_status(start_date_time,end_date_time)
    

    let card: CalendarEventData = {
      Type: initiative ?? "", 
      Important: isImportant ? "true" : "", // Convert boolean to string
      Date: dateInEST ?? "", 
      Time: timeInEST ?? "",
      Location: location ?? "", // Ensure it's always a string
      Link: url_link ?? "", 
      Title: real_title ?? "",
      Description: real_desc ?? "",
      DateTimeStr: start_date_time, // Ensure it's always a string
      EndDateTimeStr: end_date_time,
      EventStatus: event_status
    }
  
     
     return card
 
 }
 
function getSoonestEvents(cards:CalendarEventData[], initiative: InitiativeInterface) {
   // Helper function to parse date and time into a comparable format
   function parseDateTime(card:CalendarEventData) {
     return new Date(card.DateTimeStr);
   }
 
   // Get today's date and yesterday's date
   const today = new Date();
   const yesterday = new Date();
   yesterday.setDate(today.getDate() - 2);
 
   // Filter the events that are from yesterday onwards
   // Filter cards from yesterday onwards and matching initiative
   //const filteredCards = cards.filter(card => (parseDateTime(card) >= yesterday) && ((card.Type == initiative.key) || (initiative_data["aim"]["key"] == initiative.key)|| (initiative_data["aim"]["key"] == initiative.key) || (initiative_data["aim"]["key"] == card.Type)));

   let filteredCards = cards.filter(card => (parseDateTime(card) >= yesterday) && ((card.Type == initiative.key) || (initiative_data["aim"]["key"] == initiative.key) || (initiative_data["aim"]["key"] == card.Type)));

   // If we have fewer than max_calendar_events_render, include recent past events
   if (filteredCards.length < max_calendar_events_render) {
     const pastCards = cards.filter(card => (parseDateTime(card) < yesterday) && ((card.Type == initiative.key) || (initiative_data["aim"]["key"] == initiative.key) || (initiative_data["aim"]["key"] == card.Type)))
                           .sort((a, b) => parseDateTime(b).getTime() - parseDateTime(a).getTime());
     
     const additionalCards = pastCards.slice(0, max_calendar_events_render - filteredCards.length);
     filteredCards = [...filteredCards, ...additionalCards];
   }
   
 
   // Sort the events based on date, importance, and type
   const sortedCards = filteredCards.sort((a, b) => {
     const dateA = parseDateTime(a);
     const dateB = parseDateTime(b);
 
     const statusOrder: Record<string, number> = {"Done": 0 , "Future": 0, "Today": 1, "Now": 2};
     if (statusOrder[a.EventStatus as keyof typeof statusOrder] > statusOrder[b.EventStatus as keyof typeof statusOrder]) return -1;
     if (statusOrder[a.EventStatus as keyof typeof statusOrder] < statusOrder[b.EventStatus as keyof typeof statusOrder]) return 1;
 
     // Compare by date and time
     if (dateA < dateB) return -1;
     if (dateA > dateB) return 1;
 
     // Compare by Importance ("yes" is considered more important)
     if (a.Important === 'true' && b.Important !== 'true') return -1;
     if (a.Important !== 'true' && b.Important === 'true') return 1;
 
     // Compare by Type ("aim" is considered higher priority)
     if (a.Type === 'aim' && b.Type !== 'aim') return -1;
     if (a.Type !== 'aim' && b.Type === 'aim') return 1;
     return 0;
   });
 
   // Return the first 5 events
   let upcoming = sortedCards.slice(0, max_calendar_events_render);

   upcoming.sort((a, b) => {
    // Compare by status
    const statusOrder: Record<string, number> = {"Done": 3 , "Future": 0, "Today": 1, "Now": 2};
    if (statusOrder[a.EventStatus as keyof typeof statusOrder] > statusOrder[b.EventStatus as keyof typeof statusOrder]) return -1;
    if (statusOrder[a.EventStatus as keyof typeof statusOrder] < statusOrder[b.EventStatus as keyof typeof statusOrder]) return 1;
    return 0
 });   

   return upcoming
 }

export const sanitizeHtml = (html: string): string => {
  const cleanHtml = DOMPurify.sanitize(html, {
    ADD_TAGS: ['a', 'p'], // Ensure a and p tags are not stripped
    ADD_ATTR: ['target', 'rel', 'class'], // Allow specific attributes
    ALLOWED_URI_REGEXP: /^https?:\/\//i, // Restrict URLs to http and https
    // Use a hook to add Tailwind classes to <a> and <p> elements
    FORBID_TAGS: ['script'], // Ensure script tags are removed
  });
  // Create a DOM parser to manually add Tailwind classes after sanitization
  const parser = new DOMParser();
  const doc = parser.parseFromString(cleanHtml, 'text/html');

  // Add Tailwind classes to <a> elements
  doc.querySelectorAll('a').forEach((element) => {
    element.classList.add('text-blue-500', 'underline', 'hover:text-blue-700');
    element.setAttribute('target', '_blank'); // Open links in new tab
    element.setAttribute('rel', 'noopener noreferrer'); // Security attributes
  });

  // Add Tailwind classes to <p> elements
  doc.querySelectorAll('p').forEach((element) => {
    element.classList.add( 'text-sm', 'gray-text');
  });

  Array.from(doc.body.childNodes).forEach((node) => {
    // Check if the node is a text node and has content
    if (node.nodeType === Node.TEXT_NODE && node.textContent?.trim()) {
      // Create a new <p> element
      const p = doc.createElement('p');
      p.classList.add('text-sm', 'gray-text'); // Add Tailwind classes to <p>
      p.textContent = node.textContent; // Set the text content
      doc.body.replaceChild(p, node); // Replace the text node with the new <p>
    }
  });

  // Return the modified HTML
  return doc.body.innerHTML;
};

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base('appwsdSUA3MAMj2SW');

export async function get_airtable_data(initiative:InitiativeInterface) {
  try {
    const records:CalendarEventData[] = await new Promise((resolve, reject) => {
      let allRecords:CalendarEventData[] = [];
      base('AIM 2024/25').select({
        maxRecords: 1000,
        view: "Grid view"
      }).eachPage(function page(records, fetchNextPage) {
        allRecords = allRecords.concat(records.map((record) => parseAirTableRow(record.fields)) as CalendarEventData[]);
        fetchNextPage();
      }, function done(err) {
        if (err) {
          reject(err);
        } else {
          resolve(allRecords);
        }
      });
    });
    //return [NoEventData]
    let upcomingEvents = getSoonestEvents(records, initiative);

    if (upcomingEvents && upcomingEvents.length !== 0) {
       return upcomingEvents
    }
    
    console.log(records); // Will print updated data

  } catch (err) {
    console.error(err);
  }
  return [NoEventData]
}
