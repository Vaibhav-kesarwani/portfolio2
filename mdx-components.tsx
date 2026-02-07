/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Twoslash from "fumadocs-twoslash/ui";
import {
  createFileSystemGeneratorCache,
  createGenerator,
} from "fumadocs-typescript";
import { AutoTypeTable } from "fumadocs-typescript/ui";
import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import { Step, Steps } from "fumadocs-ui/components/steps";
import * as TabsComponents from "fumadocs-ui/components/tabs";
import defaultComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { ChangelogEntry } from "./components/docs/changelog-entry";
import { Bold } from "./components/mdx/bold";
import { ButtonDependency } from "./components/mdx/button-dependeny";
import { ComponentPreview } from "./components/mdx/component-preview";
import ComponentSource from "./components/mdx/component-source";
import Sponsor from "./components/mdx/sponsor";

const generator = createGenerator({
  // set a cache, necessary for serverless platform like Vercel
  cache: createFileSystemGeneratorCache(".next/fumadocs-typescript"),
});

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    ...Twoslash,
    ...TabsComponents,
    // ...registryExamples,
    ComponentPreview,
    ComponentSource,
    ButtonDependency,
    Accordion,
    Accordions,
    ChangelogEntry,
    Steps,
    Step,
    Sponsor,
    AutoTypeTable: (props) => (
      <AutoTypeTable {...props} generator={generator} />
    ),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    pre: ({ ref: _ref, ...props }) => (
      <CodeBlock {...props}>
        <Pre>{props.children}</Pre>
      </CodeBlock>
    ),
    img: (props) => <ImageZoom {...(props as any)} />,
    strong: (props: any) => <Bold {...props} />,
    b: (props: any) => <Bold {...props} />,
    ...components,
  };
}
