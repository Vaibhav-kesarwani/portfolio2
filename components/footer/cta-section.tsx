import { AuroraText } from "../vaibhav-ui/aurora-text";
import Card1 from "./cards/card1";

export default function CTASection() {
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

      <div className="mt-20 grid grid-cols-3 px-10 w-full h-85 gap-5">
        <div className="rounded-2xl border border-white/10 hover:border-white/20 transition-all ease-out duration-300">
          <Card1 />
        </div>
        <div className="rounded-2xl border border-white/10 hover:border-white/20 transition-all ease-out duration-300"></div>
        <div className="rounded-2xl border border-white/10 hover:border-white/20 transition-all ease-out duration-300"></div>
      </div>
    </div>
  );
}
