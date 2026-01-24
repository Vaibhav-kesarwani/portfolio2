import { mdxComponents } from "@/app/mdx-components";
import ShareButton from "@/components/blog/share-button";
import { promises as fs } from "fs";
import { Calendar } from "lucide-react";
import { compileMDX } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import path from "path";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type BlogFrontmatter = {
  title: string;
  image?: string;
  summary?: string;
  date: string;
  tags?: string[];
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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);

    return date
      .toLocaleDateString("en-US", {
        month: "long",
        day: "2-digit",
        year: "numeric",
      })
      .replace(" ", " ");
  };

  return (
    <article className="max-w-3xl mx-auto py-32">
      <Link
        href="/blogs"
        className="group mb-10 inline-flex items-center gap-2 text-white/70 hover:text-white transition-all duration-300 ease-out group"
      >
        <FaArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-all duration-300 ease-out" />
        <span className="text-sm uppercase tracking-wider font-semibold">
          Back to blogs
        </span>
      </Link>

      {frontmatter.image && (
        <div className="relative w-full h-105 rounded-2xl overflow-hidden mb-10">
          <Image
            src={frontmatter.image}
            alt={frontmatter.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <div className="flex flex-wrap gap-2 mt-auto mb-5">
        {frontmatter.tags && frontmatter.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {frontmatter.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs border border-white/10 bg-white/3 text-white/90 font-semibold lowercase"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <h1
        style={{
          fontFamily: "system-ui",
        }}
        className="text-6xl font-semibold mb-6"
      >
        {frontmatter.title}
      </h1>
      <p className="text-xl font-medium text-white/60 mb-6">
        {frontmatter.summary}
      </p>

      <hr />

      <div className="my-8 flex items-center justify-between">
        <div className="flex items-center gap-2 text-white/60">
          <Calendar className="w-4 h-4" />
          <span className="text-sm font-medium">
            {formatDate(frontmatter.date)}
          </span>
        </div>
        <ShareButton />
      </div>

      <hr />

      <div className="prose prose-invert max-w-none mb-20">{mdxContent}</div>

      <hr />

      <div className="flex items-center gap-10 my-15 p-10 bg-white/2 border border-white/10 rounded-2xl group">
        <Image
          src={"/images/me.jpeg"}
          alt="me"
          width={100}
          height={100}
          className="rounded-full group-hover:-rotate-10 transition-all duration-300 ease-out border border-white"
        />
        <div>
          <h2 className="text-[1.5rem] font-bold">
            <span
              style={{
                fontFamily: "initial",
                fontSize: "1.5rem",
              }}
              className="text-white/50 font-semibold tracking-wide"
            >
              Author{" "}
            </span>
            Vaibhav Kesarwani
          </h2>
          <p className="mt-2 text-sm font-medium leading-relaxed text-white/60">
            Full Stack Developer & Designer. Obsessed with crafting pixel
            perfect, high performance web experiences that feel alive.
          </p>
          <Link
            href={"/about"}
            className="mt-4 flex items-center gap-1 justify-start text-emerald-500 group-hover:text-emerald-400 transition-all duration-300 ease-out"
          >
            <span className="text-sm font-semibold tracking-tighter">
              More about me
            </span>
            <FaArrowRight className="w-3 h-3 mt-[1] group-hover:translate-x-1 transition-all duration-300 ease-out" />
          </Link>
        </div>
      </div>
    </article>
  );
}
