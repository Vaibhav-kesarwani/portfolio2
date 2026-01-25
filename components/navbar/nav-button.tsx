"use client";

import { motion } from "framer-motion";

type NavButtonProps = {
  isActive: boolean;
  toggleMenu: () => void;
};

export default function NavButton({ isActive, toggleMenu }: NavButtonProps) {
  return (
    <div className="absolute top-0 right-0 w-25 h-10 cursor-pointer rounded-full overflow-hidden">
      <motion.div
        className="relative w-full h-full"
        animate={{ top: isActive ? "-100%" : "0%" }}
        transition={{
          duration: 0.5,
          type: "tween",
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        <ButtonFace bg="bg-[#c9fd74]" text="text-black" onClick={toggleMenu}>
          Menu
        </ButtonFace>

        <ButtonFace bg="bg-black" text="text-[#c9fd74]" onClick={toggleMenu}>
          Close
        </ButtonFace>
      </motion.div>
    </div>
  );
}

type ButtonFaceProps = {
  children: string;
  bg: string;
  text: string;
  onClick: () => void;
};

function ButtonFace({ children, bg, text, onClick }: ButtonFaceProps) {
  return (
    <div
      onClick={onClick}
      className={`group relative w-full h-full flex items-center justify-center ${bg}`}
    >
      <PerspectiveText label={children} text={text} />
    </div>
  );
}

function PerspectiveText({ label, text }: { label: string; text: string }) {
  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-center 
                 transform-3d
                 transition-transform duration-750
                 ease-[cubic-bezier(0.76,0,0.24,1)]
                 group-hover:transform-[rotateX(90deg)]"
    >
      <p
        className={`uppercase pointer-events-none transition-all duration-750 ease-[cubic-bezier(0.76,0,0.24,1)] 
                    group-hover:-translate-y-full group-hover:opacity-0 ${text}`}
      >
        {label}
      </p>

      <p
        className={`uppercase pointer-events-none absolute opacity-0 
                    origin-[bottom_center]
                    transform-[rotateX(-90deg)_translateY(9px)]
                    transition-all duration-750
                    ease-[cubic-bezier(0.76,0,0.24,1)]
                    group-hover:opacity-100 ${text}`}
      >
        {label}
      </p>
    </div>
  );
}
