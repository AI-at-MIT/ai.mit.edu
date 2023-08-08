import { link } from "fs";
import Image from "next/image";
import * as Constants from './constants'


function ExecutiveCard({ imageName, name, position, link } : {imageName: string, name: string, position: string, link: string}) {
  return (
    <a href={link} className="m-10 group rounded-full border border-transparent px-4 py-4 flex flex-col items-center w-[250px] h-[350px] ">
      <div className="rounded-full overflow-hidden hover">
        <Image
          alt="Executive"
          src={imageName}
          width={150}
          height={150}
          quality={100}
          className="grayscale group-hover:grayscale-0 group-active:scale-110 transition duration-500 ease-in-out"
          />
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-xxl font-semibold">{name}</h3>
        <p className="text-xl text-gray-500">{position}</p>
      </div>
    </a>
  );
}


export default function ExecutiveMembers({title, type} : {title: string, type: string}) {

  const display_profiles = Constants.execMembers.filter((member) =>  member.type.includes(type)) 

  return (
    <div className="section">
      <h1>{title}</h1>
      <div className="flex flex-wrap gap-4 justify-center m-10 max-w-[1200px]">
        {display_profiles.map((member,index) => (
          <ExecutiveCard
            imageName={member.imageSource}
            name={member.name}
            position={member.position}
            link={member.link}
          />))
        }
          
      </div>
    </div>
  );
}