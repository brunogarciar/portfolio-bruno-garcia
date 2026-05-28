# Bruno Garcia — Portfólio

Portfólio profissional construído com Next.js 15, TypeScript e Tailwind CSS v4.

## Stack

- **Framework**: Next.js 15 (App Router, Turbopack)
- **Linguagem**: TypeScript 5 (strict mode)
- **Estilo**: Tailwind CSS v4
- **Fontes**: Syne (display) + JetBrains Mono via `next/font/google`
- **Deploy**: Vercel (zero-config)

## Estrutura

```
src/
├── app/
│   ├── globals.css          # Tailwind v4 + design tokens (@theme)
│   ├── layout.tsx           # Metadata, SEO, fontes
│   ├── page.tsx             # Home
│   └── not-found.tsx        # 404
├── components/
│   ├── layout/              # Navbar, Footer
│   ├── sections/            # Hero, About, Skills, Projects, Contact
│   └── ui/                  # Button, GridBg
├── hooks/useInView.ts       # Scroll animations
├── lib/
│   ├── constants.ts         # ← EDITE AQUI seu conteúdo
│   └── utils.ts
└── types/index.ts
```

## Setup

```bash
npm install
npm run dev          # http://localhost:3000
```

## Personalização

Todo o conteúdo fica em `src/lib/constants.ts`:

- **OWNER** — nome, bio, links do GitHub e LinkedIn
- **SKILL_CATEGORIES** — suas tecnologias e nível
- **PROJECTS** — seus projetos com links
- **STUDYING** — o que você está aprendendo

## Deploy

```bash
npx vercel
```
