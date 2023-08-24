"use client";
import InitiativePageTitle from "@/components/initiativepagetitle";
import Sponsors from "@/components/sponsors";
import About from "@/components/about";
import BackgroundAnimation from "@/components/backgroundanimation";
import Glance from "@/components/glance";
import * as Constants from "@/components/constants";

const initiative = Constants.initiative_data["s"];



export default function Home() {
  BackgroundAnimation();

  return (
    <main>
      <InitiativePageTitle initiative={initiative} />
      <Glance 
        initiative={initiative}
        l1_t="Mailing List" l1_l={"/email/list"}
        l2_t="Calendar" l2_l={"/calendar/gcal"}
        l3_t="Contact" l3_l={Constants.emails["contact"]}/>

      <About
        blurb="
        We aim to provide students opportunities to learn about the latest research and applications in AI and machine learning. We host talks by researchers and industry professionals, as well as panels to help students learn about the field and how to get involved.
      "
      />

      <Sponsors />
    </main>
  );
}
