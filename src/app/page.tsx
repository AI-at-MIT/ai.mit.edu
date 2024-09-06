'use client'
import * as Constants from '@/components/util/constants'
import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import Sponsors from '@/components/sponsors'
import ExecutiveMembers from '@/components/executivemembers'
import BackgroundAnimation from '@/components/backgroundanimation'
import About from '@/components/about'
import Glance from '@/components/glance'
import InitiativeSection from '@/components/initiativesection'
import Stats from '@/components/stats'
import {faPeopleGroup, faCircleNodes, faUsers, faBolt, faPlus, faUsersBetweenLines, faPeopleRoof, faRocket} from "@fortawesome/free-solid-svg-icons";
import InitiativePageTitle from '@/components/initiativepagetitle'
import FancyLink from '@/components/fancylink'

import Navbar from '@/components/navbar'



const initiative = Constants.initiative_data["aim"]

function Membership() {
  return (
    <div className="section">
  
      <h1>Membership</h1>

      <div className="snap-always snap-center  max-w-[800px]  center-text mx-auto">
        <div className="mt-16">
          <h2>Associate Member</h2>
          <p className="mb-4">
            How: <span className="gray-text">Open to anyone—just join our <FancyLink initiative={initiative} href="https://forms.gle/dCEFRMa2KPJJMMsE8" text="mailing list"/>!</span>
          </p>
          <p>
            Why: <span className="gray-text">You&apos;ll be alerted about our public events, opportunities, and announcement. </span>
          </p>
        </div>
        <div className="mt-16">
          <h2>General Member</h2>
          <p className="mb-4">
            How: <span className="gray-text">By application and participation in any of our initiatives.</span>
          </p>
          <p>
            Why: <span className="gray-text">You&apos;ll have access to funding for private projects, our alumni network, and exclusive events such as our retreat, private lunches with prominent speakers, and more. </span>
          </p>
          </div>
      </div>
  </div>
  )
}



export default function Home() {
  
  BackgroundAnimation();

  return (
  <main>


      
      <InitiativePageTitle initiative={initiative} />
      <div id="events" className="py-4"></div>
      <Glance 
        
        initiative={initiative}
        l1_t="Mailing List" l1_l={"https://forms.gle/dCEFRMa2KPJJMMsE8"}
        l2_t="Calendar" l2_l={"https://calendar.google.com/calendar/ical/c_17a0804f0b23934eca81b9e59fc82b83d2d485cd65741bc426ebdbd0c4592a5a%40group.calendar.google.com/public/basic.ics"}
        l3_t="Contact" l3_l={Constants.emails["contact"]}/>
      <div id="about" className="py-4"></div>

      <About blurb={`AI@MIT is a community of undergraduates aimed at promoting and fostering the growing interest around machine intelligence on campus. We hold weekly discussions on the latest papers in the field, organize workshops, host speakers, and arrange competitions around machine intelligence at MIT.`}/>
      <Stats content={[
        {icon: faPeopleGroup, number: "500+", text: "Associate Members"},
        {icon: faUsersBetweenLines, number: "50+", text: "General Members"},  
        {icon: faCircleNodes, number: "5", text: "Initiatives"}
      ]}/>
      <Membership/>

      <div id="initiatives" className="py-4"></div>

      <InitiativeSection />
      <div id="exec" className="py-4"></div>

      <ExecutiveMembers title="Executive Members" initiative={initiative}/>
      <Sponsors />

    </main>
    
  )      

}
