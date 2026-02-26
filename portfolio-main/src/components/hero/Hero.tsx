import Socials from "../socials/Socials";
import { useContext } from "react";
import Particles from "@tsparticles/react";
import { ThemeContext } from "../../App";
import { RightArrowIcon } from "../../assets/icons/icons";

interface HeroProps { }

const Hero: React.FunctionComponent<HeroProps> = () => {
  const isMobile = window.innerWidth <= 820;
  const theme = useContext(ThemeContext);

  return (
    <div className="hero-container">
      <Particles
        id="tsparticles"
        options={{
          fpsLimit: 60,
          fullScreen: { enable: false },

          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              push: {
                quantity: 5,
              },
              repulse: {
                distance: 150,
                duration: 0.4,
              },
            },
          },

          particles: {
            color: {
              value: theme.isDarkmode ? "#606874" : "#a6c0ea",
            },

            links: {
              color: theme.isDarkmode ? "#606874" : "#a6c0ea",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },

            move: {
              enable: true,
              speed: 2,
              outModes: {
                default: "bounce",
              },
            },

            number: {
              density: {
                enable: true,
              },
              value: isMobile ? 50 : 100,
            },

            opacity: {
              value: 0.3,
            },

            shape: {
              type: "circle",
            },

            size: {
              value: { min: 1, max: 4 },
            },
          },

          detectRetina: !isMobile,
        }}
      />

      <div className={theme.isDarkmode ? "heroContainerDark" : "heroContainer"}>
        <div className="heroWrapper">
          <div className="leftHero">
            <p className="hello">
              Hello <span className="wave">👋</span>
            </p>

            <h2 className="name">I'm Ankit Vijay</h2>

            <p className="extraDetails">
              A passionate Software Developer dedicated to building efficient,
              scalable web solutions that simplify complex ideas into seamless,
              accessible, and engaging user experiences.
            </p>

            <div className="resumeContainer">
              <a className="resume" href="/Resume.pdf" target="_blank">
                <span>View my resumé</span>
                <span className="arrowIcon">
                  <RightArrowIcon />
                </span>
              </a>
            </div>

            <div className="socials">
              <Socials />
            </div>
          </div>

          <div className="rightHero">
            <div className="avatar">
              <img src="/ankit.jpg" alt="Ankit Vijay" draggable={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;