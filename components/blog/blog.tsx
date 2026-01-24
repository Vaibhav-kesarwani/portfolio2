"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type Blog = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  readingTime: string;
  tags?: string[];
};

export default function Blog({ blogs }: { blogs: Blog[] }) {
  const [query, setQuery] = useState("");

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);

    return date
      .toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      })
      .replace(" ", " ");
  };

  const filtered = blogs.filter((post) => {
    const q = query.toLowerCase();

    return (
      post.title.toLowerCase().includes(q) ||
      post.summary.toLowerCase().includes(q) ||
      post.tags?.join(" ").toLowerCase().includes(q)
    );
  });

  return (
    <>
      <div className="w-full flex justify-center mb-8 px-6">
        <div className="relative w-full max-w-lg">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-5 w-5 text-white/60 pointer-events-none" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search posts..."
            className="w-full pl-11 pr-5 py-3 rounded-xl bg-white/2 border border-white/10 text-white placeholder-white/50 font-semibold
                 focus:outline-none focus:border-white/30
                 transition-all duration-300 ease-out"
          />
        </div>
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
        {filtered.map((post) => (
          <Link key={post.slug} href={`/blogs/${post.slug}`} className="group">
            <div className="relative h-full w-full rounded-xl border border-white/10 py-5 px-6 bg-white/2 group-hover:bg-white/4 transition-all duration-300 ease-out">
              <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-widest text-white/60 font-semibold">
                <span>{formatDate(post.date)}</span>
                <span>•</span>
                <span>{post.readingTime}</span>
              </div>

              <h2 className="text-2xl font-bold  mb-4 text-white group-hover:text-emerald-500 transition-all duration-300 ease-out">
                {post.title}
              </h2>

              <p className="text-white/60 leading-relaxed mb-6 text-base font-medium">
                {post.summary}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs border border-white/10 bg-white/3 text-white/70 font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="flex min-h-75 items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-4 text-sm text-white/40">
            <video
              src="/videos/empty.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="bg-background h-80 w-80 rounded-xl"
            />

            <span className="text-2xl font-semibold text-white/60">
              No posts found matching your search.
            </span>
          </div>
        </div>
      )}
    </>
  );
}
