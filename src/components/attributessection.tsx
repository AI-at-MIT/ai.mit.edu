import * as Constants from './constants'
import React, {useEffect,useCallback, useRef, useState } from 'react';
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Icon } from 'next/dist/lib/metadata/types/metadata-types';


function AttributeCard({icon, text, blurb} : {icon:IconDefinition, text:string, blurb:string}) {
  const [expanded, setExpanded] = useState(true);
  const [seen, setSeen] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);

  const handleButtonClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const handleCardClick = () => {
    if (!buttonHovered) {
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
      setExpanded(false); 
    } 
  },[seen]);
  const handleResize = useCallback(() => {
    // Set window width/height to state
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  },[]);
  

  const [windowSize, setWindowSize] = useState({
    width: 1000,
    height: 1000,
  });

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, [handleScroll]);  
  useEffect(() => {
    // Add event listener
    window.addEventListener("resize", handleResize);
    handleResize();

    // Call handler right aw
    return () => {
      window.removeEventListener("resize", handleResize);
    };

  }, [handleResize]);  
  
  let mobile = windowSize.width<800

  return (
      <div ref={cardRef}>
        <div
          onClick={handleCardClick}
          className={
            `
            flex  items-center duration-100 transition-all 
            overflow-hidden m-5 p-5 group  border border-neutral-700/70 hover:bg-neutral-800/30 
            ${buttonHovered ? "" : "active:scale-95"}  
            min-h-[200px] min-w-[200px]
            max-w-[800px] max-h-[600px]
            justify-center
            ${mobile ? `flex-col rounded-3xl` : `flex-row rounded-full`} `
          }
        >
          <div className="min-w-[200px] min-h-[200px] max-w-[200px] max-h-[200px] flex flex-col items-center justify-center">
            <FontAwesomeIcon icon={icon} className="fa-5x pb-5"></FontAwesomeIcon>
            <p className="text-3xl">{text}</p>
          </div>

          <div className={`transition-all duration-500 ${expanded ? "max-w-[1000px] max-h-[1000px]" : "max-w-[0px] max-h-[0px] delay-300 "}`}>
          <p className={`pr-10 gray-text transition-all  duration-300 ${expanded ? " opacity-100 delay-300" : "opacity-0 delay-0"}`}>{blurb}</p>

          </div>

        </div>
  

      </div>

    );
  }

export default function AttributeSection({heading, projects} : {heading: string, projects: {icon:IconDefinition, text:string, blurb:string}[]}) {

    return (
      <div className="section-full">
        <h1>{heading}</h1>
  
        <div className="flex flex-wrap gap-4 justify-center m-10 max-w-[900px]">
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
  