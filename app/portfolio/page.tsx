"use client";

import { useState } from "react";
import Link from "next/link";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("wedding");

  // 1. 18 Individual Wedding Albums
  const weddingAlbums = [
    {
      id: "wedding-1",
      title: "Tanvir & Sanjida",
      client: "Grand Celebrations",
      image: "/images/portfolio/T1.jpg",
    },
    {
      id: "wedding-2",
      title: "Monia's Mehendi",
      client: "Mehendi Ceremony",
      image: "/images/portfolio/TW.jpg",
    },
    {
      id: "wedding-3",
      title: "Moon & Trina",
      client: "Wedding Series 2026",
      image: "/images/portfolio/T2.jpg",
    },
    {
      id: "wedding-4",
      title: "Atik & Auhona",
      client: "Intimate Akhd",
      image: "/images/portfolio/T3.jpg",
    },
    {
      id: "wedding-5",
      title: "Monia's Haldi",
      client: "Traditional Haldi",
      image: "/images/portfolio/T4.jpg",
    },
    {
      id: "wedding-6",
      title: "Rahat & Nidhi",
      client: "Grand Reception",
      image: "/images/portfolio/T6.jpg",
    },
    {
      id: "wedding-7",
      title: "Udoy & Sumaiya",
      client: "Premium Wedding",
      image: "/images/portfolio/T7.jpg",
    },
    {
      id: "wedding-8",
      title: "Shanto & Madhurjo",
      client: "Intimate Wedding",
      image: "/images/portfolio/T8.jpg",
    },
    {
      id: "wedding-9",
      title: "Roshni's Haldi",
      client: "Traditional Haldi",
      image: "/images/portfolio/T9.jpg",
    },
    {
      id: "wedding-10",
      title: "Sumaiya & Udoy",
      client: "Traditional Holud",
      image: "/images/portfolio/T10.jpg",
    },
    {
      id: "wedding-11",
      title: "Nayem & Imu",
      client: "Wedding Series 2025",
      image: "/images/portfolio/T11.jpg",
    },
    {
      id: "wedding-15",
      title: "Tanha's Wedding",
      client: "Glamorous Wedding",
      image: "/images/portfolio/T15.jpg",
    },
    {
      id: "wedding-16",
      title: "Saadat & Fariya",
      client: "Traditional Wedding",
      image: "/images/portfolio/T16.jpg",
    },
    {
      id: "wedding-21",
      title: "Bappy & Neha",
      client: "Wedding Series 2025",
      image: "/images/portfolio/T21.jpg",
    },
  ];

  // 2. 10 Individual Corporate Albums
  const corporateAlbums = [
    {
      id: "corporate-1",
      title: "NEXTOR 2.0",
      client: "An Capital Market Based Real Time Investment Compitation",
      image: "/images/corporate-cover/C1.jpg",
    },
    {
      id: "corporate-2",
      title: "Fakir Technologies Ltd.",
      client: "New Year Celebration 2026",
      image: "/images/corporate-cover/C2.jpg",
    },
  ];

  const displayedAlbums =
    activeTab === "wedding" ? weddingAlbums : corporateAlbums;

  return (
    <div className="min-h-screen pt-32 md:pt-40 pb-24 md:pb-32 bg-black">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header & Tabs */}
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-20">
          {displayedAlbums.map((album) => (
            <Link
              href={`/portfolio/${album.id}`}
              key={album.id}
              className="group cursor-pointer block relative aspect-[4/5] w-full overflow-hidden bg-neutral-900 border border-white/5"
            >
              {/* Main Image */}
              <img
                src={album.image}
                alt={album.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />

              {/* Bottom Gradient - Ensures text is readable but keeps faces clear at the top */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 transition-opacity duration-700 group-hover:opacity-100"></div>

              {/* Hover Content Container - Pinned to the Bottom */}
              <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col items-center text-center z-20">
                {/* Title & Subtitle */}
                <div className="flex flex-col items-center transition-transform duration-700 translate-y-6 group-hover:-translate-y-2 w-full">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif italic font-light text-white drop-shadow-2xl mb-2 tracking-wide w-full px-2">
                    {album.title}
                  </h3>
                  <p className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-neutral-300 font-medium drop-shadow-md">
                    {album.client}
                  </p>
                </div>

                {/* View Album Button (Slides up from below on hover) */}
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-6 group-hover:translate-y-0 mt-6 mb-2">
                  <span className="inline-block whitespace-nowrap text-white text-[9px] uppercase tracking-[0.4em] border border-white/40 px-8 py-3 bg-black/20 hover:bg-white hover:text-black transition-colors duration-300 backdrop-blur-md">
                    View Album
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
