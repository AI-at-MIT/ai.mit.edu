import Image from 'next/image'

function ProjectCard({ imageName, name, link, blurb }: { imageName: string, name: string, link: string, blurb: string }) {
    return (
      <a href={link} className="m-2 group border border-transparent px-4 py-4 flex flex-col justify-center items-center">
        <div className="rounded-3xl overflow-hidden absolute -z-10 opacity-50 border-2 border-gray-500 group-hover:opacity-60 duration-60 transition">
          <Image
            alt="Executive"
            src={imageName}
            width={200}
            height={200}
            quality={100}
          />
        </div>
        <div className="mt-4 text-center w-[200px] h-[200px] p-1">
          <h3 className="text-2xl font-semibold">{name}</h3>
          <p className="text-sm">{blurb}</p>
        </div>
      </a>
    );
  }
export default function Showcase({heading, projects} : {heading: string, projects: {imageName: string, name: string, link: string, blurb: string}[]}){
    return (
      <div>
        <h1>{heading}</h1>
        <div className="flex flex-wrap justify-center gap-5">
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
  