import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Perito engenheiro eletricista e assistente técnico em Porto Alegre",
  description:
    "Perícia judicial em engenharia elétrica e assistência técnica para advogados no Rio Grande do Sul. Acidentes elétricos, contestação de faturamento (TOI), curto-circuito, incêndio de origem elétrica. CREA-RS 251305, cadastrado na M Perícias.",
};

export default function PericiaPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-rule py-20 md:py-24">
        <div className="container-x">
          <p className="fase mb-4">Engenharia · Perícia</p>
          <h1 className="max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Perito engenheiro eletricista para casos que precisam de decisão
            técnica.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-soft">
            Atuo como perito judicial nomeado pela justiça e como assistente
            técnico contratado por advogados. Emito laudos periciais e pareceres
            técnicos em ações que envolvem instalações, acidentes, incêndios de
            origem elétrica e contestação de faturamento.
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
              Solicitar análise do caso
            </Link>
          </div>
        </div>
      </section>

      {/* Dois caminhos */}
      <section className="border-b border-rule py-20">
        <div className="container-x">
          <p className="stamp mb-6">Dois caminhos</p>
          <h2 className="font-display text-2xl font-medium tracking-tight sm:text-3xl md:text-4xl">
            Perito judicial ou assistente técnico do advogado.
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-ink-muted">
            São papéis diferentes com finalidades distintas. Atuo nos dois.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <div className="flex flex-col rounded-lg border border-rule bg-white p-8">
              <p className="fase mb-4">Caminho A</p>
              <h3 className="font-display text-xl font-medium tracking-tight">
                Perito Judicial
              </h3>
              <p className="stamp mt-2">Nomeação pelo juiz</p>
              <p className="mt-4 flex-1 text-sm text-ink-soft">
                O perito é um profissional imparcial nomeado pelo juiz para
                analisar tecnicamente o caso e responder aos quesitos das
                partes. Sou cadastrado como perito em plataformas de indicação
                e à disposição do Judiciário.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-ink-soft">
                <li className="flex gap-2">
                  <span className="mt-2 h-px w-3 flex-none bg-tensao" />
                  Laudo pericial imparcial
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-px w-3 flex-none bg-tensao" />
                  Resposta aos quesitos das partes
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-px w-3 flex-none bg-tensao" />
                  Complementações e esclarecimentos
                </li>
              </ul>
            </div>

            <div className="flex flex-col rounded-lg border-2 border-tensao/30 bg-white p-8">
              <p className="fase mb-4">Caminho B</p>
              <h3 className="font-display text-xl font-medium tracking-tight">
                Assistente Técnico
              </h3>
              <p className="stamp mt-2">Contratado pelo advogado</p>
              <p className="mt-4 flex-1 text-sm text-ink-soft">
                O assistente técnico é contratado por uma das partes para
                defender tecnicamente sua tese, acompanhar o trabalho do perito
                judicial e produzir parecer técnico. É uma contratação direta —
                sem nomeação — e o serviço mais buscado por escritórios de
                advocacia.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-ink-soft">
                <li className="flex gap-2">
                  <span className="mt-2 h-px w-3 flex-none bg-tensao" />
                  Parecer técnico assistente
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-px w-3 flex-none bg-tensao" />
                  Formulação de quesitos técnicos
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-px w-3 flex-none bg-tensao" />
                  Acompanhamento da perícia judicial
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-px w-3 flex-none bg-tensao" />
                  Análise crítica do laudo do perito
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Casos típicos */}
      <section className="border-b border-rule py-20">
        <div className="container-x">
          <p className="stamp mb-6">Casos típicos</p>
          <h2 className="font-display text-3xl font-medium tracking-tight">
            Onde a perícia elétrica costuma ser decisiva.
          </h2>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-rule bg-white p-6">
              <p className="fase mb-3">01</p>
              <h3 className="font-display text-lg font-medium">
                Contestação de faturamento (TOI)
              </h3>
              <p className="mt-2 text-sm text-ink-soft">
                Termo de Ocorrência e Inspeção da concessionária que gera
                cobrança retroativa de energia. Análise técnica do medidor, do
                laudo da concessionária e da consistência da metodologia.
              </p>
            </div>
            <div className="rounded-lg border border-rule bg-white p-6">
              <p className="fase mb-3">02</p>
              <h3 className="font-display text-lg font-medium">
                Acidente elétrico com dano à pessoa
              </h3>
              <p className="mt-2 text-sm text-ink-soft">
                Análise técnica de choque elétrico, queimadura ou eletrocussão.
                Verificação de responsabilidades, aterramento, proteções e
                cumprimento da NR-10.
              </p>
            </div>
            <div className="rounded-lg border border-rule bg-white p-6">
              <p className="fase mb-3">03</p>
              <h3 className="font-display text-lg font-medium">
                Incêndio de origem elétrica
              </h3>
              <p className="mt-2 text-sm text-ink-soft">
                Perícia em sinistros para verificar se o incêndio teve origem em
                curto-circuito, sobrecarga, mau contato ou defeito de
                equipamento — com implicações em seguro e responsabilidade civil.
              </p>
            </div>
            <div className="rounded-lg border border-rule bg-white p-6">
              <p className="fase mb-3">04</p>
              <h3 className="font-display text-lg font-medium">
                Danos em equipamentos por variação de tensão
              </h3>
              <p className="mt-2 text-sm text-ink-soft">
                Análise da causa raiz de queima de equipamentos por
                sobretensão, transitório ou descarga atmosférica, com nexo
                técnico ligando o evento ao dano.
              </p>
            </div>
            <div className="rounded-lg border border-rule bg-white p-6">
              <p className="fase mb-3">05</p>
              <h3 className="font-display text-lg font-medium">
                Vícios de obra e instalação
              </h3>
              <p className="mt-2 text-sm text-ink-soft">
                Perícia em instalações elétricas com falhas de execução,
                dimensionamento inadequado ou desvio de projeto — em ações
                contra construtoras, empreiteiras ou instaladores.
              </p>
            </div>
            <div className="rounded-lg border border-rule bg-white p-6">
              <p className="fase mb-3">06</p>
              <h3 className="font-display text-lg font-medium">
                Responsabilidade técnica em obras
              </h3>
              <p className="mt-2 text-sm text-ink-soft">
                Análise de ARTs, projetos e execuções para casos em que se
                discute a responsabilidade do engenheiro, do instalador ou do
                fornecedor por falha ou omissão técnica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vínculo M Perícias */}
      <section className="border-b border-rule py-16">
        <div className="container-x">
          <div className="rounded-lg border border-rule bg-white p-8 md:max-w-3xl">
            <p className="stamp mb-3">Cadastro público</p>
            <h3 className="font-display text-xl font-medium tracking-tight">
              Perito cadastrado na M Perícias
            </h3>
            <p className="mt-3 text-sm text-ink-soft">
              Estou listado no diretório público da M Perícias como Perito
              Engenheiro Eletricista com atuação em Canoas/RS e região
              metropolitana. O cadastro facilita a nomeação em ações que
              exigem verificação profissional independente.
            </p>
            <a
              href="https://www.mpericias.com.br/peritos/perito-engenheiro-eletricista-em-canoas-rs-misael-berft-mendes-m-pericias"
              target="_blank"
              rel="noopener"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-tensao hover:text-tensao-lo"
            >
              Ver perfil na M Perícias →
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-x">
          <div className="rounded-2xl border border-tensao/20 bg-tensao-lo p-10 text-white md:p-16">
            <p className="font-mono text-xs uppercase tracking-tag text-white/60">
              Para advogados e escritórios
            </p>
            <h2 className="mt-3 font-display text-2xl font-medium leading-tight tracking-tight sm:text-3xl md:text-4xl">
              Tem um caso que precisa de análise técnica?
            </h2>
            <p className="mt-4 max-w-xl text-white/80">
              Me envie um resumo do caso — a tese que sustenta, o cenário
              técnico e a fase processual. Devolvo se posso atuar como
              assistente técnico e como funcionaria o trabalho.
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
                Enviar caso pelo formulário
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
