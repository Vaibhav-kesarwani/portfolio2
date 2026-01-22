import HudWatch from "../vaibhav-ui/clock-ui";

export default function OverlayCard() {
  return (
    <div className="absolute top-[73.4%] left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
      <div className="relative size-100 flex items-center justify-center group">
        <div className="relative size-100 rounded-full shadow-[0_0_100px_rgba(255,255,255,0.01)] backdrop-blur-xl flex items-center justify-center">
          <div className="absolute inset-0 grid grid-rows-2 gap-6.5 pointer-events-none">
            <div className="rounded-t-full border border-white/10 border-b-0" />
            <div className="grid grid-cols-2 gap-6.5">
              <div className="border-l border-b border-white/10 rounded-bl-full" />
              <div className="border-r border-b border-white/10 rounded-br-full" />
            </div>
          </div>

          <div className="absolute inset-4.5 rounded-full bg-black/80 backdrop-blur-xl pointer-events-none" />
          <div
            className="
              relative z-10
              scale-[0.9]
              group-hover:scale-[0.95]
              transition-transform
              duration-700
              ease-[cubic-bezier(.22,1,.36,1)]
              will-change-transform
              origin-center
            "
          >
            <HudWatch />
          </div>
        </div>
      </div>
    </div>
  );
}
