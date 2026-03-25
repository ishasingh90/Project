import Link from "next/link";
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 py-10">
      <div className="section-shell flex flex-col items-center justify-between gap-5 text-sm text-zinc-400 md:flex-row">
        <p>© {new Date().getFullYear()} Radhika Agency. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="flex gap-3 text-lg">
          {[FiInstagram, FiLinkedin, FiTwitter, FiGithub].map((Icon, idx) => (
            <a key={idx} href="#" className="glass rounded-full p-2 hover:text-accent-300">
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
