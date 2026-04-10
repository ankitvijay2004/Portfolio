import { useContext } from "react";
import ProjectCard from "../project-card/ProjectCard";
import SectionHeading from "../section-heading/SectionHeading";
import { ThemeContext } from "../../App";
import { useLocation } from "react-router-dom";
import { PROJECTS } from "../../data/projects";

interface ProjectsProps {}

/** @deprecated Use PROJECTS from `data/projects` */
export const projects = PROJECTS;

const Projects: React.FunctionComponent<ProjectsProps> = () => {
  const theme = useContext(ThemeContext);
  const location = useLocation();
  return (
    <div
      id="selected-projects"
      className={
        theme.isDarkmode ? "projectContainerDark" : "projectContainer"
      }
    >
      <div
        className={theme.isDarkmode ? "projectWrapperDark" : "projectWrapper"}
      >
        {location.pathname === "/" && (
          <SectionHeading sectionName="Selected Projects" />
        )}
        <div className="projects">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              projectName={project.name}
              slug={project.slug}
              image={project.image}
              description={project.description}
              key={project.slug}
              liveUrl={project.liveUrl}
              repoUrl={project.repoUrl}
              index={index + 1}
              techStack={project.techStack}
              imageLoading={index === 0 ? "eager" : "lazy"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
