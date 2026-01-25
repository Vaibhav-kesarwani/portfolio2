"use client";

import { useSmoothNavigation } from "@/lib/navigation";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { perspective, slideIn } from "./anim";

export const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "Blogs",
    href: "/blogs",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export const footerLinks = [
  {
    title: "Github",
    href: "https://github.com/Vaibhav-kesarwani",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/vaibhavdev",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/vaibhavkesarwani__",
  },
  {
    title: "Twitter(X)",
    href: "https://x.com/vaibhav_k__",
  },
];
type MenuProps = {
  closeMenu: () => void;
};

export default function Menu({ closeMenu }: MenuProps) {
  const { navigate } = useSmoothNavigation(closeMenu);

  return (
    <div className="flex flex-col justify-between h-full px-2 pt-25 pb-12.5">
      <div className="flex flex-col gap-2.5">
        {links.map((link, i) => (
          <div
            key={i}
            className="perspective-[120px] perspective-origin-bottom"
          >
            <motion.div
              custom={i}
              variants={perspective}
              initial="initial"
              animate="enter"
              exit="exit"
              className="text-black text-[46px] no-underline block group"
            >
              <button
                onClick={() => navigate(link.href)}
                key={link.href}
                className="cursor-pointer flex items-center gap-3 stroke-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-5"
              >
                <span className="relative w-8 h-8 overflow-hidden">
                  <MoveRight
                    className="absolute inset-0 w-8 h-8
                   opacity-0 -translate-x-3
                   transition-all duration-500
                   ease-[cubic-bezier(0.76,0,0.24,1)]
                   group-hover:opacity-100
                   group-hover:translate-x-0"
                  />
                </span>

                {link.title}
              </button>
            </motion.div>
          </div>
        ))}
      </div>

      <motion.div className="flex flex-wrap px-10">
        {footerLinks.map((link, i) => (
          <motion.div
            key={i}
            variants={slideIn}
            custom={i}
            initial="initial"
            animate="enter"
            exit="exit"
            className="w-1/2 mt-2 text-black"
          >
            <Link
              href={link.href}
              onClick={closeMenu}
              className="group relative inline-block overflow-hidden"
            >
              <span className="relative z-10">{link.title}</span>

              <span
                className="
            absolute left-0 bottom-0 h-0.5 w-full bg-black
            scale-x-0 origin-left
            transition-transform duration-500
            ease-[cubic-bezier(0.76,0,0.24,1)]
            group-hover:scale-x-100
          "
              />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
