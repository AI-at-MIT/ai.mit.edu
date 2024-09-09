import Image from "next/image";
import {InitiativeInterface,recentExec,ExecData} from './util/constants'
import FancyLink from "./fancylink";

import { useState, useEffect } from 'react';



function ExecutiveCard({ imageName, name, position, link } : {imageName: string, name: string, position: string, link: string}) {
  return (
    <a href={link} className="m-10 group rounded-full border border-transparent px-4 py-4 flex flex-col items-center w-[250px] h-[350px] ">

      <div className="transition duration-500 ease-in-out group-active:scale-95 w-[170px] relative h-[170px] rounded-full overflow-hidden hover ">
        <Image
          alt="Executive"
          src={imageName}
          quality={100}
          fill={true}
          style={{ userSelect: 'none' ,objectFit: "cover"}} 
          className="grayscale group-hover:grayscale-0 group-active:scale-125 transition duration-500 ease-in-out"
          />

        </div>
      <div className="mt-4 text-center">
        <h3 className="text-xxl font-semibold">{name}</h3>
        <p className="text-xl text-gray-500">{position}</p>
      </div>
    </a>
  );
}


export default function ExecutiveMembers({title, initiative, exec_data} : {title: string, initiative: InitiativeInterface, exec_data?:ExecData[]}) {

 
  let data = exec_data ?? recentExec

  if (initiative.key !== "aim"){
    data = data.filter(exec => exec.type.includes(initiative.key));
  }

  return (
    <div className="section">
      <h1>{title}</h1>
      <div className="flex flex-wrap gap-4 justify-center m-10 max-w-[1200px]">
        {
          data.map((member: ExecData, index: number) => (
            <ExecutiveCard
              key={index}
              imageName={member.imageSource}
              name={member.name}
              position={member.position}
              link={member.link}
            />
          ))

         }
      </div>

      {!exec_data&&
        <div className="flex flex-col items-center">
          <p className="gray-text ">See past Exec since 2023 <FancyLink initiative={undefined} href="/pastexec" text="here"/>.</p>
        </div>
      }
    </div>
  
  );
}