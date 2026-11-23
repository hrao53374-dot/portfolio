"use client";

import { motion } from "framer-motion";
import { education, experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="border-y border-zinc-300/60 bg-[#f3f4f6]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-sm font-semibold tracking-widest text-teal-700 uppercase">
          Experience
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
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
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:scale-[1.01] hover:border-teal-600/40 hover:shadow-xl sm:p-8"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-bold text-zinc-900">{job.role}</h3>
                <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-800">
                  {job.period}
                </span>
              </div>
              <p className="mt-1 font-medium text-zinc-700">
                {job.company} · {job.location}
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-600 sm:text-base">
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
            className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:scale-[1.01] hover:border-teal-600/40 hover:shadow-xl sm:p-8"
          >
            <p className="text-sm font-semibold tracking-widest text-teal-700 uppercase">
              Education
            </p>
            <h3 className="mt-2 text-xl font-bold text-zinc-900">{education.degree}</h3>
            <p className="mt-1 text-zinc-600">
              {education.school} · {education.period}
            </p>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
