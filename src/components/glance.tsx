import ImportantLinks from "./importantlinks";
import Calendar from "./calendar";
export default function Glance({type, l1_t, l1_l, l2_t, l2_l, l3_t, l3_l} : {type: string, l1_t: string, l1_l: string, l2_t: string, l2_l: string, l3_t: string, l3_l: string}) {
    return (
      <div className="section">
        
      <div className = " flex flex-col justify-center mx-auto  max-w-[1200px]">
        <h1>At a Glance</h1>
        <div className="mt-5 flex flex-col items-center">
        <p className="gray-text ">Important Links</p>
        </div>

        <ImportantLinks type={type} l1_t={l1_t} l1_l={l1_l} l2_t={l2_t} l2_l={l2_l} l3_t={l3_t} l3_l={l3_l}/>
        <div className="mt-5 flex flex-col items-center">
        <p className="gray-text ">Upcoming Events</p>
        </div>

        <Calendar type={type}/>
      </div>
      </div>
    );
  
  }
  