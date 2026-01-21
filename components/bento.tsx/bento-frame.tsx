import IntoCard from "./intro-card";

export default function BentoFrame() {
  return (
    <div className="grid grid-cols-4 grid-rows-2 w-full h-screen px-10 gap-6">
      <div className="border border-white/10 row-span-1 rounded-3xl">
        <IntoCard />
      </div>
      <div className="border border-red-500 col-span-2 rounded-3xl"></div>
      <div className="border border-red-500 row-span-1 rounded-3xl"></div>

      <div className="border border-red-500 col-span-2 rounded-3xl"></div>
      <div className="border border-red-500 col-span-2 rounded-3xl"></div>
    </div>
  );
}
