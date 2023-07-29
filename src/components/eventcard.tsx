import * as Constants from './constants'
import Image from 'next/image'

export default function EventCard({type, link, description, important}) {
    const isTypeL = important;
    let classnames = `${Constants.border_class[type]} event-card m-1 group rounded-lg border border-transparent w-full px-5 py-3 flex flex-col ${
      isTypeL ? "relative" : ""
    }`;

    return (
      <a href={link} className={classnames}>

        
        <div className="event-info flex items-center w-full">
          <Image
            alt="icon"
            src={Constants.icons[type]}
            width={40}
            height={40}
            quality={100}
          />
          <div className="ml-4 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            <p>{description}</p>
          </div>
          
        {isTypeL && (
        <div className="group-hover:opacity-0 duration-100 transition group-hover:translate-x-1 motion-reduce:transform-none absolute top-8 right-2 transform -translate-x-1/2 -translate-y-1/2">
        <div className={`${Constants.backgrounds[type]} event-card w-3 h-3 rounded-full `}></div>
        </div>
        )}
        </div>

      </a>
    );
  }

