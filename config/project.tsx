import Clerk from "@/components/technologies/Clerk";
import NextJs from "@/components/technologies/NextJs";
import PostgreSQL from "@/components/technologies/PostgreSQL";
import Prisma from "@/components/technologies/Prisma";
import ReactIcon from "@/components/technologies/ReactIcon";
import Shadcn from "@/components/technologies/Shadcn";
import Supabase from "@/components/technologies/Supabase";
import TailwindCss from "@/components/technologies/TailwindCss";
import TypeScript from "@/components/technologies/TypeScript";
import Vercel from "@/components/technologies/Vercel";
import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "GitSolve",
    description:
      "AI powered platform that automatically understands, fixes, and resolves GitHub issues by generating minimal, accurate code changes and raising clean pull requests helping developers ship faster with confidence.",
    image: "/project/gitsolve/hero.png",
    video: "",
    link: "https://github.com/Vaibhav-kesarwani/GitSolve",
    technologies: [
      { name: "Next.js", icon: <NextJs key="nextjs" /> },
      { name: "TypeScript", icon: <TypeScript key="typescript" /> },
      { name: "React", icon: <ReactIcon key="react" /> },
      { name: "Prisma", icon: <Prisma key="prisma" /> },
      { name: "Tailwind CSS", icon: <TailwindCss key="tailwindcss" /> },
      { name: "PostgreSQL", icon: <PostgreSQL key="postgreSQL" /> },
      { name: "shadcn/ui", icon: <Shadcn key="shadcn" /> },
    ],
    github: "https://github.com/Vaibhav-kesarwani/GitSolve",
    live: "https://github.com/Vaibhav-kesarwani/GitSolve",
    details: true,
    projectDetailsPageSlug: "/projects/gitsolve",
    isWorking: false,
  },
  {
    title: "Sendly",
    description:
      "A fast and secure file sharing platform that allows users to share files with multiple people seamlessly. Whether you're sending documents, images, or large files, Sendly makes it effortless with just a few clicks.",
    image: "/project/sendly/hero.png",
    video: "",
    link: "https://sendlyfile.vercel.app/",
    technologies: [
      { name: "Next.js", icon: <NextJs key="nextjs" /> },
      { name: "TypeScript", icon: <TypeScript key="typescript" /> },
      { name: "React", icon: <ReactIcon key="react" /> },
      { name: "Prisma", icon: <Prisma key="prisma" /> },
      { name: "Tailwind CSS", icon: <TailwindCss key="tailwindcss" /> },
      { name: "Supabase", icon: <Supabase key="supabase" /> },
      { name: "Vercel", icon: <Vercel key="vercel" /> },
    ],
    github: "https://github.com/Vaibhav-kesarwani/sendly",
    live: "https://sendlyfile.vercel.app/",
    details: true,
    projectDetailsPageSlug: "/projects/sendly",
    isWorking: true,
  },
  {
    title: "Brainwave",
    description:
      "A modern and intuitive note taking application built using Next.js. It is designed to help users efficiently capture, organize, and manage their notes with a seamless and user friendly experience.",
    image: "/project/brainwave/hero.png",
    video: "",
    link: "https://notes-brainwave.vercel.app/",
    technologies: [
      { name: "Next.js", icon: <NextJs key="nextjs" /> },
      { name: "TypeScript", icon: <TypeScript key="typescript" /> },
      { name: "React", icon: <ReactIcon key="react" /> },
      { name: "Prisma", icon: <Prisma key="prisma" /> },
      { name: "Tailwind CSS", icon: <TailwindCss key="tailwindcss" /> },
      { name: "Clerk", icon: <Clerk key="clerk" /> },
      { name: "Vercel", icon: <Vercel key="vercel" /> },
    ],
    github: "https://github.com/Vaibhav-kesarwani/brainwave",
    live: "https://notes-brainwave.vercel.app/",
    details: true,
    projectDetailsPageSlug: "/projects/brainwave",
    isWorking: true,
  },
];
