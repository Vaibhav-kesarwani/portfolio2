"use client";

import { motion } from "framer-motion";

const words = [
  "future-proof",
  "seo-ready",
  "immersive",
  "protected",
  "dependable",
  "adaptive",
  "user-friendly",
  "captivating",
  "fluid",
];

export default function RibbonMarquee() {
  return (
    <div className="relative w-full h-65 overflow-hidden bg-black">
      <div className="absolute left-[-15%] right-[-15%] top-1/2 -translate-y-1/2 rotate-3">
        <div className="h-18 bg-linear-to-r from-red-800 via-red-700 to-red-800 opacity-60" />
      </div>

      <div className="absolute left-[-10%] right-[-10%] top-1/2 -translate-y-1/2 rotate-[-4deg] z-10">
        <div className="h-18 relative bg-linear-to-r from-red-700 via-red-600 to-red-700 py-6 shadow-[0_0_80px_rgba(255,0,0,0.45)]">
          <motion.div
            className="flex  whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
          >
            {[...words, ...words].map((word, i) => (
              <span
                key={i}
                className="flex items-center  text-white text-xl font-semibold tracking-[0.35em] uppercase"
              >
                <Star />
                {word}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function Star() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="white"
      className="w-5 h-5 drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] mx-4"
    >
      <path d="M12 2L14.9 9.1L22 12L14.9 14.9L12 22L9.1 14.9L2 12L9.1 9.1L12 2Z" />
    </svg>
  );
}
