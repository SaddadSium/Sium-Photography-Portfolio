"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
        {/* Premium Brand Logo Lockup */}
        <Link
          href="/"
          className="group flex flex-col justify-center z-50 relative"
          onClick={() => setIsOpen(false)}
        >
          <div className="flex items-baseline">
            <span className="text-2xl md:text-3xl font-serif italic text-white pr-1">
              S
            </span>
            <span className="text-lg md:text-xl font-extralight tracking-[0.4em] uppercase text-white">
              IUM
            </span>
            <span className="w-1.5 h-1.5 bg-neutral-600 rounded-full ml-1 mb-1 group-hover:bg-white transition-colors duration-700"></span>
          </div>
          {/* Micro-typography Subtitle */}
          <span className="text-[7px] md:text-[8px] font-medium tracking-[0.6em] text-neutral-500 uppercase mt-1 pl-1 group-hover:text-neutral-300 transition-colors duration-700">
            Photography
          </span>
        </Link>

        {/* Desktop Navigation Links */}
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

        {/* Desktop Call to Action */}
        <Link
          href="/contact"
          className="hidden md:inline-block text-[10px] uppercase tracking-[0.2em] px-8 py-3.5 border border-white/10 text-white hover:bg-white hover:text-black transition-all duration-500"
        >
          Book Session
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden relative z-50 text-white p-2 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <div className="w-6 flex flex-col items-end gap-1.5">
            <span
              className={`block h-[1px] bg-white transition-all duration-300 ${isOpen ? "w-6 rotate-45 translate-y-[7px]" : "w-6"}`}
            ></span>
            <span
              className={`block h-[1px] bg-white transition-all duration-300 ${isOpen ? "w-0 opacity-0" : "w-4"}`}
            ></span>
            <span
              className={`block h-[1px] bg-white transition-all duration-300 ${isOpen ? "w-6 -rotate-45 -translate-y-[7px]" : "w-5"}`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Fullscreen Menu Overlay - FIX: Changed alignment to top with padding */}
      <div
        className={`fixed inset-0 bg-[#050505] z-40 transition-transform duration-700 ease-in-out flex flex-col items-center pt-32 overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <nav className="flex flex-col items-center gap-8 text-xs tracking-[0.4em] uppercase text-neutral-400 font-light pb-20">
          <Link
            href="/portfolio"
            onClick={toggleMenu}
            className="hover:text-white transition-colors duration-300 py-2"
          >
            Portfolio
          </Link>
          <Link
            href="/services"
            onClick={toggleMenu}
            className="hover:text-white transition-colors duration-300 py-2"
          >
            Services
          </Link>
          <Link
            href="/about"
            onClick={toggleMenu}
            className="hover:text-white transition-colors duration-300 py-2"
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={toggleMenu}
            className="mt-6 text-[10px] uppercase tracking-[0.2em] px-10 py-4 border border-white/10 text-white hover:bg-white hover:text-black transition-all duration-500"
          >
            Book Session
          </Link>
        </nav>
      </div>
    </header>
  );
}
