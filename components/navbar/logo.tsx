"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Logo() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-5 left-5 z-50 flex items-center gap-3">
      <Image
        src="/images/logo.png"
        alt="logo"
        height={40}
        width={40}
        className="rounded-full"
      />

      <div
        className={`h-6 w-px bg-white/10 ${
          hidden
            ? "opacity-0 translate-x-6 pointer-events-none"
            : "opacity-100 translate-x-0"
        }`}
      />

      <div
        className={`flex items-center gap-2 transition-all duration-300 ease-out ${
          hidden
            ? "opacity-0 translate-x-6 pointer-events-none"
            : "opacity-100 translate-x-0"
        }`}
      >
        <div className="relative flex h-2 w-2 items-center justify-center">
          <span className="h-1 w-1 rounded-full bg-green-500" />
          <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
        </div>

        <div
          style={{ fontSize: "10px" }}
          className="font-medium flex flex-col tracking-wider uppercase"
        >
          <span className="text-white/40">Creative engineer</span>
          <span className="text-green-600">Building the Future</span>
        </div>
      </div>
    </div>
  );
}
