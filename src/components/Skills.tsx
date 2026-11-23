"use client";

import { skills } from "@/data/portfolio";

export default function Skills() {
  // Duplicated list for a seamless looping marquee.
  const marqueeSkills = [...skills, ...skills];

  return (
    <section id="skills" className="bg-[#e5e7eb] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-sm font-semibold tracking-widest text-teal-700 uppercase">
          Tools &amp; Skills
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          My toolkit
        </h2>
        <p className="mt-3 max-w-2xl text-zinc-600">
          The tools I reach for most — hover over the banner to pause it.
        </p>
      </div>

      {/* Continuously looping marquee banner — skills scroll left to right */}
      <div className="marquee mt-10 overflow-hidden border-y border-zinc-300/70 bg-white py-4 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="animate-marquee flex w-max gap-3 pr-3">
          {marqueeSkills.map((skill, i) => (
            <span
              key={`${skill}-${i}`}
              aria-hidden={i >= skills.length}
              className="shrink-0 rounded-full border border-teal-700/20 bg-teal-50 px-5 py-2.5 text-sm font-medium whitespace-nowrap text-teal-900 transition duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-teal-700 hover:text-white hover:shadow-lg"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
