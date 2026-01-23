/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import {
  type MotionValue,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const KEY_PREFIX_LENGTH = 3;

export type ScrollRevealParagraphProps = {
  paragraph: string;
  className?: string;
};

export default function ScrollRevealParagraph({
  paragraph,
  className = "",
}: ScrollRevealParagraphProps) {
  const container = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = paragraph.split(" ");

  return (
    <p className={`text-2xl leading-normal ${className}`} ref={container}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word
            key={`word-${i}-${word.slice(0, KEY_PREFIX_LENGTH)}`}
            progress={scrollYProgress}
            range={[start, end]}
          >
            {word}
          </Word>
        );
      })}
    </p>
  );
}

type WordProps = {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
};

const Word = ({ children, progress, range }: WordProps) => {
  const shouldReduceMotion = useReducedMotion();
  const chars = children.split("");

  const charStep =  (range[1] - range[0]) / chars.length;

  return (
    <span className="relative mr-2 inline-block whitespace-nowrap">
      {chars.map((char, i) => {
        const start = range[0] + i * charStep;
        const end = start + charStep;

        const opacity = useTransform(
          progress,
          [start, end],
          shouldReduceMotion ? [1, 1] : [0, 1],
        );

        return (
          <span key={`${char}-${i}`} className="relative inline-block">
            {!shouldReduceMotion && (
              <span className="text-foreground/10">{char}</span>
            )}
            <motion.span
              className="absolute inset-0 text-foreground"
              style={{ opacity }}
            >
              {char}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
};
