"use client";

import { MousePointer2 } from "lucide-react";
import { useState } from "react";
import { PiStarFourFill } from "react-icons/pi";

const philosophy = {
  Motion: {
    title: "Micro-interactions",
    description: "Subtle movement that confirms intent — never distracting.",
  },
  Type: {
    title: "Typography",
    description: "Clean hierarchy and rhythm for effortless scanning.",
  },
  Feedback: {
    title: "Responsiveness",
    description: "Every hover, click, and focus gets a crisp response.",
  },
  Craft: {
    title: "Attention to detail",
    description: "Polish lives in the edges: spacing, timing, and states.",
  },
} as const;

type PhilosophyKey = keyof typeof philosophy;

export default function MainCard() {
  const [active, setActive] = useState<PhilosophyKey>("Motion");

  return (
    <div className="px-10 py-8 group h-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-5">
          <div className="relative flex h-8 w-8 items-center justify-center rounded-full border border-white/10">
            <MousePointer2 className="h-4 w-4 text-white/70" />
          </div>
          <span
            style={{
              fontFamily: "monospace",
            }}
            className="uppercase font-semibold text-sm"
          >
            detail-driven ui
          </span>
        </div>
        <div
          style={{
            fontFamily: "monospace",
          }}
          className="uppercase flex items-center justify-between font-semibold text-sm gap-2 text-white/40 group-hover:text-white/70 transition-all"
        >
          philosophy
          <PiStarFourFill className="h-4 w-4" />
        </div>
      </div>
      <div className="grid grid-cols-2 items-center align-middle mt-5">
        <div>
          <h2
            style={{
              fontFamily: "var(--font-cabinet)",
            }}
            className="text-5xl font-extrabold leading-tight text-white"
          >
            Interfaces
          </h2>
          <p
            style={{
              fontFamily: "cursive",
            }}
            className="text-4xl text-white/50 font-bold -mt-2"
          >
            you can feel.
          </p>

          <div
            style={{
              fontFamily: "system-ui",
            }}
            className="relative max-w-70 text-sm mt-5 text-white/50 font-semibold"
          >
            <span className="block group-hover:opacity-0 transition-all duration-300 ease-out group-hover:translate-y-2">
              I sweat spacing, timing, and feedback -
              <br />
              the tiny stuff.
            </span>
            <span className="absolute inset-0 opacity-0 translate-y-2  transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0">
              I strive to create digital experiences that
              <br />
              feel organic and humans, where every
              <br />
              pixel has a purpose.
            </span>
          </div>
        </div>
        <div className="flex flex-col items-end text-center">
          <div className="flex justify-center gap-1">
            {(Object.keys(philosophy) as PhilosophyKey[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                style={{
                  fontSize: "10px",
                }}
                className={`px-2 py-1 rounded-full border transition-all duration-300 cursor-pointer font-semibold
                  ${
                    active === tab
                      ? "border-white/30 text-purple-400 bg-white/5"
                      : "border-white/10 text-white/40 hover:text-white/70"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <br />

          <div className="relative w-full flex justify-end mt-5">
            <div
              key={active}
              className="absolute inset-0 flex flex-col items-end justify-center animate-fade"
            >
              <h3 className="text-white text-xs font-bold mb-2">
                {philosophy[active].title}
              </h3>
              <p
                style={{
                  fontSize: "10px",
                }}
                className="text-white/50 max-w-55 leading-relaxed  text-end font-semibold"
              >
                {philosophy[active].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
