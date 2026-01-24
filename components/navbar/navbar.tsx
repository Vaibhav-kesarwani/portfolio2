"use client";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./logo";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <Logo />

      <motion.nav
        initial={{ y: -30, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-6 left-1/2 z-50 -translate-x-1/2"
      >
        <div className="relative flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-3 py-2 backdrop-blur-xl shadow-[0_0_40px_rgba(255,255,255,0.06)]">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link key={item.href} href={item.href} className="relative">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  className={`relative z-10 block rounded-full px-4 py-2 text-sm font-medium transition-colors
                    ${
                      isActive
                        ? "text-black shadow-inner shadow-white/70"
                        : "text-white/70 hover:text-white shadow-inner shadow-black"
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navbar-pill"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                      className="absolute inset-0 -z-10 rounded-full bg-white shadow-[0_8px_30px_rgba(255,255,255,0.35)]"
                    />
                  )}
                  {item.label}
                </motion.span>
              </Link>
            );
          })}

          <div className="mx-1 h-6 w-px bg-linear-to-b from-white/5 via-white/20 to-white/5" />

          <Link href="/labs">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-1 relative overflow-hidden rounded-full bg-linear-to-tr from-white via-neutral-200 to-white px-3 py-2 text-sm font-semibold text-black shadow-[0_10px_30px_rgba(255,255,255,0.25)] group"
            >
              <span className="relative z-10">Labs UI</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-all duration-300 ease-out" />
              <div className="absolute inset-0 bg-linear-to-r from-white/40 via-transparent to-white/40 opacity-60" />
            </motion.div>
          </Link>
        </div>
      </motion.nav>
    </>
  );
}
