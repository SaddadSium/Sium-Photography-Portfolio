export default function About() {
  return (
    <div className="min-h-screen pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Header */}
        <div className="mb-24 md:mb-32">
          <h1 className="text-4xl md:text-7xl font-extralight tracking-tight text-white mb-6">
            The Artist Behind the Lens.
          </h1>
          <p className="text-neutral-500 text-[10px] md:text-xs uppercase tracking-[0.4em] font-medium">
            A.S.M. Sium &mdash; Visual Storyteller
          </p>
        </div>

        {/* Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Portrait Image (Cinematic Hover Effect) */}
          <div className="aspect-[3/4] w-full bg-neutral-900 relative group overflow-hidden border border-white/5">
            <img
              src="/images/portfolio/SSIUM.webp"
              alt="A.S.M. Sium"
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-1000 ease-out transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-1000"></div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col gap-10">
            <h2 className="text-2xl md:text-4xl font-serif italic text-white/90 leading-[1.4]">
              "Photography is not just about capturing light, it is about
              capturing the silence between the moments."
            </h2>

            <div className="space-y-6 text-neutral-400 font-light text-sm md:text-base leading-relaxed tracking-wide">
              <p>
                I am A.S.M. Sium, a professional photographer and visual creator
                based in Dhaka, Bangladesh. My work bridges the gap between raw,
                authentic emotion and high-end photographic elegance.
              </p>
              <p>
                Specializing in premium weddings, fine-art portraiture, and
                corporate visual identity, I approach every project with a
                strict commitment to minimal, luxury aesthetics. My technical
                background allows me to manipulate light and shadow with
                precision, ensuring every frame is flawless.
              </p>
              <p>
                Whether working locally or traveling for international
                commissions, the core philosophy remains unchanged: to craft
                timeless, editorial imagery that speaks louder than words.
              </p>
            </div>

            {/* Signature & Role */}
            <div className="pt-10 border-t border-white/10 mt-2">
              <p className="text-white font-serif text-2xl italic mb-3">
                A.S.M. Sium
              </p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 font-medium">
                Lead Photographer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
