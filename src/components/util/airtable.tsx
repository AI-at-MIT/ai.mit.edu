
import Airtable from 'airtable'



import {CalendarEventData, max_calendar_events_render, NoEventData, InitiativeInterface, initiative_data} from './constants'
import DOMPurify from 'dompurify';


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
 
     let valid_keys = Object.keys(initiative_data)
     
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
           if(valid_keys.includes(initial)){
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
     
     let card: CalendarEventData = {
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
 
function getSoonestEvents(cards:CalendarEventData[], initiative: InitiativeInterface) {
   // Helper function to parse date and time into a comparable format
   function parseDateTime(card:CalendarEventData) {
     return new Date(card.DateTimeStr);
   }
 
   // Get today's date and yesterday's date
   const today = new Date();
   const yesterday = new Date();
   yesterday.setDate(today.getDate() - 2);
 
   // Filter the events that are from yesterday onwards
   const filteredCards = cards.filter(card => (parseDateTime(card) >= yesterday) && ((card.Type == initiative.key) || (initiative_data["aim"]["key"] == initiative.key)|| (initiative_data["aim"]["key"] == initiative.key) || (initiative_data["aim"]["key"] == card.Type)));

 
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
   let upcoming = sortedCards.slice(0, max_calendar_events_render);
 
   return upcoming
 }

export const sanitizeHtml = (html: string): string => {
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

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base('appwsdSUA3MAMj2SW');

export async function get_airtable_data(initiative:InitiativeInterface) {
  try {
    const records:CalendarEventData[] = await new Promise((resolve, reject) => {
      let allRecords:CalendarEventData[] = [];
      base('AIM 2024/25').select({
        maxRecords: 1000,
        view: "Grid view"
      }).eachPage(function page(records, fetchNextPage) {
        allRecords = allRecords.concat(records.map((record) => parseAirTableRow(record.fields)) as CalendarEventData[]);
        fetchNextPage();
      }, function done(err) {
        if (err) {
          reject(err);
        } else {
          resolve(allRecords);
        }
      });
    });

    let upcomingEvents = getSoonestEvents(records, initiative);

    if (upcomingEvents && upcomingEvents.length !== 0) {
       return upcomingEvents
    }
    
    console.log(records); // Will print updated data

  } catch (err) {
    console.error(err);
  }
  return [NoEventData]
}
