import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — notas técnicas e reflexões",
  description:
    "Textos sobre engenharia elétrica, coaching criacional e formação técnica.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="py-20 md:py-24">
      <div className="container-x">
        <p className="stamp mb-4">Blog</p>
        <h1 className="font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
          Notas técnicas e reflexões.
        </h1>
        <p className="mt-4 max-w-xl text-ink-soft">
          Textos que atravessam engenharia, coaching e formação — porque na
          prática esses três mundos conversam mais do que parece.
        </p>

        <div className="mt-16 space-y-px overflow-hidden rounded-lg border border-rule bg-rule">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="grid gap-4 bg-white p-8 transition hover:bg-canvas md:grid-cols-[160px_1fr_120px]"
            >
              <p className="fase self-start">{p.area}</p>
              <div>
                <h2 className="font-display text-xl font-medium tracking-tight">
                  {p.title}
                </h2>
                <p className="mt-2 text-sm text-ink-soft">{p.description}</p>
              </div>
              <p className="font-mono text-xs text-ink-muted md:text-right">
                {p.readingMinutes} min · {p.date}
              </p>
            </Link>
          ))}
          {posts.length === 0 && (
            <div className="bg-white p-8 text-sm text-ink-muted">
              Nenhum post publicado ainda.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
