import ContactCard from "./contact-card";
import IntoCard from "./intro-card";
import MainCard from "./main-card";

export default function BentoFrame() {
  return (
    <div className="grid grid-cols-4 grid-rows-2 w-full h-250 px-10 gap-6 mt-10">
      <div
        className="row-span-1 rounded-3xl border border-white/10 hover:border-white/20 
                transition-colors duration-500 ease-out
                hover:shadow-[0_0_0_1px_rgba(255,255,255,0.35)]"
      >
        <IntoCard />
      </div>

      <div
        className="col-span-2 rounded-3xl border border-white/10 hover:border-white/20 
                transition-colors duration-500 ease-out
                hover:shadow-[0_0_0_1px_rgba(255,255,255,0.35)]"
      >
        <MainCard />
      </div>
      <div
        className="row-span-1 rounded-3xl border border-white/10 hover:border-white/70 
                transition-colors duration-500 ease-out
                hover:shadow-[0_0_0_1px_rgba(255,255,255,1.45)]"
      >
        <ContactCard />
      </div>

      <div className="col-span-2 rounded-3xl border border-white/10"></div>
      <div className="col-span-2 rounded-3xl border border-white/10"></div>

      <div className="pointer-events-none absolute top-[73.4%] left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <div className="relative size-100 rounded-full shadow-[0_0_100px_rgba(255,255,255,0.01)] backdrop-blur-xl">
          <div className="absolute inset-0 grid grid-rows-2 gap-6.5">
            <div className="rounded-t-full border border-white/10 border-b-0" />

            <div className="grid grid-cols-2 gap-6.5">
              <div className="border-l border-b border-white/10 rounded-bl-full" />
              <div className="border-r border-b border-white/10 rounded-br-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
