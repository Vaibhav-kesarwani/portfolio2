"use client";

import { motion } from "framer-motion";
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
    title: "Facebook",
    href: "/",
  },
  {
    title: "LinkedIn",
    href: "/",
  },
  {
    title: "Instagram",
    href: "/",
  },
  {
    title: "Twitter",
    href: "/",
  },
];
type MenuProps = {
  closeMenu: () => void;
};

export default function Menu({ closeMenu }: MenuProps) {
  return (
    <div className="flex flex-col justify-between h-full px-10 pt-25 pb-12.5">
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
              onClick={closeMenu}
              className="text-black text-[46px] no-underline block"
            >
              <Link href={link.href}>{link.title}</Link>
            </motion.div>
          </div>
        ))}
      </div>

      <motion.div className="flex flex-wrap">
        {footerLinks.map((link, i) => (
          <motion.div
            key={i}
            href={link.href}
            onClick={closeMenu}
            variants={slideIn}
            custom={i}
            initial="initial"
            animate="enter"
            exit="exit"
            className="w-1/2 mt-1.25 text-black no-underline"
          >
            <Link href={link.href}>{link.title}</Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
