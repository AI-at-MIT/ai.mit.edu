'use client'
import InitiativePageTitle from '@/components/initiativepagetitle'
import Sponsors from '@/components/sponsors'
import About from '@/components/about'
import BackgroundAnimation from '@/components/backgroundanimation'
import Glance from '@/components/glance'
import * as Constants from "@/components/constants";

const initiative = Constants.initiative_data["p"];



export default function Home() {
  
  BackgroundAnimation();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      
      <InitiativePageTitle initiative={initiative}/>
      <Glance 
        initiative={initiative}
        l1_t="Mailing List" l1_l="https://mit.us16.list-manage.com/subscribe/post?u=b71b58fc01f0404f5bfaffe4d&id=f1d937193c"
        l2_t="Calendar" l2_l="https://calendar.google.com/calendar/u/0/r?cid=o2l92fc80naot7nh8fmc4iklh8@group.calendar.google.com"
        l3_t="Contact" l3_l="mailto:aim-exec@mit.edu"
        />
      <About blurb="
          There is a huge unmet need for technical solutions in the non-profit sector. Many non-profits don’t have the funding, personnel, or expertise to solve issues that significantly impact their efficiency or outreach. Many of these barriers have been exacerbated by COVID. Luckily, many can also be ameliorated with the help of recent advances in artificial intelligence and computer science. Permeate’s goal is to share these advances and our expertise with you, so you can solve the problems that matter most, as efficiently as possible. Permeate operates in collaboration with MIT’s Eta Kappa Nu honors society to achieve this goal.
      "/>

      <Sponsors/>

    </main>
    
  )
}
