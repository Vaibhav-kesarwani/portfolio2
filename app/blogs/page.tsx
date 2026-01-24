import Blog from "@/components/blog/blog";
import SectionMainText from "@/components/vaibhav-ui/section-main-text";
import { promises as fs } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import { mdxComponents } from "../mdx-components";

type BlogFrontmatter = {
  title: string;
  summary: string;
  date: string;
  readingTime: string;
  tags?: string[];
};

export default async function BlogPage() {
  const dir = path.join(process.cwd(), "content/blogs");
  const fileNames = await fs.readdir(dir);

  const blogs = await Promise.all(
    fileNames.map(async (filename) => {
      const filePath = path.join(dir, filename);
      const content = await fs.readFile(filePath, "utf-8");

      const { frontmatter } = await compileMDX<BlogFrontmatter>({
        source: content,
        options: { parseFrontmatter: true },
        components: mdxComponents,
      });

      return {
        slug: filename.replace(".mdx", ""),
        ...frontmatter,
      };
    }),
  );

  return (
    <section className="w-full flex flex-col items-center">
      <div className="min-h-screen w-full flex items-center justify-center px-6">
        <SectionMainText
          mainText="Blogs"
          secondText="Thoughts, tutorials, and"
          cursiveText="insights i share."
        />
      </div>

      <div className="w-full px-20 flex flex-col gap-5">
        <span className="text-3xl font-semibold text-white/70">
          Latest Posts
        </span>
        <Blog blogs={blogs} />
      </div>
    </section>
  );
}
