import { type Experience } from "@/config/experience";
import ExperienceCard from "./experience-card";

interface ExperienceListProps {
  experiences: Experience[];
}

export default function ExperienceList({ experiences }: ExperienceListProps) {
  if (experiences.length === 0) {
    return (
      <div className="py-8 text-center">
        <p className="text-muted-foreground">No work experiences found.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      {experiences.map((experience: Experience) => (
        <ExperienceCard key={experience.company} experience={experience} />
      ))}
    </div>
  );
}
