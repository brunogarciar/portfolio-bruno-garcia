import Link from "next/link";
import { OWNER } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06]" style={{ background: "#090c0a" }}>
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-[family-name:var(--font-syne)] font-bold text-white text-base tracking-tight">
          bg<span className="text-[#3dd68c]">.</span>dev
        </span>
        <p className="font-[family-name:var(--font-jetbrains)] text-xs text-white/20 tracking-wide">
          © {new Date().getFullYear()} Bruno Garcia — feito com Next.js 15
        </p>
        <div className="flex gap-6">
          <Link href={OWNER.github} target="_blank" rel="noopener noreferrer"
            className="font-[family-name:var(--font-jetbrains)] text-xs text-white/25 hover:text-[#3dd68c] transition-colors duration-200 tracking-wide">
            GitHub
          </Link>
          <Link href={OWNER.linkedin} target="_blank" rel="noopener noreferrer"
            className="font-[family-name:var(--font-jetbrains)] text-xs text-white/25 hover:text-[#3dd68c] transition-colors duration-200 tracking-wide">
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
