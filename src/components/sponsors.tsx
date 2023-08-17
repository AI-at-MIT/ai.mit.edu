import FancyLink from "./fancylink";

function SponsorCard({imageName}:{imageName: string}) {
  return (
    <div className="m-10">
        <img
          alt="Initiative"
          src={imageName}
          style={{"width": "auto",  "height" : "122px","max-width": "475px"}}
          
        />
    </div>
  );
}



export default function Sponsors() {
    return (
      <div className="section">
        <h1>Past Sponsors</h1>
        <div className="flex flex-col items-center">
        <p className="gray-text ">Interested in becoming a sponsor? <FancyLink type="" href="mailto:aim-exec@mit.edu" text="Email us"/>.</p>
        </div>
        
        <div className="flex flex-wrap gap-4 justify-center mt-4 mb-20 max-w-[1200px]">
            <SponsorCard imageName="sponsors/logo-nvidia-bw.svg" />
            <SponsorCard imageName="sponsors/logo-wb-bw.png" />
            <SponsorCard imageName="sponsors/logo-quantco-bw.svg" />
            <SponsorCard imageName="sponsors/logo-covariant-bw.svg" />
            <SponsorCard imageName="sponsors/logo-cerebras-bw.svg" />
            <SponsorCard imageName="sponsors/logo-quest-bw.png" />
            <SponsorCard imageName="sponsors/logo-mit-bw.png" />
        </div>
 
      </div>
      
    );
  }