"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl bg-[#e5e7eb] px-4 py-16 sm:px-6 sm:py-20">
      <p className="text-sm font-semibold tracking-widest text-teal-700 uppercase">
        Projects
      </p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
        A few things I&apos;ve worked on
      </h2>
      <p className="mt-3 max-w-2xl text-zinc-600">
        Real work from HashTurn and client projects — websites, tools, and automations built around what a business actually needs.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
            className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:border-teal-600/50 hover:shadow-xl"
          >
            <span className="text-xs font-semibold tracking-wide text-teal-700 uppercase">
              {project.highlight}
            </span>
            <h3 className="mt-3 text-lg font-bold leading-snug text-zinc-900">{project.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs text-zinc-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
