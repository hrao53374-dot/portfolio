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
    "I build WordPress websites, custom web tools, and AI workflows that save businesses time — not just pages that look good.",
  about:
    "Hassaan builds websites, web applications, and automation workflows for startups and small businesses. His work combines WordPress development with custom tools and integrations that reduce repetitive administration. He focuses on REST API integrations, performance optimization, and practical business automation — so a website does real work, not just sit online.",
};

export const services = [
  {
    title: "WordPress & Business Websites",
    description:
      "Professional business websites, landing pages and custom WordPress builds for startups and small businesses — fast, responsive and easy to manage.",
    icon: "🌐",
    tags: ["WordPress", "Business Websites", "Landing Pages"],
  },
  {
    title: "Responsive Elementor & E-Commerce",
    description:
      "Responsive Elementor designs and e-commerce interfaces that look great and convert on phone, tablet and desktop.",
    icon: "🛒",
    tags: ["Elementor Pro", "E-Commerce", "Responsive Design"],
  },
  {
    title: "Custom Plugins & Web Tools",
    description:
      "Custom plugins, pricing calculators, search filters and membership features — the specific tools a business needs, built into WordPress.",
    icon: "🧩",
    tags: ["Custom Plugins", "Pricing Calculators", "Membership"],
  },
  {
    title: "AI Agents & Workflow Automation",
    description:
      "AI agents and workflow automation for follow-ups, reporting and CRM updates — cutting repetitive admin so teams can focus on customers.",
    icon: "🤖",
    tags: ["AI Agents", "Workflow Automation", "CRM Updates"],
  },
  {
    title: "API Integrations & Performance",
    description:
      "REST API integrations and website performance optimization — connecting WordPress to external tools and making sites load fast.",
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
      "Built websites and automation workflows for education, e-commerce, and service businesses.",
      "Developed the HowToSelfHost resource and integrated WordPress with external tools.",
      "Optimized website performance and built custom plugins.",
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
      "A self-hosting resource built at HashTurn — practical guides and tooling to help people run their own services, with WordPress integration and performance-focused delivery.",
    tags: ["WordPress", "Web Resource", "Performance"],
    highlight: "Built at HashTurn",
  },
  {
    title: "Business Websites for Startups",
    description:
      "Professional business websites for startups and small businesses — custom WordPress builds with clear structure, SEO basics and fast loading.",
    tags: ["WordPress", "Business Websites", "SEO"],
    highlight: "Startups & small business",
  },
  {
    title: "E-Commerce Interfaces",
    description:
      "Responsive e-commerce interfaces with Elementor — product pages, checkout flows and store layouts designed to work smoothly on mobile.",
    tags: ["Elementor Pro", "E-Commerce", "Responsive"],
    highlight: "Mobile-first",
  },
  {
    title: "Custom Plugins & Calculators",
    description:
      "Custom WordPress plugins including pricing calculators, search filters and membership features — tailored tools, not off-the-shelf compromises.",
    tags: ["PHP", "Custom Plugins", "JavaScript"],
    highlight: "Custom tools",
  },
  {
    title: "AI Workflow Automation",
    description:
      "AI agents and automated workflows for follow-ups, reporting and CRM updates, with REST API integrations connecting websites to the tools businesses already use.",
    tags: ["AI Agents", "REST APIs", "Automation"],
    highlight: "Automation",
  },
  {
    title: "Performance & Speed Optimization",
    description:
      "Website performance optimization — faster load times, cleaner delivery and better experience for visitors and search engines alike.",
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
