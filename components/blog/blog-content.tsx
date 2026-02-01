import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { BlogFrontmatter } from "@/types/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import rehypePrism from "rehype-prism-plus";
import Calender from "../svg/Calender";
import { BlogComponents } from "./blog-component";

interface BlogContentProps {
  frontmatter: BlogFrontmatter;
  content: string;
}

export function BlogContent({ frontmatter, content }: BlogContentProps) {
  const { title, description, image, tags, date } = frontmatter;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="mx-auto max-w-4xl">
      {/* Hero Section */}
      <header className="mb-8 space-y-6">
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="rounded-md">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-4xl leading-tight font-bold lg:text-5xl">
            {title}
          </h1>

          <p className="text-muted-foreground text-xl">{description}</p>

          <div className="text-muted-foreground flex items-center gap-2 text-sm">
            <Calender className="size-6" />
            <time dateTime={date}>{formattedDate}</time>
          </div>
        </div>

        <Separator />
      </header>

      {/* Content */}
      <div className="max-w-none">
        <MDXRemote
          source={content}
          components={BlogComponents}
          options={{
            mdxOptions: {
              remarkPlugins: [],
              rehypePlugins: [
                [
                  rehypePrism,
                  {
                    theme: "github-dark",
                  },
                ],
              ],
              format: "mdx",
            },
          }}
        />
      </div>
    </article>
  );
}
