"use client";

import { motion, Variants } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

type Project = {
  title: string;
  src: string;
  color: string;
  href?: string;
};

type ModalState = {
  active: boolean;
  index: number;
};

type Props = {
  modal: ModalState;
  projects: Project[];
  setIsHoveringModal: (v: boolean) => void;
};

const scaleAnimation: Variants = {
  initial: { scale: 0, x: "-50%", y: "-50%" },

  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.35, ease: [0.76, 0, 0.24, 1] },
  },

  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.2, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function Modal({ modal, projects, setIsHoveringModal }: Props) {
  const { active, index } = modal;

  const modalContainer = useRef<HTMLDivElement | null>(null);
  const cursor = useRef<HTMLDivElement | null>(null);
  const cursorLabel = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!modalContainer.current || !cursor.current || !cursorLabel.current)
      return;

    const xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    const xMoveCursor = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    const yMoveCursor = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });

    const xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    const yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });

    const move = (e: MouseEvent) => {
      const { pageX, pageY } = e;
      xMoveContainer(pageX);
      yMoveContainer(pageY);
      xMoveCursor(pageX);
      yMoveCursor(pageY);
      xMoveCursorLabel(pageX);
      yMoveCursorLabel(pageY);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className="pointer-events-none absolute h-87.5 w-100 bg-white overflow-hidden flex items-center justify-center"
      >
        <div
          style={{ top: `${index * -100}%` }}
          className="absolute h-full w-full transition-[top] duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
        >
          {projects.map((project, i) => (
            <div
              key={`modal_${i}`}
              className="h-full w-full flex flex-col items-center justify-center gap-5"
              style={{ backgroundColor: project.color }}
            >
              <Image
                src={`/projects/${project.src}`}
                width={320}
                height={320}
                alt="project"
                priority
                className="h-auto w-auto border border-white"
              />
              <span className="text-xl font-semibold">{project.title}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        ref={cursor}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        onMouseEnter={() => setIsHoveringModal(true)}
        onMouseLeave={() => setIsHoveringModal(false)}
        className="absolute z-20 h-20 w-20 rounded-full bg-[#c9fd74] pointer-events-auto"
      />

      <motion.div
        ref={cursorLabel}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        onMouseEnter={() => setIsHoveringModal(true)}
        onMouseLeave={() => setIsHoveringModal(false)}
        onClick={() => {
          const project = projects[index];
          if (project?.href) window.open(project.href, "_blank");
        }}
        className="absolute z-30 h-20 w-20 rounded-full flex items-center justify-center 
                   text-black font-semibold text-sm cursor-pointer pointer-events-auto"
      >
        View
      </motion.div>
    </>
  );
}
