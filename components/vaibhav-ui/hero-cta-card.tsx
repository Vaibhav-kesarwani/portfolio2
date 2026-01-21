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
        fontFamily: "system-ui",
      }}
      className="flex flex-col items-center rounded-xl px-4 py-3 text-center tracking-wide uppercase"
    >
      <Icon className={`h-5 w-5 ${iconColor} mb-2`} />
      <span className="text-xs font-semibold">{mainText}</span>
      <span className="text-sm text-white/60 font-semibold">{secondText}</span>
    </div>
  );
}
