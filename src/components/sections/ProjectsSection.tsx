"use client";

import Link from "next/link";
import { useInView } from "@/hooks/useInView";
import { OWNER, PROJECTS } from "@/lib/constants";

export function ProjectsSection() {
  const [ref, inView] = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="projetos"
      style={{ background: "#0f1410", padding: "100px 0", borderTop: "1px solid rgba(61,214,140,0.08)" }}
      aria-label="Projetos"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}
          className="mb-14">
          <p className="font-[family-name:var(--font-jetbrains)] text-[11px] text-[#3dd68c] tracking-[0.2em] mb-3">
            // PROJETOS
          </p>
                  <h2 className="font-[family-name:var(--font-Space_Grotesk)] font-extrabold text-white leading-none"
            style={{ fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-0.02em" }}>
            O que estou construindo
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {PROJECTS.map((project, i) => (
            <article key={project.title}
              className="flex flex-col p-6 border transition-colors duration-200 hover:border-[rgba(61,214,140,0.25)] group"
              style={{
                borderColor: project.highlight ? "rgba(61,214,140,0.2)" : "rgba(255,255,255,0.06)",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
              }}>
              {project.highlight && (
                <span className="font-[family-name:var(--font-jetbrains)] text-[9px] tracking-[0.18em] text-[#3dd68c] border border-[rgba(61,214,140,0.3)] px-2 py-0.5 w-fit mb-4">
                  DESTAQUE
                </span>
              )}
              <h3 className="font-[family-name:var(--font-syne)] font-bold text-white text-lg mb-3 leading-snug">
                {project.title}
              </h3>
              <p className="font-[family-name:var(--font-jetbrains)] text-sm text-white/40 leading-relaxed mb-5 flex-1">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span key={tag}
                    className="font-[family-name:var(--font-jetbrains)] text-[10px] tracking-wider text-white/35 border border-white/[0.08] px-2 py-0.5">
                    {tag}
                  </span>
                ))}
              </div>
              {project.href && (
                <Link href={project.href} target="_blank" rel="noopener noreferrer"
                  className="font-[family-name:var(--font-jetbrains)] text-xs text-[#3dd68c] tracking-widest hover:underline mt-auto">
                  Ver no GitHub →
                </Link>
              )}
            </article>
          ))}
        </div>

        {/* GitHub stats card */}
        <div style={{ opacity: inView ? 1 : 0, transition: "opacity 0.6s ease 0.4s" }}
          className="mt-10 p-6 border border-white/[0.06] flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <p className="font-[family-name:var(--font-jetbrains)] text-[11px] text-white/30 tracking-widest mb-1">GITHUB</p>
            <p className="font-[family-name:var(--font-syne)] font-bold text-white text-lg">@{OWNER.githubUser}</p>
            <p className="font-[family-name:var(--font-jetbrains)] text-sm text-white/35 mt-1">Todos os projetos e contribuições</p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://github-readme-stats-sigma-five.vercel.app/api?username=${OWNER.githubUser}&show_icons=true&theme=midnight-purple&locale=pt-br&hide_border=true&bg_color=0f1410&title_color=3dd68c&icon_color=3dd68c&text_color=ffffff99`}
            alt={`GitHub stats de ${OWNER.name}`}
            height={160}
            className="rounded-sm"
          />
        </div>
      </div>
    </section>
  );
}
