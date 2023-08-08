import SponsorCard from "./sponsorcard";

export default function Sponsors() {
    return (
      <div>
        <h1>Sponsors</h1>
        <div className="flex flex-col items-center">
        <p className="gray-text ">Interested in becoming a sponsor? <a href="mailto:aim-exec@mit.edu" className="underline">Email us</a>.</p>
        </div>
        <div className="flex flex-wrap gap-4 justify-center mt-4 mb-20">
            <SponsorCard imageName="sponsors/logo-wb-bw.png" />
            <SponsorCard imageName="sponsors/logo-quest-bw.png" />
            <SponsorCard imageName="sponsors/logo-mit-bw.png" />
        </div>
 
      </div>
      
    );
  }