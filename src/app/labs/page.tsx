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
          imageName: "/labs_highlights/styletransfer.png",
          name: "Stylish Videos",
          link: "https://github.com/zephyrys/stylish-flask-backend",
          blurb: "Applying custom neural style transfers to generate unique effects on images and videos"
        },
        {
          imageName: "/labs_highlights/posenet-art.png",
          name: "PoseNet Body Art",
          link: "https://posenet-art.netlify.app/",
          blurb: "Combining your body's movements with PoseNet to create an interactive visual and auditory artistic experience"
        },
        {
          imageName: "/labs_highlights/paths.png",
          name: "Intra Building Maps",
          link: "https://docs.google.com/presentation/d/1f8R8GOi87zCLnFAymnKqLtxwwc3MA_MNzKXpoHVfEe8/edit?usp=sharing/",
          blurb: "Ever get lost walking through campus? Get directions from any room in MIT to any other."
        },
        {
          imageName: "/labs_highlights/lecshort.png",
          name: "Lecture Shortener",
          link: "http://www.lecshort.com/",
          blurb: "This ML pipeline extracts the most important visual and auditory components of lectures."
        }
      ]}
      />
      <Sponsors/>

    </main>
    
  )
}
