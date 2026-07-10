import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coaching Criacional (IGT) com análise DISC",
  description:
    "Processo de coaching estruturado em 11 sessões pela metodologia IGT, com uso de análise comportamental DISC. Para profissionais em transição, líderes e equipes.",
};

export default function CoachingPage() {
  return (
    <>
      <section className="border-b border-rule py-20 md:py-24">
        <div className="container-x">
          <p className="fase mb-4">L2 · Coaching</p>
          <h1 className="max-w-3xl font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
            Um método para tomar decisões conscientes — e sustentar as escolhas.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-soft">
            Aplico o Coaching Criacional (metodologia IGT) integrado com
            análise comportamental DISC. É um processo de 11 sessões que trabalha
            valores, propósito, cenário e ação — pensado para quem quer parar de
            reagir e começar a criar.
          </p>
        </div>
      </section>

      <section className="border-b border-rule py-20">
        <div className="container-x">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="stamp mb-4">Metodologia</p>
              <h2 className="font-display text-2xl font-medium tracking-tight">
                Coaching Criacional (IGT)
              </h2>
              <p className="mt-4 text-sm text-ink-soft">
                Método brasileiro estruturado em torno da capacidade humana de
                criar deliberadamente a própria realidade — em contraste com o
                modo reativo em que a maioria opera. Cada sessão tem um objetivo
                técnico dentro da jornada, evitando a improvisação típica de
                processos não-estruturados.
              </p>
            </div>
            <div>
              <p className="stamp mb-4">Ferramenta de leitura</p>
              <h2 className="font-display text-2xl font-medium tracking-tight">
                Análise DISC
              </h2>
              <p className="mt-4 text-sm text-ink-soft">
                Instrumento psicométrico que mapeia perfil comportamental
                (Dominância, Influência, eStabilidade, Conformidade) — natural,
                adaptado e índice de energia motivacional. Base para conversas
                mais precisas sobre estilo de decisão, comunicação e conflito.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x">
          <p className="stamp mb-6">A jornada</p>
          <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
            11 sessões, um percurso claro.
          </h2>

          <div className="mt-12 overflow-hidden rounded-lg border border-rule">
            {[
              ["S1", "Contrato e diagnóstico", "Alinhamento de expectativas, aplicação do DISC, briefing inicial."],
              ["S2", "Valores", "Identificação e priorização dos valores fundamentais."],
              ["S3", "Propósito", "Formulação de propósito pessoal ou profissional."],
              ["S4-S6", "Cenário atual", "Mapeamento sincero da realidade e das crenças que a sustentam."],
              ["S7-S9", "Ação criacional", "Planos concretos, experimentação, ajustes."],
              ["S10-S11", "Consolidação", "Revisão do percurso, plano de continuidade."],
            ].map(([sessao, titulo, desc], i) => (
              <div
                key={sessao}
                className={`grid gap-4 bg-white p-8 md:grid-cols-[100px_240px_1fr] ${
                  i > 0 ? "border-t border-rule" : ""
                }`}
              >
                <p className="fase self-start">{sessao}</p>
                <p className="font-display text-lg font-medium tracking-tight">
                  {titulo}
                </p>
                <p className="text-sm text-ink-soft">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <Link href="/contato" className="btn-primary">
              Agendar sessão de diagnóstico
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
