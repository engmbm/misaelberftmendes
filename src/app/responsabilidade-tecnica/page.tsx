import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Responsável Técnico (RT) e regularização de empresas no CREA-RS",
  description:
    "Engenheiro eletricista para assumir a Responsabilidade Técnica (RT) da sua empresa e regularizá-la no CREA-RS. ART, registro de empresa e conformidade para operar sem risco de multa. Atendimento em todo o Rio Grande do Sul.",
};

export default function ResponsabilidadeTecnicaPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-rule py-20 md:py-24">
        <div className="container-x">
          <p className="fase mb-4">Engenharia · RT e CREA</p>
          <h1 className="max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Regularize sua empresa no CREA — com um engenheiro eletricista
            como Responsável Técnico.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-soft">
            Empresas que executam serviços de elétrica precisam de registro no
            CREA e de um Responsável Técnico habilitado. Eu assumo essa RT,
            emito as ARTs necessárias e deixo sua empresa apta a operar, contratar
            e faturar sem risco de autuação.
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
              Quero regularizar minha empresa
            </Link>
          </div>
        </div>
      </section>

      {/* Por que precisa */}
      <section className="border-b border-rule py-16">
        <div className="container-x">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-rule bg-white p-8">
              <p className="stamp mb-3">O problema</p>
              <h2 className="font-display text-xl font-medium tracking-tight">
                Operar sem RT é risco de multa e de perder contrato
              </h2>
              <p className="mt-3 text-sm text-ink-soft">
                Empresas de instalação, manutenção e montagem elétrica que não
                têm registro no CREA nem Responsável Técnico ficam expostas a
                autuações, impedimento de participar de licitações e recusa em
                contratos que exigem comprovação de regularidade técnica.
              </p>
            </div>
            <div className="rounded-lg border border-rule bg-white p-8">
              <p className="stamp mb-3">A solução</p>
              <h2 className="font-display text-xl font-medium tracking-tight">
                Um engenheiro eletricista habilitado assume a responsabilidade
              </h2>
              <p className="mt-3 text-sm text-ink-soft">
                Como engenheiro eletricista registrado no CREA-RS (251305),
                assumo a Responsabilidade Técnica da sua empresa, faço o registro
                junto ao conselho e emito as ARTs — deixando você livre para
                focar na operação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dois caminhos */}
      <section className="border-b border-rule py-20">
        <div className="container-x">
          <p className="stamp mb-6">Dois caminhos</p>
          <h2 className="font-display text-2xl font-medium tracking-tight sm:text-3xl md:text-4xl">
            Regularização pontual ou RT contínua.
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-ink-muted">
            Dependendo do momento da sua empresa, o serviço pode ser uma
            regularização única ou uma responsabilidade técnica mensal
            contínua.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <div className="flex flex-col rounded-lg border border-rule bg-white p-8">
              <p className="fase mb-4">Caminho A</p>
              <h3 className="font-display text-xl font-medium tracking-tight">
                Regularização pontual
              </h3>
              <p className="mt-3 flex-1 text-sm text-ink-soft">
                Para quem precisa registrar a empresa no CREA, emitir uma ART
                específica ou resolver uma pendência para participar de uma
                licitação ou fechar um contrato. Escopo definido, entrega e
                conclusão.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-ink-soft">
                <li className="flex gap-2">
                  <span className="mt-2 h-px w-3 flex-none bg-tensao" />
                  Registro da empresa no CREA-RS
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-px w-3 flex-none bg-tensao" />
                  Emissão de ART pontual
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-px w-3 flex-none bg-tensao" />
                  Regularização para licitação ou contrato
                </li>
              </ul>
            </div>

            <div className="flex flex-col rounded-lg border-2 border-tensao/30 bg-white p-8">
              <p className="fase mb-4">Caminho B</p>
              <h3 className="font-display text-xl font-medium tracking-tight">
                RT contínua (mensal)
              </h3>
              <p className="mt-3 flex-1 text-sm text-ink-soft">
                Para empresas que executam serviços de elétrica de forma
                recorrente e precisam de um Responsável Técnico permanente
                vinculado ao CREA. Acompanhamento contínuo e ARTs conforme a
                demanda.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-ink-soft">
                <li className="flex gap-2">
                  <span className="mt-2 h-px w-3 flex-none bg-tensao" />
                  RT vinculada permanentemente à empresa
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-px w-3 flex-none bg-tensao" />
                  ARTs emitidas conforme os serviços
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-px w-3 flex-none bg-tensao" />
                  Empresa sempre apta a operar e faturar
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Para quem */}
      <section className="border-b border-rule py-16">
        <div className="container-x">
          <p className="stamp mb-6">Para quem é</p>
          <div className="grid gap-4 text-sm md:grid-cols-3">
            <div className="rounded-lg border border-rule bg-white p-6">
              <p className="font-display text-base font-medium">
                Empresas de instalação elétrica
              </p>
              <p className="mt-2 text-ink-soft">
                Que precisam de registro e RT para operar dentro da lei.
              </p>
            </div>
            <div className="rounded-lg border border-rule bg-white p-6">
              <p className="font-display text-base font-medium">
                Empresas de manutenção e montagem
              </p>
              <p className="mt-2 text-ink-soft">
                Que executam serviços exigindo responsável técnico habilitado.
              </p>
            </div>
            <div className="rounded-lg border border-rule bg-white p-6">
              <p className="font-display text-base font-medium">
                Empresas em processo de licitação
              </p>
              <p className="mt-2 text-ink-soft">
                Que precisam comprovar regularidade técnica junto ao CREA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-x">
          <div className="rounded-2xl border border-tensao/20 bg-tensao-lo p-10 text-white md:p-16">
            <p className="font-mono text-xs uppercase tracking-tag text-white/60">
              Atendimento em todo o RS
            </p>
            <h2 className="mt-3 font-display text-2xl font-medium leading-tight tracking-tight sm:text-3xl md:text-4xl">
              Sua empresa precisa de Responsável Técnico?
            </h2>
            <p className="mt-4 max-w-xl text-white/80">
              Me conte a situação da sua empresa — se já tem registro, que tipo
              de serviço executa e qual a urgência. Devolvo com o caminho mais
              direto para regularizar.
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
