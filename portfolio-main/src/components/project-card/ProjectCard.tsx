import { useContext } from "react";
import { ExternalLinkIcon, GithubIcon } from "../../assets/icons/icons";
import { ThemeContext } from "../../App";
import { motion, Variants } from "framer-motion";
import AnimatedText from "../animatedText/AnimatedText";

interface ProjectCardProps {
  projectName: string;
  description: string;
  image: string;
  liveUrl: string;
  repoUrl: string;
  index: number;
  techStack: string[];
}

const cardVariants: Variants = {
  offscreen: {
    y: 120,
  },
  onscreen: {
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.4,
      stiffness: 120,
    },
  },
};

const cardVariantsInvert: Variants = {
  offscreen: {
    y: 120,
  },
  onscreen: {
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.4,
      stiffness: 120,
    },
  },
};

const ProjectCard: React.FunctionComponent<ProjectCardProps> = ({
  projectName,
  description,
  image,
  liveUrl,
  repoUrl,
  index,
  techStack,
}) => {
  const theme = useContext(ThemeContext);
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      exit="offscreen"
      viewport={{ once: true, amount: 0.8 }}
      className={`projectCard ${theme.isDarkmode ? "projectCardDark" : ""}`}
    >
      <span className="projectCardGlow" />
      <motion.div
        variants={index % 2 === 0 ? cardVariants : cardVariantsInvert}
        className="projectMedia"
      >
        <img src={image} alt={projectName} />
      </motion.div>
      <div className="projectContent">
        <div className="projectHeader">
          <AnimatedText
            text={projectName}
            className={theme.isDarkmode ? "projectNameDark" : "projectName"}
            duration={0.03}
          />
          <div className="projectLinks">
            <a
              className={theme.isDarkmode ? "iconButtonDark" : "iconButton"}
              href={repoUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`view ${projectName} repository`}
            >
              <GithubIcon />
            </a>
            <a
              className={theme.isDarkmode ? "iconButtonDark" : "iconButton"}
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`view ${projectName} live preview`}
            >
              <ExternalLinkIcon />
            </a>
          </div>
        </div>
        <p className={theme.isDarkmode ? "projectDescDark" : "projectDesc"}>
          {description}
        </p>
        <div className="techStack">
          {techStack.map((tech, techIndex) => (
            <span
              key={techIndex}
              className={theme.isDarkmode ? "techTagDark" : "techTag"}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
