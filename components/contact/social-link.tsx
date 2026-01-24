import Link from "next/link";

const links = [
  { id: "01", title: "Github", url: "https://github.com/Vaibhav-kesarwani" },
  { id: "02", title: "X", url: "https://x.com/vaibhav_k__" },
  {
    id: "03",
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/vaibhavdev",
  },
  { id: "04", title: "Email", url: "mailto:vaibhavkesarwani100@gmail.com" },
];

export default function SocialLink() {
  return (
    <div className="divide-y divide-white/10 w-full">
      {links.map((link) => (
        <Link
          key={link.id}
          href={link.url}
          target="_blank"
          className="group relative block h-40 overflow-hidden"
        >
          <div className="absolute inset-0 flex items-center justify-between px-12">
            <div className="flex items-center gap-12">
              <span className="text-white/40 text-sm font-semibold">
                {link.id}
              </span>
              <span className="text-white text-8xl font-black uppercase">
                {link.title}
              </span>
            </div>
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
              ↗
            </div>
          </div>

          <div
            className="absolute inset-0 bg-white text-black flex items-center justify-between px-12
                       translate-y-full group-hover:translate-y-0
                       transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)]"
          >
            <div className="flex items-center gap-12">
              <span className="text-black/50 text-sm font-semibold">
                {link.id}
              </span>
              <span className="text-8xl font-black uppercase">
                {link.title}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="uppercase text-xs tracking-widest">Visit</span>
              <div className="w-12 h-12 rounded-full border border-black flex items-center justify-center">
                →
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
