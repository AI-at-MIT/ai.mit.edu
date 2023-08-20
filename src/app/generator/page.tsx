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
    <main>
      <InitiativePageTitle initiative={initiative} />
      <Glance 
        initiative={initiative}
        l1_t="Mailing List" l1_l={"/email/list"}
        l2_t="Calendar" l2_l={"/calendar/gcal"}
        l3_t="Contact" l3_l={"/email/contact"}/>

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
      link="/generator/apply"
      />
      <Sponsors />
    </main>
  );
}
