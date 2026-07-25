import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        {/* Premium Brand Logo Lockup */}
        <Link href="/" className="group flex flex-col justify-center">
          <div className="flex items-baseline">
            <span className="text-3xl font-serif italic text-white pr-1">
              S
            </span>
            <span className="text-xl font-extralight tracking-[0.4em] uppercase text-white">
              IUM
            </span>
            <span className="w-1.5 h-1.5 bg-neutral-600 rounded-full ml-1 mb-1 group-hover:bg-white transition-colors duration-700"></span>
          </div>
          {/* Micro-typography Subtitle */}
          <span className="text-[8px] font-medium tracking-[0.6em] text-neutral-500 uppercase mt-1 pl-1 group-hover:text-neutral-300 transition-colors duration-700">
            Photography
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-12 text-[10px] tracking-[0.3em] uppercase text-neutral-400 font-medium">
          <Link
            href="/portfolio"
            className="relative hover:text-white transition-colors duration-300 group pb-1"
          >
            Portfolio
            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full"></span>
          </Link>
          <Link
            href="/services"
            className="relative hover:text-white transition-colors duration-300 group pb-1"
          >
            Services
            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full"></span>
          </Link>
          <Link
            href="/about"
            className="relative hover:text-white transition-colors duration-300 group pb-1"
          >
            About
            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full"></span>
          </Link>
        </nav>

        {/* Call to Action - Sharp Editorial Style */}
        <Link
          href="#contact"
          className="text-[10px] uppercase tracking-[0.2em] px-8 py-3.5 border border-white/10 text-white hover:bg-white hover:text-black transition-all duration-500"
        >
          Book Session
        </Link>
      </div>
    </header>
  );
}
