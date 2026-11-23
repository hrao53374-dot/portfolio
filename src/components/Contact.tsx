"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { person } from "@/data/portfolio";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="border-t border-zinc-300/60 bg-[#f3f4f6]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold tracking-widest text-teal-700 uppercase">
            Contact
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Let&apos;s talk about your project
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-zinc-600">
            Got a website in mind, a tool you wish existed, or an automation that could save your team hours every week? Drop me a line below — or find me on LinkedIn.
          </p>
        </motion.div>

        {/* Simple contact form — client-side only for now.
            TODO: wire this up to the Teams / Google Form link the user
            will supply later (form action / embed). */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-10 max-w-2xl rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          {sent ? (
            <div className="py-8 text-center">
              <p className="text-3xl" aria-hidden="true">✓</p>
              <h3 className="mt-3 text-xl font-bold text-zinc-900">Thanks — message received!</h3>
              <p className="mt-2 text-zinc-600">
                Thanks for getting in touch. I&apos;ll get back to you as soon as I can.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-6 rounded-full border border-zinc-300 px-5 py-2 text-sm font-semibold text-zinc-700 transition hover:border-teal-600 hover:text-teal-700"
              >
                Send another message
              </button>
            </div>
          ) : (
            <>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-left">
                  <span className="text-sm font-semibold text-zinc-700">Your name</span>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="mt-1.5 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-800 outline-none placeholder:text-zinc-400 focus:border-teal-700 focus:ring-2 focus:ring-teal-700/20"
                  />
                </label>
                <label className="block text-left">
                  <span className="text-sm font-semibold text-zinc-700">Email</span>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="mt-1.5 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-800 outline-none placeholder:text-zinc-400 focus:border-teal-700 focus:ring-2 focus:ring-teal-700/20"
                  />
                </label>
              </div>
              <label className="mt-4 block text-left">
                <span className="text-sm font-semibold text-zinc-700">Message</span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me a bit about what you need…"
                  className="mt-1.5 w-full resize-y rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-800 outline-none placeholder:text-zinc-400 focus:border-teal-700 focus:ring-2 focus:ring-teal-700/20"
                />
              </label>
              <button
                type="submit"
                className="mt-6 w-full rounded-full bg-teal-700 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-teal-800 hover:shadow-lg sm:w-auto"
              >
                Send message
              </button>
            </>
          )}
        </motion.form>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={person.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-teal-700 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-teal-800 hover:shadow-lg"
          >
            Connect on LinkedIn ↗
          </a>
          <a
            href="#top"
            className="rounded-full border border-zinc-300 bg-white px-6 py-3 font-semibold text-zinc-700 transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Back to top ↑
          </a>
        </div>
        <p className="mt-6 text-center text-sm text-zinc-500">
          {person.name} · {person.location}
        </p>
      </div>
    </section>
  );
}
