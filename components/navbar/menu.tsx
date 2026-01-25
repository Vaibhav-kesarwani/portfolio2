"use client";

import { useSmoothNavigation } from "@/lib/navigation";
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
              <button
                onClick={() => navigate(link.href)}
                key={link.href}
                className="cursor-pointer"
              >
                {link.title}
              </button>
            </motion.div>
          </div>
        ))}
      </div>

      <motion.div className="flex flex-wrap">
        {footerLinks.map((link, i) => (
          <motion.div
            key={i}
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
