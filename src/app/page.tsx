import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

// Serviços de engenharia em ordem de prioridade comercial
const servicos = [
  {
    codigo: "01",
    titulo: "Laudos técnicos elétricos",
    lead: "Laudo com ART para NR-10, SPDA (NBR 5419), conformidade e regularização. Para empresas, indústrias e condomínios.",
    publico: "Empresas · Condomínios · Indústrias",
    href: "/laudos",
    cta: "Ver laudos",
  },
  {
    codigo: "02",
    titulo: "Responsabilidade Técnica (RT) e ART",
    lead: "Regularização da sua empresa perante o CREA. Assumo a responsabilidade técnica e emito as ARTs necessárias para operar em conformidade.",
    publico: "Empresas de elétrica · Prestadores de serviço",
    href: "/responsabilidade-tecnica",
    cta: "Regularizar minha empresa",
  },
  {
    codigo: "03",
    titulo: "Perícia e assistência técnica",
    lead: "Perito judicial e assistente técnico em engenharia elétrica. Apoio a advogados em ações que envolvem instalações, acidentes e faturamento.",
    publico: "Advogados · Escritórios · Partes em processo",
    href: "/pericia",
    cta: "Solicitar análise do caso",
  },
  {
    codigo: "04",
    titulo: "Diagnóstico de eficiência energética",
    lead: "Analisador instalado no QGBT por 7 dias mede consumo, demanda, fator de potência e harmônicas. Laudo com ART aponta onde há economia recuperável.",
    publico: "Indústrias · Empresas · Comércios de médio porte",
    href: "/eficiencia-energetica",
    cta: "Solicitar diagnóstico",
  },
];

const frentes = [
  {
    fase: "L1",
    slug: "/engenharia",
    titulo: "Engenharia elétrica",
    lead: "Laudos, ART/RT, perícia e projetos. A frente principal — do laudo pontual à responsabilidade técnica contínua.",
    para: "Empresas, condomínios, advogados, gestores prediais.",
    cta: "Ver serviços de engenharia",
    destaque: true,
  },
  {
    fase: "L2",
    slug: "/coaching",
    titulo: "Coaching",
    lead: "Metodologia IGT (Coaching Criacional) com análise DISC.",
    para: "Profissionais em transição, líderes e equipes.",
    cta: "Conhecer a jornada",
    destaque: false,
  },
  {
    fase: "L3",
    slug: "/docencia",
    titulo: "Docência técnica",
    lead: "Aulas, NRs e treinamentos para instituições e empresas.",
    para: "Escolas técnicas, universidades corporativas.",
    cta: "Solicitar como instrutor",
    destaque: false,
  },
];

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* HERO — comercial + carimbo técnico */}
      <section className="relative overflow-hidden border-b border-rule">
        <div className="blueprint-grid absolute inset-0" aria-hidden="true" />
        <div className="container-x relative py-24 md:py-32">
          <div className="stamp mb-8 flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>Misael Berft Mendes</span>
            <span className="text-rule">|</span>
            <span>CREA-RS 251305</span>
            <span className="text-rule">|</span>
            <span>Porto Alegre / RS</span>
          </div>

          <h1 className="max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Engenheiro eletricista para
            <span className="text-tensao"> sua empresa</span>.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-ink-soft">
            Laudos técnicos, responsabilidade técnica (ART/RT), regularização
            junto ao CREA e perícia em engenharia elétrica — para empresas,
            condomínios e demandas judiciais em Porto Alegre e região.
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
            <Link href="#servicos" className="btn-ghost">
              Ver serviços
            </Link>
          </div>

          <p className="mt-8 max-w-2xl text-sm text-ink-muted">
            Segurança elétrica, decisões conscientes e formação técnica — rigor
            de engenharia com atendimento direto.
          </p>
        </div>
      </section>

      {/* SERVIÇOS DE ENGENHARIA — destaque comercial */}
      <section id="servicos" className="border-b border-rule py-20 md:py-24">
        <div className="container-x">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="stamp mb-3">Serviços de engenharia</p>
              <h2 className="font-display text-2xl font-medium tracking-tight sm:text-3xl md:text-4xl">
                O que sua empresa precisa resolver?
              </h2>
            </div>
            <p className="hidden max-w-sm text-sm text-ink-muted md:block">
              Cada serviço com ART emitida e responsabilidade profissional
              registrada no CREA-RS.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {servicos.map((s) => (
              <div
                key={s.codigo}
                className="flex flex-col rounded-lg border border-rule bg-white p-6 transition hover:border-tensao/60"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="fase">{s.codigo}</span>
                </div>
                <h3 className="font-display text-xl font-medium tracking-tight">
                  {s.titulo}
                </h3>
                <p className="mt-3 flex-1 text-sm text-ink-soft">{s.lead}</p>

                <div className="my-6 rule-line" />

                <p className="stamp mb-1">Para</p>
                <p className="text-sm text-ink-soft">{s.publico}</p>

                <Link
                  href={s.href}
                  className="mt-6 text-sm font-medium text-tensao hover:text-tensao-lo"
                >
                  {s.cta} →
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="https://wa.me/5551992387777"
              target="_blank"
              rel="noopener"
              className="btn-primary"
            >
              Falar no WhatsApp
            </a>
            <Link href="/contato" className="btn-ghost">
              Solicitar orçamento pelo formulário
            </Link>
          </div>
        </div>
      </section>

      {/* VÍDEO — apresentação rápida dos serviços */}
      <section className="border-b border-rule py-20">
        <div className="container-x">
          <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
            <div className="max-w-xl">
              <p className="stamp mb-3">Em 60 segundos</p>
              <h2 className="font-display text-2xl font-medium leading-tight tracking-tight sm:text-3xl md:text-4xl">
                Uma passada rápida pelo que ofereço.
              </h2>
              <p className="mt-4 text-ink-soft">
                Se preferir ver a mim explicando, este vídeo curto resume
                os principais serviços de engenharia e para quem eles
                servem.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/5551992387777"
                  target="_blank"
                  rel="noopener"
                  className="btn-primary"
                >
                  Falar no WhatsApp
                </a>
                <Link href="#servicos" className="btn-ghost">
                  Ver todos os serviços
                </Link>
              </div>
            </div>
            <div className="mx-auto w-full max-w-[280px]">
              <div className="aspect-[9/16] overflow-hidden rounded-2xl border border-rule bg-black shadow-sm">
                <iframe
                  src="https://www.youtube.com/embed/hvFC2qN2SMo"
                  title="Serviços — Misael Berft Mendes"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FRENTES — engenharia predominante + coaching/docência complementares */}
      <section id="frentes" className="border-b border-rule py-20 md:py-24">
        <div className="container-x">
          <div className="mb-12">
            <p className="stamp mb-3">Todas as frentes</p>
            <h2 className="font-display text-2xl font-medium tracking-tight sm:text-3xl md:text-4xl">
              Engenharia é o eixo. Coaching e docência completam.
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-ink-muted">
              A analogia é elétrica de propósito: cada linha atende um público
              diferente, mas todas partem da mesma fonte.
            </p>
          </div>

          {/* Engenharia — card largo em destaque */}
          <Link
            href="/engenharia"
            className="group mb-4 flex flex-col rounded-lg border-2 border-tensao/30 bg-white p-8 transition hover:border-tensao md:flex-row md:items-center md:gap-10"
          >
            <div className="md:flex-1">
              <div className="mb-4 flex items-center gap-3">
                <span className="fase">L1 · Fase principal</span>
              </div>
              <h3 className="font-display text-2xl font-medium tracking-tight">
                Engenharia elétrica
              </h3>
              <p className="mt-3 max-w-xl text-ink-soft">
                Laudos, ART/RT, perícia e projetos. Do laudo pontual à
                responsabilidade técnica contínua da sua empresa.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <p className="stamp mb-1">Para</p>
              <p className="text-sm text-ink-soft">
                Empresas, condomínios, advogados, gestores prediais.
              </p>
              <p className="mt-6 text-sm font-medium text-tensao">
                Ver serviços de engenharia →
              </p>
            </div>
          </Link>

          {/* Coaching e Docência — cards menores lado a lado */}
          <div className="grid gap-4 md:grid-cols-2">
            {frentes
              .filter((f) => !f.destaque)
              .map((f) => (
                <Link key={f.slug} href={f.slug} className="card group">
                  <div className="mb-8 flex items-center justify-between">
                    <span className="fase">{f.fase} · Fase</span>
                    <span className="font-mono text-xs text-ink-muted transition group-hover:text-tensao">
                      →
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-medium tracking-tight">
                    {f.titulo}
                  </h3>
                  <p className="mt-3 text-sm text-ink-soft">{f.lead}</p>

                  <div className="my-6 rule-line" />

                  <p className="stamp mb-1">Para</p>
                  <p className="text-sm text-ink-soft">{f.para}</p>

                  <p className="mt-8 text-sm font-medium text-tensao">
                    {f.cta} →
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CREDENCIAIS — carimbo técnico */}
      <section className="border-b border-rule py-16">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-4">
            <div>
              <p className="stamp mb-2">Registro</p>
              <p className="font-display text-2xl font-medium">CREA-RS 251305</p>
              <p className="mt-1 text-xs text-ink-muted">
                Engenheiro eletricista
              </p>
            </div>
            <div>
              <p className="stamp mb-2">Perícia</p>
              <p className="font-display text-2xl font-medium">M Perícias</p>
              <p className="mt-1 text-xs text-ink-muted">
                Perito engenheiro eletricista cadastrado
              </p>
            </div>
            <div>
              <p className="stamp mb-2">Normas de referência</p>
              <p className="font-display text-2xl font-medium">NBR 5410</p>
              <p className="mt-1 text-xs text-ink-muted">
                NBR 5419:2026 · NR-10 · NR-12 · NR-35
              </p>
            </div>
            <div>
              <p className="stamp mb-2">Atuação</p>
              <p className="font-display text-2xl font-medium">Porto Alegre</p>
              <p className="mt-1 text-xs text-ink-muted">
                Canoas · Região Metropolitana
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG — últimos posts */}
      {posts.length > 0 && (
        <section className="border-b border-rule py-20">
          <div className="container-x">
            <div className="mb-10 flex items-end justify-between gap-6">
              <div>
                <p className="stamp mb-3">Do blog</p>
                <h2 className="font-display text-3xl font-medium tracking-tight">
                  Dúvidas frequentes e notas técnicas.
                </h2>
              </div>
              <Link href="/blog" className="text-sm font-medium text-tensao hover:text-tensao-lo">
                Ver todos →
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {posts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex flex-col rounded-lg border border-rule bg-white p-6 transition hover:border-tensao/60"
                >
                  <p className="fase mb-4">{p.area}</p>
                  <h3 className="font-display text-lg font-medium leading-snug tracking-tight transition group-hover:text-tensao">
                    {p.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm text-ink-soft">
                    {p.description}
                  </p>
                  <p className="mt-6 font-mono text-xs text-ink-muted">
                    {p.readingMinutes} min de leitura
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA FINAL */}
      <section className="py-20">
        <div className="container-x">
          <div className="rounded-2xl border border-tensao/20 bg-tensao-lo p-10 text-white md:p-16">
            <p className="font-mono text-xs uppercase tracking-tag text-white/60">
              Próximo passo
            </p>
            <h2 className="mt-3 font-display text-2xl font-medium leading-tight tracking-tight sm:text-3xl md:text-4xl">
              Precisa de laudo, ART, regularização ou perícia?
            </h2>
            <p className="mt-4 max-w-xl text-white/80">
              Descreva o cenário da sua empresa ou do seu caso. Devolvo com um
              plano concreto e um orçamento — sem compromisso.
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
                Solicitar orçamento
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
