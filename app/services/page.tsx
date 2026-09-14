"use client";

import { useState } from "react";
import Link from "next/link";

export default function Packages() {
  const [activeTab, setActiveTab] = useState("single");

  // 1. Signature Core Packages (Single Events)
  const corePackages = [
    {
      name: "The Intimate Engagement",
      subtitle: "Akhd & Aqd Ceremonies",
      price: "6,500 BDT",
      image: "/images/services/Akhd.jpg",
      imgPosition: "object-center",
      features: [
        "Lead personally by A.S.M. Sium",
        "5 Hours of Intimate Coverage",
        "15 Master-Retouched Portraits",
        "All Edited High-Resolution Files",
        "Secure Google Drive Delivery (20 Days)",
      ],
    },
    {
      name: "The Cinematic Escape",
      subtitle: "Pre/Post-Wedding Portraits",
      price: "14,000 BDT",
      image: "/images/services/pre-wedding.jpg",
      imgPosition: "object-center",
      features: [
        "Lead personally by A.S.M. Sium & 1 Core Cinematographer",
        "2 Scenic Locations (6 Hours) with Concept & Styling Guidance",
        "All Hand-Retouched Photos Delivered",
        "1 Cinematic Reel & 1 Story Film Edit (3-5 Min)",
        "Secure Google Drive Delivery (20 Days)",
      ],
    },
    {
      name: "The Radiance Palette",
      subtitle: "Classic Holud & Mehendi",
      price: "16,000 BDT",
      image: "/images/services/Mehendi.jpg",
      imgPosition: "object-center",
      features: [
        "Supervised & Captured by A.S.M. Sium & 1 Senior Cinematographer",
        "All Vibrant Retouched Photos Delivered",
        "2 Min Highlight Film & Full Event Chronicle",
        "Unlimited Clicks & Raw Video Footage",
        "Secure Google Drive Delivery (20 Days)",
      ],
    },
    {
      name: "The Core Wedding",
      subtitle: "The Main Celebration",
      price: "20,000 BDT",
      image: "/images/services/Wedding.jpg",
      imgPosition: "object-top",
      isPopular: true,
      features: [
        "Lead Photographer: A.S.M. Sium + Senior Associate",
        "1 Chief Cinematographer",
        "All Curated & Retouched Photos Delivered",
        "1 Cinematic Trailer & 1 Full Wedding Feature Film",
        "Exclusive Presentation Box with USB Drive (30 Days)",
      ],
    },
    {
      name: "The Grand Finale",
      subtitle: "Elegant Reception Evening",
      price: "26,000 BDT",
      image: "/images/services/Grecep.jpg",
      imgPosition: "object-top",
      isPopular: true,
      features: [
        "Lead Photographer: A.S.M. Sium + 1 Top Photographer",
        "1 Chief Cinematographer & 1 Top Cinematographer",
        "All Retouched Photos Delivered",
        "Specialized Stage, Candid Focus & Guest Portraits",
        "1 Reels, 1 Cinematic Trailer & 1 Full Film ",
        "Exclusive Presentation Box with USB Drive (30 Days)",
      ],
    },
    {
      name: "New Beginnings",
      subtitle: "Maternity & Baby Milestones",
      price: "7,000 BDT",
      image: "/images/services/Maternity.jpg",
      imgPosition: "object-top",
      features: [
        "Directly Photographed by A.S.M. Sium",
        "4-5 Hours Relaxed Session",
        "All Professionally Edited Photos",
        "Exclusive Family Portrait Session",
        "Secure Google Drive Delivery (20 Days)",
      ],
    },
    {
      name: "The Milestone Series",
      subtitle: "Birthdays & Anniversaries",
      price: "15,000 BDT",
      image: "/images/services/Birthday.jpg",
      imgPosition: "object-center",
      features: [
        "Lead Photography by A.S.M. Sium & 1 Cinematographer",
        "5 Hours Dedicated Event Coverage",
        "All Professionally Edited Photos",
        "1 Cinematic Trailer & 1 Full Event Film",
        "Secure Google Drive Delivery (20 Days)",
      ],
    },
    {
      name: "The Grand Celebration",
      subtitle: "Receptions/Weddings/Haldi",
      price: "45,000 BDT",
      image: "/images/services/GRAND.jpg",
      imgPosition: "object-top",
      features: [
        "Direct Creative Direction & Lead Shots by A.S.M. Sium",
        "1 Senior Photographer & 1 Top Photographer",
        "1 Chief Cinematographer & 1 Top Cinematographer",
        "5-6 Hours of Comprehensive Coverage",
        "Cinematic Drone Coverage for Aerial Shots",
        "Unlimited Master Coverage (6-7 Hours)",
        "All Master-Retouched Photos Delivered",
        "Exclusive Presentation Box with USB Drive (30 Days)",
      ],
    },
  ];

  // 2. Multi-Day Combo Packages
  const comboPackages = [
    {
      name: "Chapter I: The Essential Duo",
      events: "Holud + Wedding (Bride Side)",
      price: "30,000 BDT",
      image: "/images/services/Classicduo.jpg",
      imgPosition: "object-center",
      benefit:
        "Save 10% on combined booking. Personal creative lead by A.S.M. Sium.",
      features: [
        "Lead Photographer: A.S.M. Sium & 1 Top Cinematographer for Both Days",
        "1 Cinematic Trailer & 1 Full Event Edit (per Day)",
        "All Retouched Photos Delivered",
        "Priority 15-Day Digital Delivery",
      ],
    },
    {
      name: "Chapter II: The Classic Duo",
      events: "Wedding + Reception (Groom Side)",
      price: "50,000 BDT",
      image: "/images/services/Gduo.jpg",
      imgPosition: "object-center",
      benefit: "Complimentary Drone Coverage for the Reception Entry.",
      features: [
        "2 Top Tier Photographers led by A.S.M. Sium & 1 Top Tier Cinematographer on Both Days",
        "All Retouched Photos Delivered",
        "1 Cinematic Trailer & 1 Full Film (per Day)",
        "Priority 15-Day Digital Delivery",
      ],
    },
    {
      name: "Chapter III: The Vibrant Trilogy",
      events: "Mehendi + Holud + Wedding (Bride Side)",
      price: "60,000 BDT",
      image: "/images/services/Vtrio.jpg",
      imgPosition: "object-top",
      benefit: "Get a complimentary pre-wedding session with this package.",
      features: [
        "A.S.M. Sium & 1 Top Cinematographer for MEHENDI & HOLUD",
        "2 Senior Photographers & 1 Top Cinematographer for WEDDING",
        "All Retouched Photos Delivered",
        "Instagram Reel Edits for Mehendi & Comprehensive Event Film",
        "Priority 15-Day Digital Delivery",
      ],
    },
    {
      name: "Chapter IV: The Grand Trilogy",
      events: "Holud + Wedding + Reception (Groom/Bride Side)",
      price: "1,05,000 BDT",
      image: "/images/services/GTrio.jpg",
      imgPosition: "object-top",
      benefit:
        "Complimentary Pre-Wedding Session & Drone Coverage for Reception.",
      isHighlight: true,
      features: [
        "Lead Direction by A.S.M. Sium for Holud, Wedding & Reception",
        "2 Senior Photographers & 2 Top Cinematographers for Holud, Wedding & Reception",
        "5-6 Hours Coverage per Day",
        "1 Cinematic Trailer, 1 Full Film Edit (per Day) & Reels for pre-wedding, wedding & reception",
        "Delivery By Pen Drive (30 Days)",
      ],
    },
    {
      name: "Chapter V: The Complete Saga",
      events: "Akhd + Holud + Wedding + Reception",
      price: "1,35,000 BDT",
      image: "/images/services/CSaga.jpg",
      imgPosition: "object-top",
      benefit:
        "Ultimate Value: Save 10% & Complimentary Pre-Wedding Session, Drone coverage (Reception), and express delivery within 14 Days.",
      features: [
        "6-7 Hours Coverage for 4 Full Events (Akhd, Holud, Wedding & Reception)",
        "Personal Lead Coverage by A.S.M. Sium & Team",
        "All Retouched Photos Delivered",
        "1 Cinematic Trailer, 1 Full Film Edit (per Day) & Reels for all events",
        "Drone Coverage for Reception",
      ],
    },
    {
      name: "Chapter VI: The Royal Signature",
      events:
        "Pre-Wedding + Mehendi + Holud + Wedding + Reception (Bride & Groom Side)",
      price: "1,55,000 BDT",
      image: "/images/services/R.jpg",
      imgPosition: "object-top",
      benefit:
        "Our most exclusive tier. VIP priority, unlimited coverage & zero compromises.",
      features: [
        "6-7 Hours of Unrestricted Coverage Lead by A.S.M. Sium",
        "2 Senior Photographers & 2 Top Cinematographers for Mehendi & Holud",
        "3 Senior Photographers & 3 Top Cinematographers for Wedding & Reception including Drone Coverage",
        "1 Cinematic Trailer, 1 Full Film Edit (per Day) & Reels for all events",
      ],
    },
  ];

  // 3. Physical Add-Ons
  const addOns = [
    {
      name: "Fine Art Photo Album (100 Pieces)",
      desc: "Archival Quality Prints (Various Sizes)",
      price: "Starts at 600 BDT",
    },
    {
      name: "Elegant Photo Album (200 Pieces)",
      desc: "Archival Quality Prints (Various Sizes)",
      price: "Starts at 1,200 BDT",
    },
    {
      name: "4R Photo Prints",
      desc: "4*6 Inches Per Photo Print, Archival Quality",
      price: "Per Print: 17 BDT",
    },
    {
      name: "12L Photo Prints",
      desc: "12*16 Inches Per Photo Print, Archival Quality",
      price: "Starts at 400 BDT",
    },
    {
      name: "Standard Photobook",
      desc: "10x10 inch, Matte Finish, 40 Pages",
      price: "5,500 BDT",
    },
    {
      name: "Premium Heirloom Album",
      desc: "12x15 inch, Luxury Leather Bound, 50 Pages",
      price: "12,500 BDT",
    },
    {
      name: "Pendrive with All High-Res Files",
      desc: "32 GB, 64 GB, or 128 GB Options Available",
      price: "Range 1,000 BDT - 1,800 BDT",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 bg-[#020202]">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* --- PAGE HEADER --- */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extralight tracking-widest text-white uppercase mb-4">
            Booking Tiers
          </h1>
          <div className="w-16 h-[1px] bg-white/30 mx-auto mb-6"></div>
          <p className="text-neutral-400 text-xs md:text-sm tracking-widest uppercase font-light">
            Curated experiences by A.S.M. Sium
          </p>
        </div>

        {/* --- PREMIUM TABS --- */}
        <div className="flex justify-center flex-wrap gap-6 md:gap-16 text-[10px] md:text-xs uppercase tracking-[0.3em] font-medium border-b border-white/10 pb-4 mb-20 md:mb-24">
          <button
            onClick={() => setActiveTab("single")}
            className={`pb-4 transition-all duration-500 relative ${
              activeTab === "single"
                ? "text-white"
                : "text-neutral-600 hover:text-neutral-300"
            }`}
          >
            Signature Events
            {activeTab === "single" && (
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white"></span>
            )}
          </button>

          <button
            onClick={() => setActiveTab("multi")}
            className={`pb-4 transition-all duration-500 relative ${
              activeTab === "multi"
                ? "text-white"
                : "text-neutral-600 hover:text-neutral-300"
            }`}
          >
            Multi-Day Collections
            {activeTab === "multi" && (
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white"></span>
            )}
          </button>

          {/* NEW TAB: CORPORATE */}
          <button
            onClick={() => setActiveTab("corporate")}
            className={`pb-4 transition-all duration-500 relative ${
              activeTab === "corporate"
                ? "text-white"
                : "text-neutral-600 hover:text-neutral-300"
            }`}
          >
            Corporate
            {activeTab === "corporate" && (
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white"></span>
            )}
          </button>
        </div>

        {/* --- DYNAMIC RENDER BASED ON TAB --- */}

        {/* TAB 1: SINGLE EVENTS */}
        {activeTab === "single" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-40">
            {corePackages.map((pkg, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col bg-neutral-900 overflow-hidden border ${
                  pkg.isPopular
                    ? "border-white/40 shadow-2xl shadow-white/5"
                    : "border-white/10"
                } group cursor-pointer`}
              >
                <div className="h-[350px] lg:h-[380px] relative overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className={`w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100 ${
                      pkg.imgPosition || "object-center"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent"></div>
                  <div className="absolute bottom-8 left-6 right-6">
                    {pkg.isPopular && (
                      <span className="inline-block px-3 py-1 bg-white text-black text-[9px] uppercase tracking-widest font-bold mb-4 rounded-full">
                        Most Selected
                      </span>
                    )}
                    <h2 className="text-2xl md:text-3xl font-serif italic text-white mb-2">
                      {pkg.name}.
                    </h2>
                    <p className="text-[10px] md:text-xs uppercase tracking-widest text-neutral-400">
                      {pkg.subtitle}
                    </p>
                  </div>
                </div>

                <div className="p-8 flex-grow flex flex-col justify-between bg-neutral-900">
                  <div className="mb-10">
                    <div className="text-xl font-light text-white tracking-widest mb-6 pb-6 border-b border-white/10">
                      {pkg.price}
                    </div>
                    <ul className="space-y-4">
                      {pkg.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3">
                          <span className="text-white text-xs mt-1 opacity-50">
                            &bull;
                          </span>
                          <span className="text-xs md:text-sm font-light text-neutral-300 tracking-wide">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href="/contact"
                    className={`w-full text-center py-4 text-[10px] md:text-xs uppercase tracking-[0.3em] font-medium transition-all duration-300 border ${
                      pkg.isPopular
                        ? "bg-white text-black border-white hover:bg-neutral-200"
                        : "bg-transparent text-white border-white/20 hover:bg-white hover:text-black"
                    }`}
                  >
                    Select Package
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: MULTI-DAY COMBOS */}
        {activeTab === "multi" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-40">
            {comboPackages.map((combo, idx) => (
              <div
                key={idx}
                className={`flex flex-col bg-neutral-900 overflow-hidden border transition-all duration-500 group cursor-pointer ${
                  combo.isHighlight
                    ? "border-white/30 shadow-2xl shadow-white/5"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                <div className="h-[350px] lg:h-[380px] relative overflow-hidden">
                  <img
                    src={combo.image}
                    alt={combo.name}
                    className={`w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-95 group-hover:opacity-100 ${
                      combo.imgPosition || "object-center"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent"></div>
                  <div className="absolute bottom-8 left-6 right-6">
                    <h3 className="text-2xl md:text-3xl font-serif italic text-white mb-2">
                      {combo.name}
                    </h3>
                    <p className="text-[10px] md:text-xs uppercase tracking-widest text-neutral-300 font-medium">
                      {combo.events}
                    </p>
                  </div>
                </div>

                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="text-xl font-light text-white tracking-widest mb-6 pb-6 border-b border-white/10">
                      {combo.price}
                    </div>

                    <div className="bg-white/5 border border-white/10 p-4 mb-6">
                      <p className="text-xs font-light text-white leading-relaxed">
                        <span className="font-semibold uppercase tracking-widest text-[9px] text-neutral-400 block mb-2">
                          Client Benefit
                        </span>
                        {combo.benefit}
                      </p>
                    </div>

                    <ul className="space-y-4 mb-10">
                      {combo.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3">
                          <span className="text-white text-xs mt-1 opacity-50">
                            &bull;
                          </span>
                          <span className="text-xs md:text-sm font-light text-neutral-400">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className={`w-full text-center py-4 text-[10px] md:text-xs uppercase tracking-[0.3em] font-medium transition-colors duration-300 border ${
                      combo.isHighlight
                        ? "bg-white text-black border-white hover:bg-neutral-300"
                        : "bg-transparent text-white border-white/20 hover:bg-white hover:text-black"
                    }`}
                  >
                    Book Combo
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* NEW TAB 3: CORPORATE CTA */}
        {activeTab === "corporate" && (
          <div className="mb-40 flex flex-col items-center justify-center text-center py-24 md:py-32 px-6 bg-neutral-900/30 border border-white/5 shadow-2xl relative overflow-hidden">
            {/* Subtle background decoration */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

            <h2 className="text-3xl md:text-5xl font-serif italic text-white mb-6">
              Corporate & Commercial
            </h2>
            <p className="text-neutral-400 text-sm md:text-base font-light max-w-2xl mx-auto mb-12 leading-relaxed">
              From high-end brand campaigns to comprehensive corporate event
              coverage, we offer bespoke visual solutions tailored exactly to
              your company's identity and scale. Let's discuss your next
              project.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 md:px-12 py-4 md:py-5 bg-white text-black text-[10px] md:text-xs uppercase tracking-[0.3em] font-medium hover:bg-neutral-300 transition-colors duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            >
              Get a Quote
            </Link>
          </div>
        )}

        {/* --- SECTION 3: ADD-ONS (Always Visible at the Bottom) --- */}
        <div className="max-w-4xl mx-auto mt-20">
          <div className="text-center mb-16">
            <h2 className="text-xl md:text-3xl font-extralight tracking-widest text-white uppercase mb-4">
              A La Carte / Add-Ons
            </h2>
            <div className="w-12 h-[1px] bg-white/30 mx-auto"></div>
          </div>

          <div className="flex flex-col border-t border-white/10">
            {addOns.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 border-b border-white/5 hover:bg-white/[0.02] transition-colors px-4"
              >
                <div>
                  <h4 className="text-white text-sm md:text-base font-light tracking-wide mb-1">
                    {item.name}
                  </h4>
                  <p className="text-neutral-500 text-xs md:text-sm font-light">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 md:mt-0 text-white text-sm font-light tracking-widest">
                  {item.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
