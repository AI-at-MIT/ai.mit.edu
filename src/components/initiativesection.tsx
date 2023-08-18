import * as Constants from './constants'
import React, {useEffect, useRef, useState } from 'react';
import Image from 'next/image'


function InitiativeCard({initiative} : {initiative: Constants.InitiativeInterface}) {
  const [expanded, setExpanded] = useState(true);
  const [seen, setSeen] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);

  const handleButtonClick = (event) => {
    event.stopPropagation();
  };

  const handleCardClick = () => {
    if (!buttonHovered) {
      setExpanded(!expanded);

    }

  };
  const cardRef = useRef(null);
  const handleScroll = () =>  {
    if(!cardRef.current) return;
    const rect = (cardRef.current as HTMLDivElement).getBoundingClientRect();
    const isVisible = (rect.bottom <= window.innerHeight/2);
    if(isVisible && !seen) {
      setSeen(true);
      setExpanded(false); 
    } 
  };
  const handleResize = () => {
    // Set window width/height to state
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }
  

  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Call handler right aw
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);  
  useEffect(() => {
    // Add event listener
    window.addEventListener("resize", handleResize);
    handleResize();

    // Call handler right aw
    return () => {
      window.removeEventListener("resize", handleResize);
    };

  }, []);  
  
  let mobile = windowSize.width<800
  console.log(mobile)

  return (
      <div ref={cardRef}>
        <div
          onClick={handleCardClick}
          className={
            `
            flex  justify-start items-center duration-300 transition-all 
            overflow-hidden m-5 group rounded-2xl border border-transparent px-5 py-4 hover:border-neutral-700 hover:bg-neutral-800/30 
            ${buttonHovered ? "" : "active:scale-95"}  
            max-h-[250px] max-w-[250px]
            ${mobile ? 
              `flex-col ${expanded ? "max-w-[800px] max-h-[800px]":""}` 
              :
              `flex-row ${expanded ? "max-w-[800px] max-h-[450px]":""}`}
            `
          }
        >
          <Image className="pt-2 pb-2" alt="Initiative" src={initiative.icon} width={200} height={200} quality={100} />
            <div className={`ml-4 transition-all   ${expanded ? "opacity-100 delay-300" : "opacity-0 delay-0"}`}>
              <h2>{initiative.name}</h2>
              <p className="gray-text ">{initiative.description}</p>
              <div className={`flex justify-${mobile ? "center" : "end"}`}>
                  <a 
                  href={initiative.url} 
                  onClick={handleButtonClick}
                  onMouseEnter={() => setButtonHovered(true)}
                  onMouseLeave={() => setButtonHovered(false)}
                  >
                  <div className={`group transition duration-100 active:scale-95 ${initiative.border_class} border-2  text-xl w-48 h-16 mt-8 mb-[15px] rounded-full border border-transparent px-5 py-3 flex items-center justify-center `}>
                    Learn More
                  </div>
                    
                  </a>
              </div>
      
            </div>
          

        </div>
  

      </div>

    );
  }

export default function InitiativeSection() {

    return (
      <div className="section-full">
        <h1>Initiatives</h1>
  
        <div className="flex flex-wrap gap-4 justify-center m-10 max-w-[900px]">
          <InitiativeCard initiative={Constants.initiative_data["l"]}/>
          <InitiativeCard initiative={Constants.initiative_data["w"]}/>
          <InitiativeCard initiative={Constants.initiative_data["s"]}/>
          <InitiativeCard initiative={Constants.initiative_data["g"]}/>
          <InitiativeCard initiative={Constants.initiative_data["p"]}/>
        </div>
      </div>
  
    );
  }
  