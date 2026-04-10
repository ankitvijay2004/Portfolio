import Socials from "../socials/Socials";
import { useContext, useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";
import { ThemeContext } from "../../App";
import { RightArrowIcon } from "../../assets/icons/icons";
import { useReducedMotion } from "framer-motion";
import { useMatchMedia } from "../../hooks/useMatchMedia";

interface HeroProps { }

const Hero: React.FunctionComponent<HeroProps> = () => {
  const isCompact = useMatchMedia("(max-width: 820px)");
  const prefersReducedMotion = useReducedMotion();
  const theme = useContext(ThemeContext);
  const [particlesReady, setParticlesReady] = useState(false);

  useEffect(() => {
    void initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setParticlesReady(true);
    });
  }, []);

  const particleOptions = useMemo<ISourceOptions>(
    () => ({
      fpsLimit: prefersReducedMotion ? 30 : 60,
      fullScreen: { enable: false },

      interactivity: {
        events: {
          onClick: {
            enable: !prefersReducedMotion,
            mode: "push" as const,
          },
          onHover: {
            enable: !prefersReducedMotion,
            mode: "repulse" as const,
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
          opacity: prefersReducedMotion ? 0.35 : 0.5,
          width: 1,
        },

        move: {
          enable: !prefersReducedMotion,
          speed: prefersReducedMotion ? 0 : 2,
          outModes: {
            default: "bounce" as const,
          },
        },

        number: {
          density: {
            enable: true,
          },
          value: prefersReducedMotion ? 28 : isCompact ? 50 : 100,
        },

        opacity: {
          value: 0.3,
        },

        shape: {
          type: "circle" as const,
        },

        size: {
          value: { min: 1, max: 4 },
        },
      },

      detectRetina: !isCompact,
    }),
    [isCompact, prefersReducedMotion, theme.isDarkmode]
  );

  return (
    <div className="hero-container">
      {particlesReady ? (
        <Particles id="tsparticles" options={particleOptions} />
      ) : null}

      <div className={theme.isDarkmode ? "heroContainerDark" : "heroContainer"}>
        <div className="heroWrapper">
          <div className="leftHero">
            <p className="hello">
              Hello <span className="wave">👋</span>
            </p>

            <h1 className="name">I'm Ankit Vijay</h1>

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
              <img
                src="/ankit.jpg"
                alt="Ankit Vijay"
                width={760}
                height={1000}
                decoding="async"
                fetchPriority="high"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;