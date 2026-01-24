import Image from "next/image";

export default function Contact() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center px-20">
      <div>
        <p className="uppercase tracking-[0.3em] text-white/50 text-sm mb-6">
          Connect / Follow / Chat
        </p>

        <h1 className="text-7xl md:text-8xl font-black uppercase leading-[0.9]">
          <span className="block text-white">My</span>
          <span className="block text-white/50">Digital</span>
          <span className="block text-white">Presence</span>
        </h1>
      </div>

      <div className="flex justify-end">
        <div className="relative w-75 h-75 rounded-full overflow-hidden border border-white/10">
          <Image
            src="/images/me.jpeg"
            className="w-full h-full object-cover"
            alt="me"
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
}
