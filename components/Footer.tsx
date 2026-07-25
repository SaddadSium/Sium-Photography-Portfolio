"use client";

export default function Footer() {
  return (
    <footer className="bg-[#050505] pt-24 pb-8 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 mb-20">
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="text-3xl font-serif italic text-white mb-2">
                SIUM.
              </h2>
              <p className="text-neutral-500 text-[10px] tracking-[0.3em] uppercase font-medium">
                Visual Arts & Cinematography
              </p>
            </div>

            <div className="max-w-sm">
              <p className="text-neutral-400 font-light text-sm mb-6 leading-relaxed">
                Subscribe to our newsletter for exclusive editorials,
                behind-the-scenes, and booking availability.
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-16 md:gap-32 lg:justify-end pt-2">
            <div className="flex flex-col gap-6">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                Company
              </span>
              <div className="flex flex-col gap-4 text-sm font-light text-neutral-400">
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

            <div className="flex flex-col gap-6">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                Connect
              </span>
              <div className="flex flex-col gap-4 text-sm font-light text-neutral-400">
                <a
                  href="https://www.instagram.com/saddad_sium/"
                  className="hover:text-white transition-colors w-fit"
                >
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/saddadsium.official"
                  className="hover:text-white transition-colors w-fit"
                >
                  Facebook
                </a>
                <a
                  href="https://www.linkedin.com/in/siumofficial-webdeveloper/"
                  className="hover:text-white transition-colors w-fit"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-[9px] uppercase tracking-[0.2em] text-neutral-500 gap-6">
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
