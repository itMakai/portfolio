import React from "react";
import useScrollReveal from "../../hooks/useScrollReveal";

export default function CallToAction() {
  const containerRef = useScrollReveal();

  return (
    <section className="section-container my-12" id="ready-to-work">
      <div className="glass-card relative overflow-hidden p-8 md:p-16 text-center scroll-reveal" ref={containerRef}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-bold mb-8 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping absolute"></span>
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Available for Work
          </div>
          
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Ready to accelerate your business?</h2>
          
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-12">
            Whether you need a custom enterprise application, robust cybersecurity auditing, or intelligent AI solutions, iTsoftMak Solutions is your trusted partner. Let's build something amazing together.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl mx-auto">
            <a href="tel:+254115784503" className="flex items-center p-6 bg-zinc-900/80 hover:bg-zinc-800/80 border border-white/5 hover:border-primary/30 rounded-xl transition-all duration-300 group" aria-label="Call iTsoftMak Solutions directly">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-xs text-zinc-500 font-bold uppercase tracking-wider mb-1">Call Us Directly</span>
                <strong className="text-zinc-200 group-hover:text-white transition-colors">+254 115 784 503</strong>
              </div>
            </a>

            <a href="mailto:itsoftmak@gmail.com" className="flex items-center p-6 bg-zinc-900/80 hover:bg-zinc-800/80 border border-white/5 hover:border-accent/30 rounded-xl transition-all duration-300 group" aria-label="Email iTsoftMak Solutions Sales and Support">
              <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center mr-4 group-hover:bg-accent group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-xs text-zinc-500 font-bold uppercase tracking-wider mb-1">Email Sales & Support</span>
                <strong className="text-zinc-200 group-hover:text-white transition-colors">itsoftmak@gmail.com</strong>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
