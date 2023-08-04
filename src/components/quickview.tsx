import QuickLinks from "./quicklinks";
import Calendar from "./calendar";
export default function QuickView({type, l1_t, l1_l, l2_t, l2_l, l3_t, l3_l} : {type: string, l1_t: string, l1_l: string, l2_t: string, l2_l: string, l3_t: string, l3_l: string}) {
    return (
      <div className="section">
        
      <h1>At a Glance</h1>
      <div className = " flex flex-col justify-center mx-auto  max-w-[1200px]">
        <QuickLinks type={type} l1_t={l1_t} l1_l={l1_l} l2_t={l2_t} l2_l={l2_l} l3_t={l3_t} l3_l={l3_l}/>
        <Calendar type={type}/>
      </div>
      </div>
    );
  
  }
  