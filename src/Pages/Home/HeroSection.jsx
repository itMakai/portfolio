import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import useScrollReveal from "../../hooks/useScrollReveal";

function AnimatedCounter({ target }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  const parseTarget = useCallback(() => {
    const str = String(target);
    if (str.includes("k")) {
      return {
        num: parseFloat(str) * 1000,
        display: (n) => `${(n / 1000).toFixed(1)}k+`,
      };
    }
    const num = parseFloat(str);
    if (Number.isNaN(num)) return { num: 0, display: () => str };
    const suffix = str.replace(/[0-9.]/g, "");
    return { num, display: (n) => `${Math.round(n)}${suffix}` };
  }, [target]);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const { num, display } = parseTarget();
          const duration = 1800;
          const steps = 60;
          let step = 0;
          const timer = setInterval(() => {
            step += 1;
            const progress = step / steps;
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(display(num * eased));
            if (step >= steps) {
              clearInterval(timer);
              setCount(display(num));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [hasAnimated, parseTarget]);

  return <span ref={ref}>{hasAnimated ? count : "0"}</span>;
}

export default function HeroSection() {
  const titleRef = useScrollReveal({ threshold: 0.1 });
  const imgRef = useScrollReveal({ threshold: 0.1 });
  const statsRef = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="heroSection" className="relative min-h-screen pt-32 pb-16 px-6 overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        <div ref={titleRef} className="scroll-reveal flex flex-col justify-center space-y-6">
          <p className="font-heading text-primary font-bold tracking-widest uppercase text-sm">
            Software, AI, cybersecurity, and networks
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-zinc-50">
            Modern technology systems for ambitious organizations.
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-lg leading-relaxed">
            iTsoftMak Solutions designs and builds secure web platforms,
            enterprise software, AI-powered workflows, and reliable business
            infrastructure for teams that need technology to move faster.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link smooth={true} offset={-96} duration={500} to="Contact" className="btn-primary">
              Start a project
            </Link>
            <Link smooth={true} offset={-96} duration={500} to="MyPortfolio" className="btn-outline">
              View work
            </Link>
          </div>

          <div className="flex flex-wrap gap-3 mt-4" aria-label="Core services">
            <span className="px-3 py-1.5 bg-zinc-900 border border-white/10 rounded-md text-sm font-semibold text-zinc-300">Custom software</span>
            <span className="px-3 py-1.5 bg-zinc-900 border border-white/10 rounded-md text-sm font-semibold text-zinc-300">Cybersecurity</span>
            <span className="px-3 py-1.5 bg-zinc-900 border border-white/10 rounded-md text-sm font-semibold text-zinc-300">AI solutions</span>
            <span className="px-3 py-1.5 bg-zinc-900 border border-white/10 rounded-md text-sm font-semibold text-zinc-300">Networking</span>
          </div>
        </div>

        <div ref={imgRef} className="scroll-reveal reveal-delay-2 flex justify-center items-center relative min-h-[400px]">
          <div className="relative w-full max-w-md aspect-square z-10">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-3xl blur-2xl opacity-40"></div>
            <img
              src="/files/iTsoftMak%20logo.jpeg"
              alt="iTsoftMak Solutions Logo"
              className="relative w-full h-full object-cover rounded-2xl shadow-2xl border border-white/10"
              onError={(e) => { e.currentTarget.src = "/logo.png"; }}
            />
          </div>

          <div ref={statsRef} className="absolute inset-0 z-20 pointer-events-none">
            <div className="absolute top-12 -left-4 md:-left-8 bg-zinc-900/90 backdrop-blur-md border border-white/10 p-3 rounded-lg shadow-xl flex items-center gap-3 scroll-reveal reveal-delay-3">
              <span className="text-2xl font-bold text-zinc-50"><AnimatedCounter target="4+" /></span>
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider leading-tight">Years<br/>building</span>
            </div>
            
            <div className="absolute top-1/4 -right-4 md:-right-8 bg-zinc-900/90 backdrop-blur-md border border-white/10 p-3 rounded-lg shadow-xl flex items-center gap-3 scroll-reveal reveal-delay-4">
              <span className="text-2xl font-bold text-zinc-50"><AnimatedCounter target="10+" /></span>
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider leading-tight">Projects<br/>shipped</span>
            </div>
            
            <div className="absolute bottom-32 -left-8 md:-left-12 bg-zinc-900/90 backdrop-blur-md border border-white/10 p-3 rounded-lg shadow-xl flex items-center gap-3 scroll-reveal reveal-delay-5">
              <span className="text-2xl font-bold text-zinc-50"><AnimatedCounter target="1.2k+" /></span>
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider leading-tight">Engineering<br/>hours</span>
            </div>
            
            <div className="absolute bottom-8 right-0 md:right-8 bg-zinc-900/90 backdrop-blur-md border border-white/10 p-3 rounded-lg shadow-xl flex items-center gap-3 scroll-reveal reveal-delay-6">
              <span className="text-2xl font-bold text-accent-2"><AnimatedCounter target="1st" /></span>
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider leading-tight">Award<br/>winning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
