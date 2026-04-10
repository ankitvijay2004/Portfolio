import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const id = hash ? hash.replace(/^#/, "") : "";
    if (id) {
      const prefersReduced =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: prefersReduced ? "auto" : "smooth",
          block: "start",
        });
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
