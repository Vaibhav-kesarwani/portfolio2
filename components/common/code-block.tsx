"use client";

import { useEffect, useRef, useState } from "react";
import { Copy, Check } from "lucide-react";
import Prism from "prismjs";

import "prismjs/components/prism-typescript";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-json";
import "prismjs/components/prism-bash";

type Props = {
  code: string;
  language?: string;
  filename?: string;
};

export default function CodeBlock({
  code,
  language = "typescript",
  filename,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && ref.current) {
      Prism.highlightElement(ref.current);
    }
  }, [mounted, code, language]);

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  if (!mounted) {
    return (
      <div className="relative my-6 overflow-hidden rounded-xl border border-white/10 bg-linear-to-br from-zinc-900/80 to-black/80 shadow-xl backdrop-blur">
        <div className="flex items-center justify-between border-b border-white/10 bg-black/40 px-4 py-2 text-xs text-white/70">
          <div className="flex items-center gap-2">
            {filename && (
              <span className="rounded bg-white/10 px-2 py-0.5 text-[11px]">
                {filename}
              </span>
            )}
            <span className="uppercase tracking-wide text-blue-400">
              {language}
            </span>
          </div>
        </div>

        <pre className="overflow-x-auto px-4 py-3 text-sm">
          <code ref={ref} className={`language-${language}`}>
            {code}
          </code>
        </pre>
      </div>
    );
  }

  return (
    <div className="relative my-3 overflow-hidden rounded-xl border border-white/10 bg-linear-to-br from-zinc-900/80 to-black/80 shadow-xl backdrop-blur">
      <div className="flex items-center justify-between border-b border-white/10 bg-black/40 px-5 py-3 text-xs text-white/70">
        <div className="flex items-center gap-2">
          {filename && (
            <span className="rounded bg-white/10 px-2 py-0.5 text-[14px]">
              {filename}
            </span>
          )}
          <span className="uppercase tracking-wide text-blue-400">
            {language}
          </span>
        </div>

        <button
          onClick={copy}
          className="flex items-center gap-1 rounded-md bg-white/10 px-2 py-1 text-[11px] text-white transition hover:bg-white/20"
        >
          {copied ? (
            <>
              <Check className="size-3 text-green-400" />
              Copied
            </>
          ) : (
            <>
              <Copy className="size-3" />
              Copy
            </>
          )}
        </button>
      </div>

      <pre className="overflow-x-auto px-5 pb-3 text-base">
        <code ref={ref} className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  );
}
