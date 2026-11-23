"use client";

import { motion } from "framer-motion";
import { education, person } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm font-semibold tracking-widest text-orange-400 uppercase">
          About
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Websites that do real work
        </h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-zinc-300">{person.about}</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-3xl font-bold text-orange-400">4+ yrs</p>
            <p className="mt-1 text-sm text-zinc-400">
              Building websites &amp; automation since August 2022
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-3xl font-bold text-orange-400">HashTurn</p>
            <p className="mt-1 text-sm text-zinc-400">
              WordPress Developer &amp; Automation Specialist
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-3xl font-bold text-orange-400">{education.school}</p>
            <p className="mt-1 text-sm text-zinc-400">
              {education.degree} · {education.period}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
