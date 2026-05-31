"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { GridBg } from "@/components/ui/GridBg";
import { OWNER } from "@/lib/constants";

export function HeroSection() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const fade = (delay) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(18px)",
    transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
  });

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
      style={{ background: "#0b0e0c", paddingTop: "80px" }}
      aria-label="Apresentação"
      id="inicio"
    >
      <GridBg />

      <div className="pointer-events-none absolute" aria-hidden="true" style={{
        width: "700px", height: "700px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(61,214,140,0.07) 0%, transparent 70%)",
        top: "50%", left: "50%", transform: "translate(-50%, -60%)",
      }} />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <div className="inline-flex items-center gap-2 mb-8 px-3 py-1 border border-[rgba(61,214,140,0.25)] font-[family-name:var(--font-jetbrains)] text-[11px] tracking-[0.14em] text-[#3dd68c]"
          style={fade(0)} role="status">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3dd68c] animate-pulse-dot" aria-hidden="true" />
          DISPONÍVEL PARA OPORTUNIDADES
        </div>

        <h1
          className="font-[family-name:var(--font-syne)] font-extrabold text-white leading-tight mb-4"
          style={{ fontSize: "clamp(42px, 8vw, 88px)", letterSpacing: "-0.03em", ...fade(100) }}
        >
          Bruno Garcia
        </h1>

        <p
          className="font-[family-name:var(--font-jetbrains)] text-[#3dd68c] mb-5 tracking-wide"
          style={{ fontSize: "clamp(13px, 2vw, 16px)", ...fade(200) }}
        >
          Estudante de Ciência da Computação &nbsp;·&nbsp; Python &amp; JavaScript
        </p>

        <p className="font-[family-name:var(--font-jetbrains)] text-white/40 leading-relaxed mb-10 max-w-xl mx-auto"
          style={{ fontSize: "14px", ...fade(300) }}>
          {OWNER.tagline}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4" style={fade(420)}>
          <Link
            href="#projetos"
            className="px-8 py-4 text-sm font-bold tracking-[0.1em] bg-[#3dd68c] text-[#0b0e0c] hover:bg-[#34c97d] transition-colors duration-200 font-[family-name:var(--font-jetbrains)] w-full sm:w-auto text-center"
          >
            VER PROJETOS
          </Link>
          <Link
            href={OWNER.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 text-sm font-[family-name:var(--font-jetbrains)] tracking-[0.08em] border border-white/15 text-white/55 hover:border-[rgba(61,214,140,0.4)] transition-all duration-200 w-full sm:w-auto text-center"
          >
            LinkedIn
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" aria-hidden="true"
        style={{ opacity: visible ? 0.35 : 0, transition: "opacity 1s ease 900ms" }}>
        <span className="font-[family-name:var(--font-jetbrains)] text-[10px] text-white/35 tracking-[0.18em]">SCROLL</span>
        <div className="w-px h-10" style={{ background: "linear-gradient(to bottom, rgba(61,214,140,0.5), transparent)" }} />
      </div>
    </section>
  );
}
