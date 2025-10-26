"use client";
import { Metadata } from "next";
import InitiativePageTitle from "@/components/initiativepagetitle";

export const metadata: Metadata = {
  title: "AI@MIT Permeate",
  description:
    "Implementing state-of-the-art AI solutions for non-profits while ensuring job security.",
  keywords: [
    "aim permeate",
    "ai at mit permeate",
    "ai club mit permeate",
    "mit ai club permeate",
    "mit artificial intelligence club permeate",
    "mit machine learning club permeate",
    "artificial intelligence",
    "machine learning",
    "student organization",
  ],
};
import Sponsors from "@/components/sponsors";
import About from "@/components/about";
import Glance from "@/components/glance";
import * as Constants from "@/components/util/constants";
import { getAssetPath } from "@/components/util/assetPath";

const initiative = Constants.initiative_data["p"];

export default function Home() {
  return (
    <main>
      <InitiativePageTitle initiative={initiative} />
      <Glance
        initiative={initiative}
        l1_t="Mailing List"
        l1_l={getAssetPath("/email/list")}
        l2_t="Calendar"
        l2_l={getAssetPath("/calendar/gcal")}
        l3_t="Contact"
        l3_l={Constants.emails["contact"]}
      />

      <About
        blurb="
          There is a huge unmet need for technical solutions in the non-profit sector. Many non-profits don’t have the funding, personnel, or expertise to solve issues that significantly impact their efficiency or outreach. Many of these barriers have been exacerbated by COVID. Luckily, many can also be ameliorated with the help of recent advances in artificial intelligence and computer science. Permeate’s goal is to share these advances and our expertise with you, so you can solve the problems that matter most, as efficiently as possible. Permeate operates in collaboration with MIT’s Eta Kappa Nu honors society to achieve this goal.
      "
      />

      <Sponsors />
    </main>
  );
}
