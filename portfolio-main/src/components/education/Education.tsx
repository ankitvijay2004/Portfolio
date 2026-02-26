import { useContext } from "react";
import SectionHeading from "../section-heading/SectionHeading";
import { ThemeContext } from "../../App";
import { motion } from "framer-motion";

import { ExternalLinkIcon } from "../../assets/icons/icons";

interface EducationProps {}

const educationData = [
  {
    institution: "Indian Institute of Information Technology",
    degree: "Bachelor of Engineering in Computer Science",
    duration: "August 2022 – July 2026",
    location: "Kota, Rajasthan",
    url: "https://iiitkota.ac.in/",
  },
  {
    institution: "Emmanuel Mission Sr. Sec. School",
    degree: "Class XII CBSE (Science Stream)",
    duration: "March 2021 – July 2022",
    location: "Beawar, Rajasthan",
    url: "https://www.emmanuelbeawar.com/",
  },
];

const Education: React.FunctionComponent<EducationProps> = () => {
  const theme = useContext(ThemeContext);
  return (
    <div
      className={
        theme.isDarkmode ? "educationContainerDark" : "educationContainer"
      }
    >
      <div className="educationWrapper">
        <SectionHeading sectionName="Education" />
        <div className="educationList">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className={
                theme.isDarkmode ? "educationCardDark" : "educationCard"
              }
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="eduHeader">
                <h3 className="institution">{edu.institution}</h3>
                <span className="location">{edu.location}</span>
              </div>
              <div className="eduBody">
                <p className="degree">{edu.degree}</p>
                <div className="durationWrapper">
                  <div className="durationBadge">
                    <span>{edu.duration}</span>
                  </div>
                  <a href={edu.url} target="_blank" rel="noreferrer" className="visitIconLink">
                    <ExternalLinkIcon />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
