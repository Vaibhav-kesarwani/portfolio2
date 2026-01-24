"use client";

import { AuroraText } from "./aurora-text";
import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";

export default function GithubStats() {
  return (
    <div className="mt-20">
      <div className="w-full flex justify-center px-6">
        <div className="max-w-5xl w-full flex flex-col items-center text-center">
          <span className="uppercase font-semibold text-base text-white/50 tracking-wider">
            My Code Journey
          </span>

          <h2 className="mt-4 text-6xl font-bold tracking-tight leading-tight">
            GitHub Activity <br />
            <AuroraText className="inline-block font-extrabold">
              && Open Source
            </AuroraText>
          </h2>
        </div>
      </div>

      {/* Scroll-reveal animation */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="mt-20 flex justify-center"
      >
        <GitHubCalendar username="Vaibhav-kesarwani" />
      </motion.div>
    </div>
  );
}
