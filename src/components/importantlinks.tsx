import * as Constants from './constants'

export default function ImportantLinks({initiative, l1_l, l1_t, l2_l, l2_t, l3_l, l3_t}: {initiative: Constants.InitiativeInterface, l1_l: string, l1_t: string, l2_l: string, l2_t: string, l3_l: string, l3_t: string}) {
  
    return (

        <div className={`${initiative.clip_background} quicklink grid text-center md:mb-0 md:grid-cols-3 justify-center`}>
        <a href={l1_l} className={`quicklink-text w-56 m-5 px-5 py-4`}>

          <h2 className=" font-semibold">{l1_t}</h2>

        </a>

        <a href={l2_l} className="quicklink-text w-56 m-5 group px-5 py-4">
          <h2 className="font-semibold">{l2_t}</h2>
        </a>
  
        <a href={l3_l} className="quicklink-text w-56 m-5 group px-5 py-4">
          <h2 className=" font-semibold ">{l3_t}</h2>
        </a>
      </div>   
 
    )
  }
  