"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_LINKS, OWNER } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(11,14,12,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(61,214,140,0.1)" : "1px solid transparent",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-[family-name:var(--font-syne)] font-bold text-white text-base tracking-tight group-hover:text-[#3dd68c] transition-colors duration-200">
            bg<span className="text-[#3dd68c]">.</span>dev
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-[family-name:var(--font-jetbrains)] text-white/45 hover:text-[#3dd68c] transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href={OWNER.github}
          target="_blank"
          rel="noopener noreferrer"
          className="font-[family-name:var(--font-jetbrains)] text-xs px-4 py-2 border border-[rgba(61,214,140,0.45)] text-[#3dd68c] hover:bg-[#3dd68c] hover:text-[#0b0e0c] transition-all duration-200 tracking-widest"
        >
          GitHub →
        </Link>
      </div>
    </nav>
  );
}
