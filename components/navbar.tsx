"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";
import { navLinks } from "@/data/site-data";

export function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/25 backdrop-blur-xl">
      <nav className="section-shell flex h-16 items-center justify-between">
        <Link href="/" className="font-serif text-2xl tracking-wide text-white dark:text-white">
          Radhika
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition ${pathname === link.href ? "text-accent-300" : "text-zinc-300 hover:text-white"}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          aria-label="Toggle theme"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="glass rounded-full p-2 text-zinc-100 transition hover:shadow-glow"
        >
          {theme === "dark" ? <FiSun /> : <FiMoon />}
        </button>
      </nav>
    </header>
  );
}
