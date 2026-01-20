"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Blogs", href: "/blogs" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <Image
        src={"/images/logo.png"}
        alt="logg"
        height={50}
        width={50}
        className="fixed top-5 left-5 z-50"
      />
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed top-6 left-1/2 z-50 -translate-x-1/2"
      >
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-3 py-2 backdrop-blur-md shadow-lg">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 cursor-pointer
                ${
                  isActive
                    ? "bg-white text-black"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <div className="mx-1 h-6 w-px bg-white/20" />

          <Link
            href="/contact"
            className="rounded-full bg-linear-to-r from-white via-neutral-100 to-white
             px-4 py-2 text-sm font-semibold text-black shadow-inner
             transition hover:brightness-95"
          >
            Book call
          </Link>
        </div>
      </motion.nav>
    </>
  );
}
