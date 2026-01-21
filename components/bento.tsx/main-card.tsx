import { MousePointer2 } from "lucide-react";
import { PiStarFourFill } from "react-icons/pi";

export default function MainCard() {
  return (
    <div className="px-10 py-8">
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
          className="uppercase flex items-center justify-between font-semibold text-sm gap-2"
        >
          philosophy
          <PiStarFourFill className="h-4 w-4" />
        </div>
      </div>
      <div className="mt-10">
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
      </div>
    </div>
  );
}
