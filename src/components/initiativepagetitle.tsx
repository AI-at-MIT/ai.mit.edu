import Image from "next/image";
import * as Constants from '@/components/constants'


export default function InitiativePageTitle({type}) {
    return (
      <div>
      <div className="section w-screen overflow-hidden flex flex-col justify-center">

        <div className="absolute inset-0 -z-50">
          <Image
            alt="aim-backdrop"
            src={Constants.backdrops[type]}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
  
  
          <div className="max-w-[70vw]">
            <div className="flex flex-wrap gap-4 items-center">
  
            
            <div className='w-64'>
              <Image
                alt="labs-icon"
                src={Constants.icons[type]}
                layout="responsive"
                width={100}
                height={100}
                quality={100}
              />
  
            </div>
            <div className="title-text">
              {Constants.initiative_names[type]}
            </div>
          </div>
  
          <p className="title-tag-text">
            {Constants.taglines[type]}
          </p>
  
          <p className="title-desc-text max-w-[700px]">
            {Constants.descriptions[type]}
          </p>
          <div className="w-32 ml-6 z-100">

              <a href="./">
                  <Image
                      alt="aim-logo-full"
                      src="/icons/aim-icon-full.svg"
                      layout="responsive"
                      width={100}
                      height={100}
                      quality={100}
                    />
              
              </a>


            </div>


          </div>
  
  
      </div>
          <div className="bg-gray-700 w-full h-[1px] opacity-50"></div>
          </div>
    );
  }
  