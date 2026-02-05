import { NextRequest } from "next/server";
import { getLLMText, source } from "@/lib/source";
import { notFound } from "next/navigation";

export const revalidate = false;

type Params = { slug?: string[] };

export async function GET(
  _req: NextRequest,
  context: { params: Promise<Params> }
) {
  const params = await context.params;
  const slug = params.slug ?? [];

  const page = source.getPage(slug);
  if (!page) notFound();

  return new Response(await getLLMText(page), {
    headers: { "Content-Type": "text/markdown" },
  });
}

export function generateStaticParams() {
  return source.generateParams();
}
