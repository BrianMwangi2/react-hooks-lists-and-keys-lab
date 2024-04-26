
import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList() {
  const projects = [
    {
      id: 1,
      name: "Reciplease",
      about: "A recipe tracking app",
      technologies: ["Rails", "Bootstrap CSS"],
    },
    {
      id: 2,
      name: "Kibbles N Bitz",
      about: "Tinder for dogs",
      technologies: ["React", "Redux"],
    },
    {
      id: 3,
      name: "Alienwares",
      about: "Etsy for aliens",
      technologies: ["React", "Redux", "Rails"],
    },
      
  ];

  return (
    <div>
      {projects.map((project, index) => (
        <ProjectItem
          key={index} // added key for ProjectItem
          name={project.name}
          about={project.about}
          technologies={project.technologies}
        />
      ))}
    </div>
  );
}

export default ProjectList;

