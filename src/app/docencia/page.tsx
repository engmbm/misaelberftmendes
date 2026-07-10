import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Docência técnica — professor de elétrica, NRs e treinamentos",
  description:
    "Engenheiro eletricista disponível como instrutor para escolas técnicas, universidades corporativas e centros de formação. NR-10, NR-12, NR-35, elétrica básica e avançada.",
};

const areas = [
  {
    tag: "NR",
    titulo: "Normas regulamentadoras",
    lista: ["NR-10 (segurança em elétrica)", "NR-12 (máquinas e equipamentos)", "NR-35 (trabalho em altura)"],
  },
  {
    tag: "TEC",
    titulo: "Elétrica técnica",
    lista: [
      "Instalações prediais (NBR 5410)",
      "SPDA (NBR 5419:2026)",
      "Dimensionamento e leitura de projeto",
      "Manutenção preventiva e corretiva",
    ],
  },
  {
    tag: "FOR",
    titulo: "Formação inicial",
    lista: [
      "Eletricista instalador — iniciantes",
      "Interpretação de diagramas",
      "Ferramentas, medições e boas práticas de obra",
    ],
  },
];

export default function DocenciaPage() {
  return (
    <>
      <section className="border-b border-rule py-20 md:py-24">
        <div className="container-x">
          <p className="fase mb-4">L3 · Docência técnica</p>
          <h1 className="max-w-3xl font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
            Instrutor técnico para instituições que formam eletricistas.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-soft">
            Sou engenheiro eletricista disponível como professor contratado
            para ministrar aulas, treinamentos e cursos abertos ou <em>in
            company</em>. Trabalho com material didático próprio da instituição
            quando ele existe, e crio o conteúdo do zero quando é necessário.
          </p>
        </div>
      </section>

      <section className="border-b border-rule py-20">
        <div className="container-x">
          <p className="stamp mb-6">Como funciona</p>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-rule bg-white p-6">
              <p className="fase mb-4">Etapa 1</p>
              <h3 className="font-display text-lg font-medium tracking-tight">
                Briefing da turma
              </h3>
              <p className="mt-3 text-sm text-ink-soft">
                Perfil dos alunos, carga horária, objetivos de aprendizagem,
                material existente (se houver) e formato — presencial, online
                ou híbrido.
              </p>
            </div>
            <div className="rounded-lg border border-rule bg-white p-6">
              <p className="fase mb-4">Etapa 2</p>
              <h3 className="font-display text-lg font-medium tracking-tight">
                Ajuste ou criação de conteúdo
              </h3>
              <p className="mt-3 text-sm text-ink-soft">
                Adapto o material da instituição ao público e ao tempo
                disponível — ou desenvolvo apostila, slides e roteiro prático
                do zero quando não existe base.
              </p>
            </div>
            <div className="rounded-lg border border-rule bg-white p-6">
              <p className="fase mb-4">Etapa 3</p>
              <h3 className="font-display text-lg font-medium tracking-tight">
                Aulas e avaliação
              </h3>
              <p className="mt-3 text-sm text-ink-soft">
                Execução das aulas com foco em prática e situação real de
                obra, avaliações consistentes com o objetivo do curso e
                relatório final para a instituição.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x">
          <p className="stamp mb-6">Áreas que ministro</p>
          <div className="grid gap-4 md:grid-cols-3">
            {areas.map((a) => (
              <div key={a.tag} className="card">
                <p className="fase mb-4">{a.tag}</p>
                <h3 className="font-display text-xl font-medium tracking-tight">
                  {a.titulo}
                </h3>
                <ul className="mt-6 space-y-2 text-sm text-ink-soft">
                  {a.lista.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-px w-3 flex-none bg-tensao" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap gap-3">
            <Link href="/contato" className="btn-primary">
              Solicitar proposta como instrutor
            </Link>
            <Link href="/sobre" className="btn-ghost">
              Ver formação e experiência
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
