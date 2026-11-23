"use client";

import { motion } from "framer-motion";
import { education, person } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl bg-[#e5e7eb] px-4 py-16 sm:px-6 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm font-semibold tracking-widest text-teal-700 uppercase">
          About
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          Websites that do real work
        </h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-zinc-600">{person.about}</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:border-teal-600/40 hover:shadow-xl">
            <p className="text-3xl font-bold text-teal-700">4+ yrs</p>
            <p className="mt-1 text-sm text-zinc-500">
              Building websites &amp; automation since August 2022
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:border-teal-600/40 hover:shadow-xl">
            <p className="text-3xl font-bold text-teal-700">HashTurn</p>
            <p className="mt-1 text-sm text-zinc-500">
              WordPress Developer &amp; Automation Specialist
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:border-teal-600/40 hover:shadow-xl">
            <p className="text-3xl font-bold text-teal-700">{education.school}</p>
            <p className="mt-1 text-sm text-zinc-500">
              {education.degree} · {education.period}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
