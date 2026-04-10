import { motion, useInView, Variants, useReducedMotion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  duration?: number;
  staggerValue?: number;
  /** Use h1 for page-level titles (one per route). */
  as?: "p" | "h1";
}

const AnimatedText: React.FunctionComponent<AnimatedTextProps> = ({
  text,
  className,
  once,
  duration,
  staggerValue,
  as = "p",
}) => {
  const defaultAnimations: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration || 0.06,
      },
    },
  };
  const ref = useRef<HTMLHeadingElement | HTMLParagraphElement | null>(null);
  const isInView = useInView(ref, { amount: 0.5, once: once });
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 500px)");
    const sync = () => setIsMobile(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  if (prefersReducedMotion) {
    if (as === "h1") {
      return (
        <h1 ref={ref as React.RefObject<HTMLHeadingElement>} className={className}>
          {text}
        </h1>
      );
    }
    return (
      <p ref={ref as React.RefObject<HTMLParagraphElement>} className={className}>
        {text}
      </p>
    );
  }

  const MotionTag = as === "h1" ? motion.h1 : motion.p;

  return (
    <MotionTag
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        staggerChildren: isMobile && staggerValue ? staggerValue : 0.06,
      }}
      className={className}
    >
      {text.split(" ").map((word, index) => (
        <span key={index} style={{ display: "inline-block" }}>
          {word.split("").map((letter, idx) => (
            <motion.span
              style={{ display: "inline-block" }}
              variants={defaultAnimations}
              key={idx}
            >
              {letter}
            </motion.span>
          ))}
          <span style={{ display: "inline-block" }}>&nbsp;</span>
        </span>
      ))}
    </MotionTag>
  );
};

export default AnimatedText;
