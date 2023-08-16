import * as Constants from '@/components/constants'
import FancyLink from '@/components/fancylink'

function ApplyNow({type} : {type: string}) {
    return (
      <div className="m-20">
      <a href="google.com" className={`${Constants.border_class[type]} border-4 event-card group rounded-full border border-transparent w-96 h-32 px-5 py-4 flex items-center transition duration-100 active:opacity-50 active:scale-95`}>
      <div className={`${Constants.clip_backgrounds[type]} transition-transform group-hover:scale-125 motion-reduce:transform-none quicklink w-full`}>
          <div className="event-info flex-1 flex items-center justify-center">
              <div className="">
                  <p className="quicklink text-4xl ">Apply Now</p>
              </div>
          </div>
          </div>
      </a>
    </div>
    
    )
} 


function JoinMailingList({type} : {type: string}) {
    return (
        <p className="mt-10 mb-10">
            Join our <FancyLink type={type} href={Constants.links["mailing_list"]} text={"mailing list"}/> to be notified!
        </p>
    )
} 

export default function Join({type, heading, blurb_recruiting, blurb_notrecruiting, isrecruiting, link} : {type: string, heading: string, blurb_recruiting: string[], blurb_notrecruiting: string[], isrecruiting: boolean, link: string}) {
  
    const sourcetext = isrecruiting ? blurb_recruiting : blurb_notrecruiting
    const button = isrecruiting ? (<ApplyNow type={type}/>) : (<JoinMailingList type={type}/>)
    return (
        <div className="flex flex-col items-center justify-center w-full h-96 gray-text">
        <h1 className="">{heading}</h1>

        {sourcetext.map((item,index) => (item == "" ? (<br />) : (<p>{item}</p>)))}
        
        {button}
        
        </div>
    
        )
}
  