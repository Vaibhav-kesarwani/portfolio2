import { AuroraText } from "../vaibhav-ui/aurora-text";
import ScrollRevealParagraph from "../vaibhav-ui/scroll-reveal-paragraph";

export default function About() {
  return (
    <div className="mt-30 w-full flex flex-col items-center justify-center">
      <div className="max-w-5xl w-full flex flex-col items-center text-center">
        <span className="uppercase font-semibold text-base text-white/50 tracking-wider">
          A QUICK GLANCE
        </span>

        <h2 className="mt-4 text-6xl font-bold tracking-tight leading-tight">
          Building the bridge between <br />
          ideas and{" "}
          <AuroraText className="inline-block mt-1 font-extrabold">
            experiences
          </AuroraText>
        </h2>
      </div>

      <div className="w-full mt-10 flex justify-center">
        <div className="max-w-7xl w-full text-center">
          <ScrollRevealParagraph
            className="text-center text-4xl font-bold text-slate-800 dark:text-white align-middle"
            paragraph="I'm Vaibhav Kesarwani, a product driven software developer who turns 
            ambitious ideas into elegant, high impact digital systems. I work across the 
            full stack to build experiences that feel fast, modern, and deeply intentional
            from pixel perfect interfaces to resilient backend architectures. 
            My strength lies in blending Next.js, TypeScript, and scalable UI design 
            to ship products that don't just look good, but perform under real world pressure."
          />
        </div>
      </div>
    </div>
  );
}
