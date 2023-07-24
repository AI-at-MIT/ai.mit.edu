import EventCard from "./eventcard";
import React, { useState } from "react";
import Papa from "papaparse";
import * as Constants from "./constants";
//Sheet link: https://docs.google.com/spreadsheets/d/1Xq2jDe4WCoUbhofKGVxhZVEL9slOFG1ASPl-wrL8Wjs/edit#gid=0
import { useEffect } from 'react';

//Super buggy for some reason
export default function Calendar({type}) {
  const [data, setData] = useState({});

  useEffect(() => {
    // This code will run only once during the initial load
    console.log('Calendar Data Loaded');
  
    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vR_7bB8qLii0K4mYOVNqucZD9-DNTbqQ98re6pIl6RtDNUaTf2bE9hBwmTwKl1bXj5Te2U7xrrS_N8i/pub?output=csv", {
      download: true,
      header: true,
      complete: (results) => {
          //keep only 5 most recent cards
        const all_cards = Array.from(results.data);
        const valid_cards = all_cards.filter((card) => type=="aim" || card.Important == "TRUE" || card.Type==type);
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

  }, []); // The empty dependency array ensures that the effect runs only once
  const cards = Array.from(data)
  return (
    <div className="m-10 rounded-lg border w-full px-3 py-3 mx-auto border-gray-600 flex flex-col justify-center items-center ">
      {cards.map((data) => (
              <EventCard type={data.Type} link={data.Link == "" ? Constants.links[data.Type] : data.Link} description={data.Blurb} important={data.Important=="TRUE"}/>
      ))}
    </div>
  );
  
  }
  