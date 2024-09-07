'use client'
import React, { useState } from "react";
import * as Constants from "./util/constants";
import { useEffect } from 'react';
import Image from 'next/image'


import {CalendarEventData, max_calendar_events_render, dateOptions, timeOptions} from './util/constants'

import {sanitizeHtml, get_airtable_data} from './util/airtable'



function EventCard({EventData}:{EventData:CalendarEventData}){//{Type, Link, Title, Description, Important, Date, Time, Location, DateTimeStr, EndDateTimeStr, EventStatus} : CalendarEventData) {
  const initiative = Constants.initiative_data[EventData.Type];
  const [isExpanded, setIsExpanded] = useState(false); // State to manage expansion
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded); // Toggle the expansion state
  };
  const html_desc = sanitizeHtml(EventData.Description)

  const status = EventData.EventStatus

  const endDate = new Date(EventData.EndDateTimeStr)
  




  return (
    <a onClick={toggleExpansion}   className={`${initiative.border_class} border-2 event-card m-1 group rounded-lg border border-transparent w-full px-3 py-2 md:px-5 md:py-4 flex flex-col relative`}>
      <div className="event-info flex items-center w-full ">

          <EventIcon Important={EventData.Important} Type={EventData.Type}/>

        <div className="sm:flex ml-3 sm:flex-col w-full transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          <div className="sm:flex  sm:flex-row w-full ">

          <div className="mr-auto ">
            <div className="h-full flex flex-col justify-center items-start align-middle">
              <p className="text-sm sm:text-lg">
                {EventData.Title}

                {status!="Future" && 
                  <span className={`${initiative.border_class} event-card noHover border border-transparent border-2 ml-2 text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full align-middle`}>
                    <span className={`${initiative.clip_background} transition-transform motion-reduce:transform-none quicklink w-full`}>
                    {status}

                    </span>
                  </span>
                }
                



                </p>
                <p>
                {/* start time */}
                <CardDateTimePlace Event = {EventData} DisplaySide ={false}/>
                {/* description */}
                {isExpanded&& <EndDateTimeDisplay StartDateTimeStr={EventData.DateTimeStr} EndDateTimeStr={EventData.EndDateTimeStr}/>}



                {!isExpanded &&  <p className="text-sm text-elipses-container" dangerouslySetInnerHTML={{ __html: html_desc }}></p>}

                </p>
              
              
            </div>
          </div>
          <CardDateTimePlace Event = {EventData} DisplaySide ={true}/>


          </div>
         

          {isExpanded && html_desc && <>
           
            <p className="text-sm mt-2  pr-4" dangerouslySetInnerHTML={{ __html: html_desc }}></p>
          </>
          }

        </div>

          
      </div>
      
    </a>
  );
}

function CardDateTimePlace({Event, DisplaySide}:{Event:CalendarEventData, DisplaySide:boolean}) {
  const display_text = DisplaySide ? 
  (<>{Event.Date ? Event.Date : <br/>} <br/> {Event.Time ? Event.Time : <br/>} <br/> {Location ? Location : <br/>}</>)

    :
  (Event.Date ? "on "+Event.Date : "")+(Event.Time ? " at "+Event.Time : "")+(Event.Location ? " in "+Event.Location : "")

  return (
    <>
    {DisplaySide&&<div className="min-w-[70px] sm:mr-3 sm:flex sm:flex-col sm:justify-center sm:items-end sm:text-right transition-transform sm:group-hover:translate-x-3 ">
      <p className="gray-text text-sm hidden sm:inline-block"> {display_text} </p>
    </div>}

    {!DisplaySide&&display_text&&<span className="gray-text text-sm inline-block sm:hidden"> {display_text} </span>}
    </>

  )
  
}

function EndDateTimeDisplay({StartDateTimeStr, EndDateTimeStr} :{StartDateTimeStr: string, EndDateTimeStr:string}) {

  const start_date = new Date(StartDateTimeStr)
  const end_date = new Date(EndDateTimeStr)

  const same_day = start_date.getDay()==end_date.getDay()
  //fix wide display side translation


  const end_day = end_date.toLocaleDateString('en-US', dateOptions);
  const end_time = end_date.toLocaleTimeString('en-US', timeOptions);


  const end_time_text = " at " + end_time
  return (
    <>
    <span className="gray-text text-sm hidden sm:inline">
      ends {!same_day&&("on " + end_day) } {end_time_text}
    </span>
    <span className="gray-text text-sm inline sm:hidden"> 
      {" "} &rarr; {!same_day&&(end_day)} {end_time_text}
    </span>
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
            <EventCard key={index} EventData={data}/>
            //Type={data.Type} Link={data.Link == "" ? Constants.initiative_data[data.Type].url : data.Link} Title={data.Title} Description={data.Description} Important={data.Important} Date={data.Date} Time={data.Time} Location={data.Location} DateTimeStr={data.DateTimeStr} EndDateTimeStr={data.EndDateTimeStr} EventStatus={data.EventStatus}
          ))
        )
      }
    </div>
  );
  
  }
  //                 
  