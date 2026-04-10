import { useContext } from "react";
import {
  BootstrapIcon,
  FigmaIcon,
  FirebaseIcon,
  GitIcon,
  HtmlIcon,
  JavascriptIcon,
  JqueryIcon,
  ReactIcon,
  ReduxIcon,
  TailwindIcon,
  TypescriptIcon,
  VercelIcon,
} from "../../assets/icons/icons";
import SectionHeading from "../section-heading/SectionHeading";
// import SkillsCard from "./SkillsCard";
import { ThemeContext } from "../../App";

interface SkillsProps {}

const Skills: React.FunctionComponent<SkillsProps> = () => {
  const skillSections = [
    {
      title: "Programming Languages",
      items: [
        { name: "C", icon: <TypescriptIcon /> },
        { name: "C++", icon: <TypescriptIcon /> },
        { name: "Python", icon: <JavascriptIcon /> },
        { name: "JavaScript", icon: <HtmlIcon /> },
      ],
    },
    {
      title: "Libraries & Frameworks",
      items: [
        { name: "React.js", icon: <ReactIcon /> },
        { name: "Node.js", icon: <TailwindIcon /> },
        { name: "Express.js", icon: <BootstrapIcon /> },
        { name: "MongoDB", icon: <JqueryIcon /> },
        { name: "PyTorch", icon: <FigmaIcon /> },
        { name: "Scikit-learn", icon: <FirebaseIcon /> },
        { name: "Pandas", icon: <GitIcon /> },
        { name: "NumPy", icon: <VercelIcon /> },
      ],
    },
    {
      title: "Machine Learning & AI",
      items: [
        { name: "Supervised Learning", icon: <ReactIcon /> },
        { name: "Unsupervised Learning", icon: <ReduxIcon /> },
        { name: "Feature Engineering", icon: <TailwindIcon /> },
        { name: "Model Training & Evaluation", icon: <BootstrapIcon /> },
        { name: "Anomaly Detection", icon: <JqueryIcon /> },
        { name: "Neural Networks", icon: <FigmaIcon /> },
        { name: "Autoencoders", icon: <FirebaseIcon /> },
        { name: "Graph Neural Networks (GNN)", icon: <GitIcon /> },
      ],
    },
    {
      title: "Web Development (MERN)",
      items: [
        { name: "HTML5", icon: <HtmlIcon /> },
        { name: "CSS3", icon: <TypescriptIcon /> },
        { name: "REST APIs", icon: <JavascriptIcon /> },
        { name: "Tailwind", icon: <TailwindIcon /> },
        { name: "Typescript", icon: <TypescriptIcon /> },
        { name: "JWT Authentication", icon: <ReduxIcon /> },
        { name: "Backend Architecture", icon: <BootstrapIcon /> },
        { name: "Full Stack Development", icon: <ReactIcon /> },
      ],
    },
    {
      title: "Data Structures & Algorithms",
      items: [
        { name: "Arrays & Strings", icon: <GitIcon /> },
        { name: "Linked List", icon: <FirebaseIcon /> },
        { name: "Stack & Queue", icon: <FigmaIcon /> },
        { name: "Trees & BST", icon: <VercelIcon /> },
        { name: "Graphs", icon: <TailwindIcon /> },
        { name: "Dynamic Programming", icon: <BootstrapIcon /> },
        { name: "Recursion", icon: <JqueryIcon /> },
        { name: "Time & Space Complexity", icon: <ReduxIcon /> },
      ],
    },
    {
      title: "Tools & Platforms",
      items: [
        { name: "Git & GitHub", icon: <GitIcon /> },
        { name: "Postman", icon: <FirebaseIcon /> },
        { name: "VS Code", icon: <FigmaIcon /> },
        { name: "Jupyter Notebook", icon: <VercelIcon /> },
        { name: "Linux (Basic)", icon: <TailwindIcon /> },
        { name: "Vercel", icon: <VercelIcon /> },
        { name: "Netlify", icon: <ReactIcon /> },
        { name: "Render", icon: <ReduxIcon /> },
      ],
    },
    {
      title: "AI Tools & Platforms",
      items: [
        { name: "GPT", icon: <ReactIcon /> },
        { name: "Gemini", icon: <ReduxIcon /> },
        { name: "Copilot", icon: <TailwindIcon /> },
        { name: "Claude", icon: <BootstrapIcon /> },
        { name: "Perplexity", icon: <JqueryIcon /> },
        { name: "Blackbox", icon: <FigmaIcon /> },
        { name: "Replit", icon: <FirebaseIcon /> },
        { name: "Generative UI Platforms", icon: <GitIcon /> },
      ],
    },
    {
      title: "Professional Skills",
      items: [
        { name: "Problem Solving", icon: <ReactIcon /> },
        { name: "System Thinking", icon: <ReduxIcon /> },
        { name: "Debugging", icon: <TailwindIcon /> },
        { name: "Optimization", icon: <BootstrapIcon /> },
        { name: "Technical Communication", icon: <JqueryIcon /> },
        { name: "Continuous Learning", icon: <FigmaIcon /> },
      ],
    },
  ];

  const theme = useContext(ThemeContext);

  return (
    <div
      className={theme.isDarkmode ? "skillscontainerDark" : "skillscontainer"}
    >
      <div className="skillsWrapper w-full">
        <SectionHeading sectionName="Skills" />
        <div className="skillsGrid">
          {skillSections.map((section) => (
            <div
              key={section.title}
              className={`skillCard ${
                theme.isDarkmode ? "skillCardDark" : "skillCardLight"
              }`}
            >
              <span className="skillCardGlow" />
              <h3
                className={`skillTitle ${
                  theme.isDarkmode ? "text-white" : "text-slate-900"
                }`}
              >
                {section.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {section.items.map((skill) => (
                  <div
                    key={skill.name}
                    className={`skillPill ${
                      theme.isDarkmode ? "skillPillDark" : "skillPillLight"
                    }`}
                  >
                    <span className="scale-[0.8]">{skill.icon}</span>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
