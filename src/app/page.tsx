'use client'
import * as Constants from '@/components/constants'
import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import Sponsors from '@/components/sponsors'
import ExecutiveMembers from '@/components/executivemembers'
import BackgroundAnimation from '@/components/backgroundanimation'
import About from '@/components/about'
import QuickView from '@/components/quickview'
import Initiatives from '@/components/Initiatives'
import Head from 'next/head'

function InitiativeCard({ type}) {
  const [expanded, setExpanded] = useState(false);

  const handleCardClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div>

    

      <div
        onClick={handleCardClick}
        className={`desktop overflow-hidden transition-all max-h-[200px] max-w-[200px] m-5 group rounded-2xl border border-transparent px-5 py-4 hover:border-neutral-700 hover:bg-neutral-800/30 flex flex-row justify-start items-center ${expanded ? "max-w-[800px] max-h-[300px]":""}`}
      >
        <img alt="Initiative" src={Constants.icons[type]} width={200} height={200} quality={100} />

        {
        (
          <div className={`ml-4 transition-all   ${expanded ? "opacity-100 delay-100" : "opacity-0 delay-0 duration-0"}`}>
            <h2>{Constants.initiative_names[type]}</h2>
            <p>{Constants.descriptions[type]}</p>
            <div className="flex justify-end">
                <a href={Constants.links[type]}>
                <div className={`${Constants.border_class[type]} text-xl w-48 h-16 mt-8 rounded-full border border-transparent px-5 py-3 flex items-center justify-center `}>

                  Learn More

                </div>
                  
                </a>
            </div>
    
          </div>
        )
        }

      </div>
 

 
      <div
        onClick={handleCardClick}
        className={`mobile overflow-hidden transition-all max-h-[200px] max-w-[200px] m-10 group rounded-2xl border border-transparent px-5 py-4 hover:border-neutral-700 hover:bg-neutral-800/30 justify-center items-center ${expanded ? "max-w-[800px] max-h-[800px]":""}`}
      >
        <div className="flex justify-center items-center">
        <img alt="Initiative"  src={Constants.icons[type]} width={200} height={200} quality={100} />

        </div>


        {
        (
          <div className={`ml-4 transition-all   ${expanded ? "opacity-100 delay-100" : "opacity-0 delay-0 duration-0"}`}>
            <h2>{Constants.initiative_names[type]}</h2>
            <p>{Constants.descriptions[type]}</p>
            <div className="flex justify-center">
                <a href={Constants.links[type]}>
                  <div className={`${Constants.border_class[type]} text-xl w-48 h-16 mt-8 mb-8 rounded-full border border-transparent px-5 py-3 flex items-center justify-center `}>

                      Learn More

                  </div>
                </a>
            </div>
    
          </div>
        )
        }

      </div>
    </div>

  );
}

function PageTitle() {
  return (
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
  );
}






export default function Home() {
  
  BackgroundAnimation();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

      <PageTitle />
      <InitiativeCard type="l" />
      <QuickView 
        type="aim" 
        l1_t="Mailing List" l1_l="https://mit.us16.list-manage.com/subscribe/post?u=b71b58fc01f0404f5bfaffe4d&id=f1d937193c"
        l2_t="Calendar" l2_l="https://calendar.google.com/calendar/u/0/r?cid=o2l92fc80naot7nh8fmc4iklh8@group.calendar.google.com"
        l3_t="Contact" l3_l="mailto:aim-exec@mit.edu"/>
      <About blurb="
      AI@MIT is a community of undergraduates aimed at promoting and fostering the growing interest around machine intelligence on campus. We hold weekly discussions on the latest papers in the field, organize workshops, host speakers, and arrange competitions around machine intelligence at MIT.
      "/>
      <Initiatives />
      <ExecutiveMembers />
      <Sponsors />

    </main>
    
  )
}
