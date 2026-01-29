import Container from "@/components/common/container";
import Experience from "@/components/common/experience";
import Hero from "@/components/landing/hero";

export default function Home() {
  return (
    <Container className="min-h-screen py-16">
      <Hero />
      <Experience />
    </Container>
  );
}
