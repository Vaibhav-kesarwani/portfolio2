import { LucideIcon } from "lucide-react";

interface HeroCtaCardProps {
  icon: LucideIcon;
  iconColor?: string;
  mainText: string;
  secondText: string;
}

export default function HeroCtaCard({
  icon,
  iconColor = "text-white",
  mainText,
  secondText,
}: HeroCtaCardProps) {
  const Icon = icon;

  return (
    <div
      style={{
        fontFamily: "var(--font-cabinet)",
      }}
      className="flex flex-col items-center rounded-xl px-4 py-3 text-center tracking-wide"
    >
      <Icon className={`h-5 w-5 ${iconColor} mb-2`} />
      <span className="text-base font-semibold">{mainText}</span>
      <span className="text-base text-white/60">{secondText}</span>
    </div>
  );
}
