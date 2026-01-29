import { navbarConfig } from "@/config/navbar";
import Image from "next/image";
import Link from "next/link";
import Container from "./container";
import { ThemeToggleButton } from "./theme-switch";

export default function Navbar() {
  return (
    <Container className="sticky top-0 z-20 rounded-md py-4 backdrop-blur-sm">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-baseline gap-4">
          <Link href={"/"}>
            <Image
              src={navbarConfig.logo.src}
              alt={navbarConfig.logo.alt}
              width={navbarConfig.logo.width}
              height={navbarConfig.logo.height}
              className="h-12 w-12 rounded-md border border-gray-200 bg-blue-300 transition-all duration-300 ease-in-out hover:scale-90 dark:bg-yellow-300"
            />
          </Link>
          <div className="flex items-center justify-center gap-4">
            {navbarConfig.navItems.map((item) => {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="hover:underline hover:decoration-2 hover:underline-offset-4 transition-all duration-300 ease-in-out"
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggleButton variant="circle" start="top-right" blur />
        </div>
      </div>
    </Container>
  );
}
