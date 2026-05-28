"use client";

import { useInView } from "@/hooks/useInView";
import { SKILL_CATEGORIES } from "@/lib/constants";

const levelColor: Record<string, string> = {
  "Avançado":     "text-[#3dd68c] border-[rgba(61,214,140,0.3)]",
  "Intermediário":"text-[#60a5fa] border-[rgba(96,165,250,0.3)]",
  "Aprendendo":   "text-white/35 border-white/10",
};

export function SkillsSection() {
  const [ref, inView] = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="skills"
      style={{ background: "#0b0e0c", padding: "100px 0" }}
      aria-label="Habilidades"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}
          className="mb-14">
          <p className="font-[family-name:var(--font-jetbrains)] text-[11px] text-[#3dd68c] tracking-[0.2em] mb-3">
            // SKILLS
          </p>
                  <h2 className="font-[family-name:var(--font-Space_Grotesk)] font-extrabold text-white leading-none"
            style={{ fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-0.02em" }}>
            Tecnologias &amp; Ferramentas
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((cat, ci) => (
            <div key={cat.title}
              style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)", transition: `opacity 0.6s ease ${ci * 0.1}s, transform 0.6s ease ${ci * 0.1}s` }}>
              <p className="font-[family-name:var(--font-jetbrains)] text-[10px] text-white/30 tracking-[0.18em] uppercase mb-4">
                {cat.title}
              </p>
              <div className="flex flex-col gap-2">
                {cat.skills.map((skill) => (
                  <div key={skill.name}
                    className="flex items-center justify-between p-3 border border-white/[0.06] hover:border-[rgba(61,214,140,0.18)] transition-colors duration-200">
                    <div className="flex items-center gap-2">
                      <span className="text-base" aria-hidden="true">{skill.icon}</span>
                      <span className="font-[family-name:var(--font-jetbrains)] text-sm text-white/70">{skill.name}</span>
                    </div>
                    <span className={`font-[family-name:var(--font-jetbrains)] text-[9px] tracking-widest border px-1.5 py-0.5 ${levelColor[skill.level]}`}>
                      {skill.level === "Intermediário" ? "MID" : skill.level === "Avançado" ? "ADV" : "WIP"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center gap-6 mt-10" style={{ opacity: inView ? 1 : 0, transition: "opacity 0.6s ease 0.5s" }}>
          {[
            { label: "Avançado",      color: "text-[#3dd68c]", badge: "ADV" },
            { label: "Intermediário", color: "text-[#60a5fa]", badge: "MID" },
            { label: "Aprendendo",    color: "text-white/35",  badge: "WIP" },
          ].map((l) => (
            <div key={l.label} className="flex items-center gap-1.5">
              <span className={`font-[family-name:var(--font-jetbrains)] text-[10px] ${l.color}`}>{l.badge}</span>
              <span className="font-[family-name:var(--font-jetbrains)] text-[10px] text-white/25">= {l.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
