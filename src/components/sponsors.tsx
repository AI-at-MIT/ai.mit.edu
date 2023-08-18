import FancyLink from "./fancylink";

function SponsorCard({imageName, href}:{imageName: string, href:string}) {
  return (
    <div className="m-10">
      <a href={href}>
      <img
          alt="Initiative"
          src={imageName}
          style={{"width": "auto",  "height" : "122px","maxWidth": "475px"}}
          className="transition duration-100 hover:opacity-50 active:scale-95"
        />
      </a>

    </div>
  );
}


export default function Sponsors() {
    return (
      <div className="section">
        <h1>Past Sponsors</h1>
        <div className="flex flex-col items-center">
        <p className="gray-text ">Interested in becoming a sponsor? <FancyLink initiative={undefined} href="mailto:aim-exec@mit.edu" text="Email us"/>.</p>
        </div>
        
        <div className="flex flex-wrap gap-4 justify-center mt-4 mb-20 max-w-[1200px]">
            <SponsorCard imageName="sponsors/logo-nvidia-bw.svg" href="https://www.nvidia.com/"/>
            <SponsorCard imageName="sponsors/logo-wb-bw.png" href="https://wandb.ai/"/>
            <SponsorCard imageName="sponsors/logo-quantco-bw.svg" href="https://www.quantco.com/"/>
            <SponsorCard imageName="sponsors/logo-covariant-bw.svg" href="https://covariant.ai/"/>
            <SponsorCard imageName="sponsors/logo-cerebras-bw.svg" href="https://www.cerebras.net/"/>
            <SponsorCard imageName="sponsors/logo-quest-bw.png" href="https://quest.mit.edu/"/>
            <SponsorCard imageName="sponsors/logo-mit-bw.png" href="https://www.mit.edu/"/>
        </div>
 
      </div>
      
    );
  }