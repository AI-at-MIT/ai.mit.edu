import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Stats({content}) {
    return (
      <div>
        <div className = "flex flex-row gap-x-20 "> 
          {content.map((data) => (
                    
                    <div className="flex flex-col items-center justify-center">
                    <FontAwesomeIcon icon={data.icon} className="fa-6x my-6 "></FontAwesomeIcon>
                    <div className="text-5xl font-bold off-white-text my-3">{data.number}</div>
                    <div className="text-xl gray-text">{data.text}</div>
                </div>
          ))}
        </div>
      </div>
    );
  }