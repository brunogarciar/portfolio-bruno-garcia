import type { Metadata, Viewport } from "next";
import { Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bruno Garcia — Desenvolvedor Python",
    template: "%s | Bruno Garcia",
  },
  description:
    "Estudante de Ciência da Computação focado em Python, Automação, APIs e Inteligência Artificial.",
  keywords: ["Bruno Garcia", "Python", "portfólio", "desenvolvedor", "automação", "IA"],
  authors: [{ name: "Bruno Garcia", url: "https://github.com/brunogarciar" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Bruno Garcia",
    title: "Bruno Garcia — Desenvolvedor Python",
    description: "Estudante de Ciência da Computação focado em Python e IA.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bruno Garcia — Desenvolvedor Python",
    description: "Estudante de Ciência da Computação focado em Python, IA.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0b0e0c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${syne.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
