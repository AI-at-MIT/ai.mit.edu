'use client'
import React, { useState } from "react";
import * as Constants from "./util/constants";
import { useEffect } from 'react';
import Image from 'next/image'


import {CalendarEventData, max_calendar_events_render} from './util/constants'

import {sanitizeHtml, get_airtable_data} from './util/airtable'



function EventCard({Type, Link, Title, Description, Important, Date, Time, Location, DateTimeStr} : CalendarEventData) {
  const initiative = Constants.initiative_data[Type];
  const [isExpanded, setIsExpanded] = useState(false); // State to manage expansion
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded); // Toggle the expansion state
  };
  const html_desc = sanitizeHtml(Description)

  return (
    <a onClick={toggleExpansion}   className={`${initiative.border_class} border-2 event-card m-1 group rounded-lg border border-transparent w-full px-3 py-2 md:px-5 md:py-4 flex flex-col relative`}>
      <div className="event-info flex items-center w-full ">

          <EventIcon Important={Important} Type={Type}/>

          <div className="sm:flex ml-3 sm:flex-row w-full ">

            <div className="mr-auto transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              <div className="h-full flex flex-col justify-center items-start">
              <p className="text-sm sm:text-lg">{Title}</p>
     
              {isExpanded ? (
                  <p className="text-sm" dangerouslySetInnerHTML={{ __html: html_desc }}></p>
               ) : (
               <p className="text-sm text-elipses-container" dangerouslySetInnerHTML={{ __html: html_desc }}></p>
               )}
              </div>
            </div>

            <CardInfo Date={Date} Time={Time} Location={Location}/>


          </div>
          
      </div>
      
    </a>
  );
}

function CardInfo({Date, Time, Location}:{Date: string, Time:string, Location: string}){
  const InfoStr_hor = Date=="" && Time=="" && Location==""  ? "note" : (Date ? "on "+Date : "")+(Time ? " at "+Time : "")+(Location ? " in "+Location : "")
  const InfoStr_ver = (<>{Date ? Date : <br/>} <br/> {Time ? Time : <br/>} <br/> {Location ? Location : <br/>}</>)
  //transition-transform group-hover:translate-x-1 motion-reduce:transform-none
  return(
    
    <>
    <div className="min-w-[70px] sm:mr-3 sm:flex sm:flex-col sm:justify-center sm:items-end sm:text-right transition-transform sm:group-hover:translate-x-4 group-hover:translate-x-1">
      <p className="gray-text text-sm hidden sm:inline-block"> {InfoStr_ver} </p>
      <p className="gray-text text-sm inline-block sm:hidden"> {InfoStr_hor} </p>
    </div>
    </>

  )
}

function EventIcon({Type, Important} : {Type: string, Important: String}) {
  const initiative = Constants.initiative_data[Type];
  return (
        <div className="flex items-center w-20 ">
        <div className="relative  ">
        <Image
          alt="icon"
          src={initiative.icon}
          width={60}
          height={60}
        />
        {Important && (
          <div className="bg-dark rounded-full p-[3px] absolute -top-[0.5rem] -right-[0.5rem] duration-100 transition transform group-hover:scale-90">
            <div className="relative">
              <div className={`absolute relative w-6 h-6 rounded-full ${initiative.border_class} border-2 border border-transparent`}>
              </div>
              <div className={`top-0 absolute w-6 h-6 quicklink ${initiative.clip_background}  quicklink`}>
                <p className="font-extrabold w-full h-full text-[1.10rem] flex flex-col justify-center items-center">!</p>
              </div>
            </div>
          </div>
          )}
      </div>

        </div>
  
  )

}


function EventLoading() {

  return (
    <a  className={`bg-grad-fast border-2 event-card m-1 group rounded-lg border border-transparent w-full px-3 py-2 md:px-5 md:py-4 flex flex-col`}>
     
      <div className="event-info flex items-center w-full">

        <div className="w-[60px] h-[60px]"></div>

        <div className="ml-4 w-[550px] mr-auto transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          <p className="text-sm xs:text-lg text-transparent">{"Loading"}</p>
          <p className="md:hidden text-sm text-transparent">{"on date at time in location"}</p>
        </div>

        <div className="hidden md:block transition-transform group-hover:translate-x-4 w-[75px] mr-3 transition-transform flex flex-col justify-center items-end">
          <p className="gray-text text-sm font-extrabold">{ <br></br>}</p>
          <p className="gray-text text-sm">{ <br></br>}</p>
          <p className="gray-text text-sm">{ <br></br>}</p>
        </div>

      </div>
    </a>
  );
  
}


export default function Calendar({initiative}:{initiative:Constants.InitiativeInterface}) {

  
  const [data, setData] = useState<CalendarEventData[]>([]);
 
  useEffect(() => {
    const fetchData = async () => {
      const result = await get_airtable_data(initiative);
      setData(result);
    };
    fetchData();
  }, []); //initiative

  const cards = Array.from(data as ArrayLike<CalendarEventData>);

  return (
    <div className="mt-4 rounded-lg md:border w-full md:px-3 md:py-2 md:border-gray-600 flex flex-col justify-center items-center ">
      {cards.length == 0 ? (
          Array.from({length: max_calendar_events_render}, (_, index) => index + 1).map((data,index) => (
            <EventLoading key={index}/>
          ))
        ) : (
          cards.map((data,index) => (
            <EventCard key={index} Type={data.Type} Link={data.Link == "" ? Constants.initiative_data[data.Type].url : data.Link} Title={data.Title} Description={data.Description} Important={data.Important} Date={data.Date} Time={data.Time} Location={data.Location} DateTimeStr={data.DateTimeStr}/>
          ))
        )
      }
    </div>
  );
  
  }
  //                 
  