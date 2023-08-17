import Image from 'next/image'

function ProjectCard({ imageName, name, link, blurb }: { imageName: string, name: string, link: string, blurb: string }) {
    return (
      <a href={link} className="duration-100 m-2 group border border-transparent px-4 py-4 flex flex-col justify-center items-center transform active:scale-95">
        <div className="duration-100 w-[300px] h-[300px] rounded-3xl overflow-hidden absolute -z-10 opacity-30 border-2 border-gray-500 group-hover:opacity-60 duration-60 transition">
          <Image
            alt="Executive"
            src={imageName}
          
            quality={100}
            layout="fill"
            objectFit="cover"
    
          />
        </div>
        <div className="text-center w-[300px] h-[300px] p-4">
          <h3 className="mt-8 mb-8 text-3xl font-semibold">{name}</h3>
          <p className="text-lg">{blurb}</p>
        </div>
      </a>
    );
  }
export default function Showcase({heading, projects} : {heading: string, projects: {imageName: string, name: string, link: string, blurb: string}[]}){
    return (
      <div className="section">
        <h1>{heading}</h1>
        <div className="flex flex-wrap justify-center gap-5 max-w-[1000px] mt-16 mb-16">
          {
          projects.map((project,index) => (
            <ProjectCard key={index}
              imageName={project.imageName}
              name={project.name}
              link={project.link}
              blurb={project.blurb}
            />              
          ))
          }
        </div>
      </div>
     
    );
  }
  