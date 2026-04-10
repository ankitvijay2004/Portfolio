import { useContext } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ThemeContext } from "../App";
import Header from "../components/header/Header";
import { getProjectBySlug } from "../data/projects";
import { ExternalLinkIcon, GithubIcon } from "../assets/icons/icons";
import { motion, useIsPresent } from "framer-motion";
import { useMatchMedia } from "../hooks/useMatchMedia";

const CaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug);
  const theme = useContext(ThemeContext);
  const isPresent = useIsPresent();
  const isMobile = useMatchMedia("(max-width: 820px)");

  if (!project) {
    return <Navigate to="/works" replace />;
  }

  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main
        id="main-content"
        tabIndex={-1}
        className={`flex-1 pb-16 ${
          theme.isDarkmode ? "bg-[#061122] text-slate-200" : "bg-slate-50 text-slate-800"
        }`}
      >
        <div className="mx-auto max-w-3xl px-4 pt-28 sm:pt-32 sm:px-6">
          <Link
            to="/works"
            className={`mb-8 inline-flex text-sm font-semibold underline-offset-4 hover:underline ${
              theme.isDarkmode ? "text-cyan-400" : "text-blue-700"
            }`}
          >
            ← Back to Selected Works
          </Link>
          <h1 className="mb-4 font-['Outfit',sans-serif] text-3xl font-bold tracking-tight sm:text-4xl">
            {project.name}
          </h1>
          <p
            className={`mb-8 font-['Mulish',sans-serif] text-sm ${
              theme.isDarkmode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Case study — stack, links, and project summary.
          </p>
          <div
            className={`mb-8 overflow-hidden rounded-2xl border shadow-lg ${
              theme.isDarkmode
                ? "border-white/10 bg-slate-900/50"
                : "border-slate-200 bg-white"
            }`}
          >
            <img
              src={project.image}
              alt={project.name}
              width={1200}
              height={675}
              loading="eager"
              decoding="async"
              className="aspect-video w-full object-cover"
            />
          </div>
          <div
            className={`rounded-2xl border p-6 sm:p-8 ${
              theme.isDarkmode
                ? "border-white/10 bg-slate-900/40"
                : "border-slate-200 bg-white"
            }`}
          >
            <h2 className="mb-3 font-['Outfit',sans-serif] text-lg font-semibold">
              Overview
            </h2>
            <p className="mb-6 font-['Mulish',sans-serif] text-base leading-relaxed">
              {project.description}
            </p>
            <h2 className="mb-3 font-['Outfit',sans-serif] text-lg font-semibold">
              Tech
            </h2>
            <div className="mb-8 flex flex-wrap gap-2">
              {project.techStack.map((t) => (
                <span
                  key={t}
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    theme.isDarkmode
                      ? "bg-white/10 text-slate-200"
                      : "bg-slate-100 text-slate-800"
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition ${
                  theme.isDarkmode
                    ? "bg-cyan-500 text-slate-900 hover:bg-cyan-400"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                <ExternalLinkIcon />
                Live site
              </a>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-bold transition ${
                  theme.isDarkmode
                    ? "border-white/20 text-white hover:bg-white/10"
                    : "border-slate-300 text-slate-800 hover:bg-slate-100"
                }`}
              >
                <GithubIcon />
                Repository
              </a>
            </div>
          </div>
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

export default CaseStudy;
