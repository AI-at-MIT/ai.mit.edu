"use client";
import InitiativePageTitle from "@/components/initiativepagetitle";
import Sponsors from "@/components/sponsors";
import About from "@/components/about";
import BackgroundAnimation from "@/components/backgroundanimation";
import QuickView from "@/components/quickview";

const type = "w";

export default function Home() {
  BackgroundAnimation();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <InitiativePageTitle type={type} />
      <QuickView
        type={type}
        l1_t="Past Topics"
        // Need to add a 404 page
        l1_l=""
        l2_t="Mailing List"
        l2_l="https://mit.us16.list-manage.com/subscribe/post?u=b71b58fc01f0404f5bfaffe4d&id=f1d937193c"
        l3_t="Calendar"
        l3_l="https://calendar.google.com/calendar/u/0/r?cid=o2l92fc80naot7nh8fmc4iklh8@group.calendar.google.com"
      />
      <About
        blurb="
        We believe that anyone can excel in AI, and we want to help provide the education to get there. Workshops are bi-weekly learning sessions covering full-stack deep learning development. No prior experience is required and over the course of the year workshops will build from introduction to deep learning frameworks to implementing and serving the most recent models.
      "
      />

      <Sponsors />
    </main>
  );
}
