import ProjectCard from "./projectcard";

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
  