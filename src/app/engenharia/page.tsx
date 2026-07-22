import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Engenharia elétrica — laudos, perícia, ART/RT e projetos",
  description:
    "Serviços de engenharia elétrica em Porto Alegre e região: laudos técnicos NBR 5410 e NBR 5419, perícia judicial, ART/RT para instaladores e projetos elétricos.",
};

const servicos = [
  {
    tag: "L1.1",
    titulo: "Laudos técnicos",
    para: "Condomínios, comércios, indústrias",
    descricao:
      "Inspeção formal com análise de não-conformidades pela NBR 5410 e NBR 5419:2026. Escopo delimitado à infraestrutura coletiva, linguagem suges­tiva (não prescritiva) e ART emitida.",
  },
  {
    tag: "L1.2",
    titulo: "Perícia judicial e assistência técnica",
    para: "Advogados, escritórios, partes em ação",
    descricao:
      "Atuação como perito nomeado ou assistente técnico. Contestações de faturamento (TOI), análise de acidentes elétricos, quesitos e complementações.",
  },
  {
    tag: "L1.3",
    titulo: "ART e responsabilidade técnica (RT)",
    para: "Instaladores, empresas de manutenção",
    descricao:
      "Emissão de ART para serviços de execução, manutenção e projetos executados por terceiros que necessitam de responsável técnico habilitado.",
  },
  {
    tag: "L1.4",
    titulo: "Projetos elétricos",
    para: "Residencial, comercial, retrofit",
    descricao:
      "Dimensionamento por NBR 5410, memoriais de cálculo, diagramas unifilares. Estudos de carga para solicitação de aumento junto à concessionária.",
  },
  {
    tag: "L1.5",
    titulo: "Instalação de carregadores para VE (Wallbox)",
    para: "Condomínios, residências, frotas",
    descricao:
      "Memorial técnico, dimensionamento de circuito dedicado, proteções específicas e ART para instalações de carregadores de veículos elétricos.",
  },
];

export default function EngenhariaPage() {
  return (
    <>
      <section className="border-b border-rule py-20 md:py-24">
        <div className="container-x">
          <p className="fase mb-4">L1 · Engenharia</p>
          <h1 className="max-w-3xl font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
            Rigor técnico e responsabilidade profissional em cada assinatura.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-soft">
            Atendo condomínios, empresas, escritórios de advocacia e profissionais
            de elétrica que precisam de um engenheiro eletricista habilitado — do
            laudo formal à assinatura mensal de responsabilidade técnica.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x">
          <p className="stamp mb-6">Serviços</p>
          <div className="grid gap-px overflow-hidden rounded-lg border border-rule bg-rule">
            {servicos.map((s) => (
              <div
                key={s.tag}
                className="grid gap-6 bg-white p-8 md:grid-cols-[120px_1fr_1fr]"
              >
                <p className="fase self-start">{s.tag}</p>
                <div>
                  <h2 className="font-display text-xl font-medium tracking-tight">
                    {s.titulo}
                  </h2>
                  <p className="stamp mt-2">{s.para}</p>
                </div>
                <p className="text-sm text-ink-soft">{s.descricao}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-lg border border-rule bg-white p-8">
            <p className="stamp mb-3">Parcerias e vínculos</p>
            <h3 className="font-display text-xl font-medium tracking-tight">
              Perito cadastrado na M Perícias
            </h3>
            <p className="mt-3 text-sm text-ink-soft">
              Estou listado no diretório público da M Perícias como Perito
              Engenheiro Eletricista com atuação em Canoas/RS e região
              metropolitana. O cadastro facilita a nomeação em ações que
              exigem verificação profissional independente e reforça o vínculo
              formal do meu trabalho pericial.
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

          <div className="mt-6 rounded-lg border border-rule bg-white p-8">
            <h3 className="font-display text-xl font-medium tracking-tight">
              Sobre o escopo dos laudos
            </h3>
            <p className="mt-3 text-sm text-ink-soft">
              Os laudos que emito têm linguagem <strong>sugestiva</strong>, não
              prescritiva: apontam não-conformidades e recomendações técnicas
              embasadas em norma, sem impor prazos ou pressão de urgência sobre
              o cliente. O objetivo é oferecer ao síndico, ao gestor ou ao
              tribunal o entendimento técnico necessário para uma decisão
              consciente.
            </p>
            <Link
              href="/contato"
              className="btn-primary mt-8"
            >
              Solicitar orçamento
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
