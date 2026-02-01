"use client";

import { Check, Copy, Terminal } from "lucide-react";
import { isValidElement, ReactElement, ReactNode, useState } from "react";

type CodeElementProps = {
  children?: ReactNode;
  className?: string;
  ["data-language"]?: string;
  ["data-title"]?: string;
};

type Props = {
  children: ReactNode;
  className?: string;
};

function hasChildren(
  node: ReactNode,
): node is ReactElement<{ children?: ReactNode }> {
  return isValidElement(node);
}

function getText(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(getText).join("");
  if (hasChildren(node)) return getText(node.props.children);
  return "";
}

function isCodeElement(
  node: ReactNode,
): node is ReactElement<CodeElementProps> {
  return isValidElement(node) && node.type === "code";
}

export default function CodeBlock({ children, className }: Props) {
  const [copied, setCopied] = useState(false);

  const codeEl = isCodeElement(children) ? children : null;

  if (!codeEl) return null;

  const code = getText(codeEl.props.children);

  const lang =
    codeEl.props["data-language"] ??
    codeEl.props.className?.replace("language-", "") ??
    "";

  const title = codeEl.props["data-title"] ?? "";

  const copy = async () => {
    if (!code) return;
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      className={`relative my-6 overflow-hidden rounded-xl border border-white/10 bg-zinc-900/60 shadow-xl ${
        className ?? ""
      }`}
    >
      {(title || lang) && (
        <div className="flex items-center justify-between border-b border-white/10 bg-black/40 px-3 py-2 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <Terminal className="size-3.5 text-zinc-500" />
            {title && <span className="text-zinc-200">{title}</span>}
            {lang && (
              <span className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] uppercase text-zinc-300">
                {lang}
              </span>
            )}
          </div>

          <button
            onClick={copy}
            className="flex items-center gap-1 rounded-md px-2 py-1 transition hover:bg-white/10"
          >
            {copied ? (
              <>
                <Check className="size-3.5 text-green-400" />
                <span className="text-green-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="size-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      )}

      <pre className="overflow-x-auto p-4 text-sm leading-relaxed text-zinc-200">
        {children}
      </pre>
    </div>
  );
}
