import Project from "@/components/projects/project";
import GithubStats from "@/components/vaibhav-ui/github-stats";
import SectionMainText from "@/components/vaibhav-ui/section-main-text";

export default function page() {
  return (
    <section className="w-full flex flex-col items-center">
      <div className="min-h-screen w-full flex items-center justify-center px-6">
        <SectionMainText
          mainText="My Works"
          secondText="Crafting digital experiences"
          cursiveText="with passion & code."
        />
      </div>

      <div className="w-full flex justify-center px-6">
        <Project />
      </div>

      <GithubStats />
    </section>
  );
}
