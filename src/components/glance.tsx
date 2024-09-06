import ImportantLinks from "./importantlinks";
import Calendar from "./calendar";
import * as Constants from "./util/constants";


export default function Glance({initiative, l1_t, l1_l, l2_t, l2_l, l3_t, l3_l} : {initiative: Constants.InitiativeInterface, l1_t: string, l1_l: string, l2_t: string, l2_l: string, l3_t: string, l3_l: string}) {

  return (
      <div className="section-full w-screen max-w-[800px]" >
        
      <div className = "flex flex-col justify-center mx-0  ">
        <h1>Simple Digest</h1>
        <div className="mt-5 flex flex-col items-center">
        <p className="gray-text ">Important Links</p>
        </div>

        <ImportantLinks initiative={initiative} l1_t={l1_t} l1_l={l1_l} l2_t={l2_t} l2_l={l2_l} l3_t={l3_t} l3_l={l3_l}/>
        <div className="mt-5 flex flex-col items-center">
        <p className="gray-text ">Upcoming Events for {initiative.name}</p>
        </div>

        <Calendar initiative={initiative}/>
      </div>
      </div>
    );
  
  }
  