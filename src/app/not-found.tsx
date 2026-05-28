import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      style={{ background: "#0b0e0c" }}>
      <p className="font-[family-name:var(--font-jetbrains)] text-[11px] tracking-[0.2em] mb-4 text-[#3dd68c]">
        // ERRO 404
      </p>
      <h1 className="font-[family-name:var(--font-syne)] font-extrabold text-white leading-none mb-6"
        style={{ fontSize: "clamp(64px, 12vw, 120px)", letterSpacing: "-0.03em" }}>
        Não encontrado.
      </h1>
      <p className="font-[family-name:var(--font-jetbrains)] text-sm text-white/40 mb-10">
        Esta rota não existe.
      </p>
      <Link href="/"
        className="font-[family-name:var(--font-jetbrains)] text-xs tracking-[0.14em] px-8 py-4 bg-[#3dd68c] text-[#0b0e0c] font-bold hover:bg-[#34c97d] transition-colors duration-200">
        VOLTAR AO INÍCIO
      </Link>
    </main>
  );
}
