import { useContext } from "react";
import Contact from "../components/contact/Contact";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Education from "../components/education/Education";
import Experience from "../components/experience/Experience";
import Projects from "../components/projects/Projects";
import FreelanceSpotlight from "../components/freelance-spotlight/FreelanceSpotlight";
import Skills from "../components/skills/Skills";
import { motion, useIsPresent } from "framer-motion";
import { ThemeContext } from "../App";

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
  const isPresent = useIsPresent();
  const theme = useContext(ThemeContext);
  const isMobile = window.innerWidth <= 820;
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
        <Hero />
        <Education />
        <Experience />
        <Projects />
        <FreelanceSpotlight />
        <Skills />
        <Contact />
      </main>
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{
          scaleX: 0,
          transition: { duration: isMobile ? 0 : 0.5, ease: "circOut" },
        }}
        exit={{
          scaleX: 1,
          transition: { duration: isMobile ? 0 : 0.5, ease: "circIn" },
        }}
        style={{ originX: isPresent ? 0 : 1 }}
        className={
          theme.isDarkmode ? "route-switch-screen-dark" : "route-switch-screen"
        }
      />
    </div>
  );
};

export default Home;
