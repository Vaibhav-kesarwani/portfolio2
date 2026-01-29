import Figma from "@/components/technologies/Figma";
import NextJs from "@/components/technologies/NextJs";
import Postman from "@/components/technologies/Postman";
import ReactIcon from "@/components/technologies/ReactIcon";
import TailwindCss from "@/components/technologies/TailwindCss";
import TypeScript from "@/components/technologies/TypeScript";
import Vercel from "@/components/technologies/Vercel";

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: false,
    isBlur: false,
    company: "GirlScript Summer of Code (GSSoC)",
    position: "Open Source Contributor",
    location: "Remote",
    image: "/company/gssoc.jpg",
    description: [
      "Contributed to multiple production level open source repositories.",
      "Fixed bugs, implemented features, and improved documentation.",
      "Collaborated with mentors and maintainers via GitHub reviews.",
      "Gained hands on experience with Git, GitHub, and team based development.",
    ],
    startDate: "June 2024",
    endDate: "August 2024",
    technologies: [
      {
        name: "Next.js",
        href: "https://nextjs.org/",
        icon: <NextJs />,
      },
      {
        name: "Tailwind CSS",
        href: "https://tailwindcss.com/",
        icon: <TailwindCss />,
      },
      {
        name: "TypeScript",
        href: "https://typescriptlang.org/",
        icon: <TypeScript />,
      },
      {
        name: "React",
        href: "https://react.dev/",
        icon: <ReactIcon />,
      },
      {
        name: "Figma",
        href: "https://figma.com/",
        icon: <Figma />,
      },
      {
        name: "Vercel",
        href: "https://vercel.com/",
        icon: <Vercel />,
      },
      {
        name: "Postman",
        href: "https://www.postman.com/",
        icon: <Postman />,
      },
    ],
    website: "https://gssoc.girlscript.org/",
    github: "https://github.com/GSSoC24",
    x: "https://x.com/girlscriptsoc",
  },
];
