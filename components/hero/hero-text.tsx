"use client";

import { easeOut, motion } from "framer-motion";
import { Layers, MapPin } from "lucide-react";
import HeroCtaCard from "../vaibhav-ui/hero-cta-card";

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

export default function HeroText() {
  return (
    <section className="flex h-screen flex-col items-center px-6">
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
          className="tracking-normal"
        >
          Vaibhav
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
          I design and build products that
        </motion.div>

        <motion.div
          variants={item}
          style={{
            fontFamily: "cursive",
            fontSize: "70px",
          }}
          className="tracking-tighter font-medium"
        >
          deliver real impact.
        </motion.div>
      </motion.div>

      <div className="mb-12 flex w-full justify-between">
        <HeroCtaCard
          icon={MapPin}
          iconColor="text-green-500"
          mainText="Based in Prayagraj,"
          secondText="INDIA"
        />

        <HeroCtaCard
          icon={Layers}
          iconColor="text-blue-500"
          mainText="Full Stack Dev,"
          secondText="& Designer"
        />
      </div>
    </section>
  );
}
