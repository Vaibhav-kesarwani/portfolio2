import { registryExamples } from "@/registry/index";
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";

type RegistryKey = keyof typeof registryExamples;

export function ComponentPreview({ name }: { name: RegistryKey }) {
  const item = registryExamples[name];

  if (!item) return null;

  const Component = item.component;

  return (
    <Tabs items={["Preview", "Code"]}>
      <Tab value="Preview">
        <div className="relative flex min-h-87.5 w-full items-center justify-center p-10">
          <Component />
        </div>
      </Tab>

      <Tab value="Code">
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
      </Tab>
    </Tabs>
  );
}
