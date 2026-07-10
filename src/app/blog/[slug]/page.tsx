import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPost } from "@/lib/blog";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
  };
}

const mdxComponents = {
  h1: (p: React.ComponentProps<"h1">) => (
    <h1
      className="mt-12 font-display text-3xl font-medium leading-tight tracking-tight"
      {...p}
    />
  ),
  h2: (p: React.ComponentProps<"h2">) => (
    <h2
      className="mt-12 font-display text-2xl font-medium leading-tight tracking-tight"
      {...p}
    />
  ),
  h3: (p: React.ComponentProps<"h3">) => (
    <h3
      className="mt-10 font-display text-xl font-medium tracking-tight"
      {...p}
    />
  ),
  p: (p: React.ComponentProps<"p">) => (
    <p className="mt-6 leading-relaxed text-ink-soft" {...p} />
  ),
  ul: (p: React.ComponentProps<"ul">) => (
    <ul className="mt-6 space-y-2 pl-5 list-disc marker:text-tensao text-ink-soft" {...p} />
  ),
  a: (p: React.ComponentProps<"a">) => (
    <a
      className="text-tensao underline underline-offset-4 hover:text-tensao-lo"
      {...p}
    />
  ),
  blockquote: (p: React.ComponentProps<"blockquote">) => (
    <blockquote
      className="mt-8 border-l-2 border-tensao pl-6 italic text-ink"
      {...p}
    />
  ),
  code: (p: React.ComponentProps<"code">) => (
    <code
      className="rounded bg-canvas px-1.5 py-0.5 font-mono text-sm text-tensao"
      {...p}
    />
  ),
};

export default async function PostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="py-20 md:py-24">
      <div className="container-x max-w-3xl">
        <Link
          href="/blog"
          className="stamp inline-block hover:text-tensao"
        >
          ← Voltar ao blog
        </Link>

        <p className="fase mt-10">{post.area}</p>
        <h1 className="mt-3 font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
          {post.title}
        </h1>
        <p className="mt-4 text-lg text-ink-soft">{post.description}</p>

        <div className="mt-6 flex items-center gap-4 font-mono text-xs uppercase tracking-tag text-ink-muted">
          <span>{post.date}</span>
          <span className="text-rule">·</span>
          <span>{post.readingMinutes} min de leitura</span>
        </div>

        <div className="mt-4 rule-line" />

        <div className="mt-2">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>
      </div>
    </article>
  );
}
