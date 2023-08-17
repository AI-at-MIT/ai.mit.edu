import React, { useState } from "react";
import Papa from "papaparse";
import * as Constants from "./constants";
import { useEffect } from 'react';
import Image from 'next/image'

const max_cards = 6;

interface Card {
  Type: string, 
  Important: string, 
  Date:string, 
  Time:string, 
  Location: string, 
  Link:string, 
  Blurb:string
}
function EventCard({Type, Link, Blurb, Important, Date, Time, Location} : Card) {
  const initiative = Constants.initiative_data[Type];

  const isTypeL = Important=="TRUE";
  let classnames = `${initiative.border_class} border-2 event-card m-1 group rounded-lg border border-transparent w-full px-5 py-4 flex flex-col ${
    isTypeL ? "relative" : ""
  }`;
  return (
    <a href={Link} className={classnames}>

      
      <div className="event-info flex items-center w-full">
        <Image
          alt="icon"
          src={initiative.icon}
          width={40}
          height={40}
          quality={100}
        />
        <div className=" ml-4 w-[550px] mr-auto transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          <p>{Blurb}</p>

        </div>
        <div className="transition-transform group-hover:translate-x-4 w-[75px] mr-3 transition-transform flex flex-col justify-center items-end">
          <p className="gray-text text-sm font-extrabold">{Date ? Date : <br></br>}</p>
          <p className="gray-text text-sm">{Time ? Time : <br></br>}</p>
          <p className="gray-text text-sm">{Location ? Location : <br></br>}</p>

        </div>
 

      {isTypeL && (
      <div className="group-hover:opacity-0 duration-100 transition group-hover:translate-x-1 motion-reduce:transform-none absolute top-auto right-1 transform -translate-x-1/2">
        <div className={`${initiative.background} event-card w-3 h-3 rounded-full `}></div>
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
        <div className="transition-transform group-hover:translate-x-4 w-[75px] mr-3 transition-transform flex flex-col justify-center items-end">
          <p className="gray-text text-sm font-extrabold">{ <br></br>}</p>
          <p className="gray-text text-sm">{ <br></br>}</p>
          <p className="gray-text text-sm">{ <br></br>}</p>

        </div>
 
      </div>

    </a>
  );
  
}

export default function Calendar({initiative}:{initiative:Constants.InitiativeInterface}) {

  const [data, setData] = useState<Card[]>([]);
 
  useEffect(() => {
    // This code will run only once during the initial load
    console.log('Calendar Data Loaded');
  
    Papa.parse(Constants.links["calendar_sheet_published"], {
      download: true,
      header: true,
      complete: (results) => {
          //keep only 5 most recent cards
        const all_cards = Array.from(results.data) as Card[];
        const valid_cards = all_cards.filter((card) => initiative.key=="aim" || card.Type==initiative.key || card.Type=="aim");
        //sort valid events by date and time
        const cards = valid_cards.sort((a, b) => {
          const dateA = a.Date!="" ? a.Date : "0/0/0";
          console.log(dateA)
          const dateB = b.Date!="" ? b.Date : "0/0/0";
          if (dateA == dateB) {
            return a.Time < b.Time ? -1 : 1;
          } else {
            return dateA < dateB ? -1 : 1;
          }
        });
        cards.splice(max_cards, cards.length - max_cards);
        setData(cards);
      },
    });

  }, [initiative]); // The empty dependency array ensures that the effect runs only once
  const cards = Array.from(data as ArrayLike<Card>);
  return (
    <div className="m-4 rounded-lg border w-full px-3 py-3 mx-auto border-gray-600 flex flex-col justify-center items-center ">
      {cards.length == 0 ? (
          
        Array.from({length: max_cards}, (_, index) => index + 1).map((data,index) => (
        <EventLoading key={index}/>
        ))
       ) : (
        cards.map((data,index) => (
          <EventCard key={index} Type={data.Type} Link={data.Link == "" ? Constants.initiative_data[data.Type].url : data.Link} Blurb={data.Blurb} Important={data.Important} Date={data.Date} Time={data.Time} Location={data.Location}/>
          
          ))
      )
    }


    </div>
  );
  
  }
  