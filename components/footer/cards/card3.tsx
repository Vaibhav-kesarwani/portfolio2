import Image from "next/image";
import { SiSpotify } from "react-icons/si";

export default function Card3() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl bg-black group">
      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{ backgroundImage: "url(/images/song.jpg)" }}
      />
      <div className="absolute inset-0 bg-linear-to-br from-black/60 via-black/50 to-black/80" />
      <div className="absolute inset-0 backdrop-blur-sm group-hover:backdrop-blur-xs transition-all duration-300 ease-out" />
      <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10" />
      <div className="relative z-10 h-full p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3">
            <SiSpotify className="h-6 w-6 text-green-500" />
            <p className="text-white font-semibold text-lg tracking-tight">
              Listening Now
            </p>
          </div>

          <p className="mt-4 text-white/70 text-base tracking-wider">
            I&apos;m listening to{" "}
            <span className="text-white font-semibold">Krishvani</span> by{" "}
            <span className="text-white font-semibold">Ravan</span> from the
            album <span className="text-white font-semibold">Songs</span>
          </p>
        </div>

        <div className="relative mt-12 flex justify-center items-end">
          <div className="absolute top-10 bottom-0 h-52 w-52 transition-all duration-700 ease-out group-hover:top-0">
            <div className="absolute inset-0 rounded-full bg-linear-to-br from-neutral-700 via-neutral-900 to-black opacity-80 group-hover:animate-spin">
              <div className="absolute inset-4 rounded-full border border-white/10" />
              <div className="absolute inset-8 rounded-full border border-white/5" />
            </div>

            <div className="absolute inset-12 rounded-full overflow-hidden bg-black flex items-center justify-center z-10">
              <Image
                src="/images/song-cover.jpg"
                alt="song"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="relative z-10 h-40 w-56 overflow-hidden rounded-xl shadow-2xl top-30 transition-all duration-700 ease-out group-hover:w-65 group-hover:top-25">
            <Image
              src="/images/song-cover.jpg"
              alt="Album art"
              width={220}
              height={160}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
