import { type Experience, experiences } from "@/config/experience";

import ExperienceCard from "../experience/experience-card";
import { Button } from "../ui/button";
import Container from "./container";
import SectionHeading from "./section-heading";
import { Link } from "next-view-transitions";

export default function Experience() {
  return (
    <Container className="mt-20">
      <SectionHeading subHeading="Featured" heading="Experience" />

      <div className="mt-4 flex flex-col gap-8">
        {experiences.slice(0, 2).map((experience: Experience, idx) => {
          return <ExperienceCard key={idx} experience={experience} />;
        })}
      </div>

      <div className="mt-8 flex justify-center">
        <Button variant={"outline"}>
          <Link href={"/work-experience"}>Show all work experiences</Link>
        </Button>
      </div>
    </Container>
  );
}
