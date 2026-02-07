"use client";

import { Button } from "@/components/ui/button";
import { Heart, Sparkles } from "lucide-react";

export default function Sponsor() {
  return (
    <main className="relative flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <div
        className="
          absolute inset-0 -z-10
          bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_60%)]
          dark:bg-[radial-gradient(circle_at_top,rgba(236,180,60,0.15),transparent_60%)]
        "
      />

      <div className="max-w-xl space-y-6">
        <div
          className="
            mx-auto flex h-14 w-14 items-center justify-center rounded-2xl
            bg-blue-300/10 text-blue-400
            dark:bg-yellow-500/10 dark:text-yellow-300
          "
        >
          <Sparkles className="h-7 w-7" />
        </div>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          No Active Sponsors Yet. You could be the first 💛
        </h1>

        <p className="text-muted-foreground">
          Sponsoring helps keep Lab&apos;s growing and supports new features,
          documentation, and components improvements.
        </p>

        <div className="flex justify-center">
          <Button
            size="lg"
            className="
              gap-2 font-semibold cursor-pointer
              bg-blue-300 text-black hover:bg-blue-400
              dark:bg-yellow-300 dark:text-black dark:hover:bg-yellow-400
            "
            onClick={() =>
              window.open(
                "https://github.com/sponsors/Vaibhav-kesarwani",
                "_blank",
              )
            }
          >
            <Heart className="h-4 w-4" />
            Become a Sponsor
          </Button>
        </div>

        <p className="text-xs text-muted-foreground">
          Powered by GitHub Sponsors. Your support means a lot.
        </p>
      </div>
    </main>
  );
}
