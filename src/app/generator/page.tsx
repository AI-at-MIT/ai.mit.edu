"use client";
import InitiativePageTitle from "@/components/initiativepagetitle";
import Sponsors from "@/components/sponsors";
import About from "@/components/about";
import BackgroundAnimation from "@/components/backgroundanimation";
import Glance from "@/components/glance";
import Join from "@/components/join";
import * as Constants from "@/components/constants";

const initiative = Constants.initiative_data["g"];

export default function Home() {
  BackgroundAnimation();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <InitiativePageTitle initiative={initiative} />
      <Glance
        initiative={initiative}
        l1_t="Apply"
        l1_l="mailto:aim-exec@mit.edu"
        l2_t="Mailing List"
        l2_l="https://mit.us16.list-manage.com/subscribe/post?u=b71b58fc01f0404f5bfaffe4d&id=f1d937193c"
        l3_t="Calendar"
        l3_l="https://calendar.google.com/calendar/u/0/r?cid=o2l92fc80naot7nh8fmc4iklh8@group.calendar.google.com"
      />
      <About
        blurb="
        We understand that doing research is a large commitment, so we want to empower and reward students for their endeavors. To this end we host an annual research competition for any students in the Boston area to submit their work.
        "
      />
      <Join 
      initiative={initiative}
      heading="How to Join?"

      blurb_recruiting={`Applications for this cohort are open now! \n Second round interviews will be conducted the following week.`}
      blurb_notrecruiting={`Generator does not run in the Fall. \n Check back at the beginning of the Spring semester!`}
      isrecruiting={false}
      link={Constants.links["generator_application"]}
      />
      <Sponsors />
    </main>
  );
}
