import FancyLink from "./fancylink";
import Image from 'next/image'
import * as Constants from "./util/constants"

function SponsorCard({imageName, href}:{imageName: string, href:string}) {
  return (
    <div className="h-[125px] max-w-[450px]" >
      <a href={href}>
        <Image
          alt="Initiative"
          src={imageName}
          height={100}
          width={100}
          className="w-full h-full transition duration-100 hover:opacity-50 active:scale-95"
        />

      </a>
    </div>
  );
}


export default function Sponsors() {
    return (
      <div className="section">
        <h1>Sponsors</h1>

        <div className="flex flex-col items-center text-center">

          <p className="gray-text ">Interested in becoming a sponsor? <FancyLink initiative={undefined} href={Constants.emails["sponsor"]} text="Email us"/>.</p>
        </div>
        
        <div className="flex flex-wrap gap-16 justify-center mt-10 mb-20 max-w-[1200px]">
            <SponsorCard imageName="sponsors/logo-cerebras-bw.svg" href="https://www.cerebras.net/"/>
            <SponsorCard imageName="sponsors/logo-quest-bw.svg" href="https://quest.mit.edu/"/>
            <SponsorCard imageName="sponsors/logo-mit-bw.svg" href="https://www.mit.edu/"/>
            <SponsorCard imageName="sponsors/logo-openai-bw.svg" href="https://openai.com/"/>

        </div>
 
      </div>
      
    );
  }

//  <SponsorCard imageName="sponsors/logo-quest-bw.png" href="https://quest.mit.edu/"/>
//  <SponsorCard imageName="sponsors/logo-mit-bw.png" href="https://www.mit.edu/"/>
//  <SponsorCard imageName="sponsors/logo-wb-bw.png" href="https://wandb.ai/"/>
//<SponsorCard imageName="sponsors/logo-nvidia-bw.svg" href="https://www.nvidia.com/"/>
//<SponsorCard imageName="sponsors/logo-wb-bw.svg" href="https://wandb.ai/"/>
//<SponsorCard imageName="sponsors/logo-scale-bw.svg" href="https://scale.com/"/>

//<SponsorCard imageName="sponsors/logo-quantco-bw.svg" href="https://www.quantco.com/"/>
//<SponsorCard imageName="sponsors/logo-covariant-bw.svg" href="https://covariant.ai/"/>
