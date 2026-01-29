import Image from "next/image";

import { about, mySkills } from "@/config/about";
import Container from "../common/container";
import SectionHeading from "../common/section-heading";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export default function About() {
  return (
    <Container className="mt-20">
      <SectionHeading subHeading="About" heading="Me" />
      <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center">
        <Image
          src="/images/me.png"
          alt="About"
          width={100}
          height={100}
          className="border-secondary size-60 rounded-md border-2 bg-blue-300 dark:bg-yellow-300"
        />
        <div className="mt-4 md:mt-0">
          <h3 className="text-2xl font-bold">{about.name}</h3>
          <p className="text-secondary mt-4">{about.description}</p>
          <p className="text-secondary mt-8 font-bold">Skills</p>
          <div className="flex flex-wrap gap-2">
            {mySkills.map((skill) => (
              <Tooltip key={skill.key}>
                <TooltipTrigger asChild>
                  <div className="mt-4 size-6 hover:cursor-pointer">
                    {skill}
                  </div>
                </TooltipTrigger>
                <TooltipContent>{skill.key}</TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
