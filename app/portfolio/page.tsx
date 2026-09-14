"use client";

import { useState } from "react";
import Link from "next/link";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("wedding");

  // 1. Wedding Albums
  const weddingAlbums = [
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

  // 2. Haldi & Mehendi Albums
  const haldiAlbums = [
    {
      id: "wedding-2",
      title: "Monia's Mehendi",
      client: "Mehendi Ceremony",
      image: "/images/portfolio/TW.jpg",
    },
    {
      id: "wedding-5",
      title: "Monia's Haldi",
      client: "Traditional Haldi",
      image: "/images/portfolio/T4.jpg",
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
  ];

  // 3. Reception Albums
  const receptionAlbums = [
    {
      id: "wedding-1",
      title: "Tanvir & Sanjida",
      client: "Grand Celebrations",
      image: "/images/portfolio/T1.jpg",
    },
    {
      id: "wedding-6",
      title: "Rahat & Nidhi",
      client: "Grand Reception",
      image: "/images/portfolio/T6.jpg",
    },
  ];

  // 4. Corporate Albums
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

  // Logic to determine which albums to display based on active tab
  let displayedAlbums = weddingAlbums;
  if (activeTab === "haldi") {
    displayedAlbums = haldiAlbums;
  } else if (activeTab === "reception") {
    displayedAlbums = receptionAlbums;
  } else if (activeTab === "corporate") {
    displayedAlbums = corporateAlbums;
  }

  return (
    <div className="min-h-screen pt-32 md:pt-40 pb-24 md:pb-32 bg-black">
      {/* FIX: Reduced max-width to 1400px and added extra padding (px-8 lg:px-12) to ensure perfect spacing on the sides */}
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        {/* Header & Tabs */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-8 md:gap-10">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extralight tracking-tight text-white mb-3 md:mb-4">
              Selected Works.
            </h1>
            <p className="text-neutral-500 text-[10px] md:text-xs uppercase tracking-[0.4em] font-medium">
              A curated visual archive
            </p>
          </div>

          {/* Interactive Filter Tabs (4 Categories) */}
          <div className="flex gap-6 md:gap-8 text-[10px] uppercase tracking-[0.3em] font-medium border-b border-white/10 pb-2 w-full md:w-auto overflow-x-auto whitespace-nowrap scrollbar-hide">
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
              onClick={() => setActiveTab("haldi")}
              className={`pb-2 transition-all duration-500 relative ${
                activeTab === "haldi"
                  ? "text-white"
                  : "text-neutral-600 hover:text-neutral-400"
              }`}
            >
              Haldi / Mehendi ({haldiAlbums.length})
              {activeTab === "haldi" && (
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white"></span>
              )}
            </button>

            <button
              onClick={() => setActiveTab("reception")}
              className={`pb-2 transition-all duration-500 relative ${
                activeTab === "reception"
                  ? "text-white"
                  : "text-neutral-600 hover:text-neutral-400"
              }`}
            >
              Reception ({receptionAlbums.length})
              {activeTab === "reception" && (
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

        {/* Albums Grid - 4 columns on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
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

              {/* Bottom Gradient */}
              <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-90 transition-opacity duration-700 group-hover:opacity-100"></div>

              {/* Hover Content Container - Pinned to the Bottom with adjusted padding */}
              <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col items-center text-center z-20">
                {/* Title & Subtitle - Scaled down to fit elegantly in 4 columns */}
                <div className="flex flex-col items-center transition-transform duration-700 translate-y-6 group-hover:-translate-y-2 w-full">
                  <h3 className="text-2xl md:text-3xl font-serif italic font-light text-white drop-shadow-2xl mb-2 tracking-wide w-full px-2 leading-tight">
                    {album.title}
                  </h3>
                  <p className="text-[7.5px] md:text-[8.5px] uppercase tracking-[0.3em] text-neutral-300 font-medium drop-shadow-md">
                    {album.client}
                  </p>
                </div>

                {/* View Album Button - Adjusted padding for smaller cards */}
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-6 group-hover:translate-y-0 mt-5 mb-1">
                  <span className="inline-block whitespace-nowrap text-white text-[8px] md:text-[9px] uppercase tracking-[0.3em] border border-white/40 px-6 py-2.5 bg-black/30 hover:bg-white hover:text-black transition-colors duration-300 backdrop-blur-md">
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
