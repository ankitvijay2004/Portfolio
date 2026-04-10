# Ankit Vijay | Software Developer — Portfolio

A responsive portfolio site built with **Vite**, **React**, **TypeScript**, and **Tailwind CSS**, with **Framer Motion** for motion and **tsParticles** for the hero background. It presents projects, experience, education, skills, and contact information with dark/light theme support and accessibility-minded patterns.

![Technologies](https://skillicons.dev/icons?i=react,ts,vite,tailwind,html,css)

## Features

- **Modern UI**: Glass-style sections, gradients, and a consistent typography scale (Outfit / Mulish).
- **Animations**: Framer Motion for route transitions, scroll reveals, and interactive UI.
- **Dark & light mode**: Theme toggle with smooth background transitions.
- **Responsive layout**: Mobile-first navigation (including an accessible mobile menu).
- **Project case studies**: Routes such as `/works/neurica`, `/works/codecast`, and `/works/learn-flow`, plus **Case study** links on project cards.
- **Freelance spotlight**: Callout with Freelancer profile and social links.
- **Performance**: Vite for dev and production builds; image `loading` / dimensions where appropriate.
- **SEO**: Meta tags, Open Graph / Twitter cards, and JSON-LD `Person` schema in `index.html`.
- **Accessibility**: Skip link to `#main-content`, semantic `<main>` landmarks, and reduced-motion handling in several animated sections.

## Deep links & accessibility

### Case study routes

- **`/works/neurica`**, **`/works/codecast`**, **`/works/learn-flow`** — Dedicated pages per project (overview, image, tech stack, live + repo links, back to **Selected Works**).
- Also opened from each project card via **Case study** (beside GitHub and external-link actions).

### Skip link

- After load, press **Tab** once to focus **“Skip to main content”** (visible on focus). It targets **`#main-content`**.

### Hash: Selected Projects

- The home projects section uses **`id="selected-projects"`**. Opening **`/#selected-projects`** scrolls to that block (see `ScrollToTop.tsx`).

## Tech stack

| Area        | Choice                          |
|------------|----------------------------------|
| Framework  | React 18+ / TypeScript          |
| Styling    | Tailwind CSS                    |
| Motion     | Framer Motion                   |
| Particles  | @tsparticles/react + tsparticles |
| Routing    | React Router                    |
| Build      | Vite                            |

## Getting started

### Prerequisites

- **Node.js** 18+ recommended  
- **npm** (or pnpm / yarn)

### Commands

From this project directory (`portfolio-main`):

```bash
npm install
npm run dev
```

- Dev server: [http://localhost:5173](http://localhost:5173) (default Vite port).

```bash
npm run build    # production build → dist/
npm run preview  # optional: preview the production build locally
```

To clone from your own remote, replace the URL:

```bash
git clone <your-repository-url>
cd <your-project-folder>
npm install
npm run dev
```

## Project structure (overview)

```text
src/
├── App.tsx                 # Theme context, routes, skip link, footer shell
├── data/
│   └── projects.ts         # Shared project list + slugs for /works/:slug
├── components/
│   ├── hero/               # Particles + intro
│   ├── header/             # Nav + theme
│   ├── footer/             # Stack line + copyright
│   ├── skip-link/
│   ├── page-hero/          # Inner page heroes
│   ├── projects/           # Project grid
│   ├── experience/
│   ├── education/
│   ├── skills/
│   ├── contact/
│   ├── freelance-spotlight/
│   └── ...
├── hooks/                  # e.g. useMatchMedia
├── pages/                  # Home, About, Works, Contact, CaseStudy, NotFound
└── main.tsx
```

Public assets (e.g. images, `Resume.pdf`, `logo.svg`) live under **`public/`**.

## Deployment

The repo includes **`vercel.json`** with SPA-style rewrites so client-side routes work on hosts like Vercel. Point the build output to **`dist`** and install command **`npm install`**, build **`npm run build`**.

## Contact (portfolio owner)

- **Email**: [ankitvijay100@gmail.com](mailto:ankitvijay100@gmail.com)  
- **GitHub**: [@ankitvijay2004](https://github.com/ankitvijay2004)  
- **LinkedIn**: [Ankit Kumar Vijay](http://www.linkedin.com/in/ankit-kumar-vijay-276924285)

---

Portfolio of **Ankit Vijay**.
