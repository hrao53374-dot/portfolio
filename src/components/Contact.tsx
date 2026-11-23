"use client";

import { motion } from "framer-motion";
import { person } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-white/5 bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold tracking-widest text-orange-400 uppercase">
            Contact
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s build something useful
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-zinc-400">
            Need a business website, a custom WordPress tool, or an automation
            that saves your team hours every week? Reach out on LinkedIn.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={person.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
            >
              Connect on LinkedIn ↗
            </a>
            <a
              href="#top"
              className="rounded-full border border-white/20 px-6 py-3 font-semibold text-zinc-200 transition hover:bg-white/5"
            >
              Back to top ↑
            </a>
          </div>
          <p className="mt-6 text-sm text-zinc-500">
            {person.name} · {person.location}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
