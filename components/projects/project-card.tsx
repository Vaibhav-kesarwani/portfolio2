"use client";
import React from "react";

type ModalState = {
  active: boolean;
  index: number;
};

type Props = {
  index: number;
  title: string;
  setModal: React.Dispatch<React.SetStateAction<ModalState>>;
};

export default function ProjectCard({ index, title, setModal }: Props) {
  return (
    <div
      onMouseEnter={() => setModal({ active: true, index })}
      onMouseLeave={() => setModal({ active: false, index })}
      className="group w-full flex items-center justify-between pl-10 pr-20 py-12.5 border-t border-white/30 cursor-pointer transition-all duration-200 hover:opacity-50 last:border-b last:border-white/30"
    >
      <div className="flex items-center justify-center gap-5">
        <span className="text-white/40 text-sm font-semibold">
          {"0"}
          {index + 1}
        </span>
        <h2 className="text-7xl font-semibold tracking-tight transition-transform duration-400 group-hover:-translate-x-2.5">
          {title}
        </h2>
      </div>

      <p className="font-light tracking-wide transition-transform duration-400 group-hover:translate-x-2.5">
        Design & Development
      </p>
    </div>
  );
}
