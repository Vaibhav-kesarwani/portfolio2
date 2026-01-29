import Github from "@/components/svg/Github";
import Instagram from "@/components/svg/Instagram";
import LinkedIn from "@/components/svg/LinkedIn";
import Mail from "@/components/svg/Mail";
import X from "@/components/svg/X";
import JavaScript from "@/components/technologies/JavaScript";
import MongoDB from "@/components/technologies/MongoDB";
import NextJs from "@/components/technologies/NextJs";
import NodeJs from "@/components/technologies/NodeJs";
import PostgreSQL from "@/components/technologies/PostgreSQL";
import Prisma from "@/components/technologies/Prisma";
import ReactIcon from "@/components/technologies/ReactIcon";
import TypeScript from "@/components/technologies/TypeScript";

export const skillComponents = {
  TypeScript: TypeScript,
  ReactIcon: ReactIcon,
  NextJs: NextJs,
  PostgreSQL: PostgreSQL,
  NodeJs: NodeJs,
  MongoDB: MongoDB,
  Prisma: Prisma,
  JavaScript: JavaScript,
};

export const heroConfig = {
  name: "Vaibhav Kesarwani",
  title: "A Full Stack web developer",
  avatar: "/images/me.png",

  skills: [
    {
      name: "Typescript",
      href: "https://www.typescriptlang.org/",
      component: "TypeScript",
    },
    {
      name: "React",
      href: "https://react.dev/",
      component: "ReactIcon",
    },
    {
      name: "Next.js",
      href: "https://nextjs.org/",
      component: "NextJs",
    },
    {
      name: "NodeJs",
      href: "https://nodejs.org/",
      component: "NodeJs",
    },
    {
      name: "PostgreSQL",
      href: "https://www.postgresql.org/",
      component: "PostgreSQL",
    },
  ],

  description: {
    template:
      "I build interactive web apps using {skills:0}, {skills:1}, {skills:2}, {skills:3} and {skills:4}. With a string focus on <b>UI design</b>. Passionate about <b>Deep Learning</b>, I combine engineering with a sharp eye for aesthetics.",
  },

  buttons: [
    {
      varaiant: "outline",
      text: "Resume",
      href: "/resume",
      icon: "CV",
    },
    {
      varaiant: "default",
      text: "Get in touch",
      href: "/contact",
      icon: "Chat",
    },
  ],
};

export const socialLinks = [
  {
    name: "Github",
    href: "https://github.com/Vaibhav-kesarwani",
    icon: <Github />,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/vaibhavdev",
    icon: <LinkedIn />,
  },
  {
    name: "X",
    href: "https://x.com/vaibhav_k__",
    icon: <X />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/vaibhavkesarwani__",
    icon: <Instagram />,
  },
  {
    name: "Email",
    href: "mailto:vaibhavkesarwani100@gmail.com",
    icon: <Mail />,
  },
];
