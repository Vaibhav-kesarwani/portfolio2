import { Briefcase, MapPin } from "lucide-react";
import { AuroraText } from "./aurora-text";

export default function ExperienceTimeline() {
  const experiences = [
    {
      date: "JAN 2025 — PRESENT",
      title: "Open Source",
      location: "Global",
      role: "Contributor",
      heading: "Open Source Contributor",
      description: [
        "Actively contributing to open-source projects while sharpening my Data Structures & Algorithms (DSA) skills and building full-stack web apps using Next.js.",
        "Focused on improving code quality, implementing new features, and collaborating with developers across the globe.",
        "Currently exploring scalable UI/UX design, backend integrations, and performance optimization as part of my learning and contribution journey.",
      ],
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Turborepo"],
    },
  ];

  return (
    <section className="relative w-full max-w-7xl mx-auto py-40 px-6 right-20">
      <div className="absolute left-[42%] top-0 bottom-0 w-px bg-linear-to-b from-transparent via-red-500/60 to-transparent" />

      {experiences.map((item, i) => (
        <div
          key={i}
          className="relative grid grid-cols-1 md:grid-cols-[42%_58%] mb-48 w-full"
        >
          <div className="md:text-right pr-32">
            <p className="text-xs uppercase tracking-widest text-white/50 font-semibold">
              {item.date}
            </p>

            <AuroraText className="mt-3 text-3xl font-bold">
              {item.title}
            </AuroraText>

            <div className="mt-2 text-white/50 text-base space-y-1 font-semibold">
              <p className="flex items-center justify-end gap-2">
                <MapPin className="w-4 h-4" />
                {item.location}
              </p>
              <p className="flex items-center justify-end gap-2">
                <Briefcase className="h-4 w-4" />
                {item.role}
              </p>
            </div>
          </div>

          <div className="absolute left-[41.7%] -translate-x-1/2 top-6 w-6 h-6 rounded-full bg-black border border-red-500 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-red-500" />
          </div>

          <div className="pl-20">
            <h2 className="text-3xl font-bold mb-6">{item.heading}</h2>

            <div className="space-y-5 text-white/70 leading-relaxed max-w-lg">
              {item.description.map((text, idx) => (
                <p key={idx} className="text-base">{text}</p>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              {item.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-white/80 font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
