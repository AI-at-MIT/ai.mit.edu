'use client'
import InitiativePageTitle from '@/components/initiativepagetitle'
import Sponsors from '@/components/sponsors'
import About from '@/components/about'
import Glance from '@/components/glance'
import * as Constants from "@/components/util/constants";

const initiative = Constants.initiative_data["r"];



export default function Home() {
  

  return (
    <main>

      <InitiativePageTitle initiative={initiative}/>
      <Glance 
        initiative={initiative}
        l1_t="Mailing List" l1_l={"/email/list"}
        l2_t="Calendar" l2_l={"/calendar/gcal"}
        l3_t="Contact" l3_l={Constants.emails["contact"]}/>
   


      
      <About blurb="
          Regular meetings...
      "/>

      <Sponsors/>

    </main>
    
  )
}
