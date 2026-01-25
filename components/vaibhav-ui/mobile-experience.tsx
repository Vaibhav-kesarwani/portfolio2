import { Home, Mail, MonitorSmartphone } from "lucide-react";
import Link from "next/link";

const social = [
  {
    name: "Github",
    href: "https://vaibhavkesarwani.vercel.app/",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/vaibhavdev",
  },
  {
    name: "Twitter(X)",
    href: "https://x.com/vaibhav_k__",
  },
];

export default function MobileExperience() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-black px-6">
      <div className="max-w-sm w-full rounded-3xl border border-white/10 bg-white/3 backdrop-blur-xl px-10 py-10 text-center shadow-2xl">
        <div className="mx-auto mb-6 flex h-15 w-15 items-center justify-center rounded-full bg-white/3 border border-white/10">
          <div className="p-2 border border-white/5 rounded-full">
            <MonitorSmartphone className="h-8 w-8 text-white" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-xs text-white/30 uppercase tracking-wide font-semibold">
            Access Restricted
          </p>
          <p className="text-2xl font-bold tracking-tight uppercase">
            Mobile Screen{" "}
            <span className="lowercase italic text-white/50 font-medium">
              detected
            </span>
          </p>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-white/50 font-medium">
          Curious why this isn&apos;t opening? <br />
          I&apos;m still negotiating with mobile layouts. <br />
          Turns out CSS has a personality —{" "}
          <span className="italic">and it&apos;s dramatic.</span>
        </p>

        <div className="mt-10 space-y-3">
          <Link
            href={"https://github.com/Vaibhav-kesarwani"}
            className="cursor-pointer flex items-center justify-center gap-2 rounded-full bg-white/90 hover:bg-white px-6 py-3 text-sm font-medium text-black transition-all duration-300 ease-out"
          >
            <Home className="w-4 h-4 stroke-3" />
            <span className="text-sm font-semibold">Return Home</span>
          </Link>
          <Link
            href={"mailto:vaibhavkesarwani100@gmail.com"}
            className="cursor-pointer flex items-center justify-center gap-2 rounded-full border border-white/10 hover:border-white/15  bg-white/5 hover:bg-white/10 px-6 py-3 text-sm font-medium text-white/80 transition-all duration-300 ease-out"
          >
            <Mail className="w-4 h-4 stroke-3" />
            <span className="text-sm font-semibold">Get in Touch</span>
          </Link>
        </div>

        <hr className="my-6" />

        <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-white/30 font-semibold">
          {social.map((s, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <span>{"  " + s.name}</span>

              {idx !== social.length - 1 && (
                <div className="bg-white/30 h-1 w-1 rounded-full" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-5 capitalize text-white/25 text-xs font-semibold">
          &copy; 2026 Vaibhav <span className="italic">kesarwani</span>
        </div>
      </div>
    </div>
  );
}
