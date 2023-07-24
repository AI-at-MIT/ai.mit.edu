import SponsorCard from "./sponsorcard";

export default function Sponsors() {
    return (
      <div>
        <h1>Sponsors</h1>
        <div className="flex flex-wrap gap-4 justify-center m-10">
            <SponsorCard imageName="sponsors/logo-wb-bw.png" />
            <SponsorCard imageName="sponsors/logo-quest-bw.png" />
            <SponsorCard imageName="sponsors/logo-mit-bw.png" />
        </div>
      </div>
      
    );
  }