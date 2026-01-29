import Container from "@/components/common/container";
import Experience from "@/components/common/experience";
import About from "@/components/landing/about";
import Github from "@/components/landing/github";
import Hero from "@/components/landing/hero";
import Projects from "@/components/landing/project";

export default function Home() {
  return (
    <Container className="min-h-screen py-16">
      <Hero />
      <Experience />
      <Projects />
      <About />
      <Github />
    </Container>
  );
}
