import { person } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-zinc-300/70 bg-[#e5e7eb]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-zinc-500 sm:flex-row sm:px-6">
        <p>
          © {year} {person.name} · {person.shortTitle}
        </p>
        <p>
          <a
            href={person.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-teal-700 underline hover:text-teal-800"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </footer>
  );
}
