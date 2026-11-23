"use client";

import { useState } from "react";
import { navLinks, person } from "@/data/portfolio";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-300/70 bg-[#e5e7eb]/85 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6"
        aria-label="Main navigation"
      >
        <a href="#top" className="text-lg font-bold tracking-tight text-zinc-900">
          <span className="text-teal-700">H</span>assaan
          <span className="ml-2 hidden text-sm font-normal text-zinc-500 sm:inline">
            / Portfolio
          </span>
        </a>

        <ul className="hidden items-center gap-6 text-sm text-zinc-600 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition hover:text-teal-700">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={person.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-teal-700 px-4 py-2 font-semibold text-white transition hover:bg-teal-800"
            >
              LinkedIn
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-700 md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <div className="border-t border-zinc-200 bg-[#e5e7eb] px-4 pb-4 pt-2 md:hidden">
          <ul className="space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-2 text-zinc-700 hover:bg-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={person.linkedin}
                target="_blank"
                rel="noreferrer"
                className="block rounded-full bg-teal-700 px-4 py-2 text-center font-semibold text-white"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
