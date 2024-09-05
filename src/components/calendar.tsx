
'use client'
import React, { useState } from "react";
//import Papa from "papaparse";
import * as Constants from "./constants";
import { useEffect } from 'react';
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'
//import PublicGoogleSheetsParser from "public-google-sheets-parser";
import DOMPurify from 'dompurify';


const HtmlRenderer: React.FC = () => {
  const [htmlContent, setHtmlContent] = useState<string>('');

  // Function to handle changes in the textarea
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setHtmlContent(event.target.value);
  };

  // Function to sanitize the HTML input using DOMPurify
  const sanitizeHtml = (html: string): string => {
    return DOMPurify.sanitize(html);
  };

  return (
    <div>
      <h1>HTML Renderer</h1>
      <textarea
        value={htmlContent}
        onChange={handleChange}
        placeholder="Enter your HTML content here..."
        rows={10}
        cols={50}
      ></textarea>
      <h2>Rendered HTML</h2>
      <div
        // Using `dangerouslySetInnerHTML` to render sanitized HTML content
        dangerouslySetInnerHTML={{ __html: sanitizeHtml(htmlContent) }}
        style={{ border: '1px solid #ccc', padding: '10px', marginTop: '10px' }}
      ></div>
    </div>
  );
};


const max_cards = 8;


interface Card {
  Type: string, 
  Important: string, 
  Date:string, 
  Time: string,
  Location: string, 
  Link:string, 
  Title:string,
  Description:string,
  DateTimeStr:string
}


import Airtable from 'airtable'

const sanitizeHtml = (html: string): string => {
  const cleanHtml = DOMPurify.sanitize(html, {
    ADD_TAGS: ['a', 'p'], // Ensure a and p tags are not stripped
    ADD_ATTR: ['target', 'rel', 'class'], // Allow specific attributes
    ALLOWED_URI_REGEXP: /^https?:\/\//i, // Restrict URLs to http and https
    // Use a hook to add Tailwind classes to <a> and <p> elements
    FORBID_TAGS: ['script'], // Ensure script tags are removed
  });
  // Create a DOM parser to manually add Tailwind classes after sanitization
  const parser = new DOMParser();
  const doc = parser.parseFromString(cleanHtml, 'text/html');

  // Add Tailwind classes to <a> elements
  doc.querySelectorAll('a').forEach((element) => {
    element.classList.add('text-blue-500', 'underline', 'hover:text-blue-700');
    element.setAttribute('target', '_blank'); // Open links in new tab
    element.setAttribute('rel', 'noopener noreferrer'); // Security attributes
  });

  // Add Tailwind classes to <p> elements
  doc.querySelectorAll('p').forEach((element) => {
    element.classList.add( 'text-sm', 'gray-text');
  });

  Array.from(doc.body.childNodes).forEach((node) => {
    // Check if the node is a text node and has content
    if (node.nodeType === Node.TEXT_NODE && node.textContent?.trim()) {
      // Create a new <p> element
      const p = doc.createElement('p');
      p.classList.add('text-sm', 'gray-text'); // Add Tailwind classes to <p>
      p.textContent = node.textContent; // Set the text content
      doc.body.replaceChild(p, node); // Replace the text node with the new <p>
    }
  });

  // Return the modified HTML
  return doc.body.innerHTML;
};


function EventCard({Type, Link, Title, Description, Important, Date, Time, Location, DateTimeStr} : Card) {
  const initiative = Constants.initiative_data[Type];
  const [isExpanded, setIsExpanded] = useState(false); // State to manage expansion
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded); // Toggle the expansion state
  };
  const Expand = () => {
    setIsExpanded(true);
  }
  const Contract = () => {
    setIsExpanded(false);

}
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
  
  return(
    
    <>
    <div className="sm:flex sm:flex-col sm:justify-center sm:items-end sm:text-right sm:transition-transform sm:group-hover:translate-x-4 min-w-[70px] sm:mr-3 sm:transition-transform ">
      <p className="gray-text text-sm hidden sm:inline-block"> {InfoStr_ver} </p>
      <p className="gray-text text-sm inline-block sm:hidden"> {InfoStr_hor} </p>

    </div>

    </>


  )
}

/*
          {!mobile ? 
            <>
              <div className=" ml-4 w-[550px] mr-auto transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                <p>{Blurb}</p>
              </div>
              <div className="transition-transform group-hover:translate-x-4 min-w-[70px] mr-3 transition-transform flex flex-col justify-center items-end text-right">
                <p className="gray-text text-sm font-extrabold">{Date ? Date : <br></br>}</p>
                <p className="gray-text text-sm">{Time ? Time : <br></br>}</p>
                <p className="gray-text text-sm">{Location ? Location : <br></br>}</p>
              </div>
            </>
          :
            <div className="ml-3 mr-5 w-full mr-auto transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              <p className="text-sm xs:text-lg">{Blurb}</p>
              <div className="flex items-center"> 
                <p className="align-middle gray-text text-sm">{ Date=="" && Time=="" && Location==""  ? "note" : (Date ? "on "+Date : "")+(Time ? " at "+Time : "")+(Location ? " in "+Location : "")}</p>
              </div>
            </div>
          }
*/

/*
function EventCard({Type, Link, Blurb, Important, Date, Time, Location, DateTimeStr} : Card) {
  const [isExpanded, setIsExpanded] = useState(false); // State to manage expansion
  const initiative = Constants.initiative_data[Type];
  const mobile = useMediaQuery({ query: `(max-width: 760px)` });

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded); // Toggle the expansion state
  };

  return (
    <div
      onClick={toggleExpansion} 
      className={`${initiative.border_class} border-2 event-card m-1 group rounded-lg border border-transparent w-full px-3 py-2 md:px-5 md:py-4 flex flex-col relative cursor-pointer transition-all duration-300 ease-in-out`}
      style={{ maxHeight: isExpanded ? "500px" : "60px", overflow: "hidden" }} // Adjust the maxHeight based on the expansion state
    >
      <div className="event-info flex items-center w-full">
        <EventIcon Important={Important} Type={Type}/>
        <div className="ml-3 mr-5 w-full mr-auto transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          <p className="text-sm xs:text-lg font-bold">{Type}</p> {
          //Show only title when collapsed
          
          }
          {isExpanded && ( // Conditionally render the description based on the expansion state
            <>
              <p className="text-sm xs:text-lg">{Blurb}</p>
              <div className="flex items-center"> 
                <p className="align-middle gray-text text-sm">{ Date=="" && Time=="" && Location==""  ? "note" : (Date ? "on "+Date : "")+(Time ? " at "+Time : "")+(Location ? " in "+Location : "")}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
*/

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

/*
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

  const today = new Date().getTime();
  const first_day = new Date(0);
  const valid_cards = data_with_dateobj.filter((card,index) => (initiative.key=="aim" || card.Type==initiative.key || card.Type=="aim") ); //(card.DateTime_obj > today || card.DateTime_obj.getTime()===first_day.getTime())
  if (valid_cards.length == 0){
    return valid_cards;
  }

  //show events that are about to happen and events that have hapend recently. 
  //sort valid events by date and time
  const cards = valid_cards.sort((a, b) => {
    const dateA = (a.DateTime_obj.getTime());
    const dateB = (b.DateTime_obj.getTime());
    return dateA < dateB ? -1 : 1;

  });

  cards.splice(max_cards, cards.length - max_cards);

  const event_cards = cards.map((card) => {return {
    Type:card.Type, 
    Important:card.Important, 
    Date:(card.DateTime_obj.getTime()!=first_day.getTime() ? card.DateTime_obj.toLocaleDateString("en-US", {month: 'numeric', day: 'numeric'}) : ""), 
    Time:(card.DateTime_obj.getTime()!=first_day.getTime() ? card.DateTime_obj.toLocaleTimeString([], {hour: 'numeric', minute:'2-digit'}):""), 
    Location:card.Location, 
    Link:(card.Link==undefined ? Constants.initiative_data[card.Type].url : card.Link), 
    Blurb:card.Blurb}});

  return event_cards;
}

//const spreadsheetId = '1Xq2jDe4WCoUbhofKGVxhZVEL9slOFG1ASPl-wrL8Wjs'


*/

function parseAirTableRow(fields:Airtable.FieldSet){
   //console.log(record.fields)
   let title_raw = fields["Title"] as string//record.get('Title') as string ?? '';
   let location = fields["Location"] as string //record.get?.('Location') as string ?? '';
   
   let description_raw = fields["Description"] as string //record.get('Description') as string ?? '';
   let start_date_time = fields["Start"] as string //record.get('Start')
    //let end_date_time = record.get('End')
   let all_day = fields["All Day"] as boolean//record.get('All Day')

   const date = new Date(typeof start_date_time === 'string' || typeof start_date_time === 'number' ? start_date_time : 0);
    // Format the date part in EST
    const dateOptions = {
      timeZone: 'America/New_York',
      month: '2-digit' as const,
      day: '2-digit' as const,
    };
    const dateInEST = date.toLocaleDateString('en-US', dateOptions);

    // Format the time part in EST with AM/PM
    const timeOptions = {
      timeZone: 'America/New_York',
      hour: 'numeric' as const,
      minute: '2-digit' as const,
      hour12: true,
    };
    let timeInEST = date.toLocaleTimeString('en-US', timeOptions);


    const regex = /\[(.*?)\]/;

    
    let isImportant = false
    let initiative = "aim"
    let real_title = ""

    if (typeof title_raw === 'string'){
      real_title = title_raw.replace(regex, '').trim() 
      let title_match = title_raw.match(regex);  

      if(title_match ) {
        let title_bracket_content = title_match[1].trim()
  
        if (title_bracket_content){
          let initial = title_bracket_content.replace(/!/g, '').toLowerCase()[0]
          if (initial == "a"){
            initial = "aim"
          }
          if(["aim","g","w","l","p","s"].includes(initial)){
            initiative = initial
          }
    
          isImportant = title_bracket_content.endsWith('!')
        }
    
      }
    

    }



    

    let real_desc = ""
    let url_link = ""
    if (typeof description_raw === 'string'){
      real_desc=description_raw
      let desc_match = description_raw.match(regex);  
      if(desc_match){

        let desc_bracket_content = desc_match[1].trim()
        if(desc_bracket_content){
          real_desc = description_raw.replace(regex, '').trim() 
    
          const urlRegex = /(https?:\/\/[^\s]+)/g;
          let url_match = desc_bracket_content.match(urlRegex)
          if (url_match){
            url_link = url_match[0];
          }
        }

    }

    

  }

    if(all_day){
      timeInEST=""
    }

    if(real_title){
      real_title = real_title
    }


    
    let card: Card = {
      Type: initiative ?? "", 
      Important: isImportant ? "true" : "", // Convert boolean to string
      Date: dateInEST ?? "", 
      Time: timeInEST ?? "",
      Location: location ?? "", // Ensure it's always a string
      Link: url_link ?? "", 
      Title: real_title ?? "",
      Description: real_desc ?? "",
      DateTimeStr: start_date_time ?? "" // Ensure it's always a string
    }
  
    
    return card

}

function getSoonestEvents(cards:Card[]) {
  // Helper function to parse date and time into a comparable format
  function parseDateTime(card:Card) {
    return new Date(card.DateTimeStr);
  }

  // Get today's date and yesterday's date
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 2);

  // Filter the events that are from yesterday onwards
  const filteredCards = cards.filter(card => parseDateTime(card) >= yesterday);


  // Sort the events based on date, importance, and type
  const sortedCards = filteredCards.sort((a, b) => {
    const dateA = parseDateTime(a);
    const dateB = parseDateTime(b);

    // Compare by date and time
    if (dateA < dateB) return -1;
    if (dateA > dateB) return 1;

    // Compare by Importance ("yes" is considered more important)
    if (a.Important === 'true' && b.Important !== 'true') return -1;
    if (a.Important !== 'true' && b.Important === 'true') return 1;

    // Compare by Type ("aim" is considered higher priority)
    if (a.Type === 'aim' && b.Type !== 'aim') return -1;
    if (a.Type !== 'aim' && b.Type === 'aim') return 1;

    return 0;
  });

  // Return the first 5 events
  let upcoming = sortedCards.slice(0, max_cards);

  return upcoming
}

const NoEventCard = {
  Type: "aim", 
  Important: "false", 
  Date:"", 
  Time: "",
  Location: "", 
  Link:"", 
  Title:"There are currently no upcoming public events scheduled. Check back later.",
  DateTimeStr: ""
} as Card

export default function Calendar({initiative}:{initiative:Constants.InitiativeInterface}) {

  
  const [data, setData] = useState<Card[]>([]);
 
  useEffect(() => {
    // This code will run only once during the initial load
    console.log('Calendar Data Loaded');
    var base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base('appwsdSUA3MAMj2SW');

    base('AIM 2024/25').select({
      // Selecting the first 3 records in Grid view:
      maxRecords: 1000,
      view: "Grid view"
  }).eachPage(function page(records, fetchNextPage) {

    const cards = records.map((record) => parseAirTableRow(record.fields)) as Card[];

    let upcomingEvents = getSoonestEvents(cards)

    console.log(upcomingEvents)

    if (upcomingEvents){
      if(upcomingEvents.length === 0){
        upcomingEvents = [NoEventCard] 
      }
    }
  
    setData(upcomingEvents);
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});

    //const parser = new PublicGoogleSheetsParser(spreadsheetId)
    //  parser.parse().then((results) => {
    //    const all_cards = Array.from(results) as Event[];
    //    const cards = filter_sort_parse(all_cards, initiative) as Card[];   
    //    setData(cards);
    //  })

 

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
            <EventCard key={index} Type={data.Type} Link={data.Link == "" ? Constants.initiative_data[data.Type].url : data.Link} Title={data.Title} Description={data.Description} Important={data.Important} Date={data.Date} Time={data.Time} Location={data.Location} DateTimeStr={data.DateTimeStr}/>
          ))
        )
      }
    </div>
  );
  
  }
  //                 
  