import { useRoutes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactMe from "./pages/ContactMe";
import Works from "./pages/Works";
import CaseStudy from "./pages/CaseStudy";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import SkipLink from "./components/skip-link/SkipLink";
import Footer from "./components/footer/Footer";
import { createContext, useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import React from "react";

type ThemeContextType = {
  isDarkmode: boolean;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  isDarkmode: true,
  toggleTheme: () => {},
});

const App: React.FC = () => {
  const [isDarkmode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    document.body.className = isDarkmode ? "dark-mode" : "light-mode";
  }, [isDarkmode]);

  const element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <ContactMe /> },
    { path: "/works/:slug", element: <CaseStudy /> },
    { path: "/works", element: <Works /> },
    { path: "*", element: <NotFound /> },
  ]);

  const location = useLocation();

  if (!element) return null;

  return (
    <ThemeContext.Provider value={{ isDarkmode, toggleTheme }}>
      <div className="flex min-h-screen flex-col">
        <SkipLink />
        <ScrollToTop />
        <div className="flex flex-1 flex-col">
          <AnimatePresence mode="wait" initial={false}>
            {React.cloneElement(element, {
              key: `${location.pathname}${location.hash}`,
            })}
          </AnimatePresence>
        </div>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;