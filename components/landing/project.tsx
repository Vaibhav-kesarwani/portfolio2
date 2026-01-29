"use client";

import { projects } from "@/config/project";
import { Link } from "next-view-transitions";
import Container from "../common/container";
import SectionHeading from "../common/section-heading";
import { ProjectList } from "../projects/project-list";
import { Button } from "../ui/button";

export default function Projects() {
  return (
    <Container className="mt-20">
      <SectionHeading subHeading="Featured" heading="Projects" />

      <ProjectList className="mt-8" projects={projects.slice(0, 4)} />
      <div className="mt-8 flex justify-center">
        <Button variant="outline">
          <Link href="/projects">Show all projects</Link>
        </Button>
      </div>
    </Container>
  );
}
