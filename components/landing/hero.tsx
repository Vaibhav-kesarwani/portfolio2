import { heroConfig, skillComponents, socialLinks } from "@/config/hero";
import { parseTemplate } from "@/lib/hero";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import Link from "next/link";
import Container from "../common/container";
import Skill from "../common/skill";
import CV from "../svg/CV";
import Chat from "../svg/Chat";
import { Button } from "../ui/button";

const buttonIcons = {
  CV: CV,
  Chat: Chat,
};

export default function Hero() {
  const { avatar, name, title, description, skills, buttons } = heroConfig;

  const renderDescription = () => {
    const parts = parseTemplate(description.template, skills);

    return parts.map((part) => {
      if (part.type === "skill" && "skill" in part && part.skill) {
        const SkillComponent =
          skillComponents[part.skill.component as keyof typeof skillComponents];
        return (
          <Skill key={part.key} name={part.skill.name} href={part.skill.href}>
            <SkillComponent />
          </Skill>
        );
      } else if (part.type === "bold" && "text" in part) {
        return (
          <b key={part.key} className="text-primary whitespace-pre-wrap">
            {part.text}
          </b>
        );
      } else if (part.type === "text" && "text" in part) {
        return (
          <span key={part.key} className="whitespace-pre-wrap">
            {part.text}
          </span>
        );
      }
      return null;
    });
  };

  return (
    <Container className="mx-auto max-w-5xl">
      <Image
        src={avatar}
        alt="hero"
        width={100}
        height={100}
        className="bg-blue-300 dark:bg-yellow-300 size-24 rounded-full"
      />

      <div className="mt-8 flex flex-col gap-2">
        <h1 className="text-4xl font-bold">
          Hi, I&apos;m {name} - <span className="text-secondary">{title}</span>
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-x-1.5 gap-y-2 text-base whitespace-pre-wrap text-neutral-500 md:text-lg">
          {renderDescription()}
        </div>
      </div>

      <div className="mt-8 flex gap-4">
        {buttons.map((button, idx) => {
          const Icon = buttonIcons[button.icon as keyof typeof buttonIcons];
          return (
            <Button
              key={idx}
              variant={button.varaiant as "outline" | "default"}
              className={cn(
                button.varaiant === "outline" && "inset-shadow-indigo-500",
                button.varaiant === "default" && "inset-shadow-indigo-500",
              )}
            >
              {Icon && <Icon />}
              <Link href={button.href}>{button.text}</Link>
            </Button>
          );
        })}
      </div>

      <div className="mt-8 flex gap-2">
        <TooltipProvider delayDuration={0}>
          {socialLinks.map((link, idx) => (
            <Tooltip key={idx}>
              <TooltipTrigger asChild>
                <Link
                  href={link.href}
                  className="text-secondary flex items-center gap-2"
                >
                  <span className="size-6">{link.icon}</span>
                </Link>
              </TooltipTrigger>

              <TooltipContent
                side="top"
                sideOffset={6}
                className="z-50 bg-white text-black px-3 py-1 text-xs rounded shadow"
              >
                {link.name}
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>
    </Container>
  );
}
