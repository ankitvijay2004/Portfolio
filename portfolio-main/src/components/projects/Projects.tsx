import { useContext } from "react";
import ProjectCard from "../project-card/ProjectCard";
import SectionHeading from "../section-heading/SectionHeading";
import { ThemeContext } from "../../App";
import { useLocation } from "react-router-dom";

interface ProjectsProps {}

export const projects = [
  {
    name: "Prescripto - HMS",
    description:
      "A comprehensive full-stack medical appointment management system built with the MERN stack (MongoDB, Express.js, React, Node.js). Prescripto enables patients to book appointments with doctors, while providing separate dashboards for administrators and doctors to manage appointments, profiles, and more.",
    image: "/prescripto.png",
    liveUrl: "https://prescripto-hospital-management-system.vercel.app/",
    repoUrl: "https://github.com/ankitvijay2004/hospital-management-system-mern",
    techStack: ["MERN Stack","JavaScript"],
  },
  {
    name: "CodeCast",
    description:
      "CodeCast is a real-time code collaboration web application that allows multiple users to collaborate on code in the same virtual room. It's built using the MERN (MongoDB, Express.js, React, Node.js) stack and Socket.IO for real-time communication.",
    image: "/code-cast.png",
    liveUrl: "https://codecast-324z.onrender.com/",
    repoUrl: "https://github.com/ankitvijay2004/code-cast/tree/main/CodeCast-main",
    techStack: ["JavaScript"]
  },
  {
    name: "Learn Flow",
    description:
      "Learn Flow is an interactive web application designed to facilitate learning through a structured flow of educational content. It provides users with a seamless experience to access and engage with various learning materials, including articles, videos, and quizzes, all organized in a user-friendly interface.",
    image: "/learnflow.png",
    liveUrl: "https://github.com/ankitvijay2004/LernFlow",
    repoUrl: "https://github.com/ankitvijay2004/LernFlow",
    techStack: ["JavaScript"],
  },
];
const Projects: React.FunctionComponent<ProjectsProps> = () => {
  const theme = useContext(ThemeContext);
  const location = useLocation();
  return (
    <div className={theme.isDarkmode ? "projectContainerDark" : "projectContainer"}>
      <div
        className={theme.isDarkmode ? "projectWrapperDark" : "projectWrapper"}
      >
        {location.pathname === "/" && (
          <SectionHeading sectionName="Selected Projects" />
        )}
        <div className="projects">
          {projects.map((project, index) => (
            <ProjectCard
              projectName={project.name}
              image={project.image}
              description={project.description}
              key={project.name}
              liveUrl={project.liveUrl}
              repoUrl={project.repoUrl}
              index={index + 1}
              techStack={project.techStack}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
