"use client";

import { motion } from "framer-motion";
import { services } from "@/data/portfolio";

export default function Services() {
  return (
    <section id="services" className="border-y border-zinc-300/60 bg-[#f3f4f6]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-sm font-semibold tracking-widest text-teal-700 uppercase">
          Services
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          What I can help with
        </h2>
        <p className="mt-3 max-w-2xl text-zinc-600">
          Straightforward help for startups and small businesses — from your first business website to AI workflows that run quietly in the background.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:border-teal-600/50 hover:shadow-xl"
            >
              <div className="text-3xl" aria-hidden="true">
                {service.icon}
              </div>
              <h3 className="mt-4 text-lg font-bold leading-snug text-zinc-900">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                {service.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
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
      </div>
    </section>
  );
}
