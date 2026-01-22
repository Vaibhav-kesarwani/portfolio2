import Link from "next/link";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

const socialLink = [
  {
    icon: SiGithub,
    href: "https://github.com/Vaibhav-kesarwani",
  },
  {
    icon: SiLinkedin,
    href: "https://www.linkedin.com/in/vaibhavdev",
  },
  {
    icon: SiX,
    href: "https://x.com/vaibhav_k__",
  },
];

export default function Card1() {
  return (
    <div className="py-7 px-5">
      <div className="flex items-center gap-3 tracking-tight">
        <SiGithub className="h-7 w-7" />
        <h2
          style={{
            fontFamily: "var(--font-cabinet)",
          }}
          className="text-2xl font-bold"
        >
          Vaibhav&apos;s{" "}
          <span style={{ fontFamily: "cursive" }} className="text-white/50">
            Github
          </span>
        </h2>
      </div>

      <div>
        <div className="mt-10 flex items-center gap-3">
          <span className="text-xs uppercase text-white/40 tracking-wider">
            latest push
          </span>
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs font-semibold text-white">
            <div className="relative flex h-2 w-2 items-center justify-center">
              <span className="h-1 w-1 rounded-full bg-green-500" />
              <span className="absolute inset-0 animate-ping rounded-full bg-green-500 opacity-75" />
            </div>
            Active
          </div>
        </div>

        <div className="mt-4 text-xl font-semibold">
          &quot;chore: make the footer of the portfolio&quot;
        </div>

        <div className="mt-3 text-xs text-white/40 tracking-wider">
          <p className="flex items-center gap-2">
            Repo: <span className="text-red-500 mt-1">Private Work</span>
          </p>
        </div>
      </div>

      <div className="mt-15 flex items-center justify-center h-full">
        <div className="w-70 border-t border-white/20" />
      </div>

      <div className="mt-5 flex items-center justify-center gap-5">
        {socialLink.map((link, idx) => {
          const Icon = link.icon;

          return (
            <Link key={idx} href={link.href}>
              <Icon className="h-5 w-5 text-white/50 hover:text-white/90 transition-all duration-300 ease-out" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
