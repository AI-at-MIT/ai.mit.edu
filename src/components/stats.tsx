import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";


export default function Stats({content}: {content: {icon: IconDefinition, number: string, text: string}[]}) {
    return (
      <div className="section"> 
        <div className = "grid md:grid-cols-3 grid-cols-1 gap-20 "> 
          {content.map((data,index) => (
                    
                <div key={index} className="flex flex-col items-center justify-center">
                    <FontAwesomeIcon icon={data.icon} className="fa-6x my-6 "></FontAwesomeIcon>
                    <div className="text-5xl text-center font-bold off-white-text my-3">{data.number}</div>
                    <div className="text-xl text-center gray-text">{data.text}</div>
                </div>
          ))}
        </div>
      </div>
    );
  }