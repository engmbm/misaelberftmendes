import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-rule bg-white/40">
      <div className="container-x py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-display text-lg font-medium">
              Misael Berft Mendes
            </p>
            <p className="mt-2 max-w-md text-sm text-ink-soft">
              Engenheiro eletricista, coach criacional (IGT) e instrutor
              técnico. Atuação em Porto Alegre e região metropolitana.
            </p>
          </div>

          <div>
            <p className="stamp mb-3">Áreas</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/engenharia" className="hover:text-tensao">Engenharia</Link></li>
              <li><Link href="/coaching" className="hover:text-tensao">Coaching</Link></li>
              <li><Link href="/docencia" className="hover:text-tensao">Docência técnica</Link></li>
            </ul>
          </div>

          <div>
            <p className="stamp mb-3">Contato</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/contato" className="hover:text-tensao">Formulário</Link></li>
              <li>
                <a
                  href="https://wa.me/5551992387777"
                  target="_blank"
                  rel="noopener"
                  className="hover:text-tensao"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/misael-berftmendes"
                  target="_blank"
                  rel="noopener"
                  className="hover:text-tensao"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 rule-line" />

        <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-xs uppercase tracking-tag text-ink-muted">
            CREA-RS 251305 · Porto Alegre/RS · Canoas · Região Metropolitana
          </p>
          <p className="text-xs text-ink-muted">
            © {new Date().getFullYear()} Misael Berft Mendes
          </p>
        </div>
      </div>
    </footer>
  );
}
