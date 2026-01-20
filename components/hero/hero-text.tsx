import { Layers, MapPin } from "lucide-react";
import HeroCtaCard from "../vaibhav-ui/hero-cta-card";

export default function HeroText() {
  return (
    <section className="flex h-screen flex-col items-center px-6">
      <div className="flex flex-col items-center justify-center flex-1">
        <div
          style={{
            fontFamily: "var(--font-cabinet)",
            fontSize: "200px",
            fontWeight: 900,
          }}
          className="tracking-normal"
        >
          Vaibhav
        </div>

        <div
          style={{
            fontFamily: "sans-serif",
            fontSize: "25px",
          }}
          className="uppercase -mt-10 tracking-widest font-normal opacity-40"
        >
          I design and build products that
        </div>

        <div
          style={{
            fontFamily: "cursive",
            fontSize: "70px",
          }}
          className="tracking-tighter font-medium"
        >
          deliver real impact.
        </div>
      </div>

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
