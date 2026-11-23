import type { Metadata } from "next";
import "./globals.css";
import { person } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `${person.name} — ${person.title}`,
  description: person.about,
  openGraph: {
    title: `${person.name} — ${person.title}`,
    description: person.tagline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#07070c] text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  );
}
