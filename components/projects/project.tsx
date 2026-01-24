"use client";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { AuroraText } from "../vaibhav-ui/aurora-text";
import Modal from "./modal";
import ProjectCard from "./project-card";

const projects = [
  {
    title: "GitSolve",
    src: "sendly.png",
    href: "https://github.com/Vaibhav-kesarwani/GitSolve",
    color: "#000000",
  },
  {
    title: "Sendly",
    src: "sendly.png",
    href: "https://sendlyfile.vercel.app/",
    color: "#8C8C8C",
  },
  {
    title: "Codeforces Quest",
    src: "sendly.png",
    href: "https://github.com/Vaibhav-kesarwani/Codeforces-Quest",
    color: "#EFE8D3",
  },
  {
    title: "TapAway",
    src: "sendly.png",
    href: "https://github.com/Vaibhav-kesarwani/TapAway-App",
    color: "#706D63",
  },
];

export default function Home() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const [isHoveringModal, setIsHoveringModal] = useState(false);

  const showModal = modal.active || isHoveringModal;

  return (
    <div className="w-full flex flex-col items-center justify-center mt-30">
      <div className="max-w-5xl w-full flex flex-col items-center text-center">
        <span className="uppercase font-semibold text-base text-white/50 tracking-wider">
          Crafting modern experiences
        </span>

        <h2 className="mt-4 text-7xl font-bold tracking-tight leading-tight uppercase">
          VENTURE{" "}
          <AuroraText className="inline-block mt-1 font-extrabold">
            Showcase
          </AuroraText>
        </h2>
      </div>

      <div className="w-full flex h-screen items-center justify-center mt-10">
        <div className="w-full flex flex-col items-center justify-center">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              title={project.title}
              setModal={setModal}
            />
          ))}
        </div>

        <Modal
          modal={{ ...modal, active: showModal }}
          projects={projects}
          setIsHoveringModal={setIsHoveringModal}
        />
      </div>

      <Link
        href={"https://github.com/Vaibhav-kesarwani"}
        target="_blank"
        className="flex items-center justify-center gap-3 group mt-5 cursor-pointer"
      >
        <span className="text-base group-hover:text-white text-white/60 font-semibold transition-all duration-300 ease-out">
          See more projects
        </span>
        <div className="border border-white/10 p-2 rounded-full group-hover:-rotate-45 transition-all duration-300 ease-out">
          <FaArrowRight className="w-3 h-3" />
        </div>
      </Link>
    </div>
  );
}
