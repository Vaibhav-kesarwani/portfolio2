"use client";

import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <>
      <Navbar />

      <main className="flex min-h-[70vh] flex-col items-center justify-center text-center px-4">
        <h1 className="text-9xl font-extrabold tracking-tight bg-linear-to-b from-white/50 to-white/70 bg-clip-text text-transparent">
          404
        </h1>
        <h2 className="mt-3 text-xl lg:text-2xl text-white font-semibold">
          Page Not Found
        </h2>
        <p className="mt-5 font-medium text-base md:text-lg max-w-sm md:max-w-lg text-white/50">
          Oops! The page you&apos;re looking for doesn&apos;t exist. It might
          have been moved or deleted.
        </p>

        <div className="flex items-center justify-center gap-4 mt-10">
          <Button
            onClick={() => router.push("/")}
            variant={"default"}
            className="cursor-pointer"
          >
            Back to home
          </Button>
          <Button
            onClick={() => router.push("/projects")}
            variant={"outline"}
            className="cursor-pointer"
          >
            View Projects
          </Button>
        </div>
      </main>

      <Footer />
    </>
  );
}
