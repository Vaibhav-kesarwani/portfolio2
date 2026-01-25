"use client";

import { useEffect, useState } from "react";
import MobileExperience from "./mobile-experience";

export default function DeviceGate({ children }: { children: React.ReactNode }) {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (isDesktop === null) return null;

  if (!isDesktop) return <MobileExperience />;

  return <>{children}</>;
}
