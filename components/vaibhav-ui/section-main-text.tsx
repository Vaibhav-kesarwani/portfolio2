"use client";

import { easeOut, motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      ease: easeOut,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easeOut,
    },
  },
};

interface SectionMainTextProps {
  mainText: string;
  secondText: string;
  cursiveText: string;
}

export default function SectionMainText({
  mainText,
  secondText,
  cursiveText,
}: SectionMainTextProps) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-1 flex-col items-center justify-center"
    >
      <motion.div
        variants={item}
        style={{
          fontFamily: "var(--font-cabinet)",
          fontSize: "200px",
          fontWeight: 900,
        }}
        className="tracking-normal uppercase"
      >
        {mainText}
      </motion.div>

      <motion.div
        variants={item}
        style={{
          fontFamily: "sans-serif",
          fontSize: "25px",
          letterSpacing: "5px",
        }}
        className="uppercase -mt-10 font-normal text-white/30"
      >
        {secondText}
      </motion.div>

      <motion.div
        variants={item}
        style={{
          fontFamily: "cursive",
          fontSize: "70px",
        }}
        className="tracking-tighter font-medium"
      >
        {cursiveText}
      </motion.div>
    </motion.div>
  );
}
