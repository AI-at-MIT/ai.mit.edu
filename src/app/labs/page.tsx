'use client'
import InitiativePageTitle from '@/components/initiativepagetitle'
import Sponsors from '@/components/sponsors'
import About from '@/components/about'
import BackgroundAnimation from '@/components/backgroundanimation'
import QuickView from '@/components/glance'

import Stats from '@/components/stats'
import {faUniversity, faUsers, faRocket} from "@fortawesome/free-solid-svg-icons";
import Showcase from '@/components/showcase'

const type = "l";



export default function Home() {
  
  BackgroundAnimation();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      
      <InitiativePageTitle type={type}/>



      <QuickView 
        type={type}
        l1_t="Apply" l1_l="https://mit.us16.list-manage.com/subscribe/post?u=b71b58fc01f0404f5bfaffe4d&id=f1d937193c"
        l2_t="Slides" l2_l="https://calendar.google.com/calendar/u/0/r?cid=o2l92fc80naot7nh8fmc4iklh8@group.calendar.google.com"
        l3_t="Contact" l3_l="mailto:aim-exec@mit.edu"
        />
      <Stats content={[
        {icon: faUniversity, number: "6", text: "Semesters"},  
        {icon: faUsers, number: "120+", text: "Alumni"},
        {icon: faRocket, number: "24", text: "Projects"}
      ]}/>


      <About blurb="
          AIM Labs is MIT’s premier undergraduate artificial intelligence project incubator. Every semester we recruit a diverse cohort of talented students and provide them funding, mentorship, and resources to build services that bring recent advances in artificial intelligence to you.
      "/>
    
      <Showcase 
      heading="Recent Projects"
      projects={[
        {
          imageName: "/exec/david_headshot.jpg",
          name: "Stylish Videos",
          link: "https://www.google.com/",
          blurb: "Applying custom neural style transfers to generate unique effects on images and videos"
        },
        {
          imageName: "/exec/david_headshot.jpg",
          name: "Stylish Videos",
          link: "https://www.google.com/",
          blurb: "Applying custom neural style transfers to generate unique effects on images and videos"
        },
        {
          imageName: "/exec/david_headshot.jpg",
          name: "Stylish Videos",
          link: "https://www.google.com/",
          blurb: "Applying custom neural style transfers to generate unique effects on images and videos"
        },
        {
          imageName: "/exec/david_headshot.jpg",
          name: "Stylish Videos",
          link: "https://www.google.com/",
          blurb: "Applying custom neural style transfers to generate unique effects on images and videos"
        }
      ]}
      />
      <Sponsors/>

    </main>
    
  )
}
