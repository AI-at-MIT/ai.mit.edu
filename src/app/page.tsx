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

 
function PageTitle() {
  return (
    <div>

    <div className="section w-screen overflow-hidden -z-10 flex flex-col justify-center">
     
      <div className="absolute inset-0">
        <Image
          alt="aim-backdrop"
          src="backdrops/aim-backdrop.svg"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

        <div className="max-w-[60vw]  m-10">
          <Image
            alt="aim-logo-full"
            src="/icons/aim-icon-full.svg"
            layout="responsive"
            width={500}
            height={500}
            quality={100}
          />


        <p className="title-tag-text">
        Teaching you to build what learns.
        </p>

        <p className="title-desc-text">
          MIT’s premier artificial intelligence student organization.        
        </p>
      
        </div>

        </div>
          <div className="bg-gray-700 w-full h-[1px] opacity-50"></div>
    </div>

  );
}



export default function Home() {
  
  BackgroundAnimation();
  const initiative = Constants.initiative_data["aim"]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

      <PageTitle />

      <QuickView 
        initiative={initiative}
        l1_t="Mailing List" l1_l={Constants.links["mailing_list"]}
        l2_t="Calendar" l2_l={Constants.links["calendar"]}
        l3_t="Contact" l3_l={Constants.links["exec_email"]}/>
      <About blurb="
      AI@MIT is a community of undergraduates aimed at promoting and fostering the growing interest around machine intelligence on campus. We hold weekly discussions on the latest papers in the field, organize workshops, host speakers, and arrange competitions around machine intelligence at MIT.
      "/>
      <InitiativeSection />
      <ExecutiveMembers title="Executive Members" initiative={initiative}/>
      <Sponsors />

    </main>
    
  )
}
