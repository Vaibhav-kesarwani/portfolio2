import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ProjectCaseStudyFrontmatter } from "@/types/project";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Link } from "next-view-transitions";
import Image from "next/image";
import rehypePrism from "rehype-prism-plus";
import Github from "../svg/Github";
import Website from "../svg/Website";
import { ProjectComponents } from "./project-component";

interface ProjectContentProps {
  frontmatter: ProjectCaseStudyFrontmatter;
  content: string;
}

export function ProjectContent({ frontmatter, content }: ProjectContentProps) {
  const {
    title,
    description,
    image,
    technologies,
    github,
    live,
    timeline,
    role,
    team,
    status,
  } = frontmatter;

  const statusVariant =
    status === "completed"
      ? "default"
      : status === "in-progress"
        ? "secondary"
        : "outline";

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
          {/* Project Status and Technologies */}
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant={statusVariant} className="text-sm rounded-md">
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </Badge>
            {technologies.slice(0, 3).map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="text-xs rounded-md"
              >
                {tech}
              </Badge>
            ))}
            {technologies.length > 3 && (
              <Badge variant="outline" className="text-xs rounded-md">
                +{technologies.length - 3} more
              </Badge>
            )}
          </div>

          <h1 className="text-4xl leading-tight font-bold lg:text-5xl">
            {title}
          </h1>

          <p className="text-muted-foreground text-xl">{description}</p>

          {/* Project Meta Information */}
          <div className="bg-muted/20 grid gap-4 rounded-lg border p-4 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h5 className="text-muted-foreground text-sm font-semibold">
                Timeline
              </h5>
              <p className="text-sm">{timeline}</p>
            </div>
            <div>
              <h5 className="text-muted-foreground text-sm font-semibold">
                Role
              </h5>
              <p className="text-sm">{role}</p>
            </div>
            {team && (
              <div>
                <h5 className="text-muted-foreground text-sm font-semibold">
                  Team
                </h5>
                <p className="text-sm">{team}</p>
              </div>
            )}
            <div>
              <h5 className="text-muted-foreground text-sm font-semibold">
                Status
              </h5>
              <Badge variant={statusVariant} className="text-xs rounded-md">
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </Badge>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            {live && (
              <Button asChild>
                <Link
                  href={live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Website className="size-4" />
                  Live Demo
                </Link>
              </Button>
            )}
            {github && (
              <Button variant="outline" asChild>
                <Link
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="size-4" />
                  Source Code
                </Link>
              </Button>
            )}
          </div>
        </div>

        <Separator />
      </header>

      {/* Content */}
      <div className="max-w-none">
        <MDXRemote
          source={content}
          components={ProjectComponents}
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
