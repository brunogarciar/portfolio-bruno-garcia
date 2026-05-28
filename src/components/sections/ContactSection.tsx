"use client";

import Link from "next/link";
import { useInView } from "@/hooks/useInView";
import { GridBg } from "@/components/ui/GridBg";
import { OWNER } from "@/lib/constants";

export function ContactSection() {
  const [ref, inView] = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="contato"
      className="relative overflow-hidden"
      style={{ background: "#0b0e0c", padding: "120px 0" }}
      aria-label="Contato"
    >
      <GridBg />
      <div className="pointer-events-none absolute inset-0" aria-hidden="true"
        style={{ background: "radial-gradient(ellipse at center bottom, rgba(61,214,140,0.05) 0%, transparent 65%)" }} />

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center"
        style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}>
        <p className="font-[family-name:var(--font-jetbrains)] text-[11px] text-[#3dd68c] tracking-[0.2em] mb-5">
          // CONTATO
        </p>
              <h2 className="font-[family-name:var(--font-Space_Grotesk)] font-extrabold text-white leading-tight mb-5"
          style={{ fontSize: "clamp(32px, 6vw, 64px)", letterSpacing: "-0.02em" }}>
          Vamos conversar?
        </h2>
        <p className="font-[family-name:var(--font-jetbrains)] text-sm text-white/40 leading-relaxed mb-10">
          Aberto a estágios, freelas e projetos colaborativos. Se você tem algo legal para construir, me chama.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={OWNER.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 text-sm font-bold tracking-[0.1em] bg-[#3dd68c] text-[#0b0e0c] hover:bg-[#34c97d] transition-colors duration-200 font-[family-name:var(--font-jetbrains)] w-full sm:w-auto text-center"
          >
            LINKEDIN →
          </Link>
          <Link
            href={OWNER.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 text-sm font-[family-name:var(--font-jetbrains)] tracking-[0.08em] border border-white/15 text-white/55 hover:border-[rgba(61,214,140,0.4)] transition-all duration-200 w-full sm:w-auto text-center"
          >
            GITHUB
          </Link>
        </div>
      </div>
    </section>
  );
}
