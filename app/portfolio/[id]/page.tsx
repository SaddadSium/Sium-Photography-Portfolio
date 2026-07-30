"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

// 1. ALBUM DATABASE
const albumDatabase: Record<
  string,
  { title: string; category: string; coverImage: string; gallery: string[] }
> = {
  // --------- WEDDING ALBUMS ---------
  "wedding-1": {
    title: "Tanvir & Sanjida",
    category: "Grand Celebrations",
    coverImage: "/images/portfolio/wedding-1/cover.jpg",
    gallery: ["/images/portfolio/wedding-1/pic1.jpg"],
  },
  "wedding-2": {
    title: "Monia's Mehendi",
    category: "Mehendi Ceremony'26",
    coverImage: "/images/portfolio/wedding-2/cover.jpg",
    gallery: [
      "/images/portfolio/wedding-2/pic1.jpg",
      "/images/portfolio/wedding-2/pic2.jpg",
      "/images/portfolio/wedding-2/pic3.jpg",
      "/images/portfolio/wedding-2/pic4.jpg",
      "/images/portfolio/wedding-2/pic5.jpg",
      "/images/portfolio/wedding-2/pic6.jpg",
      "/images/portfolio/wedding-2/pic7.jpg",
      "/images/portfolio/wedding-2/pic8.jpg",
      "/images/portfolio/wedding-2/pic9.jpg",
      "/images/portfolio/wedding-2/pic10.jpg",
      "/images/portfolio/wedding-2/pic11.jpg",
      "/images/portfolio/wedding-2/pic12.jpg",
      "/images/portfolio/wedding-2/pic13.jpg",
      "/images/portfolio/wedding-2/pic14.jpg",
      "/images/portfolio/wedding-2/pic15.jpg",
    ],
  },
  "wedding-3": {
    title: "Moon & Trina",
    category: "Wedding Series 2026",
    coverImage: "/images/portfolio/wedding-3/cover.jpg",
    gallery: [
      "/images/portfolio/wedding-3/pic1.jpg",
      "/images/portfolio/wedding-3/pic2.jpg",
      "/images/portfolio/wedding-3/pic3.jpg",
      "/images/portfolio/wedding-3/pic4.jpg",
      "/images/portfolio/wedding-3/pic5.jpg",
      "/images/portfolio/wedding-3/pic6.jpg",
      "/images/portfolio/wedding-3/pic7.jpg",
      "/images/portfolio/wedding-3/pic8.jpg",
      "/images/portfolio/wedding-3/pic9.jpg",
      "/images/portfolio/wedding-3/pic10.jpg",
      "/images/portfolio/wedding-3/pic11.jpg",
      "/images/portfolio/wedding-3/pic12.jpg",
      "/images/portfolio/wedding-3/pic13.jpg",
      "/images/portfolio/wedding-3/pic14.jpg",
      "/images/portfolio/wedding-3/pic15.jpg",
      "/images/portfolio/wedding-3/pic16.jpg",
      "/images/portfolio/wedding-3/pic17.jpg",
      "/images/portfolio/wedding-3/pic18.jpg",
      "/images/portfolio/wedding-3/pic19.jpg",
      "/images/portfolio/wedding-3/pic20.jpg",
      "/images/portfolio/wedding-3/pic21.jpg",
      "/images/portfolio/wedding-3/pic22.jpg",
      "/images/portfolio/wedding-3/pic23.jpg",
      "/images/portfolio/wedding-3/pic24.jpg",
      "/images/portfolio/wedding-3/pic25.jpg",
      "/images/portfolio/wedding-3/pic26.jpg",
      "/images/portfolio/wedding-3/pic27.jpg",
      "/images/portfolio/wedding-3/pic28.jpg",
    ],
  },
  "wedding-4": {
    title: "Atik & Auhona",
    category: "Intimate Akhd",
    coverImage: "/images/portfolio/wedding-4/cover.jpg",
    gallery: [
      "/images/portfolio/wedding-4/pic1.jpg",
      "/images/portfolio/wedding-4/pic2.jpg",
      "/images/portfolio/wedding-4/pic3.jpg",
      "/images/portfolio/wedding-4/pic4.jpg",
      "/images/portfolio/wedding-4/pic5.jpg",
      "/images/portfolio/wedding-4/pic6.jpg",
      "/images/portfolio/wedding-4/pic7.jpg",
      "/images/portfolio/wedding-4/pic8.jpg",
      "/images/portfolio/wedding-4/pic9.jpg",
      "/images/portfolio/wedding-4/pic10.jpg",
      "/images/portfolio/wedding-4/pic11.jpg",
      "/images/portfolio/wedding-4/pic12.jpg",
      "/images/portfolio/wedding-4/pic13.jpg",
      "/images/portfolio/wedding-4/pic14.jpg",
      "/images/portfolio/wedding-4/pic15.jpg",
      "/images/portfolio/wedding-4/pic16.jpg",
      "/images/portfolio/wedding-4/pic17.jpg",
      "/images/portfolio/wedding-4/pic18.jpg",
      "/images/portfolio/wedding-4/pic19.jpg",
      "/images/portfolio/wedding-4/pic20.jpg",
      "/images/portfolio/wedding-4/pic21.jpg",
      "/images/portfolio/wedding-4/pic22.jpg",
      "/images/portfolio/wedding-4/pic23.jpg",
      "/images/portfolio/wedding-4/pic24.jpg",
      "/images/portfolio/wedding-4/pic25.jpg",
      "/images/portfolio/wedding-4/pic26.jpg",
      "/images/portfolio/wedding-4/pic27.jpg",
    ],
  },
  "wedding-5": {
    title: "Monia's Haldi",
    category: "Traditional Haldi'26",
    coverImage: "/images/portfolio/wedding-5/cover.jpg",
    gallery: [
      "/images/portfolio/wedding-5/pic1.jpg",
      "/images/portfolio/wedding-5/pic2.jpg",
      "/images/portfolio/wedding-5/pic3.jpg",
      "/images/portfolio/wedding-5/pic4.jpg",
      "/images/portfolio/wedding-5/pic5.jpg",
      "/images/portfolio/wedding-5/pic6.jpg",
      "/images/portfolio/wedding-5/pic7.jpg",
      "/images/portfolio/wedding-5/pic8.jpg",
      "/images/portfolio/wedding-5/pic9.jpg",
      "/images/portfolio/wedding-5/pic10.jpg",
      "/images/portfolio/wedding-5/pic11.jpg",
      "/images/portfolio/wedding-5/pic12.jpg",
      "/images/portfolio/wedding-5/pic13.jpg",
      "/images/portfolio/wedding-5/pic14.jpg",
      "/images/portfolio/wedding-5/pic15.jpg",
      "/images/portfolio/wedding-5/pic16.jpg",
      "/images/portfolio/wedding-5/pic17.jpg",
      "/images/portfolio/wedding-5/pic18.jpg",
      "/images/portfolio/wedding-5/pic19.jpg",
      "/images/portfolio/wedding-5/pic20.jpg",
      "/images/portfolio/wedding-5/pic21.jpg",
      "/images/portfolio/wedding-5/pic22.jpg",
      "/images/portfolio/wedding-5/pic23.jpg",
      "/images/portfolio/wedding-5/pic24.jpg",
      "/images/portfolio/wedding-5/pic25.jpg",
    ],
  },
  "wedding-6": {
    title: "Rahat & Nidhi",
    category: "Grand Reception",
    coverImage: "/images/portfolio/wedding-6/cover.jpg",
    gallery: [
      "/images/portfolio/wedding-6/pic1.jpg",
      "/images/portfolio/wedding-6/pic2.jpg",
      "/images/portfolio/wedding-6/pic3.jpg",
    ],
  },
  "wedding-7": {
    title: "Udoy & Sumaiya",
    category: "Premium Wedding",
    coverImage: "/images/portfolio/wedding-7/cover.jpg",
    gallery: [
      "/images/portfolio/wedding-7/pic1.jpg",
      "/images/portfolio/wedding-7/pic2.jpg",
      "/images/portfolio/wedding-7/pic3.jpg",
    ],
  },
  "wedding-8": {
    title: "Shanto & Madhurjo",
    category: "Intimate Wedding",
    coverImage: "/images/portfolio/wedding-8/cover.jpg",
    gallery: [
      "/images/portfolio/wedding-8/pic1.jpg",
      "/images/portfolio/wedding-8/pic2.jpg",
      "/images/portfolio/wedding-8/pic3.jpg",
    ],
  },
  "wedding-9": {
    title: "Roshni's Haldi",
    category: "Traditional Haldi",
    coverImage: "/images/portfolio/wedding-9/cover.jpg",
    gallery: [
      "/images/portfolio/wedding-9/pic1.jpg",
      "/images/portfolio/wedding-9/pic2.jpg",
      "/images/portfolio/wedding-9/pic3.jpg",
      "/images/portfolio/wedding-9/pic4.jpg",
      "/images/portfolio/wedding-9/pic5.jpg",
      "/images/portfolio/wedding-9/pic6.jpg",
      "/images/portfolio/wedding-9/pic7.jpg",
      "/images/portfolio/wedding-9/pic8.jpg",
    ],
  },

  // --------- CORPORATE ALBUMS ---------
  "corporate-1": {
    title: "Brand Identity I",
    category: "Corporate Campaign",
    coverImage: "/images/c1.webp",
    gallery: [
      "/images/portfolio/corp-1/pic1.webp",
      "/images/portfolio/corp-1/pic2.webp",
    ],
  },
  "corporate-2": {
    title: "Tech Summit 2026",
    category: "Event Coverage",
    coverImage: "/images/c2.webp",
    gallery: [],
  },
  // (একইভাবে corporate-3 থেকে corporate-10 পর্যন্ত যোগ করবেন)
};

export default function AlbumDetail() {
  const params = useParams();
  const albumId = params.id as string;

  // URL এর ID অনুযায়ী ডাটাবেস থেকে নির্দিষ্ট অ্যালবামের ডাটা বের করা
  const albumData = albumDatabase[albumId];

  // যদি ডাটাবেসে অ্যালবামের আইডি না থাকে বা আপনি এখনো ছবি অ্যাড না করে থাকেন, তাহলে এই পেজটি দেখাবে
  if (!albumData) {
    return (
      <div className="min-h-screen bg-[#020202] flex flex-col items-center justify-center text-white px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-serif italic font-light mb-6">
          Album Curated Soon.
        </h1>
        <p className="text-neutral-500 text-[10px] uppercase tracking-[0.4em] mb-10">
          We are preparing this visual story.
        </p>
        <Link
          href="/portfolio"
          className="text-[10px] uppercase tracking-[0.3em] border-b border-white/30 pb-1 hover:border-white transition-colors"
        >
          Return to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020202]">
      {/* 1. Cinematic Album Hero (Cover Section) */}
      <div className="h-[60vh] md:h-[80vh] relative flex flex-col items-center justify-center border-b border-white/10">
        <div className="absolute inset-0 bg-black z-0">
          {/* Cover Image from database */}
          <img
            src={albumData.coverImage}
            alt={albumData.title}
            className="w-full h-full object-cover opacity-70 object-center"
          />
        </div>

        <div className="relative z-10 text-center px-6 mt-10">
          <span className="text-[10px] uppercase tracking-[0.5em] text-neutral-400 mb-6 block drop-shadow-md">
            {albumData.category}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif italic text-white tracking-wide drop-shadow-2xl font-light">
            {albumData.title}
          </h1>
        </div>
      </div>

      {/* 2. Masonry Grid for Gallery Pictures */}
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-24 md:py-32">
        {albumData.gallery.length > 0 ? (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-8 space-y-4 md:space-y-8">
            {albumData.gallery.map((imgSrc, idx) => (
              <div
                key={idx}
                className="relative group overflow-hidden break-inside-avoid bg-neutral-900 border border-white/5"
              >
                <img
                  src={imgSrc}
                  alt={`${albumData.title} - Captured Moment ${idx + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
            ))}
          </div>
        ) : (
          /* যদি গ্যালারিতে কোনো ছবি না দেওয়া থাকে (Empty Array) */
          <div className="text-center py-20">
            <p className="text-neutral-500 text-xs uppercase tracking-[0.4em]">
              Photographs are currently being curated.
            </p>
          </div>
        )}

        {/* 3. Back Button */}
        <div className="mt-32 flex justify-center">
          <Link
            href="/portfolio"
            className="text-[10px] uppercase tracking-[0.3em] text-white border border-white/20 px-10 py-4 hover:bg-white hover:text-black transition-all duration-500 backdrop-blur-sm"
          >
            &larr; Back to Selected Works
          </Link>
        </div>
      </div>
    </div>
  );
}
