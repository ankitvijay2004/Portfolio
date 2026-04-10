import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../App";
import Header from "../components/header/Header";
import { motion, useIsPresent } from "framer-motion";
import { useMatchMedia } from "../hooks/useMatchMedia";

const NotFound = () => {
  const theme = useContext(ThemeContext);
  const isPresent = useIsPresent();
  const isMobile = useMatchMedia("(max-width: 820px)");

  const btnBase =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2";

  return (
    <div
      className={`flex min-h-screen flex-col ${theme.isDarkmode ? "bg-slate-900 text-white" : "bg-gray-50 text-slate-900"}`}
    >
      <Header />
      <main
        id="main-content"
        tabIndex={-1}
        className="flex flex-1 flex-col items-center justify-center p-4 pt-24 text-center outline-none"
      >
        <h1 className="mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-8xl font-bold text-transparent sm:text-9xl">
          404
        </h1>
        <h2 className="mb-6 text-2xl font-semibold md:text-3xl">
          Page Not Found
        </h2>
        <p
          className={`mb-10 max-w-md ${theme.isDarkmode ? "text-slate-400" : "text-slate-600"}`}
        >
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
          <Link
            to="/"
            className={`${btnBase} ${
              theme.isDarkmode
                ? "bg-white text-black hover:bg-gray-200 ring-offset-slate-900"
                : "bg-black text-white hover:bg-gray-800 ring-offset-gray-50"
            }`}
          >
            Back to Home
          </Link>
          <Link
            to="/works"
            className={`${btnBase} border ${
              theme.isDarkmode
                ? "border-white/30 text-white hover:bg-white/10 ring-offset-slate-900"
                : "border-slate-300 text-slate-900 hover:bg-slate-200 ring-offset-gray-50"
            }`}
          >
            Selected Works
          </Link>
          <Link
            to="/contact"
            className={`${btnBase} border ${
              theme.isDarkmode
                ? "border-cyan-400/50 text-cyan-100 hover:bg-cyan-500/10 ring-offset-slate-900"
                : "border-blue-500 text-blue-800 hover:bg-blue-50 ring-offset-gray-50"
            }`}
          >
            Contact me
          </Link>
        </div>
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

export default NotFound;
