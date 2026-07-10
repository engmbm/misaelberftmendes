import Link from "next/link";

const nav = [
  { href: "/engenharia", label: "Engenharia" },
  { href: "/coaching", label: "Coaching" },
  { href: "/docencia", label: "Docência" },
  { href: "/blog", label: "Blog" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule/70 bg-canvas/85 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
          aria-label="Página inicial"
        >
          <span className="grid h-8 w-8 place-items-center rounded-md bg-tensao text-white text-[13px] font-medium font-display">
            MB
          </span>
          <span className="font-display text-[15px] font-medium tracking-tight">
            Misael Berft Mendes
          </span>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-7 text-sm text-ink-soft">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
