import * as Constants from './constants'
import React, { useEffect, useState } from 'react';

export default function InitiativeCard({ type}) {
    const [expanded, setExpanded] = useState(false);
  
    const handleCardClick = () => {
      setExpanded(!expanded);
    };
    return (
      <div
        onClick={handleCardClick}
        className="m-5 group rounded-2xl border border-transparent px-5 py-4 max-w-64 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30 flex flex-row justify-start items-center"
      >
        <img alt="Initiative" src={Constants.icons[type]} width={200} height={200} quality={100} />
        {expanded && (
          <div className="ml-4">
            <h3>{Constants.initiative_names[type]}</h3>
            <p>{Constants.descriptions[type]}</p>
            <div className="flex justify-end">
                <a href={Constants.links[type]}>
                  <div className={`${Constants.border_class[type]} w-32 mt-4 rounded-full border border-transparent px-5 py-3`}>
  
                      Learn More
  
                  </div>
                </a>
              </div>
     
          </div>
        )}
      </div>
    );
  }