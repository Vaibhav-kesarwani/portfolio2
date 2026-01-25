"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Menu from "./menu";
import NavButton from "./nav-button";

const menu = {
  open: {
    width: "480px",
    height: "650px",
    top: "-25px",
    right: "-25px",
    transition: {
      duration: 0.75,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
  closed: {
    width: "100px",
    height: "40px",
    top: "0px",
    right: "0px",
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <AnimatePresence>
        {isActive && (
          <motion.div
            className="fixed inset-0 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsActive(false)}
          />
        )}
      </AnimatePresence>

      <div className="fixed top-12.5 right-12.5 z-50">
        <motion.div
          className="relative bg-[#c9fd74] rounded-[25px] overflow-hidden"
          variants={menu}
          animate={isActive ? "open" : "closed"}
          initial="closed"
          onClick={(e) => e.stopPropagation()}
        >
          <AnimatePresence>
            {isActive && <Menu closeMenu={() => setIsActive(false)} />}
          </AnimatePresence>
        </motion.div>

        <NavButton
          isActive={isActive}
          toggleMenu={() => setIsActive(!isActive)}
        />
      </div>
    </>
  );
}
