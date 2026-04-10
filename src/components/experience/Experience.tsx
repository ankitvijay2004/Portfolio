import { useContext } from "react";
import { ThemeContext } from "../../App";
import SectionHeading from "../section-heading/SectionHeading";
import { motion, useReducedMotion } from "framer-motion";

type ExperienceItem = {
  date: string;
  location: string;
  role: string;
  company: string;
  summary: string;
  bullets: string[];
};

const experiences: ExperienceItem[] = [
  {
    date: "March 2026 – Present",
    location: "Remote",
    role: "SDE Intern",
    company: "Xelron AI",
    summary:
      "Developing and optimizing scalable backend and frontend features while working closely with the engineering team to build production-ready solutions.",
    bullets: [
      "Collaborating with developers, reviewers, and cross-functional teams to deliver high-quality tasks, manage workflows, and ensure efficient project execution.",
      "Improving system performance and automation workflows by debugging issues, refining implementations, and ensuring reliable deployment of features.",
    ],
  },
  {
    date: "March 2025 – Present",
    location: "Remote",
    role: "Full Stack Developer",
    company: "Freelance",
    summary:
      "Top-rated Full Stack Developer & Video Editor delivering excellence — building web applications, custom scripts, and video deliverables for clients worldwide.",
    bullets: [
      "Scoping requirements, estimating work, and shipping full-stack solutions on Freelancer and direct engagements with clear communication throughout.",
      "Owning delivery from implementation through revisions, including performance tuning, documentation, and handoff so clients can run projects confidently.",
    ],
  },
];

const Experience = () => {
  const theme = useContext(ThemeContext);
  const isDark = theme.isDarkmode;
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className={isDark ? "experienceContainerDark" : "experienceContainer"}
    >
      <div className="experienceWrapper">
        <SectionHeading sectionName="Experience" />
        <div className="experienceList">
          {experiences.map((job, index) => (
            <motion.article
              key={`${job.company}-${job.date}`}
              initial={
                prefersReducedMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 24 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : { duration: 0.45, delay: index * 0.08 }
              }
              className={isDark ? "experienceCardDark" : "experienceCard"}
            >
              <div className="expSidebar">
                <span className="expDate">{job.date}</span>
                <span className="expLoc">{job.location}</span>
              </div>
              <div className="expContent">
                <h3 className="expRole">{job.role}</h3>
                <p className="expCompany">{job.company}</p>
                <ul className="expBullets">
                  <li>
                    <span className="expBulletDot" aria-hidden="true" />
                    <span>{job.summary}</span>
                  </li>
                  {job.bullets.map((line, i) => (
                    <li key={`${job.company}-b-${i}`}>
                      <span className="expBulletDot" aria-hidden="true" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
