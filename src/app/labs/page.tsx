"use client";
import InitiativePageTitle from "@/components/initiativepagetitle";
import Sponsors from "@/components/sponsors";
import About from "@/components/about";
import Glance from "@/components/glance";

import Stats from "@/components/stats";

import Showcase from "@/components/showcase";
import Join from "@/components/join";
import ExecutiveMembers from "@/components/executivemembers";
import * as Constants from "@/components/util/constants";
import { getAssetPath } from "@/components/util/assetPath";


import Image from 'next/image'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";


import {
  faUniversity,
  faUsers,
  faRocket,
  faUserSecret,
  faPeopleRoof,
  faScrewdriverWrench,
  faHandHoldingDollar
} from "@fortawesome/free-solid-svg-icons";


import AttributeSection from "@/components/attributessection";



export default function Home() {

  const initiative = Constants.initiative_data["l"];
  return (
    <main>
      <InitiativePageTitle initiative={initiative} />
      <Glance 
        initiative={initiative}
        l1_t="Mailing List" l1_l={getAssetPath("/email/list")}
        l2_t="Calendar" l2_l={getAssetPath("/calendar/gcal")}
        l3_t="Contact" l3_l={Constants.emails["contact"]}/>

      <About
        blurb={`
          AIM Labs is MIT's premier undergraduate artificial intelligence project incubator. Every semester we recruit a diverse cohort of talented students and provide them funding, mentorship, and resources to build services that bring recent advances in artificial intelligence to you. 
          
          The semester begins with ideation and team formation. The following weeks focus on project and skill development. All projects are presented at our Demo Day near the end of the semester.
          `}
      />
      <Stats
        content={[
          { icon: faUniversity, number: "6", text: "Semesters" },
          { icon: faUsers, number: "120+", text: "Alumni" },
          { icon: faRocket, number: "24", text: "Projects" },
        ]}
      />

      <Showcase
        heading="Example Projects"
        projects={[
 
          {
            imageName: getAssetPath("/labs_highlights/styletransfer.png"),
            name: "Stylish Videos",
            link: "https://github.com/zephyrys/stylish-flask-backend",
            blurb:
              "Applying custom neural style transfers to generate unique effects on images and videos",
          },
          {
            imageName: getAssetPath("/labs_highlights/posenet-art.png"),
            name: "PoseNet Body Art",
            link: "https://posenet-art.netlify.app/",
            blurb:
              "Combining your body's movements with PoseNet to create an interactive visual and auditory artistic experience",
          },
          {
            imageName: getAssetPath("/labs_highlights/paths.png"),
            name: "Intra Building Maps",
            link: "https://docs.google.com/presentation/d/1f8R8GOi87zCLnFAymnKqLtxwwc3MA_MNzKXpoHVfEe8/edit?usp=sharing/",
            blurb:
              "Ever get lost walking through campus? Get directions from any room in MIT to any other.",
          },
          {
            imageName: getAssetPath("/labs_highlights/lecshort.png"),
            name: "Lecture Shortener",
            link: "https://docs.google.com/presentation/d/1CVe4tKPrfCCDGWzN09YelMaWXWEGWOFQC851n7JmbuE/edit?usp=sharing",//"http://www.lecshort.com/",
            blurb:
              "This ML pipeline extracts the most important visual and auditory components of lectures.",
          },
        ]}
      />

      <ExecutiveMembers title="Labs Exec" initiative={initiative} />
      <AttributeSection
      heading="Why Labs?"
      projects={[
        { icon: faHandHoldingDollar, text: "Funding", blurb: "Cover hosting, deployment, and other costs of project. Additionally each team gets $400 stipend at the end of the semester after successful deployment. " },
        { icon: faScrewdriverWrench, text: "Tutorials", blurb: "AIM Labs specific tutorials covering important techniques for real-world artificial intelligence deployment and development such as PyTorch, Next.js, and more."},
        { icon: faUserSecret, text: "Mentors", blurb: "Very knowledgeable mentors to help quickly resolve technical issues you're facing in machine learning or web-dev."},
        { icon: faPeopleRoof, text: "Community", blurb: "Weekly meetings, monthly social outings, regular coffee chats, and an active alumni network. Labs is a place for you to build both projects and relationships."},

      ]}
      />


      <Sponsors />
    </main>
  );
}

/*

      <Join
        initiative={initiative}
        heading="How to Join?"
        blurb_recruiting={
        `Applications for this cohort are open from 9/1-9/15.
        Second round interviews will be conducted the following week.`
        }
        blurb_notrecruiting={
        `Applications are closed for this cohort of Labs.
        Check back at the beginning of next semester!`
        }
        isrecruiting={true}
        link="labs/apply"
      />

      */