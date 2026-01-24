/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { HiOutlineShare } from "react-icons/hi";
import { toast } from "sonner";

export default function ShareButton() {
  const handleShare = async () => {
    const url = window.location.href;
    const title = document.title;

    try {
      if (navigator.share) {
        await navigator.share({ title, url });
      } else {
        await navigator.clipboard.writeText(url);
        toast("Link copied!");
      }
    } catch (err: any) {
      if (err?.name !== "AbortError") {
        console.error("Share failed:", err);
      }
    }
  };

  return (
    <button
      onClick={handleShare}
      className="flex items-center gap-2 px-4 py-2 border border-white/20 bg-white/10 rounded-full text-white/80 hover:bg-white/20 hover:border-white/30 transition-all"
    >
      <HiOutlineShare className="w-4 h-4" />
      <span className="text-sm">Share</span>
    </button>
  );
}
