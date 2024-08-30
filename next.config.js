/** @type {import('next').NextConfig} */

const redirect_links = {
    "/secret":'https://www.youtube.com/watch?v=xvFZjo5PgG0',

    //calendar_sheet_published source: https://docs.google.com/spreadsheets/d/1Xq2jDe4WCoUbhofKGVxhZVEL9slOFG1ASPl-wrL8Wjs/edit#gid=0
    "/calendar/csv": "https://docs.google.com/spreadsheets/d/e/2PACX-1vR_7bB8qLii0K4mYOVNqucZD9-DNTbqQ98re6pIl6RtDNUaTf2bE9hBwmTwKl1bXj5Te2U7xrrS_N8i/pub?output=csv",
    "/calendar/gcal":'https://calendar.google.com/calendar/u/0/r?cid=o2l92fc80naot7nh8fmc4iklh8@group.calendar.google.com',

    "/email/list": "https://mit.us16.list-manage.com/subscribe/post?u=b71b58fc01f0404f5bfaffe4d&id=f1d937193c",

    "/generator/apply":'/soon', //Generator application link

    "/labs/apply":'https://docs.google.com/forms/d/e/1FAIpQLSe07r2iSYgP1_RlvRIvH8k-w5Fsp1MbvV1JAK7T3TgL7r9e7g/viewform',  //Labs application link
    "/labs/info":'/soon', //info session slides
    "/labs/m1":'/soon', //Important link for first meeting
    "/labs/m2":'/soon',
    //...

    "/workshops/github":'https://github.com/AI-Club-at-MIT/Workshops', 
    "/workshops/request":'/soon', //form to request speakers for ai@mit 


    "/speakers/request":'/soon', //form to request speakers
    "/speakers/rsvp":'/soon', //form to rsvp to upcoming speaker lunch

    "/permeate/apply":'/soon', //form to apply to join permeate


}
const nextConfig = {
    
    async redirects() {
        return Object.entries(redirect_links).map(([source, destination]) => ({
            source,
            destination,
            permanent: false,
            basePath: undefined,
        }));
    },
    env: {
        
        AIRTABLE_API_KEY:"patFpf4HORCUtqmYd.244272abd249fe7554105865ba5cececd451afa529b13e6acb689fbfaf8714df",
      },
    

    
    

}

module.exports = nextConfig
