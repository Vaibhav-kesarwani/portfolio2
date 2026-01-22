import { AuroraText } from "../vaibhav-ui/aurora-text";
import Card1 from "./cards/card1";
import Card2 from "./cards/card2";
import Card3 from "./cards/card3";

export default function CTASection() {
  const cards = [Card1, Card2, Card3];

  return (
    <div className="mt-50">
      <div className="flex flex-col items-center justify-center">
        <span className="uppercase font-semibold text-base text-white/50 tracking-wider">
          behind the curtains
        </span>
        <h2 className="mt-4 text-6xl font-bold tracking-tight">
          Decoding logic
        </h2>
        <AuroraText className="mt-1 text-6xl font-extrabold tracking-tight">
          && the lyrics
        </AuroraText>
      </div>
      <div className="mt-20 grid grid-cols-3 w-full h-90 px-10 gap-5">
        {cards.map((Card, i) => (
          <div
            key={i}
            className="rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 ease-out"
          >
            <Card />
          </div>
        ))}
      </div>
    </div>
  );
}
