import { RootProvider } from "fumadocs-ui/provider/next";
import type { ReactNode } from "react";

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex flex-col min-h-screen">
      <RootProvider>{children}</RootProvider>
    </main>
  );
}
