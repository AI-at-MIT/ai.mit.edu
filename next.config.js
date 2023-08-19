/** @type {import('next').NextConfig} */

const redirect_links = {
    "/labs/apply":'/soon',
    "/generator/apply":'/soon',
    "/calendar/gcal":'https://calendar.google.com/calendar/u/0/r?cid=o2l92fc80naot7nh8fmc4iklh8@group.calendar.google.com',
    //calendar_sheet_published source: https://docs.google.com/spreadsheets/d/1Xq2jDe4WCoUbhofKGVxhZVEL9slOFG1ASPl-wrL8Wjs/edit#gid=0
    "/calendar/csv": "https://docs.google.com/spreadsheets/d/e/2PACX-1vR_7bB8qLii0K4mYOVNqucZD9-DNTbqQ98re6pIl6RtDNUaTf2bE9hBwmTwKl1bXj5Te2U7xrrS_N8i/pub?output=csv",
    "/email/list": "https://mit.us16.list-manage.com/subscribe/post?u=b71b58fc01f0404f5bfaffe4d&id=f1d937193c",
    "/email/contact": "mailto:aim-exec@mit.edu",


}
const nextConfig = {
    async redirects() {
        return Object.entries(redirect_links).map(([source, destination]) => ({
            source,
            destination,
            permanent: false,
            basePath: false,
        }));
    },
    

}

module.exports = nextConfig
