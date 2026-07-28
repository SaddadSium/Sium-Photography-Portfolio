import Link from "next/link";

export default function Packages() {
  const corePackages = [
    {
      name: "Akhd / Engagement",
      subtitle: "Intimate Ceremonies",
      price: "6,000 BDT",
      image: "/images/services/Akhd.jpg",
      imgPosition: "object-center",
      features: [
        "1 Top Tier Photographer",
        "4.30 Hours Coverage",
        "10 Specialized Retouched Photos",
        "All Retouched Images Delivered",
        "Delivery By Google Drive (20 Days)",
      ],
    },
    {
      name: "Pre-Wedding",
      subtitle: "Outdoor Romance",
      price: "13,000 BDT",
      image: "/images/services/pre-wedding.jpg",
      imgPosition: "object-center",
      features: [
        "1 Top Tier Photographer & 1 Top Tier Cinematographer",
        "2 Locations (6 Hours) with Concept & Styling Support",
        "All Retouched Photos Delivered",
        "Cinematic Reel (1 Min) & 1 Full Film Edit (3-5 Min)",
        "Delivery By Google Drive (20 Days)",
      ],
    },
    {
      name: "Classic Holud / Mehendi",
      subtitle: "Vibrant Celebrations",
      price: "15,000 BDT",
      image: "/images/services/Mehendi.jpg",
      imgPosition: "object-center",
      features: [
        "1 Senior Photographer & 1 Cinematographer",
        "All Retouched Photos Delivered",
        "2 Min Highlight Video & 1 Full Event Edit (5-7 Min)",
        "Unlimited Clicks & Video Footage",
        "Delivery By Google Drive (20 Days)",
      ],
    },
    {
      name: "Premium Wedding",
      subtitle: "The Main Event",
      price: "20,000 BDT",
      image: "/images/services/Wedding.jpg",
      imgPosition: "object-top",
      isPopular: true,
      features: [
        "1 Chief & 1 Senior Photographer",
        "1 Chief Cinematographer",
        "All Retouched Photos Delivered",
        "1 Cinematic Trailer & 1 full-length Wedding Film (10-15 Min)",
        "Delivery By Pen Drive (30 Days)",
      ],
    },
    {
      name: "Grand Reception",
      subtitle: "Elegant Conclusion",
      price: "25,000 BDT",
      image: "/images/services/Grecep.jpg",
      imgPosition: "object-top",
      isPopular: true,
      features: [
        "1 Chief & 1 Top Photographer",
        "1 Chief & 1 Top Cinematographer",
        "All Retouched Photos Delivered",
        "Stage & Candid Focus & Guest Portrait Masterclass",
        "1 Cinematic Trailer & 1 Full-length Reception Film (10-15 Min)",
        "Delivery By Pen Drive (30 Days)",
      ],
    },
    {
      name: "Maternity & Baby",
      subtitle: "Life's Milestones",
      price: "7,000 BDT",
      image: "/images/services/Maternity.jpg",
      imgPosition: "object-top",
      features: [
        "1 Portrait Specialist",
        "4-5 Hours Coverage",
        "All Edited Photos",
        "Family Portrait Session",
        "Delivery By Google Drive (20 Days)",
      ],
    },
    {
      name: "Milestone Events",
      subtitle: "Birthdays & Anniversaries",
      price: "14,000 BDT",
      image: "/images/services/Birthday.jpg",
      imgPosition: "object-center",
      features: [
        "1 Senior Photographer & 1 Cinematographer",
        "5 Hours Event Coverage",
        "All Edited Photos",
        "1 Cinematic Trailer & 1 Full Event Edit (5-7 Min)",
        "Delivery By Google Drive (20 Days)",
      ],
    },
    {
      name: "Grand Celebrations",
      subtitle: "Receptions, Weddings, & Haldi",
      price: "46,000 BDT",
      image: "/images/services/GRAND.jpg",
      imgPosition: "object-top",
      features: [
        "3 Senior Photographers & 3 Cinematographer",
        "Drone Coverage for Aerial Shots",
        "Unlimited Coverage for 6-8 Hours",
        "All Edited Photos Delivered",
        "1 Cinematic Trailer & 1 Full Event Edit (10-15 Min)",
        "Delivery By Pen Drive (30 Days)",
      ],
    },
  ];

  // 2. Multi-Day Combo Packages (6 Types)
  const comboPackages = [
    {
      name: "The Essential Duo",
      events: "Holud + Wedding (Bride Side)",
      price: "27,000 BDT",
      image: "/images/services/Classicduo.jpg",
      imgPosition: "object-center",
      benefit:
        "Save 10% on combined booking. Perfect for standard 2-day celebrations.",
      features: [
        "1 Top Tier Photographer & 1 Top Tier Cinematographer for Both Days",
        "1 Cinematic Trailer & 1 Full Event Edit (per Day)",
        "All Retouched Photos Delivered",
        "Priority 15-Day Digital Delivery",
      ],
    },
    {
      name: "The Classic Duo",
      events: "Wedding + Reception (Groom Side)",
      price: "45,000 BDT",
      image: "/images/services/Gduo.jpg",
      imgPosition: "object-center",
      benefit: "Complimentary Drone Coverage for the Reception Entry.",
      features: [
        "2 Top Tier Photographers & 1 Top Tier Cinematographer on Both Days",
        "All Retouched Photos Delivered",
        "1 Cinematic Trailer & 1 Full Film (per Day)",
        "Priority 15-Day Digital Delivery",
      ],
    },
    {
      name: "The Vibrant Trilogy",
      events: "Mehendi + Holud + Wedding (Bride Side)",
      price: "47,000 BDT",
      image: "/images/services/Vtrio.jpg",
      imgPosition: "object-top",
      benefit: "Get a complimentary pre-wedding session with this package.",
      features: [
        "1 Top Tier Photographers & 1 Top Tier Cinematographer for MEHENDI & HOLUD",
        "2 Top Tier Photographers & 1 Top Tier Cinematographer for WEDDING",
        "All Retouched Photos Delivered",
        "Instagram Reel Edits for Mehendi & Comprehensive Event Film",
        "Priority 15-Day Digital Delivery",
      ],
    },
    {
      name: "The Grand Trilogy",
      events: "Holud + Wedding + Reception",
      price: "80,000 BDT",
      image:
        "https://images.unsplash.com/photo-1583939000140-690a4dfb80ed?auto=format&fit=crop&q=80&w=1200",
      imgPosition: "object-top",
      benefit: "Save 15% & Receive a Complimentary Pre-Wedding Session.",
      isHighlight: true,
      features: [
        "Full Team Coverage for 3 Days",
        "Master Storytelling Cinematic Film",
        "Pre-Wedding Photo Session (Outdoor)",
        "All Raw & Edited Digital Files",
      ],
    },
    {
      name: "The Complete Saga",
      events: "Akhd + Holud + Wedding + Reception",
      price: "1,05,000 BDT",
      image:
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1200",
      imgPosition: "object-top",
      benefit:
        "Ultimate Value: Save 20% & Guarantee A.S.M. Sium as Lead for All Days.",
      features: [
        "Coverage for 4 Full Events",
        "Drone Coverage Included (2 Events)",
        "Director's Cut Cinematic Film",
        "Express 7-Day Digital Turnaround",
      ],
    },
    {
      name: "The Royal Signature",
      events: "Pre-Wedding + Mehendi + Holud + Biye + Bou-Bhat",
      price: "1,35,000 BDT",
      image:
        "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=1200",
      imgPosition: "object-top",
      benefit:
        "Our most exclusive tier. VIP priority, unlimited coverage & zero compromises.",
      features: [
        "5 Days of Unrestricted Coverage",
        "A.S.M. Sium + Elite Creative Team",
        "Next-Day Highlight Deliveries",
        "Lifetime Cloud Backup",
        "Commercial-Grade Color Science",
      ],
    },
  ];

  // 3. Physical Add-Ons
  const addOns = [
    {
      name: "Standard Photobook",
      desc: "10x10 inch, Matte Finish, 40 Pages",
      price: "6,000 BDT",
    },
    {
      name: "Premium Heirloom Album",
      desc: "12x15 inch, Luxury Leather Bound, 50 Pages",
      price: "12,000 BDT",
    },
    {
      name: "Fine Art Photo Prints",
      desc: "Archival Quality Prints (Various Sizes)",
      price: "Starts at 500 BDT",
    },
    {
      name: "Custom Engraved Pendrive",
      desc: "Wooden/Metal USB with all high-res files & premium box",
      price: "2,500 BDT",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 bg-[#020202]">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* --- SECTION 1: CORE PACKAGES --- */}
        <div className="text-center mb-20">
          <h1 className="text-3xl md:text-5xl font-extralight tracking-widest text-white uppercase mb-4">
            Signature Tiers
          </h1>
          <div className="w-16 h-[1px] bg-white/30 mx-auto mb-6"></div>
          <p className="text-neutral-400 text-xs md:text-sm tracking-widest uppercase font-light">
            Base packages per single event
          </p>
        </div>

        {/* 3 columns on PC (lg:grid-cols-3) and 1 on Mobile (grid-cols-1) */}
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
                {/* Dynamically applying the imgPosition class for perfect framing */}
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

        {/* --- SECTION 2: MULTI-DAY COMBO PACKAGES --- */}
        <div className="text-center mb-20">
          <h2 className="text-2xl md:text-4xl font-extralight tracking-widest text-white uppercase mb-4">
            Multi-Day Collections
          </h2>
          <div className="w-16 h-[1px] bg-white/30 mx-auto mb-6"></div>
          <p className="text-neutral-400 text-xs md:text-sm tracking-widest uppercase font-light max-w-2xl mx-auto">
            Book multiple events together for a cohesive storytelling
            experience.
          </p>
        </div>

        {/* 3 columns on PC for Combos */}
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
                {/* Dynamically applying the imgPosition class for combos too */}
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
                  href="#contact"
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

        {/* --- SECTION 3: ADD-ONS (Physical Prints & Albums) --- */}
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
