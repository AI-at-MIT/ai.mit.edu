import Image from "next/image";
import * as Constants from '@/components/constants'


export default function InitiativePageTitle({initiative}: {initiative: Constants.InitiativeInterface}) {
    return (
      <div>
      <div className="section-full w-screen overflow-hidden flex flex-col justify-center">

        <div className="absolute inset-0 -z-50">
          <Image
            alt="aim-backdrop"
            src={initiative.backdrop}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
  
        <div className={initiative.key != "aim" ? "max-w-[70vw]" : "max-w-[60vw]  m-10"}>

          {initiative.key != "aim" ? <div className="flex flex-wrap gap-4 items-center">
            <div className='w-64'>
              <Image
                alt="labs-icon"
                src={initiative.icon}
                layout="responsive"
                width={100}
                height={100}
                quality={100}
              />
            </div>

            <div className="title-text">
              {initiative.name}
            </div>
          </div> 
          :
          <Image
             alt="aim-logo-full"
             src="/icons/aim-icon-full.svg"
             layout="responsive"
             width={500}
             height={500}
             quality={100}
           />}
  
          <p className="title-tag-text">
            {initiative.tagline}
          </p>
  
          <p className="title-desc-text max-w-[700px]">
            {initiative.description}
          </p>
          
          { initiative.key != "aim" ?
            <div className="w-48 ml-6 z-100">
              <a href="./" >
                  <Image
                      alt="aim-logo-full"
                      src="/icons/aim-icon-full.svg"
                      layout="responsive"
                      width={100}
                      height={100}
                      quality={100}
                      className="transition duration-100 hover:opacity-50 active:scale-95"
                    />
              </a>
            </div> : ""
          }
          </div>
          
      </div>
      <div className="bg-gray-700 w-full h-[1px] opacity-50"></div></div>
    );
  }
  