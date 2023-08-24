import Image from "next/image";
import * as Constants from '@/components/constants'


export default function InitiativePageTitle({initiative}: {initiative: Constants.InitiativeInterface}) {
    return (
      <div>
      <div className="section-full w-screen overflow-hidden flex flex-col justify-center">

        <div className="transform absolute inset-0 -z-50">
          <Image
            alt="aim-backdrop"
            src={initiative.backdrop}
            fill={true}
            style={{objectFit: "cover"}} 

          />
        </div>
  
        <div className={initiative.key != "aim" ? "md:max-w-[70vw]" : "md:max-w-[60vw]  md:m-10"}>

          {initiative.key != "aim" ? 
          <div className="flex flex-wrap gap-4 items-center m-[10px] md:m-[30px] mb-[30px] md:mb-[80px]">
            <div className='w-32 md:w-64'>
              <Image
                alt="labs-icon"
                src={initiative.icon}
                width={500}
                height={500}   
                style={{objectFit: "cover"}} 
              />
            </div>

            <div className="text-5xl md:text-8xl title-text ">
              {initiative.name}
            </div>
          </div> 
          :
          <Image
             alt="aim-logo-full"
             src="/icons/aim-icon-full.svg"
             width={1200}
             height={500}
             className="mb-[30px] md:mb-0"
             style={{objectFit: "cover"}} 

           />}
  
          <p className="title-tag-text text-3xl md:text-4xl m-[10px] md:m-[30px]">
            {initiative.tagline}
          </p>
  
          <p className="title-desc-text max-w-[700px] m-[10px] md:m-[30px]">
            {initiative.description}
          </p>
          
          { initiative.key != "aim" ?
            <div className="w-48 md:w-64 ml-[10px] md:ml-6 z-100">
              <a href="./" >
                  <Image
                      alt="aim-logo-full"
                      src="/icons/aim-icon-full.svg"
                      width={300}
                      height={200}
                      className="transition duration-100 hover:opacity-50 active:scale-95"
                      style={{objectFit: "cover"}} 

                    />
              </a>
            </div> : ""
          }
          </div>
          
      </div>
      <div className="bg-gray-700 w-full h-[1px] opacity-50"></div></div>
    );
  }
  