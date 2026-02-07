import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";
import { registryExamples } from "@/registry/index";

type RegistryKey = keyof typeof registryExamples;

export default function ComponentSource({ name }: { name: RegistryKey }) {
  const item = registryExamples[name];

  if (!item) return null;

  return (
    <div className="relative w-full p-2">
      <div className="overflow-hidden rounded-xl border border-border/40 bg-card/70 shadow-sm">
        <DynamicCodeBlock
          lang="tsx"
          code={item.source}
          options={{
            themes: {
              light: "github-light",
              dark: "github-dark",
            },
          }}
        />
      </div>
    </div>
  );
}
