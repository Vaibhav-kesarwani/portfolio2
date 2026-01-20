import Image from "next/image";

export default function Logo() {
  return (
    <div className="fixed top-5 left-5 z-50 flex items-center gap-3">
      <Image
        src="/images/logo.png"
        alt="logo"
        height={40}
        width={40}
        className="rounded-full"
      />

      <div className="h-6 w-px bg-white/10" />

      <div className="flex items-center justify-between gap-2">
        <div className="relative flex h-2 w-2 items-center justify-center">
          <span className="h-1 w-1 rounded-full bg-green-500" />
          <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
        </div>

        <div
          style={{
            fontSize: "10px",
          }}
          className="font-medium flex flex-col tracking-wider uppercase"
        >
          <span className="text-white/40">Creative engineer</span>
          <span className="text-green-600">Building the Future</span>
        </div>
      </div>
    </div>
  );
}
