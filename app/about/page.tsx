import About from "@/components/about/about";
import { AuroraText } from "@/components/vaibhav-ui/aurora-text";
import SectionMainText from "@/components/vaibhav-ui/section-main-text";
import ExperienceTimeline from "@/components/vaibhav-ui/experience-timeline";

export default function AboutPage() {
  return (
    <section className="w-full flex flex-col items-center">
      <div className="min-h-screen w-full flex items-center justify-center px-6">
        <SectionMainText
          mainText="About me"
          secondText="Get to know more about"
          cursiveText="who i am."
        />
      </div>

      <div className="w-full flex justify-center px-6">
        <About />
      </div>

      <div className="mt-40 w-full flex justify-center px-6">
        <div className="max-w-5xl w-full flex flex-col items-center text-center">
          <span className="uppercase font-semibold text-base text-white/50 tracking-wider">
            The experience
          </span>

          <h2 className="mt-4 text-6xl font-bold tracking-tight leading-tight">
            Experience That <br />
            Brings{" "}
            <AuroraText className="inline-block mt-1 font-extrabold">
              ideas to Life
            </AuroraText>
          </h2>
        </div>
      </div>

      <ExperienceTimeline />
    </section>
  );
}
