// Single source of truth for all portfolio content.
// Edit this file to update the site — no other file needs to change
// for name, role, services, skills, experience or projects.
// All facts below are from Hassaan Sikandar's LinkedIn:
// https://www.linkedin.com/in/hassaan-sikandar

export const person = {
  name: "Hassaan Sikandar",
  fullName: "M. Hassaan Sikandar",
  title: "WordPress Developer & AI Workflow Automation Specialist",
  shortTitle: "WordPress Developer & Automation Specialist",
  location: "Multan, Punjab, Pakistan",
  linkedin: "https://www.linkedin.com/in/hassaan-sikandar",
  tagline:
    "Hi, I'm Hassaan — I build WordPress websites and smart little workflows that quietly take the boring, repetitive work off your plate.",
  about:
    "I'm a WordPress developer based in Multan, and I like building things that actually help a business day to day. That usually means a fast, easy-to-manage website, a custom tool that does one job really well, or an automation that handles the follow-ups and admin nobody enjoys. I've been doing this since 2022, mostly for startups and small businesses, and I care a lot more about whether something works for you than whether it just looks good.",
};

export const services = [
  {
    title: "WordPress & Business Websites",
    description:
      "A proper website for your business — clear, fast, and easy for you to update yourself. No jargon, no fuss, just a site that does its job.",
    icon: "🌐",
    tags: ["WordPress", "Business Websites", "Landing Pages"],
  },
  {
    title: "Responsive Elementor & E-Commerce",
    description:
      "Online shops and pages that feel just as good on a phone as they do on a laptop — and make it easy for customers to actually buy.",
    icon: "🛒",
    tags: ["Elementor Pro", "E-Commerce", "Responsive Design"],
  },
  {
    title: "Custom Plugins & Web Tools",
    description:
      "Need something specific, like a pricing calculator, a search filter, or a members area? I'll build it into WordPress so it fits the way you work.",
    icon: "🧩",
    tags: ["Custom Plugins", "Pricing Calculators", "Membership"],
  },
  {
    title: "AI Agents & Workflow Automation",
    description:
      "Little AI helpers and automations that handle follow-ups, reports, and CRM updates in the background — so your team can get on with real work.",
    icon: "🤖",
    tags: ["AI Agents", "Workflow Automation", "CRM Updates"],
  },
  {
    title: "API Integrations & Performance",
    description:
      "Connecting WordPress to the tools you already use, and making your site load properly fast. If it feels slow, we'll fix that.",
    icon: "⚡",
    tags: ["REST APIs", "Speed Optimization", "Integrations"],
  },
];

export const skills = [
  "WordPress",
  "Elementor Pro",
  "PHP",
  "MySQL",
  "JavaScript",
  "REST APIs",
  "SEO",
  "Git",
  "AI Agents",
  "Workflow Automation",
  "E-Commerce Development",
  "Website Customization",
  "Speed Optimization",
  "Bug Fixes",
  "APIs & Integrations",
  "Automations & Agents",
];

export const experience = [
  {
    role: "WordPress Developer & Automation Specialist",
    company: "HashTurn",
    period: "August 2022 — Present",
    location: "Multan, Punjab, Pakistan",
    points: [
      "Built websites and automations for education, e-commerce, and service businesses — the kind of sites that need to work every day, not just launch day.",
      "Put together HowToSelfHost, and hooked WordPress up to the outside tools clients were already using.",
      "Made sites faster and built custom plugins when the off-the-shelf options didn't quite fit.",
    ],
  },
];

export const education = {
  school: "Bahauddin Zakariya University",
  degree: "Bachelor of Information Technology",
  period: "September 2022 — September 2026 (in progress)",
};

export const projects = [
  {
    title: "HowToSelfHost",
    description:
      "A hands-on guide to running your own services, built at HashTurn. Practical, plain-language help with WordPress behind it and speed kept front of mind.",
    tags: ["WordPress", "Web Resource", "Performance"],
    highlight: "Built at HashTurn",
  },
  {
    title: "Business Websites for Startups",
    description:
      "Websites for startups and small businesses that say what you do, clearly, and load quickly. Custom WordPress builds with the SEO basics covered.",
    tags: ["WordPress", "Business Websites", "SEO"],
    highlight: "Startups & small business",
  },
  {
    title: "E-Commerce Interfaces",
    description:
      "Shop pages and checkouts built with Elementor that work smoothly on mobile — because that's where most customers actually are.",
    tags: ["Elementor Pro", "E-Commerce", "Responsive"],
    highlight: "Mobile-first",
  },
  {
    title: "Custom Plugins & Calculators",
    description:
      "Plugins built for one job — pricing calculators, search filters, membership features. Tailored to the business, not squeezed into something generic.",
    tags: ["PHP", "Custom Plugins", "JavaScript"],
    highlight: "Custom tools",
  },
  {
    title: "AI Workflow Automation",
    description:
      "AI agents and workflows that look after follow-ups, reporting, and CRM updates, linked up with the tools a business already relies on.",
    tags: ["AI Agents", "REST APIs", "Automation"],
    highlight: "Automation",
  },
  {
    title: "Performance & Speed Optimization",
    description:
      "Making slow sites fast again — quicker loading, cleaner delivery, and a better experience for visitors and for search engines.",
    tags: ["Speed Optimization", "SEO", "WordPress"],
    highlight: "Performance",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
