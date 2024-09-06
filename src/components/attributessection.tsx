import * as Constants from './util/constants'
import React, {useEffect,useCallback, useRef, useState } from 'react';
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { useMediaQuery } from 'react-responsive'


function AttributeCard({icon, text, blurb} : {icon:IconDefinition, text:string, blurb:string}) {
  const [expanded, setExpanded] = useState(true);
  const [seen, setSeen] = useState(false);


  const handleCardClick = () => {
    if (!mobile) {
      setExpanded(!expanded);
    }

  };
  const cardRef = useRef(null);
  const handleScroll = useCallback(() =>  {
    if(!cardRef.current) return;
    const rect = (cardRef.current as HTMLDivElement).getBoundingClientRect();
    const isVisible = (rect.bottom <= window.innerHeight/2);
    if(isVisible && !seen) {
      setSeen(true);

      !mobile && setExpanded(false); 
    } 
  },[seen]);
  


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, [handleScroll]);  
  
  let mobile = useMediaQuery({ query: `(max-width: 760px)` });


  return (
      <div ref={cardRef}>
        <div
          onClick={handleCardClick}
          className={
            `
            flex  items-center duration-100 transition-all 
            overflow-hidden m-5 p-5 group  
            md:border md:border-neutral-700/70  
            md:hover:bg-neutral-800/30 md:active:scale-95
   
            min-h-[200px] min-w-[200px]
            max-w-[800px] max-h-[600px]
            justify-center
            flex-col rounded-3xl md:flex-row md:rounded-full
             `
          }
        >
          <div className="min-w-[200px] min-h-[200px] max-w-[200px] max-h-[200px] flex flex-col items-center justify-center">
            <FontAwesomeIcon icon={icon} className="fa-5x pb-5"></FontAwesomeIcon>
            <p className="text-3xl">{text}</p>
          </div>

          <div className={`transition-all duration-500 ${expanded || mobile ? "max-w-[1000px] max-h-[1000px]" : "max-w-[0px] max-h-[0px] delay-300 "}`}>
          <p className={`md:pr-10 text-center md:text-start gray-text transition-all  duration-300 ${expanded || mobile ? " opacity-100 delay-300" : "opacity-0 delay-0"}`}>{blurb}</p>

          </div>

        </div>
  

      </div>

    );
  }

export default function AttributeSection({heading, projects} : {heading: string, projects: {icon:IconDefinition, text:string, blurb:string}[]}) {

    return (
      <div className="section">
        <h1>{heading}</h1>
  
        <div className="flex flex-wrap gap-4 justify-center max-w-[900px]">
          {
            projects.map((project,index) => (
              
              <AttributeCard key={index}
                icon={project.icon}
                text={project.text}
                blurb={project.blurb}
              />            
            ))
            }
        </div>
      </div>
  
    );
  }
  