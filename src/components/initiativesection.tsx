import * as Constants from './util/constants'
import React, {useEffect,useCallback, useRef, useState } from 'react';
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'


function InitiativeCard({initiative} : {initiative: Constants.InitiativeInterface}) {
  const [expanded, setExpanded] = useState(true);
  const [seen, setSeen] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);

  const handleButtonClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const handleCardClick = () => {
    if (!buttonHovered && !mobile) {
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
      
    } 
  },[seen]);



  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    // Call handler right aw
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
            flex  justify-start items-center duration-300 transition-all 
            overflow-hidden group rounded-2xl border border-transparent px-5 py-4 
            
            
            ${!buttonHovered && "md:active:scale-95"}  
            
            flex-col max-w-[800px] max-h-[800px]
            md:flex-row md:max-h-[250px] md:max-w-[250px]
            md:hover:border-subtle md:hover:bg-shaded 

            ${expanded && "md:max-w-[800px] md:max-h-[450px]"}
            `
          }
        >
          <Image 
          className="pt-2 pb-2" 
          alt="Initiative" 
          src={initiative.icon} 
          width={200}
          height={200} 
          quality={100}/>
            <div className={`ml-4 transition-all   ${expanded  || mobile ? "opacity-100 delay-300" : "opacity-0 delay-0"}`}>
              <h2>{initiative.name}</h2>
              <p className="gray-text ">{initiative.description}</p>
              <div className={`flex w-full justify-center md:justify-end`}>
                  <a 
                  href={initiative.url}
                  aria-label={`Explore ${initiative.name} - ${initiative.tagline}`}
                  onClick={handleButtonClick}
                  onMouseEnter={() => setButtonHovered(true)}
                  onMouseLeave={() => setButtonHovered(false)}
                  >
                  <div className={`group transition duration-100 active:scale-95 ${initiative.border_class} border-2  text-xl w-56 h-16 mt-8 mb-[15px] rounded-full border border-transparent px-5 py-3 flex items-center justify-center `}>
                    Explore {initiative.name}
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
  
        <div className="flex flex-wrap gap-20 justify-center max-w-[900px]">
          {Object.values(Constants.initiative_data)
            .filter(init => init.key !== 'aim')
            .map((init) => (
              <InitiativeCard key={init.key} initiative={init} />
            ))}
        </div>
      </div>
  
    );
  }
  