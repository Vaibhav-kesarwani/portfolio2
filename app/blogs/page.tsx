import SectionMainText from "@/components/vaibhav-ui/section-main-text";

export default function BlogPage() {
  return (
    <section className="w-full flex flex-col items-center">
      <div className="min-h-screen w-full flex items-center justify-center px-6">
        <SectionMainText
          mainText="Blogs"
          secondText="Thoughts, tutorials, and"
          cursiveText="insights i share."
        />
      </div>
    </section>
  );
}
