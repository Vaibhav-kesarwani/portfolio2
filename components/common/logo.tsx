import { navbarConfig } from "@/config/navbar";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center justify-between gap-4">
      <Image
        src={navbarConfig.logo.src}
        alt={navbarConfig.logo.alt}
        width={navbarConfig.logo.width}
        height={navbarConfig.logo.height}
        className="h-10 w-10 rounded-md border border-gray-200 bg-blue-300 transition-all duration-300 ease-in-out hover:scale-90 dark:bg-yellow-300"
      />
      <div className="text-xl font-bold text-black/80 dark:text-white/90">
        Vaibhav <span className="text-blue-500 dark:text-yellow-300">Lab&apos;s</span>
      </div>
    </div>
  );
}
