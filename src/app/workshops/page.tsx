"use client";
import InitiativePageTitle from "@/components/initiativepagetitle";
import Sponsors from "@/components/sponsors";
import About from "@/components/about";
import BackgroundAnimation from "@/components/backgroundanimation";
import Glance from "@/components/glance";
import Showcase from "@/components/showcase";
import ExecutiveMembers from "@/components/executivemembers";
import * as Constants from "@/components/constants";


const initiative = Constants.initiative_data["w"];


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
        We believe that anyone can excel in AI, and we want to help provide the education to get there. Workshops are bi-weekly learning sessions covering full-stack deep learning development. No prior experience is required and over the course of the year workshops will build from introduction to deep learning frameworks to implementing and serving the most recent models.
      "
      />

      <Showcase heading = {"Highlighted Workshops"} projects ={[
  {
    imageName: "/workshops_highlights/pytorch_lightning.png",
    name: "Pytorch Lightning",
    link: "https://colab.research.google.com/drive/12o9rI6EHu1CJPwwftcZVexCFGQYO7sI4?usp=sharing",
    blurb: ""
  },
  {
    imageName: "/workshops_highlights/cnns.png",
    name: "Convolutional Neural Networks",
    link: "https://docs.google.com/presentation/d/1e7BMYyVt9IDNWG1Mk4PwzbSR_vrWIYvQ/edit#slide=id.p1",
    blurb: ""
  },
  {
    imageName: "/workshops_highlights/styletransfer.png",
    name: "Style Transfer",
    link: "https://docs.google.com/presentation/d/1mVLIWk3Ok93JxLGD2Wb2Qy7HEPkqRs_n4vZ0aYwkxsM/edit#slide=id.g842d541dd1_0_204/",
    blurb: ""
  },
  {
    imageName: "/workshops_highlights/metalearning.png",
    name: "Meta Learning",
    link: "https://drive.google.com/file/d/1L6ESEo6NmJcce48DIbBpdAe3RnVUG5QH/view",
    blurb: ""
  }
      ]}/>
      <ExecutiveMembers title="Workshops Lead" initiative={initiative}/>
      <Sponsors />
    </main>
  );
}
