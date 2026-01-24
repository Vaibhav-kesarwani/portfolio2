import { mdxComponents } from "@/app/mdx-components";
import { promises as fs } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import path from "path";

type BlogFrontmatter = {
  title: string;
  image?: string;
  description?: string;
  date?: string;
};

export default async function BlogSlug({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const filePath = path.join(process.cwd(), "content/blogs", `${slug}.mdx`);
  const content = await fs.readFile(filePath, "utf-8");

  const { content: mdxContent, frontmatter } =
    await compileMDX<BlogFrontmatter>({
      source: content,
      options: { parseFrontmatter: true },
      components: mdxComponents,
    });

  return (
    <article className="max-w-3xl mx-auto py-32">
      <Link
        href="/blogs"
        className="group mb-10 inline-flex items-center gap-3 text-white/70 hover:text-white transition"
      >
        <span className="text-2xl group-hover:-translate-x-1 transition-transform">
          ←
        </span>
        <span className="text-sm uppercase tracking-wider font-semibold">
          Back to blogs
        </span>
      </Link>

      {frontmatter.image && (
        <div className="relative w-full h-105 rounded-xl overflow-hidden mb-10">
          <Image
            src={frontmatter.image}
            alt={frontmatter.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <h1 className="text-5xl font-bold mb-6">{frontmatter.title}</h1>

      <div className="prose prose-invert max-w-none">{mdxContent}</div>
    </article>
  );
}
