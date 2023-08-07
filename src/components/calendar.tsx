import React, { useState } from "react";
import Papa from "papaparse";
import * as Constants from "./constants";
//Sheet link: https://docs.google.com/spreadsheets/d/1Xq2jDe4WCoUbhofKGVxhZVEL9slOFG1ASPl-wrL8Wjs/edit#gid=0
import { useEffect } from 'react';
//Super buggy for some reason
import Image from 'next/image'

interface Card {
  Type: string, 
  Important: string, 
  Date:string, 
  Time:string, 
  Location: string, 
  Link:string, 
  Blurb:string
  // etc
}
function EventCard({type, link, description, important} : {type: string, link: string, description: string, important: boolean}) {
  const isTypeL = important;
  let classnames = `${Constants.border_class[type]} border-2 event-card m-1 group rounded-lg border border-transparent w-full px-5 py-4 flex flex-col ${
    isTypeL ? "relative" : ""
  }`;

  return (
    <a href={link} className={classnames}>

      
      <div className="event-info flex items-center w-full">
        <Image
          alt="icon"
          src={Constants.icons[type]}
          width={40}
          height={40}
          quality={100}
        />
        <div className="ml-4 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          <p>{description}</p>
        </div>
        
      {isTypeL && (
      <div className="group-hover:opacity-0 duration-100 transition group-hover:translate-x-1 motion-reduce:transform-none absolute top-9 right-2 transform -translate-x-1/2 -translate-y-1/2">
      <div className={`${Constants.backgrounds[type]} event-card w-3 h-3 rounded-full `}></div>
      </div>
      )}
      </div>

    </a>
  );
}



function EventLoading() {
  let classnames = `bg-grad-fast border-2 event-card m-1 group rounded-lg border border-transparent w-full px-5 py-4 flex flex-col`;

  return (
    <a className={classnames}>
      
      <div className="event-info flex items-center w-full">

        <div className="w-[40px] h-[40px]"></div>
        <div className="ml-4 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        <p className="text-transparent">{"Loading"}</p>
        </div>

      
   
        
     
      </div>

    </a>
  );
  return (
    <div className="bg-grad-fast event-card h-[4.5rem] m-1 group rounded-lg border border-transparent w-full px-5 py-4 flex flex-col"></div>

  )
}

export default function Calendar({type}:{type:string}) {
  if (typeof type !== 'string') {
    throw new Error('type must be a string'); 
  }
  const [data, setData] = useState<Card[]>([]);
 
  useEffect(() => {
    // This code will run only once during the initial load
    console.log('Calendar Data Loaded');
  
    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vR_7bB8qLii0K4mYOVNqucZD9-DNTbqQ98re6pIl6RtDNUaTf2bE9hBwmTwKl1bXj5Te2U7xrrS_N8i/pub?output=csv", {
      download: true,
      header: true,
      complete: (results) => {
          //keep only 5 most recent cards
        const all_cards = Array.from(results.data) as Card[];
        const valid_cards = all_cards.filter((card) => type=="aim" || card.Type==type);
        //sort valid events by date and time
        const cards = valid_cards.sort((a, b) => {
          if (a.Date == b.Date) {
            return a.Time < b.Time ? -1 : 1;
          } else {
            return a.Date < b.Date ? -1 : 1;
          }
        });
        cards.splice(5, cards.length - 5);
        setData(cards);
      },
    });

  }, [type]); // The empty dependency array ensures that the effect runs only once
  const cards = Array.from(data as ArrayLike<Card>);
  return (
    <div className="m-10 rounded-lg border w-full px-3 py-3 mx-auto border-gray-600 flex flex-col justify-center items-center ">
      {cards.length == 0 ? (
          
        [0,1,2,3,4].map((data,index) => (
        <EventLoading key={index}/>
        ))
       ) : (
        cards.map((data,index) => (
          <EventCard key={index} type={data.Type} link={data.Link == "" ? Constants.links[data.Type] : data.Link} description={data.Blurb} important={data.Important=="TRUE"}/>
          
          ))
      )
    }


    </div>
  );
  
  }
  