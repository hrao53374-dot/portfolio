"use client";

import { motion } from "framer-motion";
import { education, experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="border-y border-white/5 bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-sm font-semibold tracking-widest text-orange-400 uppercase">
          Experience
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Where I work
        </h2>

        <div className="mt-10 space-y-6">
          {experience.map((job) => (
            <motion.article
              key={job.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-[#0d0d16] p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-bold">{job.role}</h3>
                <span className="rounded-full bg-orange-500/15 px-3 py-1 text-xs font-semibold text-orange-300">
                  {job.period}
                </span>
              </div>
              <p className="mt-1 font-medium text-zinc-300">
                {job.company} · {job.location}
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-400 sm:text-base">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </motion.article>
          ))}

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-[#0d0d16] p-6 sm:p-8"
          >
            <p className="text-sm font-semibold tracking-widest text-orange-400 uppercase">
              Education
            </p>
            <h3 className="mt-2 text-xl font-bold">{education.degree}</h3>
            <p className="mt-1 text-zinc-300">
              {education.school} · {education.period}
            </p>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
