import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Diagnóstico de eficiência energética para indústrias e empresas",
  description:
    "Instalo analisador de energia no seu quadro geral por 7 dias, meço consumo, demanda, fator de potência e harmônicas, e entrego laudo com ART apontando onde o dinheiro está vazando. Porto Alegre e região.",
};

export default function EficienciaEnergeticaPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-rule py-20 md:py-24">
        <div className="container-x">
          <p className="fase mb-4">Engenharia · Eficiência energética</p>
          <h1 className="max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Onde o dinheiro da sua conta de energia está vazando.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-soft">
            A maioria das plantas industriais e comerciais que meço tem
            economia recuperável que ninguém enxerga na conta. Um diagnóstico
            técnico feito sobre medição real (não estimativa) mostra onde o
            dinheiro está saindo e como interromper o vazamento.
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
              Solicitar diagnóstico
            </Link>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="border-b border-rule py-20">
        <div className="container-x">
          <p className="stamp mb-6">Como funciona</p>
          <h2 className="font-display text-2xl font-medium tracking-tight sm:text-3xl md:text-4xl">
            Três etapas em uma semana.
          </h2>

          <div className="mt-12 overflow-hidden rounded-lg border border-rule">
            <div className="grid gap-6 bg-white p-8 md:grid-cols-[100px_260px_1fr]">
              <p className="fase self-start">Etapa 1</p>
              <p className="font-display text-lg font-medium tracking-tight">
                Instalação do analisador
              </p>
              <p className="text-sm text-ink-soft">
                Instalo um analisador de energia no seu quadro geral (QGBT)
                sem parar a produção. A instalação leva minutos e o
                equipamento fica registrando por 7 dias completos.
              </p>
            </div>
            <div className="grid gap-6 border-t border-rule bg-white p-8 md:grid-cols-[100px_260px_1fr]">
              <p className="fase self-start">Etapa 2</p>
              <p className="font-display text-lg font-medium tracking-tight">
                Medição contínua por 7 dias
              </p>
              <p className="text-sm text-ink-soft">
                O equipamento registra hora a hora: consumo, demanda, fator
                de potência, harmônicas e perfil de carga. Um retrato fiel
                da operação real, incluindo horários de pico e fim de
                semana.
              </p>
            </div>
            <div className="grid gap-6 border-t border-rule bg-white p-8 md:grid-cols-[100px_260px_1fr]">
              <p className="fase self-start">Etapa 3</p>
              <p className="font-display text-lg font-medium tracking-tight">
                Laudo técnico com ART
              </p>
              <p className="text-sm text-ink-soft">
                Entrego laudo apontando onde o dinheiro está vazando, com
                plano de ação priorizado por retorno financeiro. Documento
                assinado com ART registrada no CREA-RS.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* O que costuma aparecer */}
      <section className="border-b border-rule py-20">
        <div className="container-x">
          <p className="stamp mb-6">O que costuma aparecer nas medições</p>
          <h2 className="font-display text-2xl font-medium tracking-tight sm:text-3xl md:text-4xl">
            Quatro fontes silenciosas de perda.
          </h2>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-rule bg-white p-6">
              <p className="fase mb-3">01</p>
              <h3 className="font-display text-lg font-medium tracking-tight">
                Multa por energia reativa
              </h3>
              <p className="mt-2 text-sm text-ink-soft">
                Fator de potência abaixo de 0,92 gera cobrança adicional
                todo mês na fatura, muitas vezes sem ninguém perceber.
                Aparece como item destacado na conta.
              </p>
            </div>
            <div className="rounded-lg border border-rule bg-white p-6">
              <p className="fase mb-3">02</p>
              <h3 className="font-display text-lg font-medium tracking-tight">
                Demanda contratada errada
              </h3>
              <p className="mt-2 text-sm text-ink-soft">
                Pagando por kW que não usa (demanda contratada acima da
                real) ou levando multa de ultrapassagem quando a demanda
                real passa da contratada. Ambos os casos são caros.
              </p>
            </div>
            <div className="rounded-lg border border-rule bg-white p-6">
              <p className="fase mb-3">03</p>
              <h3 className="font-display text-lg font-medium tracking-tight">
                Harmônicas
              </h3>
              <p className="mt-2 text-sm text-ink-soft">
                Distorção harmônica aquece motores e transformadores. O
                efeito duplo é ruim: conta de energia mais alta E vida útil
                menor dos equipamentos.
              </p>
            </div>
            <div className="rounded-lg border border-rule bg-white p-6">
              <p className="fase mb-3">04</p>
              <h3 className="font-display text-lg font-medium tracking-tight">
                Cargas fora de horário e tarifa desatualizada
              </h3>
              <p className="mt-2 text-sm text-ink-soft">
                Consumo em horário de ponta (mais caro) que poderia ser
                deslocado, e enquadramento tarifário incorreto para o
                perfil de consumo da planta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* O laudo se paga */}
      <section className="border-b border-rule py-16">
        <div className="container-x">
          <div className="rounded-lg border border-rule bg-white p-8 md:max-w-3xl">
            <p className="stamp mb-3">O retorno</p>
            <h3 className="font-display text-xl font-medium tracking-tight">
              O laudo costuma se pagar no primeiro ano.
            </h3>
            <p className="mt-3 text-sm text-ink-soft">
              É comum a economia identificada superar várias vezes o custo
              do diagnóstico. E como a análise é feita sobre medição real
              da sua planta (não estimativa), o plano de ação sai com
              números concretos, prazos e prioridades.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-x">
          <div className="rounded-2xl border border-tensao/20 bg-tensao-lo p-10 text-white md:p-16">
            <p className="font-mono text-xs uppercase tracking-tag text-white/60">
              Diagnóstico sob consulta
            </p>
            <h2 className="mt-3 font-display text-2xl font-medium leading-tight tracking-tight sm:text-3xl md:text-4xl">
              Sua planta pode estar pagando a mais.
            </h2>
            <p className="mt-4 max-w-xl text-white/80">
              Uma conversa de 15 minutos costuma ser suficiente para
              entender se vale medir. Posso levar exemplos de medições
              anonimizadas para você ver o tipo de achado típico.
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
