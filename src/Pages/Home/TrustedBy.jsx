import React from "react";
import useScrollReveal from "../../hooks/useScrollReveal";

export default function TrustedBy() {
  const containerRef = useScrollReveal();

  const partners = [
    "Ardhi Sacco Co-operative Society",
    "Ardhi Housing Co-operative Society",
    "PeDeCe",
    "St. Joseph Catholic Church",
  ];

  return (
    <section className="py-12 border-y border-white/5 bg-zinc-950/30 overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 text-center scroll-reveal">
        <p className="text-zinc-500 text-xs md:text-sm font-bold tracking-widest uppercase mb-8">Trusted by industry leaders and organizations</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <div key={index} className="glass-card p-6 flex items-center justify-center text-center">
              <span className="text-zinc-300 font-bold text-sm md:text-base">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
