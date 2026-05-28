"use client";

import { useInView } from "@/hooks/useInView";
import { OWNER, STUDYING } from "@/lib/constants";

export function AboutSection() {
  const [ref, inView] = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="sobre"
      style={{ background: "#0f1410", padding: "100px 0", borderTop: "1px solid rgba(61,214,140,0.08)" }}
      aria-label="Sobre mim"
    >
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">

        {/* Bio */}
        <div style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}>
          <p className="font-[family-name:var(--font-jetbrains)] text-[11px] text-[#3dd68c] tracking-[0.2em] mb-4">
             SOBRE
          </p>
                  <h2 className="font-[family-name:var(--font-Space_Grotesk)] font-extrabold text-white leading-tight mb-6"
            style={{ fontSize: "clamp(28px, 4vw, 44px)", letterSpacing: "-0.02em" }}>
            Olá! Eu sou o Bruno. 👋
          </h2>
          <p className="font-[family-name:var(--font-jetbrains)] text-white/45 leading-relaxed text-sm mb-4">
            {OWNER.bio}
          </p>
          <p className="font-[family-name:var(--font-jetbrains)] text-white/35 leading-relaxed text-sm">
            Estudante de Ciência da Computação com foco prático — cada projeto é uma oportunidade de aprender algo novo e aplicar o conhecimento de forma concreta.
          </p>
        </div>

        {/* Atualmente estudando */}
        <div style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s" }}>
          <p className="font-[family-name:var(--font-jetbrains)] text-[11px] text-[#3dd68c] tracking-[0.2em] mb-4">
             ATUALMENTE ESTUDANDO
          </p>
          <div className="flex flex-col gap-3">
            {STUDYING.map((item, i) => (
              <div key={item.topic}
                className="flex items-center gap-3 p-4 border border-white/[0.06] hover:border-[rgba(61,214,140,0.2)] transition-colors duration-200"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateX(0)" : "translateX(16px)",
                  transition: `opacity 0.5s ease ${0.2 + i * 0.08}s, transform 0.5s ease ${0.2 + i * 0.08}s`,
                }}>
                <span className="text-[#3dd68c] font-[family-name:var(--font-jetbrains)] text-lg w-6 flex-shrink-0" aria-hidden="true">
                  {item.icon}
                </span>
                <span className="font-[family-name:var(--font-jetbrains)] text-sm text-white/65">
                  {item.topic}
                </span>
                <span className="ml-auto font-[family-name:var(--font-jetbrains)] text-[10px] text-[#3dd68c]/60 tracking-widest border border-[rgba(61,214,140,0.2)] px-2 py-0.5">
                  WIP
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
