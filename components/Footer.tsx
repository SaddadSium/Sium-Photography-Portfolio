"use client";

export default function Footer() {
  return (
    <footer className="bg-[#050505] pt-16 md:pt-24 pb-8 px-4 sm:px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-8 mb-16 md:mb-20">
          {/* Left Column: Brand & Newsletter */}
          <div className="flex flex-col gap-8 md:gap-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif italic text-white mb-2">
                SIUM.
              </h2>
              <p className="text-neutral-500 text-[9px] md:text-[10px] tracking-[0.3em] uppercase font-medium">
                Visual Arts & Cinematography
              </p>
            </div>

            <div className="max-w-xs sm:max-w-sm">
              <p className="text-neutral-400 font-light text-xs md:text-sm mb-6 leading-relaxed">
                Subscribe to our newsletter for exclusive editorials,
                behind-the-scenes, and booking availability.
              </p>
            </div>
          </div>

          {/* Right Column: Links */}
          <div className="flex flex-row gap-12 sm:gap-16 md:gap-32 lg:justify-end pt-2">
            <div className="flex flex-col gap-5 md:gap-6">
              <span className="text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                Company
              </span>
              <div className="flex flex-col gap-3 md:gap-4 text-xs md:text-sm font-light text-neutral-400">
                <a
                  href="/portfolio"
                  className="hover:text-white transition-colors w-fit"
                >
                  Portfolio
                </a>
                <a
                  href="/services"
                  className="hover:text-white transition-colors w-fit"
                >
                  Services
                </a>
                <a
                  href="/about"
                  className="hover:text-white transition-colors w-fit"
                >
                  About
                </a>
                <a
                  href="/contact"
                  className="hover:text-white transition-colors w-fit"
                >
                  Booking
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-5 md:gap-6">
              <span className="text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                Connect
              </span>
              <div className="flex flex-col gap-3 md:gap-4 text-xs md:text-sm font-light text-neutral-400">
                <a
                  href="https://www.instagram.com/saddad_sium/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors w-fit"
                >
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/saddadsium.official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors w-fit"
                >
                  Facebook
                </a>
                <a
                  href="https://www.linkedin.com/in/siumofficial-webdeveloper/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors w-fit"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright & Legal */}
        <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left pt-8 border-t border-white/10 text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-neutral-500 gap-6">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <p>
              &copy; {new Date().getFullYear()} A.S.M. SIUM. Developed with ❤️
            </p>
            <span className="hidden md:inline">|</span>
            <p>Based in Dhaka, Bangladesh.</p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
