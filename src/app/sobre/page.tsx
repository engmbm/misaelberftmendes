import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre — Misael Berft Mendes",
  description:
    "Engenheiro eletricista CREA-RS 251305, coach criacional certificado pelo IGT, coordenador de tecnologia. Trajetória em metrologia, data center, IoT industrial e desenvolvimento humano.",
};

const trajetoria = [
  {
    periodo: "2026 →",
    empresa: "Coaching Levado a Sério",
    cargo: "Coach Criacional",
    local: "Brasil",
    descricao:
      "Marca própria de coaching. Atuação com profissionais que estão fazendo muito, mas sem resultado — clareza, estratégia e ação consistente para transformar esforço em resultado.",
  },
  {
    periodo: "2023 →",
    empresa: "Aépio",
    cargo: "Coordenador de Tecnologia",
    local: "Gravataí/RS",
    descricao:
      "Coordenação de equipe e projetos estratégicos de IoT para medidores inteligentes de água e gás. Telemetria via LoRaWAN e NB-IoT, protocolos de comunicação para medição, dispositivos embarcados e integração com plataformas em nuvem.",
  },
  {
    periodo: "2021 →",
    empresa: "Autônomo",
    cargo: "Engenheiro Eletricista",
    local: "Rio Grande do Sul",
    descricao:
      "Perícia judicial em ações elétricas, laudos técnicos, ARTs, responsabilidade técnica e regularização de empresas junto ao CREA. Aplicação da NBR 5410 e NBR 5419 em edificações residenciais, comerciais e industriais.",
  },
  {
    periodo: "2022 – 2023",
    empresa: "Altus Sistemas de Automação",
    cargo: "Projetista de Produto / Desenvolvedor de Hardware",
    local: "São Leopoldo/RS",
    descricao:
      "Manutenção de certificações internacionais (CE, UKCA, EAC, DNV, UL). Avaliação de fornecedores em ROHS e REACH, homologação de componentes eletrônicos, análise de PCNs e verificação de MTBF de produtos.",
  },
  {
    periodo: "2021 – 2022",
    empresa: "green4T",
    cargo: "Técnico de Serviços Continuados — Elétrica",
    local: "Porto Alegre/RS",
    descricao:
      "Manutenção preventiva e corretiva de infraestrutura elétrica em data center e sala cofre. Elaboração de Instruções Operacionais (IOP) e de Emergência (IOE) para operação contínua de missão crítica.",
  },
  {
    periodo: "2016 – 2021",
    empresa: "Instituto SENAI — Petróleo, Gás e Energia",
    cargo: "Técnico de Laboratório (Metrologia Legal)",
    local: "Esteio/RS",
    descricao:
      "Responsável técnico e da qualidade em laboratório acreditado NBR/ISO 17025. Signatário autorizado em calibração de sensores de temperatura, pressão e totalizadores de volume de gás, além de ensaios em medidores rotativos e de turbina.",
  },
];

const formacao = [
  {
    ano: "2026",
    curso: "Coach Criacional",
    instituicao: "IGT | International Coaching",
  },
  {
    ano: "2025",
    curso: "Especialização em Engenharia e Ciência de Dados",
    instituicao: "UNISINOS",
  },
  {
    ano: "2024",
    curso: "Especialização em Internet das Coisas (IoT)",
    instituicao: "Universidade Anhanguera",
  },
  {
    ano: "2021",
    curso: "Bacharelado em Engenharia Elétrica",
    instituicao: "UNISINOS",
  },
  {
    ano: "2013",
    curso: "Técnico em Mecatrônica / Automação Industrial",
    instituicao: "ULBRA",
  },
];

export default function SobrePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-rule py-20 md:py-24">
        <div className="container-x max-w-4xl">
          <p className="stamp mb-4">Sobre</p>
          <h1 className="font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
            Um engenheiro que também escuta.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-soft">
            Coach Criacional. Engenheiro Eletricista. Engenheiro de Dados. Três
            rótulos que descrevem partes de uma mesma prática: ajudar pessoas e
            sistemas a decidirem melhor.
          </p>
        </div>
      </section>

      {/* Bio narrativa */}
      <section className="border-b border-rule py-16">
        <div className="container-x max-w-3xl">
          <div className="space-y-6 text-lg leading-relaxed text-ink-soft">
            <p>
              Meu nome é Misael Berft Mendes. Sou engenheiro eletricista
              formado pela UNISINOS e registrado no CREA-RS sob o número
              251305, com pós-graduação em Internet das Coisas e em Engenharia
              e Ciência de Dados. Vivo em Canoas, na região metropolitana de
              Porto Alegre.
            </p>
            <p>
              Minha trajetória começou em metrologia rigorosa — calibrando
              medidores de gás sob a NBR/ISO 17025 no Instituto SENAI —,
              passou pela manutenção elétrica de data center e sala cofre, por
              projetos de hardware com certificações internacionais e chegou
              hoje à coordenação de tecnologia numa empresa de IoT industrial.
              Em paralelo, atuo como engenheiro eletricista autônomo em
              perícias judiciais, laudos e responsabilidade técnica.
            </p>
            <p>
              A frente humana veio depois: entendi que a maioria dos problemas
              técnicos que aparecem em obra ou em tribunal já foram, antes,
              problemas de <em>decisão</em>. Isso me levou ao IGT, onde me
              certifiquei como Coach Criacional e criei a{" "}
              <a
                href="https://www.linkedin.com/in/misael-berftmendes"
                className="text-tensao underline underline-offset-4 hover:text-tensao-lo"
              >
                Coaching Levado a Sério
              </a>
              , marca com a qual atendo profissionais que estão fazendo muito
              e obtendo pouco.
            </p>
            <p>
              Este site reúne as três frentes que sustento hoje —
              engenharia, coaching e docência técnica — porque, na prática,
              elas se atravessam mais do que separam.
            </p>
          </div>
        </div>
      </section>

      {/* Trajetória */}
      <section className="border-b border-rule py-20">
        <div className="container-x max-w-4xl">
          <p className="stamp mb-4">Trajetória</p>
          <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
            Do laboratório de metrologia à coordenação de tecnologia.
          </h2>

          <div className="mt-14 overflow-hidden rounded-lg border border-rule">
            {trajetoria.map((t, i) => (
              <div
                key={`${t.empresa}-${i}`}
                className={`grid gap-4 bg-white p-8 md:grid-cols-[120px_1fr] ${
                  i > 0 ? "border-t border-rule" : ""
                }`}
              >
                <p className="fase self-start">{t.periodo}</p>
                <div>
                  <p className="font-display text-lg font-medium tracking-tight">
                    {t.cargo}
                  </p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-tag text-ink-muted">
                    {t.empresa} · {t.local}
                  </p>
                  <p className="mt-4 text-sm text-ink-soft">{t.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formação */}
      <section className="border-b border-rule py-20">
        <div className="container-x max-w-4xl">
          <p className="stamp mb-4">Formação</p>
          <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
            Formação continuada entre engenharia, dados e desenvolvimento humano.
          </h2>

          <div className="mt-14 overflow-hidden rounded-lg border border-rule">
            {formacao.map((f, i) => (
              <div
                key={`${f.curso}-${i}`}
                className={`grid gap-4 bg-white p-8 md:grid-cols-[100px_1fr_1fr] ${
                  i > 0 ? "border-t border-rule" : ""
                }`}
              >
                <p className="fase self-start">{f.ano}</p>
                <p className="font-display text-lg font-medium tracking-tight">
                  {f.curso}
                </p>
                <p className="text-sm text-ink-soft self-center">
                  {f.instituicao}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credenciais */}
      <section className="py-20">
        <div className="container-x max-w-4xl">
          <p className="stamp mb-4">Registros e credenciais</p>
          <div className="mt-6 grid gap-px overflow-hidden rounded-lg border border-rule bg-rule">
            <div className="grid gap-4 bg-white p-8 md:grid-cols-[220px_1fr]">
              <p className="stamp">Registro profissional</p>
              <p className="text-ink">
                CREA-RS 251305 — Engenheiro Eletricista
              </p>
            </div>
            <div className="grid gap-4 bg-white p-8 md:grid-cols-[220px_1fr]">
              <p className="stamp">Coaching</p>
              <p className="text-ink">
                IGT — International Coaching. Coach Criacional certificado,
                capacitado em análise DISC.
              </p>
            </div>
            <div className="grid gap-4 bg-white p-8 md:grid-cols-[220px_1fr]">
              <p className="stamp">Normas técnicas</p>
              <p className="text-ink">
                NBR 5410, NBR 5419, NR-10, NR-12, NR-35, NBR/ISO 17025
                (metrologia).
              </p>
            </div>
            <div className="grid gap-4 bg-white p-8 md:grid-cols-[220px_1fr]">
              <p className="stamp">Certificações internacionais (trabalho)</p>
              <p className="text-ink">
                Experiência em manutenção de conformidade CE, UKCA, EAC, DNV,
                UL e diretivas ROHS / REACH.
              </p>
            </div>
            <div className="grid gap-4 bg-white p-8 md:grid-cols-[220px_1fr]">
              <p className="stamp">Idiomas</p>
              <p className="text-ink">
                Português (nativo). Inglês (leitura, escrita e comunicação
                profissional).
              </p>
            </div>
            <div className="grid gap-4 bg-white p-8 md:grid-cols-[220px_1fr]">
              <p className="stamp">Base</p>
              <p className="text-ink">
                Canoas / Porto Alegre / Região Metropolitana — Rio Grande do
                Sul.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
