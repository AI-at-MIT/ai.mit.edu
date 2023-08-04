import ProjectCard from "./projectcard";

export default function Showcase({heading, projects}){
    return (
      <div>
        <h1>Recent Projects</h1>
        <div className="flex flex-wrap justify-center gap-5">
          {
          projects.map((project) => (
            <ProjectCard
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
  