import About from "@/components/about/about";
import BentoFrame from "@/components/bento/bento-frame";
import HeroText from "@/components/hero/hero-text";
import Project from "@/components/projects/project";
import Skill from "@/components/skill/skill";
import RibbonMarquee from "@/components/vaibhav-ui/ribbon-marquee";

export default function Home() {
  return (
    <>
      <HeroText />
      <BentoFrame />
      <Project />
      <Skill />
      <RibbonMarquee />
      <About />
    </>
  );
}
