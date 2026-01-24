"use client";

import { MapPin } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiLogoDjango, BiLogoPostgresql } from "react-icons/bi";
import { FaSass } from "react-icons/fa6";
import { GrReactjs } from "react-icons/gr";
import { IoLogoNodejs } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiDocker,
  SiExpress,
  SiFlask,
  SiGithub,
  SiLinkedin,
  SiMongodb,
  SiPrisma,
  SiRedux,
  SiTypescript,
  SiX,
} from "react-icons/si";
import { TbBrandFramerMotion, TbBrandNextjs } from "react-icons/tb";
import InfiniteSlider from "../vaibhav-ui/infinite-slider";

const stack = [
  {
    icon: GrReactjs,
    name: "React",
  },
  {
    icon: TbBrandNextjs,
    name: "Next.js",
  },
  {
    icon: SiTypescript,
    name: "TypeScript",
  },
  {
    icon: RiTailwindCssFill,
    name: "Tailwind",
  },
  {
    icon: TbBrandFramerMotion,
    name: "Motion",
  },
  {
    icon: IoLogoNodejs,
    name: "Node.js",
  },
  {
    icon: SiExpress,
    name: "Express.js",
  },
  {
    icon: SiFlask,
    name: "Flask",
  },
  {
    icon: SiRedux,
    name: "Redux",
  },
  {
    icon: BiLogoDjango,
    name: "Django",
  },
  {
    icon: SiPrisma,
    name: "Prisma",
  },
  {
    icon: SiMongodb,
    name: "Mongo DB",
  },
  {
    icon: BiLogoPostgresql,
    name: "Postgresql",
  },
  {
    icon: FaSass,
    name: "Sass",
  },
  {
    icon: SiDocker,
    name: "Docker",
  },
];

const socialLink = [
  {
    name: "Github",
    icon: SiGithub,
    href: "https://github.com/Vaibhav-kesarwani",
  },
  {
    name: "Linkedin",
    icon: SiLinkedin,
    href: "https://www.linkedin.com/in/vaibhavdev",
  },
  {
    name: "Twitter(X)",
    icon: SiX,
    href: "https://x.com/vaibhav_k__",
  },
];

export default function IntoCard() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      setTime(formatter.format(new Date()));
    };

    updateTime();

    const interval = setInterval(updateTime, 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const row1 = stack.filter((_, i) => i % 4 === 0);
  const row2 = stack.filter((_, i) => i % 4 === 1);
  const row3 = stack.filter((_, i) => i % 4 === 2);
  const row4 = stack.filter((_, i) => i % 4 === 3);

  return (
    <>
      <div className="p-8">
        <div
          style={{
            fontFamily: "var(--font-cabinet)",
            fontWeight: 900,
          }}
          className="text-3xl tracking-wide"
        >
          Vaibhav{" "}
          <span
            style={{
              fontFamily: "cursive",
            }}
            className="text-white/30 tracking-normal"
          >
            Kesarwani
          </span>
        </div>

        <div className="flex items-center justify-start text-white/40 mt-2 gap-2 font-semibold text-xs">
          <MapPin className="h-3 w-3 stroke-3" />
          <div className="flex gap-2 items-center justify-center">
            <span className="uppercase">Prayagraj, IN</span>
            <div className="h-1 w-1 rounded-full bg-white/40" />
            <span>{time}</span>
          </div>
        </div>
      </div>

      <div className="mt-10 space-y-4">
        <InfiniteSlider gap={16} speed={20}>
          {row1.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 text-white/80 text-xs font-semibold"
              >
                <Icon className="h-4 w-4" />
                <span>{s.name}</span>
              </div>
            );
          })}
        </InfiniteSlider>

        <InfiniteSlider gap={16} speed={20} reverse>
          {row2.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 text-white/80 text-xs font-semibold"
              >
                <Icon className="h-4 w-4" />
                <span>{s.name}</span>
              </div>
            );
          })}
        </InfiniteSlider>

        <InfiniteSlider gap={16} speed={20}>
          {row3.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 text-white/80 text-xs font-semibold"
              >
                <Icon className="h-4 w-4" />
                <span>{s.name}</span>
              </div>
            );
          })}
        </InfiniteSlider>

        <InfiniteSlider gap={16} speed={20} reverse>
          {row4.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 text-white/80 text-xs font-semibold"
              >
                <Icon className="h-4 w-4" />
                <span>{s.name}</span>
              </div>
            );
          })}
        </InfiniteSlider>
      </div>

      <div className="flex items-center justify-center gap-2 mt-15 px-2">
        {socialLink.map((social, idx) => {
          const Icon = social.icon;

          return (
            <Link key={idx} href={social.href} target="_blank">
              <div className="border border-white/40 rounded-full py-2 px-3 flex items-center justify-center gap-2">
                <Icon className="h-4 w-4" />
                <span className="text-xs">{social.name}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
