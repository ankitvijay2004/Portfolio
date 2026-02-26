import { useContext } from "react";
import { ThemeContext } from "../../App";
import { motion } from "framer-motion";
import React from "react";

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: React.ReactNode;
  index: number;
}

const ContactCard: React.FunctionComponent<ContactCardProps> = ({
  icon,
  title,
  description,
  details,
  index,
}) => {
  const theme = useContext(ThemeContext);
  const isDark = theme.isDarkmode;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10 }}
      className={`relative group rounded-3xl p-[1px] ${
        isDark
          ? "bg-gradient-to-br from-blue-500/30 via-purple-500/10 to-transparent"
          : "bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-transparent"
      }`}
    >
      <div
        className={`
        relative h-full w-full rounded-3xl p-8 flex flex-col items-center text-center gap-6
        backdrop-blur-md transition-all duration-300 border
        ${
          isDark
            ? "bg-slate-900/60 border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-900/80 hover:shadow-2xl hover:shadow-blue-500/10"
            : "bg-white/80 border-white/50 hover:border-blue-200 hover:bg-white/90 hover:shadow-2xl hover:shadow-blue-200/50"
        }
      `}
      >
        <div
          className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-24 h-24 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity ${
            isDark ? "bg-blue-400" : "bg-blue-500"
          }`}
        />

        <div
          className={`
          relative p-5 rounded-2xl transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3
          ${
            isDark
              ? "bg-slate-800/80 ring-1 ring-white/10"
              : "bg-white shadow-lg shadow-blue-100 ring-1 ring-blue-50"
          }
        `}
        >
          <div className="w-10 h-10 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full">
            {icon}
          </div>
        </div>

        <div className="space-y-2 z-10">
          <h3
            className={`text-xl font-bold transition-colors ${
              isDark ? "text-slate-100" : "text-slate-800"
            }`}
          >
            {title}
          </h3>

          <p className={`text-sm ${isDark ? "text-slate-400" : "text-slate-500"}`}>
            {description}
          </p>
        </div>

        <div
          className={`
          mt-auto z-10 py-2.5 px-6 rounded-xl font-medium text-sm transition-all duration-300 w-full
          ${
            isDark
              ? "bg-white/5 hover:bg-white/10 text-slate-200 ring-1 ring-white/10"
              : "bg-blue-50 hover:bg-blue-100 text-blue-700 ring-1 ring-blue-100"
          }
        `}
        >
          {details}
        </div>
      </div>
    </motion.div>
  );
};

export default ContactCard;