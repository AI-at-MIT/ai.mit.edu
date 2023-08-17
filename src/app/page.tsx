'use client'
import * as Constants from '@/components/constants'
import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import Sponsors from '@/components/sponsors'
import ExecutiveMembers from '@/components/executivemembers'
import BackgroundAnimation from '@/components/backgroundanimation'
import About from '@/components/about'
import QuickView from '@/components/glance'
import InitiativeSection from '@/components/initiativesection'
import Stats from '@/components/stats'
import {faPeopleGroup, faCircleNodes, faUsers, faBolt, faPlus, faUsersBetweenLines, faPeopleRoof, faRocket} from "@fortawesome/free-solid-svg-icons";
import InitiativePageTitle from '@/components/initiativepagetitle'

export default function Home() {
  
  BackgroundAnimation();
  const initiative = Constants.initiative_data["aim"]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

      
      <InitiativePageTitle initiative={initiative} />
      <QuickView 
        initiative={initiative}
        l1_t="Mailing List" l1_l={Constants.links["mailing_list"]}
        l2_t="Calendar" l2_l={Constants.links["calendar"]}
        l3_t="Contact" l3_l={Constants.links["exec_email"]}/>
      <About blurb={`AI@MIT is a community of undergraduates aimed at promoting and fostering the growing interest around machine intelligence on campus. We hold weekly discussions on the latest papers in the field, organize workshops, host speakers, and arrange competitions around machine intelligence at MIT. \n\n Anyone can become an Associate Member by joining our mailing list. They will be alerted of all public events we host. General Membership is by application only and participation in any of our initiatives. General Members have access to exclusive events such as our retreat and private lunches with prominent speakers, in addition to funding for private projects, access to our alumni network, and more.`}/>
      <Stats content={[
        {icon: faPeopleGroup, number: "500+", text: "Associate Members"},
        {icon: faUsersBetweenLines, number: "50+", text: "General Members"},  
        {icon: faCircleNodes, number: "5", text: "Initiatives"}
      ]}/>
      <InitiativeSection />
      <ExecutiveMembers title="Executive Members" initiative={initiative}/>
      <Sponsors />

    </main>
    
  )
}
