"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

function generateFavicon(bg: string) {
  const size = 70;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  ctx.clearRect(0, 0, size, size);
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
  ctx.closePath();
  ctx.clip();

  // Background
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, size, size);

  // Draw logo
  const img = new Image();
  img.src = "/images/me.png";

  img.onload = () => {
    const padding = 0;
    const s = size - padding * 2;
    ctx.drawImage(img, padding, padding, s, s);

    let link = document.querySelector(
      "link[rel~='icon']"
    ) as HTMLLinkElement | null;

    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }

    link.type = "image/png";
    link.href = canvas.toDataURL("image/png");
  };
}

export default function ThemeFavicon() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (!resolvedTheme) return;

    generateFavicon(
      resolvedTheme === "dark" ? "#FFE020" : "#8EC5FF"
    );
  }, [resolvedTheme]);

  return null;
}
