import Link from "next/link";

export default function Packages() {
  // 1. Signature Core Packages (8 Types tailored for BD Market)
  const corePackages = [
    {
      name: "Akht / Engagement",
      subtitle: "Intimate Ceremonies",
      price: "12,000 BDT",
      image:
        "https://images.unsplash.com/photo-1529634597503-139d3726fed5?auto=format&fit=crop&q=80&w=1200",
      features: [
        "1 Senior Photographer",
        "3 Hours Coverage",
        "80 Retouched Photos",
        "All Raw Images Delivered",
        "Cloud Drive Delivery",
      ],
    },
    {
      name: "Pre-Wedding",
      subtitle: "Outdoor Romance",
      price: "15,000 BDT",
      image:
        "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=1200",
      features: [
        "1 Top Tier Photographer",
        "Concept & Styling Support",
        "2 Locations (Half Day)",
        "50 High-End Retouched Portraits",
        "Cinematic Reel (1 Min)",
      ],
    },
    {
      name: "Classic Holud",
      subtitle: "Vibrant Celebrations",
      price: "18,000 BDT",
      image:
        "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=1200",
      features: [
        "1 Senior Photographer",
        "1 Cinematographer",
        "150 Retouched Photos",
        "2 Min Highlight Video",
        "Unlimited Clicks",
      ],
    },
    {
      name: "Premium Wedding",
      subtitle: "The Main Event",
      price: "35,000 BDT",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200",
      isPopular: true,
      features: [
        "1 Chief & 1 Senior Photographer",
        "1 Master Cinematographer",
        "250 Retouched Photos",
        "3 Min Cinematic Trailer",
        "Full Event Documentary",
      ],
    },
    {
      name: "Grand Reception",
      subtitle: "Elegant Conclusion",
      price: "30,000 BDT",
      image:
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1200",
      features: [
        "1 Chief & 1 Senior Photographer",
        "1 Cinematographer",
        "200 Retouched Photos",
        "Stage & Candid Focus",
        "Guest Portrait Masterclass",
      ],
    },
    {
      name: "Maternity & Baby",
      subtitle: "Life's Milestones",
      price: "10,000 BDT",
      image:
        "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=1200",
      features: [
        "1 Portrait Specialist",
        "Indoor/Outdoor Setup",
        "40 Premium Edited Photos",
        "Props & Lighting Included",
        "Cloud Drive Delivery",
      ],
    },
    {
      name: "Milestone Events",
      subtitle: "Birthdays & Anniversaries",
      price: "15,000 BDT",
      image:
        "https://images.unsplash.com/photo-1530103862676-de8892b12a15?auto=format&fit=crop&q=80&w=1200",
      features: [
        "1 Senior Photographer",
        "4 Hours Event Coverage",
        "100 Edited Photos",
        "Family Portrait Session",
        "All Usable Raws",
      ],
    },
    {
      name: "Corporate & Brand",
      subtitle: "Commercial Identity",
      price: "25,000 BDT",
      image:
        "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&q=80&w=1200",
      features: [
        "Product & Space Photography",
        "Executive Headshots",
        "Commercial Usage Rights",
        "High-Resolution Delivery",
        "Strict Minimalist Aesthetic",
      ],
    },
  ];

  // 2. Multi-Day Combo Packages (6 Types)
  const comboPackages = [
    {
      name: "The Essential Duo",
      events: "Holud + Wedding",
      price: "48,000 BDT",
      image:
        "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=1200",
      benefit:
        "Save 10% on combined booking. Perfect for standard 2-day celebrations.",
      features: [
        "Photo & Cine Team for Both Days",
        "Combined Cinematic Trailer",
        "300+ Retouched Photos",
        "Priority 14-Day Digital Delivery",
      ],
    },
    {
      name: "The Classic Duo",
      events: "Wedding + Reception",
      price: "60,000 BDT",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200",
      benefit: "Complimentary Drone Coverage for the Reception Entry.",
      features: [
        "Chief Photographer on Both Days",
        "Master Cinematography",
        "400+ Retouched Photos",
        "Same-Day Edit (Teaser)",
      ],
    },
    {
      name: "The Vibrant Trilogy",
      events: "Mehendi + Holud + Wedding",
      price: "70,000 BDT",
      image:
        "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=1200",
      benefit: "Save 12% & get dedicated candid shooters for Mehendi & Holud.",
      features: [
        "Coverage for 3 Events",
        "Specialized Color Grading",
        "Instagram Reel Edits for Mehendi",
        "Comprehensive Event Film",
      ],
    },
    {
      name: "The Grand Trilogy",
      events: "Holud + Wedding + Reception",
      price: "80,000 BDT",
      image:
        "https://images.unsplash.com/photo-1583939000140-690a4dfb80ed?auto=format&fit=crop&q=80&w=1200",
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
      events: "Akht + Holud + Wedding + Reception",
      price: "1,05,000 BDT",
      image:
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1200",
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
      <div className="max-w-7xl mx-auto px-6">
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

        {/* Updated: Changed to 2 columns (md:grid-cols-2) and massive image heights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-40">
          {corePackages.map((pkg, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col bg-neutral-900 overflow-hidden border ${
                pkg.isPopular
                  ? "border-white/40 shadow-2xl shadow-white/5"
                  : "border-white/10"
              } group cursor-pointer`}
            >
              {/* Updated: Image height is now massive (h-[400px] to h-[500px]) */}
              <div className="h-[350px] md:h-[450px] relative overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  {pkg.isPopular && (
                    <span className="inline-block px-3 py-1 bg-white text-black text-[9px] uppercase tracking-widest font-bold mb-4 rounded-full">
                      Most Selected
                    </span>
                  )}
                  <h2 className="text-3xl md:text-4xl font-serif italic text-white mb-2">
                    {pkg.name}.
                  </h2>
                  <p className="text-[10px] md:text-xs uppercase tracking-widest text-neutral-400">
                    {pkg.subtitle}
                  </p>
                </div>
              </div>

              {/* Added more padding (p-8 to p-10) to match the massive images */}
              <div className="p-8 md:p-10 flex-grow flex flex-col justify-between bg-neutral-900">
                <div className="mb-10">
                  <div className="text-2xl font-light text-white tracking-widest mb-8 pb-6 border-b border-white/10">
                    {pkg.price}
                  </div>
                  <ul className="space-y-4">
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <span className="text-white text-xs mt-1 opacity-50">
                          &bull;
                        </span>
                        <span className="text-sm font-light text-neutral-300 tracking-wide">
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

        {/* Updated: Changed to 2 columns and massive heights for combos as well */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-40">
          {comboPackages.map((combo, idx) => (
            <div
              key={idx}
              className={`flex flex-col bg-neutral-900 overflow-hidden border transition-all duration-500 group cursor-pointer ${
                combo.isHighlight
                  ? "border-white/30 shadow-2xl shadow-white/5"
                  : "border-white/10 hover:border-white/20"
              }`}
            >
              {/* Massive Image Header for Combos */}
              <div className="h-[350px] md:h-[450px] relative overflow-hidden">
                <img
                  src={combo.image}
                  alt={combo.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-3xl md:text-4xl font-serif italic text-white mb-2">
                    {combo.name}
                  </h3>
                  <p className="text-[10px] md:text-xs uppercase tracking-widest text-neutral-300 font-medium">
                    {combo.events}
                  </p>
                </div>
              </div>

              {/* Combo Content with larger padding */}
              <div className="p-8 md:p-10 flex-grow flex flex-col justify-between">
                <div>
                  <div className="text-2xl font-light text-white tracking-widest mb-8 pb-6 border-b border-white/10">
                    {combo.price}
                  </div>

                  <div className="bg-white/5 border border-white/10 p-5 mb-8">
                    <p className="text-xs md:text-sm font-light text-white leading-relaxed">
                      <span className="font-semibold uppercase tracking-widest text-[9px] md:text-[10px] text-neutral-400 block mb-2">
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
                        <span className="text-sm font-light text-neutral-400">
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
