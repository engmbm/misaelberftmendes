import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

const frentes = [
  {
    fase: "L1",
    slug: "/engenharia",
    titulo: "Engenharia",
    lead: "Laudos técnicos, perícia judicial, ART/RT e projetos elétricos.",
    para: "Síndicos, advogados, gestores prediais, profissionais de elétrica.",
    cta: "Ver serviços de engenharia",
  },
  {
    fase: "L2",
    slug: "/coaching",
    titulo: "Coaching",
    lead: "Metodologia IGT (Coaching Criacional) integrada com análise DISC.",
    para: "Profissionais em transição, líderes e equipes em desenvolvimento.",
    cta: "Conhecer a jornada",
  },
  {
    fase: "L3",
    slug: "/docencia",
    titulo: "Docência técnica",
    lead: "Aulas, NRs e treinamentos para instituições de ensino e empresas.",
    para: "Escolas técnicas, universidades corporativas, centros de formação.",
    cta: "Solicitar como instrutor",
  },
];

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* HERO — carimbo técnico + tese */}
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

          <h1 className="max-w-3xl font-display text-4xl font-medium leading-[1.15] tracking-tight md:text-5xl">
            Segurança elétrica, decisões conscientes e
            <span className="text-tensao"> formação técnica</span>.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-ink-soft">
            Uma prática que junta rigor de engenharia, escuta de coach e
            didática de instrutor — para condomínios, tribunais, empresas e
            instituições de ensino que precisam de decisão técnica com
            responsabilidade.
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
            <Link href="#frentes" className="btn-ghost">
              Ver as áreas de atuação
            </Link>
          </div>
        </div>
      </section>

      {/* FRENTES — L1 · L2 · L3 */}
      <section id="frentes" className="border-b border-rule py-20 md:py-24">
        <div className="container-x">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="stamp mb-3">Áreas de atuação</p>
              <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
                Três frentes, um mesmo compromisso.
              </h2>
            </div>
            <p className="hidden max-w-sm text-sm text-ink-muted md:block">
              A analogia é elétrica de propósito: cada linha atende um público
              diferente, mas todas partem da mesma fonte.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {frentes.map((f) => (
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
              <p className="stamp mb-2">Coaching</p>
              <p className="font-display text-2xl font-medium">IGT</p>
              <p className="mt-1 text-xs text-ink-muted">
                Coaching Criacional certificado · DISC
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
                  Notas técnicas e reflexões.
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
            <h2 className="mt-3 font-display text-3xl font-medium leading-tight tracking-tight md:text-4xl">
              Tem um caso, um projeto ou uma turma em vista?
            </h2>
            <p className="mt-4 max-w-xl text-white/80">
              Envie uma mensagem descrevendo o cenário. Se for do meu escopo,
              devolvo com um plano concreto; se não for, indico quem pode
              atender melhor.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-medium text-tensao-lo transition hover:bg-canvas"
              >
                Ir para o formulário
              </Link>
              <a
                href="https://wa.me/5551992387777"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-md border border-white/30 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Abrir WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
