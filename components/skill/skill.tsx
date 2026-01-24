"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { BiLogoDjango, BiLogoPostgresql } from "react-icons/bi";
import { FaSass } from "react-icons/fa6";
import { GrReactjs } from "react-icons/gr";
import { IoLogoNodejs } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiClerk,
  SiDocker,
  SiExpo,
  SiExpress,
  SiFlask,
  SiGit,
  SiGithub,
  SiLinux,
  SiMongodb,
  SiPnpm,
  SiPrisma,
  SiRedux,
  SiTypescript,
  SiVercel,
  SiZod,
} from "react-icons/si";
import { TbBrandFramerMotion, TbBrandNextjs } from "react-icons/tb";
import { AuroraText } from "../vaibhav-ui/aurora-text";

const stack = [
  { icon: GrReactjs, name: "React", color: "#61DAFB" },
  { icon: TbBrandNextjs, name: "Next.js", color: "#ffffff" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: RiTailwindCssFill, name: "Tailwind", color: "#38BDF8" },
  { icon: TbBrandFramerMotion, name: "Motion", color: "#E879F9" },
  { icon: IoLogoNodejs, name: "Node.js", color: "#22C55E" },
  { icon: SiExpress, name: "Express.js", color: "#ffffff" },
  { icon: SiZod, name: "Zod", color: "#8B5CF6" },
  { icon: SiPnpm, name: "Pnpm", color: "#FBBF24" },
  { icon: SiGit, name: "Git", color: "#F97316" },
  { icon: SiGithub, name: "Github", color: "#ffffff" },
  { icon: SiVercel, name: "Vercel", color: "#ffffff" },
  { icon: SiExpo, name: "Expo", color: "#ffffff" },
  { icon: SiClerk, name: "Clerk", color: "#A855F7" },
  { icon: SiLinux, name: "Linux", color: "#FACC15" },
  { icon: SiFlask, name: "Flask", color: "#ffffff" },
  { icon: SiRedux, name: "Redux", color: "#764ABC" },
  { icon: BiLogoDjango, name: "Django", color: "#22C55E" },
  { icon: SiPrisma, name: "Prisma", color: "#ffffff" },
  { icon: SiMongodb, name: "MongoDB", color: "#22C55E" },
  { icon: BiLogoPostgresql, name: "PostgreSQL", color: "#38BDF8" },
  { icon: FaSass, name: "Sass", color: "#EC4899" },
  { icon: SiDocker, name: "Docker", color: "#38BDF8" },
];

export default function Skill() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 520]);
  const y = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden px-6"
    >
      <motion.div
        style={{ rotate, y, scale }}
        className="absolute top-[6%] w-100 h-100 opacity-70 transition-all duration-300 ease-out"
      >
        <Image
          src="/images/star-blob.png"
          alt=""
          fill
          className="object-contain drop-shadow-[0_0_80px_rgba(255,255,255,0.28)]"
        />

        <div className="absolute inset-[10%] bg-black/90 blur-[160px] rounded-full" />
      </motion.div>

      <div className="relative max-w-5xl w-full flex flex-col items-center text-center mt-50">
        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          <div className="w-[120%] h-[160%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.02)_40%,transparent_70%)] blur-[200px]" />
        </div>

        <span className="uppercase font-semibold text-base text-white/70 tracking-wider">
          My skillset
        </span>

        <h2 className="mt-4 text-6xl font-bold tracking-tight leading-tight">
          The Magic{" "}
          <AuroraText className="inline-block mt-1 font-extrabold">
            Behind
          </AuroraText>
        </h2>
      </div>

      <div className="relative z-10 mt-16 w-full max-w-4xl flex flex-wrap justify-center gap-4">
        {stack.map((skill, idx) => {
          const Icon = skill.icon;

          return (
            <div
              key={idx}
              style={{ "--glow": skill.color } as React.CSSProperties}
              className="
        group relative flex items-center gap-3 px-4 py-2.5
        rounded-xl border border-white/10 
        bg-white/5 backdrop-blur-xl
        cursor-pointer
        transition-all duration-500 ease-out
        hover:border-white/30 hover:-translate-y-1
        hover:shadow-[0_0_30px_-8px_var(--glow)]
      "
            >
              <div
                className="
          absolute inset-0 rounded-xl opacity-0
          blur-xl transition-opacity duration-500
          group-hover:opacity-100
        "
                style={{
                  background: `linear-gradient(120deg, transparent, ${skill.color}33, transparent)`,
                }}
              />

              <Icon
                className="relative z-10 h-5 w-5 transition-transform duration-500 group-hover:scale-110"
                style={{ color: skill.color }}
              />

              <span className="relative z-10 text-sm font-semibold tracking-wide text-white/80 group-hover:text-white">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
