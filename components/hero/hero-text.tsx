import { Layers, MapPin } from "lucide-react";
import HeroCtaCard from "../vaibhav-ui/hero-cta-card";
import SectionMainText from "../vaibhav-ui/section-main-text";

export default function HeroText() {
  return (
    <section className="flex h-screen flex-col items-center px-6">
      <SectionMainText
        mainText="Vaibhav"
        secondText="I design and build products that"
        cursiveText="deliver real impact."
      />

      <div className="mb-12 flex w-full justify-between">
        <HeroCtaCard
          icon={MapPin}
          iconColor="text-green-500"
          mainText="Based in Prayagraj,"
          secondText="INDIA"
        />

        <HeroCtaCard
          icon={Layers}
          iconColor="text-blue-500"
          mainText="Full Stack Dev,"
          secondText="& Designer"
        />
      </div>
    </section>
  );
}
