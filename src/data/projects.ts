export type PortfolioProject = {
  slug: string;
  name: string;
  description: string;
  image: string;
  liveUrl: string;
  repoUrl: string;
  techStack: string[];
};

export const PROJECTS: PortfolioProject[] = [
  {
    slug: "neurica",
    name: "Neurica",
    description:
      "A comprehensive full-stack medical appointment management system built with the MERN stack (MongoDB, Express.js, React, Node.js). Neurica enables patients to book appointments with doctors, while providing separate dashboards for administrators and doctors to manage appointments, profiles, and more.",
    image: "/neurica.png",
    liveUrl: "https://neurica-tg7w.vercel.app/",
    repoUrl: "https://github.com/ankitvijay2004/Neurica",
    techStack: ["MERN Stack", "JavaScript"],
  },
  {
    slug: "codecast",
    name: "CodeCast",
    description:
      "CodeCast is a real-time code collaboration web application that allows multiple users to collaborate on code in the same virtual room. It's built using the MERN (MongoDB, Express.js, React, Node.js) stack and Socket.IO for real-time communication.",
    image: "/code-cast.png",
    liveUrl: "https://code-cast-16qa.vercel.app/",
    repoUrl: "https://github.com/ankitvijay2004/code-cast",
    techStack: ["MERN Stack", "JavaScript"],
  },
  {
    slug: "learn-flow",
    name: "Learn Flow",
    description:
      "Learn Flow is an interactive web application designed to facilitate learning through a structured flow of educational content. It provides users with a seamless experience to access and engage with various learning materials, including articles, videos, and quizzes, all organized in a user-friendly interface.",
    image: "/learnflow.png",
    liveUrl: "https://lern-flow.vercel.app/",
    repoUrl: "https://github.com/ankitvijay2004/LernFlow",
    techStack: ["Next.js", "JavaScript"],
  },
];

export function getProjectBySlug(slug: string | undefined) {
  if (!slug) return undefined;
  return PROJECTS.find((p) => p.slug === slug);
}
