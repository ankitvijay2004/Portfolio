import { useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import { ExternalLinkIcon, GithubIcon } from "../../assets/icons/icons";
import { ThemeContext } from "../../App";
import { motion, useReducedMotion, Variants } from "framer-motion";
import AnimatedText from "../animatedText/AnimatedText";

interface ProjectCardProps {
  projectName: string;
  slug: string;
  description: string;
  image: string;
  liveUrl: string;
  repoUrl: string;
  index: number;
  techStack: string[];
  imageLoading?: "eager" | "lazy";
}

const ProjectCard: React.FunctionComponent<ProjectCardProps> = ({
  projectName,
  slug,
  description,
  image,
  liveUrl,
  repoUrl,
  index,
  techStack,
  imageLoading = "lazy",
}) => {
  const theme = useContext(ThemeContext);
  const prefersReducedMotion = useReducedMotion();

  const cardVariants: Variants = useMemo(
    () => ({
      offscreen: {
        y: prefersReducedMotion ? 0 : 120,
      },
      onscreen: {
        y: 0,
        rotate: 0,
        transition: prefersReducedMotion
          ? { duration: 0.2 }
          : {
              type: "spring",
              bounce: 0.3,
              duration: 0.4,
              stiffness: 120,
            },
      },
    }),
    [prefersReducedMotion]
  );

  const cardVariantsInvert: Variants = useMemo(
    () => ({
      offscreen: {
        y: prefersReducedMotion ? 0 : 120,
      },
      onscreen: {
        y: 0,
        rotate: 0,
        transition: prefersReducedMotion
          ? { duration: 0.2 }
          : {
              type: "spring",
              bounce: 0.3,
              duration: 0.4,
              stiffness: 120,
            },
      },
    }),
    [prefersReducedMotion]
  );

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
        <img
          src={image}
          alt={projectName}
          width={1200}
          height={700}
          loading={imageLoading}
          decoding="async"
        />
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
            <Link
              to={`/works/${slug}`}
              className={`inline-flex items-center justify-center rounded-full border px-3 py-1.5 text-xs font-bold no-underline transition hover:-translate-y-0.5 ${
                theme.isDarkmode
                  ? "border-cyan-500/40 text-cyan-100 hover:bg-white/10"
                  : "border-slate-300 text-slate-800 hover:bg-slate-100"
              }`}
              aria-label={`${projectName} case study`}
            >
              Case study
            </Link>
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
