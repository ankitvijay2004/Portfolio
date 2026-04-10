import { useContext } from "react";
import { ThemeContext } from "../../App";

const Footer = () => {
  const theme = useContext(ThemeContext);
  const isDark = theme.isDarkmode;
  const year = new Date().getFullYear();

  return (
    <footer
      className={`mt-auto border-t ${
        isDark
          ? "border-white/10 bg-[#061122] text-slate-400"
          : "border-slate-200 bg-slate-50 text-slate-600"
      }`}
      role="contentinfo"
    >
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div
          className={`text-center text-xs sm:text-sm ${
            isDark ? "text-slate-500" : "text-slate-500"
          }`}
        >
          <p className="font-medium">
            Built with Vite · React · TypeScript · Tailwind CSS · Framer Motion
          </p>
          <p className="mt-2">
            © {year} Ankit Vijay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
