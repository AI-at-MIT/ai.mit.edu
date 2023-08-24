import React, { useState } from "react";
import Papa from "papaparse";
import * as Constants from "./constants";
import { useEffect } from 'react';
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'
import PublicGoogleSheetsParser from "public-google-sheets-parser";
const max_cards = 6;

interface Event {
  Type: string, 
  Important: string, 
  DateTime:string, 
  DateTime_obj:object, 

  Location: string, 
  Link:string, 
  Blurb:string
}

interface Card {
  Type: string, 
  Important: string, 
  Date:string, 
  Time: string,
  Location: string, 
  Link:string, 
  Blurb:string
}
function EventCard({Type, Link, Blurb, Important, Date, Time, Location} : Card) {
  const initiative = Constants.initiative_data[Type];
  const mobile = useMediaQuery({ query: `(max-width: 760px)` });


  return (
    <a href={Link} className={`${initiative.border_class} border-2 event-card m-1 group rounded-lg border border-transparent w-full px-3 py-2 md:px-5 md:py-4 flex flex-col relative`}>

        <div className="event-info flex items-center w-full">
          <div className="relative">
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
          {!mobile ? 
            <>
              <div className=" ml-4 w-[550px] mr-auto transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                <p>{Blurb}</p>
              </div>
              <div className="transition-transform group-hover:translate-x-4 min-w-[70px] mr-3 transition-transform flex flex-col justify-center items-end">
                <p className="gray-text text-sm font-extrabold">{Date ? Date : <br></br>}</p>
                <p className="gray-text text-sm">{Time ? Time : <br></br>}</p>
                <p className="gray-text text-sm">{Location ? Location : <br></br>}</p>
              </div>
            </>
          :
            <div className="ml-3 mr-5 w-full mr-auto transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              <p className="text-sm xs:text-lg">{Blurb}</p>
              <div className="flex items-center"> 
                <p className="align-middle gray-text text-sm">{ Date=="" && Time=="" && Location==""  ? "note" : (Date ? "on "+Date : "")+(Time ? " at "+Time : "")+(Location ? " in"+Location : "")}</p>
              </div>
            </div>
          }
      </div>
      
    </a>
  );
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

function ParseDateTime(DateTime: string){
  if( DateTime == undefined ){
    return new Date(0);
  }
  const vals = DateTime.substring(5,DateTime.length-1).split(",").map((val)=>parseInt(val));
  const date = new Date(vals[0],vals[1],vals[2],vals[3],vals[4],vals[5]);

  return date;
}
function filter_sort_parse(data: Event[], initiative: Constants.InitiativeInterface){
  //add the DateTime_obj field to the data by using the ParseDateTime function
  
  const data_with_dateobj = data.map((card) => {return {...card, DateTime_obj: ParseDateTime(card.DateTime)}});

  const today = new Date();
  const first_day = new Date(0);
  const valid_cards = data_with_dateobj.filter((card,index) => (initiative.key=="aim" || card.Type==initiative.key || card.Type=="aim") && (card.DateTime_obj > today || card.DateTime_obj.getTime()===first_day.getTime()));
  if (valid_cards.length == 0){
    return valid_cards;
  }

  //sort valid events by date and time
  const cards = valid_cards.sort((a, b) => {
    const dateA = a.DateTime_obj.getTime();
    const dateB = b.DateTime_obj.getTime();
    return dateA < dateB ? -1 : 1;

  });

  cards.splice(max_cards, cards.length - max_cards);

  const event_cards = cards.map((card) => {return {
    Type:card.Type, 
    Important:card.Important, 
    Date:(card.DateTime_obj.getTime()!=first_day.getTime() ? card.DateTime_obj.toLocaleDateString("en-US", {month: 'numeric', day: 'numeric'}) : ""), 
    Time:(card.DateTime_obj.getTime()!=first_day.getTime() ? card.DateTime_obj.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}):""), 
    Location:card.Location, 
    Link:card.Link, 
    Blurb:card.Blurb}});

  return event_cards;
}

const spreadsheetId = '1Xq2jDe4WCoUbhofKGVxhZVEL9slOFG1ASPl-wrL8Wjs'

export default function Calendar({initiative}:{initiative:Constants.InitiativeInterface}) {

  const [data, setData] = useState<Card[]>([]);
 
  useEffect(() => {
    // This code will run only once during the initial load
    console.log('Calendar Data Loaded');
    const parser = new PublicGoogleSheetsParser(spreadsheetId)
      parser.parse().then((results) => {
        const all_cards = Array.from(results) as Event[];
        const cards = filter_sort_parse(all_cards, initiative) as Card[];   
        setData(cards);
      })

 

  }, []); //initiative

  const cards = Array.from(data as ArrayLike<Card>);

  return (
    <div className="mt-4 rounded-lg md:border w-full md:px-3 md:py-2 md:border-gray-600 flex flex-col justify-center items-center ">
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
  //                 
  