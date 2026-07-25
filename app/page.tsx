"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const heroImages = [
    "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1516479007621-e73715c0e12e?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1478529241031-6b8343f5507b?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=2000",
  ];

  // Updated Featured Albums pointing to the dynamic portfolio routes
  const featuredAlbums = [
    {
      title: "The Royal Tale I",
      category: "Premium Wedding",
      img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
      link: "/portfolio/wedding-1",
    },
    {
      title: "Brand Identity I",
      category: "Corporate Campaign",
      img: "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&q=80&w=800",
      link: "/portfolio/corporate-1",
    },
    {
      title: "The Royal Tale II",
      category: "Exclusive Wedding",
      img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800",
      link: "/portfolio/wedding-2",
    },
  ];

  const reviews = [
    {
      text: "SIUM has an incredible eye for detail. The way he captures raw emotion and light is simply unmatched. Best investment for our brand campaign.",
      author: "Sarah Jenkins",
      role: "Creative Director",
    },
    {
      text: "Working with him was an absolute pleasure. He made the entire process feel effortless and the final images exceeded all our expectations.",
      author: "David Muller",
      role: "Corporate Client",
    },
    {
      text: "A true visual storyteller. The photos weren't just images; they were pieces of art. Highly recommended for anyone looking for premium aesthetics.",
      author: "Elena Rossi",
      role: "Bride",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentReview, setCurrentReview] = useState(0);

  // Hero Image Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1,
      );
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  // Review Slider Timer
  useEffect(() => {
    const reviewTimer = setInterval(() => {
      setCurrentReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(reviewTimer);
  }, [reviews.length]);

  return (
    <div className="min-h-screen">
      {/* 1. HERO SLIDER SECTION */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center border-b border-white/10 mt-[-96px]">
        {" "}
        {/* Adjusted for slightly taller navbar */}
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={img}
              alt={`Featured Shot ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        ))}
        <div className="relative z-20 text-center px-6 flex flex-col items-center mt-10">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-white/70 mb-6 font-medium">
            A Premium Visual Experience
          </span>
          <h1 className="text-5xl md:text-8xl font-extralight tracking-tight text-white max-w-4xl leading-none mb-8 drop-shadow-lg">
            Mastering the Art of Light & Shadow.
          </h1>
          <Link
            href="/portfolio"
            className="mt-8 text-[10px] uppercase tracking-[0.3em] border-b border-white/30 pb-2 hover:border-white transition-colors text-white/80 hover:text-white font-medium"
          >
            Explore Works
          </Link>
        </div>
        <div className="absolute bottom-10 z-20 flex gap-4">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-[2px] transition-all duration-500 ${
                index === currentSlide
                  ? "w-12 bg-white"
                  : "w-4 bg-white/30 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 2. FEATURED ALBUMS SECTION (Now Dynamic & Clickable) */}
      <section id="featured" className="max-w-7xl mx-auto px-6 py-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 mb-2 font-semibold">
              Curated Galleries
            </h2>
            <p className="text-3xl font-light text-white">Featured Albums</p>
          </div>
          <Link
            href="/portfolio"
            className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1"
          >
            View All Albums &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {featuredAlbums.map((album, idx) => (
            <Link
              href={album.link}
              key={idx}
              className="group relative overflow-hidden aspect-[3/4] bg-neutral-900 cursor-pointer border border-white/5 block"
            >
              <img
                src={album.img}
                alt={album.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end transition-opacity duration-500">
                <span className="text-[9px] tracking-[0.4em] uppercase text-neutral-400 mb-2 font-medium">
                  {album.category}
                </span>
                <h3 className="text-2xl font-serif italic text-white">
                  {album.title}
                </h3>
              </div>

              {/* Subtle hover overlay to indicate clickability */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center backdrop-blur-sm">
                <span className="text-white text-[9px] uppercase tracking-[0.4em] border border-white/30 px-6 py-3">
                  Open Album
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. UNIQUE CLIENT REVIEWS SECTION */}
      <section className="bg-[#050505] py-40 border-t border-b border-white/5 overflow-hidden relative">
        <span className="absolute top-10 left-10 md:left-32 text-[15rem] md:text-[25rem] leading-none text-white/[0.02] font-serif pointer-events-none select-none">
          "
        </span>

        <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center">
          <div className="mb-24 w-full flex items-center justify-between border-b border-white/10 pb-6">
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 font-semibold">
              Client Perspectives
            </h2>

            <div className="flex gap-6">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentReview(idx)}
                  className={`text-[10px] tracking-[0.3em] transition-all duration-300 ${
                    idx === currentReview
                      ? "text-white font-medium scale-110"
                      : "text-neutral-600 hover:text-neutral-400"
                  }`}
                >
                  0{idx + 1}
                </button>
              ))}
            </div>
          </div>

          <div className="min-h-[250px] md:min-h-[200px] flex items-center justify-center w-full relative">
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className={`absolute w-full flex flex-col items-center transition-all duration-1000 ease-out ${
                  idx === currentReview
                    ? "opacity-100 translate-y-0 z-10"
                    : "opacity-0 translate-y-8 z-0 pointer-events-none"
                }`}
              >
                <p className="text-2xl md:text-4xl lg:text-5xl text-white font-extralight leading-[1.4] tracking-wide mb-12 text-center max-w-4xl">
                  "{review.text}"
                </p>
                <div className="flex flex-col items-center text-center">
                  <div className="w-8 h-[1px] bg-white/30 mb-6"></div>
                  <p className="text-white text-xs uppercase tracking-[0.3em] mb-2">
                    {review.author}
                  </p>
                  <p className="text-neutral-500 text-[10px] uppercase tracking-widest">
                    {review.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CONTACT CTA SECTION */}
      <section id="contact" className="py-40 px-6 text-center bg-black">
        <h2 className="text-4xl md:text-6xl font-extralight tracking-tight mb-8">
          Ready to create together?
        </h2>
        <p className="text-neutral-400 text-sm max-w-md mx-auto mb-12 font-light">
          Available for international bookings, commercial campaigns, and
          private sessions. Let's discuss your vision.
        </p>
        <Link
          href="/services"
          className="inline-block px-10 py-4 bg-white text-black text-[10px] uppercase tracking-[0.3em] font-medium hover:bg-neutral-300 transition-colors"
        >
          View Packages
        </Link>
      </section>
    </div>
  );
}
