"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <p className="text-sm font-semibold tracking-widest text-orange-400 uppercase">
        Projects
      </p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
        Selected work
      </h2>
      <p className="mt-3 max-w-2xl text-zinc-400">
        Real work from HashTurn and client projects — websites, tools and
        automation built around what a business actually needs.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
            className="flex flex-col rounded-2xl border border-white/10 bg-[#0d0d16] p-6 transition hover:-translate-y-1 hover:border-orange-500/50"
          >
            <span className="text-xs font-semibold tracking-wide text-orange-300 uppercase">
              {project.highlight}
            </span>
            <h3 className="mt-3 text-lg font-bold leading-snug">{project.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-zinc-300"
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
