import React from "react";
import data from "../../data/index.json";
import useScrollReveal, { useScrollRevealList } from "../../hooks/useScrollReveal";

export default function MySkills() {
  const headingRef = useScrollReveal();
  const addCardRef = useScrollRevealList();

  return (
    <section className="section-container bg-zinc-900/30 rounded-3xl" id="mySkills">
      <div ref={headingRef} className="scroll-reveal flex flex-col items-center w-full mb-16">
        <p className="section-title">Our Technology Stack</p>
        <h2 className="section-heading text-center">Core Technologies</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-primary via-accent to-accent-2 rounded-full mt-4"></div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data?.skills?.map((item, index) => (
          <div
            key={index}
            ref={addCardRef(index)}
            className={`glass-card p-6 flex flex-col gap-6 scroll-reveal reveal-delay-${(index % 4) + 1}`}
          >
            <div className="w-12 h-12 flex items-center justify-center bg-zinc-800 rounded-lg shadow-inner">
              <img src={item.src} alt={item.title} className="w-8 h-8 object-contain" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-zinc-50 mb-2">{item.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}