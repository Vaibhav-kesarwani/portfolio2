import { LLMCopyButton, ViewOptions } from "@/components/ai/page-actions";
import { Contributor } from "@/components/docs/contributor";
import { LastModified } from "@/components/docs/last-modified";
import { getPageImage, source } from "@/lib/source";
import { getMDXComponents } from "@/mdx-components";
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/layouts/docs/page";
import { createRelativeLink } from "fumadocs-ui/mdx";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export default async function Page(props: PageProps<"/docs/[[...slug]]">) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  // const lastModifiedTime = await getGithubLastEdit({
  //   owner: "Vaibhav-kesarwani",
  //   repo: "portfolio2",
  //   path: `content/docs/${page.path}`,
  // });

  // Access lastModified from page data (available when lastModifiedTime: 'git' is enabled)
  const lastModified = (page.data as { lastModified?: number }).lastModified;

  const MDX = page.data.body;
  const gitConfig = {
    user: "Vaibhav-kesarwani",
    repo: "portfolio",
    branch: "main",
  };

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      tableOfContent={{
        style: "clerk",
        footer: <Contributor />,
      }}
    >
      <DocsTitle className="text-4xl font-bold">{page.data.title}</DocsTitle>
      <DocsDescription className="mb-0 text-base font-medium">
        {page.data.description}
      </DocsDescription>
      <div className="flex flex-wrap items-center gap-2 border-b pt-2 pb-6">
        <LLMCopyButton markdownUrl={`${page.url}.mdx`} />
        <ViewOptions
          markdownUrl={`${page.url}.mdx`}
          githubUrl={`https://github.com/${gitConfig.user}/${gitConfig.repo}/blob/${gitConfig.branch}/docs/content/docs/${page.path}`}
        />

        {lastModified && (
          <LastModified
            className="order-last w-full pt-2 sm:order-0 sm:ml-auto sm:w-auto sm:pt-0 font-semibold"
            lastModified={lastModified}
          />
        )}
      </div>
      <DocsBody>
        <MDX
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(
  props: PageProps<"/docs/[[...slug]]">,
): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const image = {
    url: getPageImage(page).url,
    width: 1200,
    height: 630,
  };

  return {
    title: page.data.title + " | Lab's UI",
    description: page.data.description ?? "Modern Component's by Vaibhav",
    openGraph: {
      url: `/docs/${page.slugs.join("/")}`,
      images: [image],
    },
    twitter: {
      images: [image],
    },
  };
}
