"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

export default function AlbumDetail() {
  const params = useParams();
  const albumId = params.id as string;

  // Dynamic naming based on the ID passed in the URL
  const isWedding = albumId.includes("wedding");
  const formattedTitle = albumId.replace("-", " ").toUpperCase();

  // High-quality placeholder images for inside the album (12 pictures)
  const galleryImages = Array.from({ length: 12 }).map((_, i) =>
    isWedding
      ? `https://images.unsplash.com/photo-${1519741497674 + i}?auto=format&fit=crop&q=80&w=1200`
      : `https://images.unsplash.com/photo-${1515169067868 + i}?auto=format&fit=crop&q=80&w=1200`,
  );

  return (
    <div className="min-h-screen bg-[#020202]">
      {/* Cinematic Album Hero */}
      <div className="h-[60vh] md:h-[80vh] relative flex flex-col items-center justify-center border-b border-white/10">
        <div className="absolute inset-0 bg-black z-0">
          <img
            src={
              isWedding
                ? "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=2000"
                : "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
            }
            alt="Cover"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="relative z-10 text-center px-6 mt-10">
          <span className="text-[10px] uppercase tracking-[0.5em] text-neutral-400 mb-6 block">
            {isWedding ? "Wedding Editorial" : "Corporate Identity"}
          </span>
          <h1 className="text-4xl md:text-7xl font-serif italic text-white tracking-wide">
            {formattedTitle}
          </h1>
        </div>
      </div>

      {/* Grid of 12 Pictures */}
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-32">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-8 space-y-4 md:space-y-8">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden break-inside-avoid bg-neutral-900 border border-white/5"
            >
              <img
                src={`https://picsum.photos/seed/${albumId}-${idx}/800/${idx % 2 === 0 ? "1000" : "600"}`}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div className="mt-32 flex justify-center">
          <Link
            href="/portfolio"
            className="text-[10px] uppercase tracking-[0.3em] text-white border border-white/20 px-10 py-4 hover:bg-white hover:text-black transition-all duration-500"
          >
            &larr; Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
