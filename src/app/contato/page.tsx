import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Envie uma mensagem para Misael Berft Mendes — engenharia, coaching ou docência técnica. Atendimento em Porto Alegre e região.",
};

const areas = [
  "Engenharia — Laudo técnico",
  "Engenharia — Perícia judicial",
  "Engenharia — ART / RT",
  "Engenharia — Projeto elétrico",
  "Coaching — Diagnóstico DISC",
  "Docência — Aula avulsa ou curso",
  "Outro",
];

export default function ContatoPage() {
  return (
    <section className="py-20 md:py-24">
      <div className="container-x grid gap-16 md:grid-cols-[1fr_2fr]">
        <div>
          <p className="stamp mb-4">Contato</p>
          <h1 className="font-display text-4xl font-medium leading-tight tracking-tight">
            Vamos conversar.
          </h1>
          <p className="mt-6 text-ink-soft">
            Descreva rapidamente o cenário e a área de interesse. Respondo em
            até 24 horas úteis.
          </p>

          <div className="mt-10 space-y-6">
            <div>
              <p className="stamp mb-1">WhatsApp</p>
              <a
                href="https://wa.me/5551992387777"
                target="_blank"
                rel="noopener"
                className="text-tensao hover:text-tensao-lo"
              >
                +55 51 9 9238-7777
              </a>
            </div>
            <div>
              <p className="stamp mb-1">Email</p>
              <a
                href="mailto:eng.misaelbm@outlook.com"
                className="text-tensao hover:text-tensao-lo"
              >
                eng.misaelbm@outlook.com
              </a>
            </div>
            <div>
              <p className="stamp mb-1">Registro profissional</p>
              <p className="font-mono text-sm">CREA-RS 251305</p>
            </div>
          </div>
        </div>

        <form
          action="https://formspree.io/f/SEU_ENDPOINT"
          method="POST"
          className="rounded-lg border border-rule bg-white p-8"
        >
          <div className="grid gap-6">
            <div>
              <label htmlFor="nome" className="stamp mb-2 block">
                Nome
              </label>
              <input
                id="nome"
                name="nome"
                required
                className="w-full rounded-md border border-rule bg-canvas px-4 py-2.5 text-sm outline-none focus:border-tensao"
              />
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="email" className="stamp mb-2 block">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-md border border-rule bg-canvas px-4 py-2.5 text-sm outline-none focus:border-tensao"
                />
              </div>
              <div>
                <label htmlFor="telefone" className="stamp mb-2 block">
                  Telefone
                </label>
                <input
                  id="telefone"
                  name="telefone"
                  className="w-full rounded-md border border-rule bg-canvas px-4 py-2.5 text-sm outline-none focus:border-tensao"
                />
              </div>
            </div>
            <div>
              <label htmlFor="area" className="stamp mb-2 block">
                Área de interesse
              </label>
              <select
                id="area"
                name="area"
                className="w-full rounded-md border border-rule bg-canvas px-4 py-2.5 text-sm outline-none focus:border-tensao"
              >
                {areas.map((a) => (
                  <option key={a}>{a}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="mensagem" className="stamp mb-2 block">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows={5}
                required
                className="w-full rounded-md border border-rule bg-canvas px-4 py-2.5 text-sm outline-none focus:border-tensao"
              />
            </div>
            <button type="submit" className="btn-primary self-start">
              Enviar mensagem
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
