//Links

export const max_calendar_events_render =5

export const emails : {[key: string]: string} = {
  "contact":"mailto:aim-exec@mit.edu",
  "website":"mailto:aim-exec@mit.edu",
  "exec":"mailto:aim-exec@mit.edu",
  "sponsor":"mailto:aim-exec@mit.edu",
}

export interface CalendarEventData {
  Type: string, 
  Important: string, 
  Date:string, 
  Time: string,
  Location: string, 
  Link:string, 
  Title:string,
  Description:string,
  DateTimeStr:string
  EndDateTimeStr:string,
  EventStatus:string

}

export const NoEventData = {
  Type: "aim", 
  Important: "false", 
  Date:"", 
  Time: "",
  Location: "", 
  Link:"", 
  Title:"Check back later.",
  Description:"There are currently no upcoming public events scheduled.",
  DateTimeStr: "",
  EndDateTimeStr: "",
  EventStatus: "Note"
} as CalendarEventData

export const dateOptions = {timeZone: 'America/New_York', month: '2-digit' as const, day: '2-digit' as const,};
export const timeOptions = {timeZone: 'America/New_York', hour: 'numeric' as const, minute: '2-digit' as const, hour12: true,};



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
    description: "Implementing critical state of the art AI solutions for non-profits. All while ensuring job security for their employees.",
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
    type: ["aim","p"],
  },
  {
    name: "Zack Ankner", 
    position: "Co-President",
    imageSource: "/exec/zack_headshot.png", 
    link: "https://www.linkedin.com/in/zack-ankner/",
    type: ["aim"],
  },

  {
    name: "Emily Zhou", 
    position: "Labs Co-Lead",
    imageSource: "/exec/emily_headshot.jpg", 
    link: "https://www.linkedin.com/in/emilyzhouprofile/",
    type: ["aim","l"],
  },
  {
    name: "Sagnik Anupam", 
    position: "Labs Co-Lead",
    imageSource: "/exec/sagnik_headshot.png", 
    link: "https://www.linkedin.com/in/sagnik-anupam/",
    type: ["aim","l"],
  },
  {
    name: "Rishab Parthasarathy",
    position: "Workshops Lead",
    imageSource: "/exec/rishab_headshot.jpg",
    link: "https://www.linkedin.com/in/rishab-parthasarathy-57b33424b/",
    type: ["aim","w"],
  },
  {
    name: "Jose Ricardo Ramos", 
    position: "Speakers Co-Lead",
    imageSource: "/exec/jose_headshot.jpeg", 
    link: "",
    type: ["aim","s"],
  },
  {
    name: "Shayda Moezzi",
    position: "Speakers Co-Lead",
    imageSource: "/exec/shayda_headshot.png",
    link: "",
    type: ["aim","s"],
  },
  {
    name: "John Yang", 
    position: "Generator Lead",
    imageSource: "/exec/john_headshot.png", 
    link: "https://www.linkedin.com/in/johnyang101/",
    type: ["aim","g"],
  },
  {
    name: "Raunak Chowdhuri", 
    position: "Permeate Lead",
    imageSource: "/exec/raunak_headshot.jpg", 
    link: "https://www.linkedin.com/in/sauhaarda/",
    type: ["aim","p"],
  },

  {
    name: "Jimin Lee", 
    position: "Treasurer",
    imageSource: "/exec/jimin_headshot.png", 
    link: "https://www.linkedin.com/in/jimin24/",
    type: ["aim"],
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