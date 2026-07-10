import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre — Misael Berft Mendes",
  description:
    "Engenheiro eletricista CREA-RS 251305, coach certificado pelo IGT, instrutor técnico. Baseado em Porto Alegre/RS.",
};

export default function SobrePage() {
  return (
    <section className="py-20 md:py-24">
      <div className="container-x max-w-3xl">
        <p className="stamp mb-4">Sobre</p>
        <h1 className="font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
          Um engenheiro que também escuta.
        </h1>

        <div className="prose-block mt-12 space-y-6 text-lg leading-relaxed text-ink-soft">
          <p>
            Meu nome é Misael Berft Mendes. Sou engenheiro eletricista formado
            e registrado no CREA-RS sob o número 251305, atuando na região
            metropolitana de Porto Alegre.
          </p>
          <p>
            Minha prática se divide em três frentes que compartilham a mesma
            fonte: rigor técnico, decisão consciente e formação de gente.
            Emito laudos e ARTs; atuo como perito e assistente técnico da
            justiça; ministro cursos e NRs em instituições de ensino; e
            conduzo processos de coaching pela metodologia IGT.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-rule bg-rule">
          <div className="grid gap-4 bg-white p-8 md:grid-cols-[160px_1fr]">
            <p className="stamp">Registro</p>
            <p className="text-ink">
              CREA-RS 251305 — Engenheiro Eletricista
            </p>
          </div>
          <div className="grid gap-4 bg-white p-8 md:grid-cols-[160px_1fr]">
            <p className="stamp">Coaching</p>
            <p className="text-ink">
              IGT — Instituto de Gestão pelo Talento. Coach Criacional
              certificado, capacitado em análise DISC.
            </p>
          </div>
          <div className="grid gap-4 bg-white p-8 md:grid-cols-[160px_1fr]">
            <p className="stamp">Normas técnicas de referência</p>
            <p className="text-ink">
              NBR 5410, NBR 5419:2026, NR-10, NR-12, NR-35.
            </p>
          </div>
          <div className="grid gap-4 bg-white p-8 md:grid-cols-[160px_1fr]">
            <p className="stamp">Base</p>
            <p className="text-ink">
              Porto Alegre / Canoas / Região Metropolitana — Rio Grande do Sul.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
