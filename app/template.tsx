"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function getRouteName(path: string) {
  if (path === "/") return "Home";
  return path.replace("/", "").replace("-", " ").toUpperCase();
}

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [routeName, setRouteName] = useState(getRouteName(pathname));

  useEffect(() => {
    setRouteName(getRouteName(pathname));
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} className="relative overflow-hidden bg-black">
        <motion.div
          className="fixed inset-0 bg-[#3C3D37] z-998 pointer-events-none"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 1.09, ease: [0.76, 0, 0.24, 1] }}
          style={{ transformOrigin: "top" }}
        />

        <motion.div
          className="fixed inset-0 z-1000 flex items-center justify-center pointer-events-none gap-10"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 1.08, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="w-10 h-10 rounded-full bg-white/90" />
          <h1 className="text-[8vw] font-bold tracking-tight text-white/90">
            {routeName}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60, filter: "blur(16px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -60, filter: "blur(16px)" }}
          transition={{ duration: 1.09, ease: [0.76, 0, 0.24, 1] }}
          className="relative z-10"
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
