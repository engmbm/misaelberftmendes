import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Laudo técnico elétrico com ART em Porto Alegre e região",
  description:
    "Laudo técnico elétrico com ART para empresas, indústrias e condomínios em Porto Alegre e região metropolitana. NR-10, SPDA (NBR 5419), NBR 5410, laudo de conformidade e regularização. Engenheiro eletricista CREA-RS 251305.",
};

const tiposLaudo = [
  {
    codigo: "01",
    titulo: "Laudo de conformidade elétrica (NBR 5410)",
    descricao:
      "Avaliação da instalação elétrica de baixa tensão frente à NBR 5410. Aponta não-conformidades, riscos e recomendações técnicas para adequação, com ART emitida.",
    para: "Empresas, comércios, indústrias, condomínios",
  },
  {
    codigo: "02",
    titulo: "Laudo de SPDA (NBR 5419)",
    descricao:
      "Inspeção do Sistema de Proteção contra Descargas Atmosféricas — para-raios, malha de aterramento e continuidade — conforme a NBR 5419, com relatório e ART.",
    para: "Edificações comerciais, industriais e prediais",
  },
  {
    codigo: "03",
    titulo: "Laudo NR-10",
    descricao:
      "Documentação exigida pela NR-10 para segurança em instalações e serviços em eletricidade: prontuário, diagramas, medidas de controle e responsabilidade técnica.",
    para: "Empresas com trabalhadores expostos a risco elétrico",
  },
  {
    codigo: "04",
    titulo: "Laudo de aterramento e medição",
    descricao:
      "Medição de resistência de aterramento e verificação da malha, com instrumentação adequada e emissão de laudo técnico assinado.",
    para: "Indústrias, data centers, subestações",
  },
  {
    codigo: "05",
    titulo: "Laudo pericial e cautelar",
    descricao:
      "Laudo técnico para uso em contestações, seguros, ações judiciais ou vistoria cautelar de instalações antes de reforma, compra ou locação.",
    para: "Advogados, seguradoras, gestores prediais",
  },
];

export default function LaudosPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-rule py-20 md:py-24">
        <div className="container-x">
          <p className="fase mb-4">Engenharia · Laudos</p>
          <h1 className="max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Laudo técnico elétrico com ART, em Porto Alegre e região.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-soft">
            Se sua empresa, indústria ou condomínio precisa de um laudo elétrico
            — para regularização, seguro, exigência de norma ou segurança —, eu
            faço a inspeção, aponto as não-conformidades e entrego o documento
            técnico com ART registrada no CREA-RS.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="https://wa.me/5551992387777"
              target="_blank"
              rel="noopener"
              className="btn-primary"
            >
              Falar no WhatsApp
            </a>
            <Link href="/contato" className="btn-primary">
              Solicitar orçamento
            </Link>
          </div>
        </div>
      </section>

      {/* Tipos de laudo */}
      <section className="border-b border-rule py-20">
        <div className="container-x">
          <p className="stamp mb-6">Tipos de laudo</p>
          <div className="grid gap-px overflow-hidden rounded-lg border border-rule bg-rule">
            {tiposLaudo.map((l) => (
              <div
                key={l.codigo}
                className="grid gap-6 bg-white p-8 md:grid-cols-[100px_1fr_1fr]"
              >
                <p className="fase self-start">{l.codigo}</p>
                <div>
                  <h2 className="font-display text-xl font-medium tracking-tight">
                    {l.titulo}
                  </h2>
                  <p className="stamp mt-2">{l.para}</p>
                </div>
                <p className="text-sm text-ink-soft">{l.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="border-b border-rule py-20">
        <div className="container-x">
          <p className="stamp mb-6">Como funciona</p>
          <div className="grid gap-6 md:grid-cols-4">
            <div className="rounded-lg border border-rule bg-white p-6">
              <p className="fase mb-4">Etapa 1</p>
              <h3 className="font-display text-lg font-medium tracking-tight">
                Contato e escopo
              </h3>
              <p className="mt-3 text-sm text-ink-soft">
                Você descreve o tipo de imóvel, o motivo do laudo e o que
                precisa comprovar. Alinho o escopo e o prazo.
              </p>
            </div>
            <div className="rounded-lg border border-rule bg-white p-6">
              <p className="fase mb-4">Etapa 2</p>
              <h3 className="font-display text-lg font-medium tracking-tight">
                Vistoria técnica
              </h3>
              <p className="mt-3 text-sm text-ink-soft">
                Inspeção presencial com instrumentação adequada — medições,
                registros fotográficos e verificação frente à norma aplicável.
              </p>
            </div>
            <div className="rounded-lg border border-rule bg-white p-6">
              <p className="fase mb-4">Etapa 3</p>
              <h3 className="font-display text-lg font-medium tracking-tight">
                Emissão do laudo
              </h3>
              <p className="mt-3 text-sm text-ink-soft">
                Documento técnico com não-conformidades, recomendações
                embasadas em norma e ART registrada no CREA-RS.
              </p>
            </div>
            <div className="rounded-lg border border-rule bg-white p-6">
              <p className="fase mb-4">Etapa 4</p>
              <h3 className="font-display text-lg font-medium tracking-tight">
                Suporte à adequação
              </h3>
              <p className="mt-3 text-sm text-ink-soft">
                Se precisar, oriento os próximos passos para regularizar o que
                foi apontado — sem pressão de urgência.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Escopo / linguagem sugestiva */}
      <section className="border-b border-rule py-16">
        <div className="container-x">
          <div className="rounded-lg border border-rule bg-white p-8 md:max-w-3xl">
            <h3 className="font-display text-xl font-medium tracking-tight">
              Laudo com linguagem sugestiva, não alarmista
            </h3>
            <p className="mt-3 text-sm text-ink-soft">
              Meus laudos apontam não-conformidades e recomendações técnicas
              embasadas em norma, sem impor prazos artificiais ou criar senso de
              urgência para forçar contratação de serviço. O objetivo é dar ao
              gestor, ao síndico ou ao tribunal o entendimento técnico necessário
              para decidir com consciência.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-x">
          <div className="rounded-2xl border border-tensao/20 bg-tensao-lo p-10 text-white md:p-16">
            <p className="font-mono text-xs uppercase tracking-tag text-white/60">
              Orçamento sob consulta
            </p>
            <h2 className="mt-3 font-display text-2xl font-medium leading-tight tracking-tight sm:text-3xl md:text-4xl">
              Precisa de um laudo elétrico?
            </h2>
            <p className="mt-4 max-w-xl text-white/80">
              Cada laudo tem escopo próprio — o valor depende do tipo de imóvel,
              da norma aplicável e da complexidade. Descreva seu caso e devolvo
              um orçamento sem compromisso.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://wa.me/5551992387777"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-medium text-tensao-lo transition hover:bg-canvas"
              >
                Falar no WhatsApp
              </a>
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 rounded-md border border-white/30 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Solicitar pelo formulário
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
