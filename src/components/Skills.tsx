"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <p className="text-sm font-semibold tracking-widest text-orange-400 uppercase">
        Tools &amp; Skills
      </p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
        My toolkit
      </h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-8 flex flex-wrap gap-2.5"
      >
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-200 transition hover:border-orange-500/50 hover:text-white"
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
