import * as Constants from './constants'
import React, {useEffect, useRef, useState } from 'react';
import Image from 'next/image'


function InitiativeCard({type} : {type: string}) {
  const [expanded, setExpanded] = useState(true);
  const [seen, setSeen] = useState(false);

  const handleCardClick = () => {
    setExpanded(!expanded);
  };



const cardRef = useRef(null);
const handleScroll = () =>  {
  if(!cardRef.current) return;
  const rect = (cardRef.current as HTMLDivElement).getBoundingClientRect();

  const elemTop = rect.top;
  const elemBottom = rect.bottom;
  
  const isVisible = (elemBottom <= window.innerHeight/2);
  
  if(isVisible && !seen) {
    setSeen(true);
    setExpanded(false); 
  } 
};


useEffect(() => {

  

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };

}, [handleScroll]);  

return (
    <div ref={cardRef}>

    

      <div
        onClick={handleCardClick}
        className={`desktop overflow-hidden transition-all max-h-[250px] max-w-[250px] m-5 group rounded-2xl border border-transparent px-5 py-4 hover:border-neutral-700 hover:bg-neutral-800/30 flex flex-row justify-start items-center ${expanded ? "max-w-[800px] max-h-[350px]":""}`}
      >
        <Image className="" alt="Initiative" src={Constants.icons[type]} width={200} height={200} quality={100} />

        {
        (
          <div className={`ml-4 transition-all   ${expanded ? "opacity-100 delay-100" : "opacity-0 delay-0 duration-0"}`}>
            <h2>{Constants.initiative_names[type]}</h2>
            <p>{Constants.descriptions[type]}</p>
            <div className="flex justify-end">
                <a href={Constants.links[type]}>
                <div className={`${Constants.border_class[type]} border-2  text-xl w-48 h-16 mt-8 rounded-full border border-transparent px-5 py-3 flex items-center justify-center `}>

                  Learn More

                </div>
                  
                </a>
            </div>
    
          </div>
        )
        }

      </div>
 

 
      <div
        onClick={handleCardClick}
        className={`mobile overflow-hidden transition-all max-h-[250px] max-w-[250px] m-10 group rounded-2xl border border-transparent px-5 py-4 hover:border-neutral-700 hover:bg-neutral-800/30 justify-center items-center ${expanded ? "max-w-[800px] max-h-[800px]":""}`}
      >
        <div className="flex justify-center items-center">
        <Image alt="Initiative"  src={Constants.icons[type]} width={200} height={200} quality={100} />

        </div>


        {
        (
          <div className={`ml-4 transition-all   ${expanded ? "opacity-100 delay-100" : "opacity-0 delay-0 duration-0"}`}>
            <h2>{Constants.initiative_names[type]}</h2>
            <p>{Constants.descriptions[type]}</p>
            <div className="flex justify-center">
                <a href={Constants.links[type]}>
                  <div className={`${Constants.border_class[type]} border-2 text-xl w-48 h-16 mt-8 mb-8 rounded-full border border-transparent px-5 py-3 flex items-center justify-center `}>

                      Learn More

                  </div>
                </a>
            </div>
    
          </div>
        )
        }

      </div>
    </div>

  );
}


export default function Initiatives() {

    return (
      <div className="section">
        <h1>Initiatives</h1>
  
        <div className="flex flex-wrap gap-4 justify-center m-10 max-w-[900px]">
          <InitiativeCard type="l"  />
          <InitiativeCard type="w" />
          <InitiativeCard type="s" />
          <InitiativeCard type="g" />
          <InitiativeCard type="p"/>
        </div>
      </div>
  
    );
  }
  