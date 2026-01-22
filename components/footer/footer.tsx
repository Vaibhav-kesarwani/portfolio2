import Image from "next/image";
import Link from "next/link";
import Orb from "../vaibhav-ui/orb";
import { FaArrowRight } from "react-icons/fa";
import CTASection from "./cta-section";

const footerLinks = [
  {
    title: "General",
    links: [
      { label: "Home", href: "/" },
      { label: "Blogs", href: "/blogs" },
      { label: "Guestbook", href: "/guestbook" },
      { label: "Uses", href: "/uses" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "About Me", href: "/about" },
      { label: "Projects", href: "/projects" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Social",
    links: [
      { label: "GitHub", href: "https://github.com/Vaibhav-kesarwani" },
      { label: "Twitter", href: "https://x.com/vaibhav_k__" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/vaibhavdev" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <>
      <CTASection />
      <div className="mt-25 border-t border-white/10 p-10">
        <div className="grid grid-cols-2 items-center">
          <div
            style={{ fontFamily: "var(--font-cabinet)" }}
            className="flex flex-col justify-center"
          >
            <div className="flex items-center gap-4 text-8xl font-bold leading-none">
              <Image
                src="/images/me.jpeg"
                alt="me"
                width={72}
                height={72}
                className="rounded-full hover:rotate-12 transition-transform duration-500 ease-out"
              />
              Let&apos;s create
            </div>

            <span className="block text-8xl font-bold leading-none text-white/50">
              something real.
            </span>
          </div>

          <div className="w-full h-full flex items-center justify-end overflow-hidden">
            <div className="relative w-65 h-65 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center scale-[0.85]">
                <Orb
                  hoverIntensity={0.37}
                  rotateOnHover
                  hue={0}
                  forceHoverState={false}
                  backgroundColor="#000000"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-28 px-6">
          <div className=" bg-white/2 rounded-3xl p-14 backdrop-blur-xl">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 items-start">
              <div
                style={{ fontFamily: "var(--font-cabinet)" }}
                className="flex flex-col justify-between h-full"
              >
                <h2 className="text-6xl font-extrabold tracking-tighter uppercase leading-none">
                  Vaibhav
                </h2>

                <p className="mt-8 max-w-md text-white/60 leading-relaxed font-semibold tracking-tight">
                  Building digital experiences that matter, one line of code at
                  a time. Crafting interfaces that feel alive, solving problems
                  that make a difference, and turning ideas into reality — where
                  every pixel has a purpose and every interaction tells a story.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-10 gap-y-12">
                {footerLinks.map((section) => (
                  <div key={section.title} className="space-y-5">
                    <p className="text-white/50 font-semibold tracking-wide text-sm uppercase">
                      {section.title}
                    </p>

                    <div className="flex flex-col gap-3">
                      {section.links.map((link) => (
                        <Link
                          key={link.label}
                          href={link.href}
                          target={
                            link.href.startsWith("http") ? "_blank" : undefined
                          }
                          style={{ fontFamily: "var(--font-cabinet)" }}
                          className="group w-fit inline-flex items-center gap-2 text-white font-bold tracking-tight text-sm relative"
                        >
                          <span className="relative">
                            {link.label}
                            <span className="absolute left-0 -bottom-1 h-0.5 w-full origin-left scale-x-0 bg-white transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-x-100" />
                          </span>

                          <span className="text-sm translate-x-0 opacity-0 transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-x-1.5 group-hover:opacity-100">
                            <FaArrowRight className="h-3 w-3" />
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 px-6 bg-white/10 w-full h-px" />

        <div
          style={{
            fontFamily: "var(--font-cabinet",
          }}
          className="py-5 text-base font-bold text-white/50"
        >
          © 2026 VAIBHAV KESARWANI. ALL RIGHTS RESERVED.
        </div>
      </div>
    </>
  );
}
