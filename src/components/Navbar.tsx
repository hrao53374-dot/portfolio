"use client";

import { useState } from "react";
import { navLinks, person } from "@/data/portfolio";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#07070c]/80 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6"
        aria-label="Main navigation"
      >
        <a href="#top" className="text-lg font-bold tracking-tight">
          <span className="text-orange-500">H</span>assaan
          <span className="ml-2 hidden text-sm font-normal text-zinc-400 sm:inline">
            / Portfolio
          </span>
        </a>

        <ul className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={person.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-orange-500 px-4 py-2 font-semibold text-white transition hover:bg-orange-600"
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
          className="rounded-lg border border-white/15 px-3 py-2 text-sm md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 px-4 pb-4 pt-2 md:hidden">
          <ul className="space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-2 text-zinc-200 hover:bg-white/5"
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
                className="block rounded-full bg-orange-500 px-4 py-2 text-center font-semibold text-white"
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
