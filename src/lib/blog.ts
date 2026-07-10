import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  area: "Engenharia" | "Coaching" | "Docência" | "Reflexões";
  readingMinutes: number;
};

export type Post = PostMeta & { content: string };

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function estimateReading(text: string) {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  const posts: PostMeta[] = files.map((filename) => {
    const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf8");
    const { data, content } = matter(raw);
    const slug = filename.replace(/\.mdx?$/, "");
    return {
      slug,
      title: (data.title as string) ?? slug,
      description: (data.description as string) ?? "",
      date: (data.date as string) ?? "",
      area: (data.area as PostMeta["area"]) ?? "Reflexões",
      readingMinutes: estimateReading(content),
    };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: (data.title as string) ?? slug,
    description: (data.description as string) ?? "",
    date: (data.date as string) ?? "",
    area: (data.area as PostMeta["area"]) ?? "Reflexões",
    readingMinutes: estimateReading(content),
    content,
  };
}
