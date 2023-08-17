//Links
export const links: {[key: string]: string} = {
  exec_email: "mailto:aim-exec@mit.edu",
  mailing_list: "https://mit.us16.list-manage.com/subscribe/post?u=b71b58fc01f0404f5bfaffe4d&id=f1d937193c",
  calendar: "https://calendar.google.com/calendar/u/0/r?cid=o2l92fc80naot7nh8fmc4iklh8@group.calendar.google.com",
  //calendar_sheet_published source: https://docs.google.com/spreadsheets/d/1Xq2jDe4WCoUbhofKGVxhZVEL9slOFG1ASPl-wrL8Wjs/edit#gid=0
  calendar_sheet_published: "https://docs.google.com/spreadsheets/d/e/2PACX-1vR_7bB8qLii0K4mYOVNqucZD9-DNTbqQ98re6pIl6RtDNUaTf2bE9hBwmTwKl1bXj5Te2U7xrrS_N8i/pub?output=csv",
  labs_application: "",
  generator_application: "",
};


export interface InitiativeInterface {
  key: string;
  name: string;
  tagline: string;
  description: string;
  url: string;
  icon: string;
  backdrop: string;
  border_class: string;
  background: string;
  clip_background: string;
}

export const initiative_data : {[key: string]: InitiativeInterface} = {
  aim: {
    key: "aim",
    name: "AIM",
    tagline: "Teaching you to build what learns.",
    description: "MIT’s premier artificial intelligence student organization.",
    url: "/",
    icon: "icons/aim-icon-at.svg",
    backdrop: "backdrops/aim-backdrop.svg",
    border_class: "border-aim",
    background: "background-aim",
    clip_background: "clip-background-aim",
  },
  l: {
    key: "l",
    name: "Labs",
    tagline: "Our project incubator.",
    description: "A community of hackers at MIT building innovative projects to bring cutting-edge artificial intelligence techniques to others.",
    url: "labs",
    icon: "icons/labs-icon.svg",
    backdrop: "backdrops/labs-backdrop.svg",
    border_class: "border-labs",
    background: "background-labs",
    clip_background: "clip-background-labs",
  },
  w: {
    key: "w",
    name: "Workshops",
    tagline: "Our tutorials.",
    description: "Each introductory workshop is comprised of a brief theory lecture and an interactive coding-based lab. Occurring bi-weekly and available for all MIT students regardless of experience.",
    url: "workshops",
    icon: "icons/workshops-icon.svg",
    backdrop: "backdrops/workshops-backdrop.svg",
    border_class: "border-workshops",
    background: "background-workshops",
    clip_background: "clip-background-workshops",
  },
  g: {
    key: "g",
    name: "Generator",
    tagline: "Our research competition.",
    description: "Annual artificial intelligence research competition available to all Boston area undergraduates. Prizes range from $500-$2000.",
    url: "generator",
    icon: "icons/generator-icon.svg",
    backdrop: "backdrops/generator-backdrop.svg",
    border_class: "border-generator",
    background: "background-generator",
    clip_background: "clip-background-generator",
  },
  s: {
    key: "s",
    name: "Speakers",
    tagline: "Our lecture series.",
    description: "Speakers from industry and academy sharing their contributions to the most recent advances in artificial intelligence.",
    url: "speakers",
    icon: "icons/speakers-icon.svg",
    backdrop: "backdrops/speakers-backdrop.svg",
    border_class: "border-speakers",
    background: "background-speakers",
    clip_background: "clip-background-speakers",
  },
  p: {
    key: "p",
    name: "Permeate",
    tagline: "Our consulting service.",
    description: "Implementing critical state of the art AI solutions for non-profits free of charge. All while ensuring job security for their employees.",
    url: "permeate",
    icon: "icons/permeate-icon.svg",
    backdrop: "backdrops/permeate-backdrop.svg",
    border_class: "border-permeate",
    background: "background-permeate",
    clip_background: "clip-background-permeate",
  },
    
};


export const execMembers = [
  {
    name: "David Koplow", 
    position: "Co-President",
    imageSource: "/exec/david_headshot.jpg", 
    link: "https://www.linkedin.com/in/david-koplow/",
    type: ["aim"],
  },
  {
    name: "Zack Ankner", 
    position: "Co-President",
    imageSource: "/exec/zack_headshot.png", 
    link: "https://www.linkedin.com/in/zack-ankner/",
    type: ["aim"],
  },
  {
    name: "Nithya Attaluri", 
    position: "Treasurer",
    imageSource: "/exec/nithya_headshot.png", 
    link: "https://www.linkedin.com/in/nithya-attaluri/",
    type: ["aim"],
  },
  {
    name: "Sejal Gupta", 
    position: "Labs Lead",
    imageSource: "/exec/sejal_headshot.jpeg", 
    link: "",
    type: ["aim","l"],
  },
  {
    name: "Jose Ricardo Ramos", 
    position: "Reading Group Co-Lead",
    imageSource: "/exec/jose_headshot.jpeg", 
    link: "",
    type: ["aim","s"],
  },
  {
    name: "Shayda Moezzi",
    position: "Reading Group Co-Lead",
    imageSource: "/exec/shayda_headshot.png",
    link: "",
    type: ["aim","s"],
  },
  {
    name: "Kevin Meng",
    position: "Workshops Lead",
    imageSource: "/exec/kevin_headshot.png",
    link: "",
    type: ["aim","w"],
  },
  {
    name: "Anika Puri",
    position: "Marketing Lead",
    imageSource: "/exec/anika_headshot.jpeg",
    link: "",
    type: ["aim"],
  },
  {
    name: "Erick Gbordzoe",
    position: "Social Director",
    imageSource: "/exec/erick_headshot.png",
    link: "",
    type: ["aim"],
  },
  {
    name: "Will Guilhermo Costa",
    position: "Webmaster",
    imageSource: "/exec/will_headshot.png",
    link: "",
    type: ["aim"],
  }
]