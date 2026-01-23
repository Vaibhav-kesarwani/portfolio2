"use client";

import confetti from "canvas-confetti";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

export default function ContactCard() {
  const email = "hello@vaibhav.in";
  const emailRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);

    const rect = emailRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { x, y },
    });

    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="p-8 group">
      <div className="flex items-center justify-between">
        <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10">
          <div
            className="absolute inset-2 rounded-full border border-white/30 transition-all duration-500 ease-out
  [clip-path:inset(0_0_50%_0)]
  group-hover:[clip-path:inset(0_0_0_0)] group-hover:border-white"
          />

          <div className="h-2 w-2 rounded-full bg-white" />
        </div>
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white">
          <div className="relative flex h-3 w-3 items-center justify-center">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            <span className="absolute inset-0 animate-ping rounded-full bg-green-500 opacity-75" />
          </div>
          Available for work
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-3xl font-extrabold leading-tight text-white">
          LET&apos;S BUILD
          <br />
          SOMETHING
        </h2>
        <p
          style={{
            fontFamily: "cursive",
          }}
          className="mt-1 font-serif text-2xl italic text-white/50"
        >
          that actually works.
        </p>
      </div>
      <div className="relative my-4 h-px w-full bg-white/10" />
      <div
        ref={emailRef}
        onClick={copyEmail}
        className="group relative z-10 flex cursor-pointer flex-col items-center text-center mt-10"
      >
        <div className="flex items-center gap-3">
          <div
            className={`rotate-45 flex h-4 w-4 items-center justify-center
          border transition-all duration-500
          [clip-path:polygon(25%_0%,75%_0%,100%_25%,100%_75%,75%_100%,25%_100%,0%_75%,0%_25%)]
          ${
            copied
              ? "border-green-500"
              : "border-white/70 group-hover:border-white group-hover:animate-spin"
          }`}
          >
            <div
              className={`h-2 w-2 rounded-full transition-colors ${
                copied ? "bg-green-500" : "bg-white/70 group-hover:bg-white"
              }`}
            />
          </div>

          <span
            style={{ fontFamily: "cursive" }}
            className="text-2xl font-semibold tracking-wide text-white"
          >
            {email}
          </span>
        </div>

        <p className="mt-3 text-[10px] tracking-[0.3em] text-white/50 uppercase font-semibold">
          {copied ? "COPIED!" : "TAP TO COPY EMAIL"}
        </p>
      </div>
      <div className="mt-15">
        <Link
          href={"mailto:vaibhavkesarwani100@gmail.com"}
          style={{
            fontFamily: "monospace",
          }}
          className="tracking-widest uppercase text-base flex w-full items-center justify-center gap-3 rounded-full bg-white py-3 font-bold text-black hover:bg-white/90 transition cursor-pointer"
        >
          connect now <MoveUpRight className="h-5 w-5 stroke-2" />
        </Link>
      </div>
    </div>
  );
}
