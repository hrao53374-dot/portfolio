# Hassaan Sikandar — Portfolio

Interactive, responsive portfolio for **Hassaan Sikandar** — WordPress
Developer & AI Workflow Automation Specialist, Multan, Punjab, Pakistan.

- LinkedIn: https://www.linkedin.com/in/hassaan-sikandar
- Current role: WordPress Developer & Automation Specialist at HashTurn
  (August 2022 — Present)
- Education: Riphah International University, Bachelor of Information
  Technology (September 2022 — September 2026)

## Stack

- **Next.js 15** (App Router, TypeScript)
- **Three.js** with **React Three Fiber** + **@react-three/drei** — interactive,
  mouse-reactive 3D hero (torus knot, particles, floating shapes; no heavy
  external 3D models)
- **Tailwind CSS v4** for styling
- **Framer Motion** for smooth scroll / entrance animations
- **GSAP** is included in `package.json` for scroll-driven animation work

Fully responsive (mobile-first): phone, tablet and desktop. Accessible
(semantic headings, aria labels, reduced-motion support).

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm start
```

## Edit content

All personal content lives in one file — no other file needs to change
for copy updates:

```
src/data/portfolio.ts
```

Name, title, about, services, skills, experience, education and projects
are all there. The LinkedIn URL is in the same file.

## Deploy to Vercel

1. Push this repo to GitHub (see below).
2. Import it in Vercel — no environment variables are needed.
3. Deploy. Vercel detects Next.js automatically.

## Push to GitHub

The intended repo is **`portfolio`** under **`hrao53374-dot`**:

https://github.com/hrao53374-dot/portfolio

Once that repo exists on GitHub (create it on github.com, public, with a
README — the GitHub App used by Muse could not create it directly, it
returned `403 Resource not accessible by integration`):

```bash
cd portfolio
git init
git add .
git commit -m "Portfolio: Next.js + Three.js + Tailwind CSS"
git branch -M main
git remote add origin https://github.com/hrao53374-dot/portfolio.git
git push -u origin main
```

If the repo was already created empty with a README, pull first
(`git pull origin main --allow-unrelated-histories`) or clone it and
copy these files in, then push.

## Structure

```
app/
  layout.tsx      # metadata, fonts, global CSS
  page.tsx        # assembles all sections
  globals.css     # Tailwind v4 import + base styles
src/
  data/portfolio.ts        # all editable content
  components/
    Navbar.tsx    Hero.tsx        # Hero includes the Three.js canvas
    About.tsx     Services.tsx    Skills.tsx
    Experience.tsx Projects.tsx   Contact.tsx
    Footer.tsx
public/           # static assets (add images / favicon here)
```
