import { AuroraText } from "@/components/vaibhav-ui/aurora-text";
import { FaArrowRight } from "react-icons/fa";

export default function Card2() {
  return (
    <div className="group py-7 px-6 h-full flex flex-col justify-between">
      <h2 className="uppercase text-sm tracking-widest text-white/50 font-medium">
        visitors
      </h2>

      <div className="mt-6 flex flex-col leading-none">
        <span className="text-5xl font-bold">Leave your</span>
        <AuroraText className="text-5xl font-bold">signature</AuroraText>
      </div>

      <p className="mt-8 text-lg tracking-wide text-white/50 font-medium max-w-xs">
        Let me know you were here.
      </p>

      <div className="flex justify-end">
        <button className="group/button cursor-pointer flex items-center gap-3 text-sm font-semibold border border-white/20 px-5 py-2.5 rounded-full text-white/60 transition-all duration-300 ease-out group-hover:border-white/40 hover:bg-white/5">
          <span className="tracking-tight">Sign Guestbook</span>

          <FaArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover/button:translate-x-1" />
        </button>
      </div>
    </div>
  );
}
