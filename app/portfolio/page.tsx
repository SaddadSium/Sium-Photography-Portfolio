"use client";

import { useState } from "react";
import Link from "next/link";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("wedding");

  // High-end Unsplash images for rotating placeholders
  const weddingCovers = [
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1583939000140-690a4dfb80ed?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1529634597503-139d3726fed5?auto=format&fit=crop&q=80&w=1200",
  ];

  const corporateCovers = [
    "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1200",
  ];

  // Generating 18 Wedding Albums dynamically
  const weddingAlbums = Array.from({ length: 18 }).map((_, i) => ({
    id: `wedding-${i + 1}`,
    title: `The Royal Tale ${i + 1}`,
    client: `Wedding Series 2026`,
    image: weddingCovers[i % weddingCovers.length],
  }));

  // Generating 10 Corporate Albums dynamically
  const corporateAlbums = Array.from({ length: 10 }).map((_, i) => ({
    id: `corporate-${i + 1}`,
    title: `Brand Identity ${i + 1}`,
    client: `Corporate Campaign`,
    image: corporateCovers[i % corporateCovers.length],
  }));

  const displayedAlbums =
    activeTab === "wedding" ? weddingAlbums : corporateAlbums;

  return (
    <div className="min-h-screen pt-32 md:pt-40 pb-24 md:pb-32 bg-black">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header & Tabs */}
        {/* FIX: Changed items-end to items-start on mobile so text aligns properly */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8 md:gap-10">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extralight tracking-tight text-white mb-3 md:mb-4">
              Selected Works.
            </h1>
            <p className="text-neutral-500 text-[10px] md:text-xs uppercase tracking-[0.4em] font-medium">
              A curated visual archive
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex gap-6 md:gap-8 text-[10px] uppercase tracking-[0.3em] font-medium border-b border-white/10 pb-2 w-full md:w-auto overflow-x-auto whitespace-nowrap">
            <button
              onClick={() => setActiveTab("wedding")}
              className={`pb-2 transition-all duration-500 relative ${
                activeTab === "wedding"
                  ? "text-white"
                  : "text-neutral-600 hover:text-neutral-400"
              }`}
            >
              Wedding ({weddingAlbums.length})
              {activeTab === "wedding" && (
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white"></span>
              )}
            </button>
            <button
              onClick={() => setActiveTab("corporate")}
              className={`pb-2 transition-all duration-500 relative ${
                activeTab === "corporate"
                  ? "text-white"
                  : "text-neutral-600 hover:text-neutral-400"
              }`}
            >
              Corporate ({corporateAlbums.length})
              {activeTab === "corporate" && (
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white"></span>
              )}
            </button>
          </div>
        </div>

        {/* Albums Grid */}
        {/* FIX: Changed to 2 columns (md:grid-cols-2) for MASSIVE premium images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-20">
          {displayedAlbums.map((album) => (
            <Link
              href={`/portfolio/${album.id}`}
              key={album.id}
              className="group cursor-pointer flex flex-col"
            >
              {/* FIX: Aspect ratio changed to 4/5 for taller, more imposing portraits */}
              <div className="aspect-[4/5] w-full relative overflow-hidden bg-neutral-900 border border-white/5 mb-6 md:mb-8">
                <img
                  src={album.image}
                  alt={album.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-1000"></div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-black/40 backdrop-blur-sm">
                  <span className="text-white text-[9px] md:text-[10px] uppercase tracking-[0.4em] border border-white/30 px-6 md:px-8 py-3 md:py-4">
                    View Album
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-center text-center px-4">
                <h3 className="text-xl md:text-3xl font-serif italic text-white group-hover:text-neutral-300 transition-colors mb-2">
                  {album.title}
                </h3>
                <p className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                  {album.client}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
