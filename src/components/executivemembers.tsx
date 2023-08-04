import ExecutiveCard from "./executivecard";
export default function ExecutiveMembers() {
  return (
    <div className="section">
      <h1>Executive Members</h1>
      <div className="flex flex-wrap gap-4 justify-center m-10 max-w-[1200px]">
        <ExecutiveCard
          imageName="/exec/david_headshot.jpg"
          name="David Koplow"
          position="Co-President"
        />
        <ExecutiveCard
          imageName="/exec/zack_headshot.png"
          name="Zack Ankner"
          position="Co-President"
        />

        <ExecutiveCard
          imageName="/exec/jimin_headshot.png"
          name="Jimin Lee"
          position="Co-President"
        />
        <ExecutiveCard
          imageName="/exec/nithya_headshot.png"
          name="Nithya Attaluri"
          position="Treasurer"
        />
        <ExecutiveCard
          imageName="/exec/sejal_headshot.jpeg"
          name="Sejal Gupta"
          position="Labs Lead"
        />
        <ExecutiveCard
          imageName="/exec/jose_headshot.jpeg"
          name="Jose Ricardo Ramos"
          position="Reading Group Co-Lead"
        />
        <ExecutiveCard
          imageName="/exec/shayda_headshot.png"
          name="Shayda Moezzi"
          position="Reading Group Co-Lead"
        />
        <ExecutiveCard
          imageName="/exec/kevin_headshot.png"
          name="Kevin Meng"
          position="Workshops Lead"
        />
        <ExecutiveCard
          imageName="/exec/anika_headshot.jpeg"
          name="Anika Puri"
          position="Marketing Lead"
        />
        <ExecutiveCard
          imageName="/exec/david_headshot.jpg"
          name="Erick Gbordzoe"
          position="Social Director"
        />
        <ExecutiveCard
          imageName="/exec/will_headshot.png"
          name="Will Guilhermo Costa"
          position="Webmaster"
        />
      </div>
    </div>
  );
}
