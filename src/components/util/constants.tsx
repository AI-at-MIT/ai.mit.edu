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
  r: {
    key: "r",
    name: "Reading",
    tagline: "Our literature review group.",
    description: "Regular dinners to review interesting papers. Occasionally we bring the authors in to present.",
    url: "reading",
    icon: "icons/reading-icon.svg",
    backdrop: "backdrops/reading-backdrop.svg",
    border_class: "border-reading",
    background: "background-reading",
    clip_background: "clip-background-reading",
  },
};


export interface ExecData {
    name: string,
    position: string,
    imageSource: string,
    link: string,
    type: string[]
}



const start_year = 2023
const current_year =  2025


let directories = [] as string[];
for (let i = 0; i <= current_year-start_year; i++) {
  directories.push(`${(start_year+i)}-${(start_year+i+1)}_exec/`)
}


// Your loadExecData function
const loadExecDataFromYear = (exec_loc: string): ExecData[] => {
  try {
    // Synchronously import the JSON file based on exec_loc
    const importedData = require(`@/../public/exec/${exec_loc}exec_info.json`);
    return importedData as ExecData[];
  } catch (err) {
    
    return [] as ExecData[];
  }
};


export const {allExec, recentExec}: {allExec:{ [key: string]: ExecData[] }, recentExec:ExecData[]} = (() => {
  let allExec: { [key: string]: ExecData[] } = {};

  directories.forEach((exec_loc, index) => {
    allExec[exec_loc] = loadExecDataFromYear(exec_loc);
  });

  // Remove keys with empty arrays
  Object.keys(allExec).forEach((key) => {
    if (allExec[key].length === 0) {
      delete allExec[key];
    }
  });

  // Replace each imageSource with {"/exec/" + directory + imageSource}
  Object.entries(allExec).forEach(([directory, execDataArray]) => {
    execDataArray.forEach((execData) => {
      execData.imageSource = `/exec/${directory}${execData.imageSource}`;
    });
  });

  //Replace each imageSource with {"/exec/" + directory + imageSource}

  const recentKey = Object.keys(allExec).reduce((latestKey, currentKey) => {
    const currentYear2 = parseInt(currentKey.split('_')[0].split('-')[1], 10);
    const latestYear2 = parseInt(latestKey.split('_')[0].split('-')[1], 10);
    return currentYear2 > latestYear2 ? currentKey : latestKey;
  }, Object.keys(allExec)[0]);

  const recentExec = allExec[recentKey];

  return {allExec,recentExec};
})();

