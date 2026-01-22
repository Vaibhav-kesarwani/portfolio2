"use client";
import { useEffect, useRef, useState } from "react";

export default function HudWatch() {
  const mounted = useRef(false);
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    mounted.current = true;
    setTime(new Date());

    const i = setInterval(() => setTime(new Date()), 16);
    return () => clearInterval(i);
  }, []);

  // eslint-disable-next-line react-hooks/refs
  if (!mounted.current || !time) return null;

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours() % 12;

  const secondDeg = seconds * 6;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = hours * 30 + minutes * 0.5;

  return (
    <div className="relative size-90 rounded-full flex items-center justify-center pointer-events-none shadow-inner shadow-white/70">
      <Dial />
      <Hand deg={hourDeg} width="6px" height="90px" glow />
      <Hand deg={minuteDeg} width="4px" height="120px" />
      <Hand deg={secondDeg} width="2px" height="150px" />
      <div className="absolute size-4 bg-white rounded-full z-10 shadow-[0_0_10px_white]" />
    </div>
  );
}

function Dial() {
  return (
    <div className="absolute inset-0 rounded-full border border-white/10">
      {[...Array(60)].map((_, i) => (
        <div
          key={i}
          className={`absolute top-0 left-1/2 ${
            i % 5 === 0 ? "h-4 w-0.5 bg-white" : "h-2 w-px bg-white/40"
          }`}
          style={{
            transform: `rotate(${i * 6}deg) translateX(-50%) translateY(10px)`,
            transformOrigin: "50% 180px",
          }}
        />
      ))}
    </div>
  );
}

function Hand({
  deg,
  width,
  height,
  glow = false,
}: {
  deg: number;
  width: string;
  height: string;
  glow?: boolean;
}) {
  return (
    <div
      className="absolute bottom-1/2 left-1/2 origin-bottom will-change-transform"
      style={{
        transform: `rotate(${deg}deg) translateX(-50%)`,
      }}
    >
      <div
        className={`bg-white rounded-full ${
          glow ? "shadow-[0_0_16px_white]" : ""
        }`}
        style={{
          width,
          height,
        }}
      />
    </div>
  );
}
