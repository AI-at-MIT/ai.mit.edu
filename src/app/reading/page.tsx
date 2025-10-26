"use client";
import { Metadata } from "next";
import InitiativePageTitle from "@/components/initiativepagetitle";

export const metadata: Metadata = {
  title: "AI@MIT Reading Group",
  description:
    "Regular dinners to review interesting AI papers. Featuring paper authors presenting their work.",
  keywords: [
    "ai reading group mit",
    "aim reading group",
    "ai at mit reading group",
    "ai club mit reading group",
    "mit ai club reading group",
    "mit artificial intelligence club reading group",
    "mit machine learning club reading group",
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

const initiative = Constants.initiative_data["r"];

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
          Regular meetings...
      "
      />

      <Sponsors />
    </main>
  );
}
