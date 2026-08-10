import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-scroll";
import "./HeroSection.css";
import useScrollReveal from "../../hooks/useScrollReveal";

function AnimatedCounter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  const parseTarget = useCallback(() => {
    const str = String(target);
    if (str.includes("k")) {
      return { num: parseFloat(str) * 1000, display: (n) => (n / 1000).toFixed(1) + "k+" };
    }
    const num = parseFloat(str);
    if (isNaN(num)) return { num: 0, display: () => str };
    const hasSuffix = str.replace(/[0-9.]/g, "");
    return { num, display: (n) => Math.round(n) + hasSuffix };
  }, [target]);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const { num, display } = parseTarget();
          const duration = 2000;
          const steps = 60;
          const increment = num / steps;
          let current = 0;
          let step = 0;

          const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            const eased = 1 - Math.pow(1 - progress, 3); // cubic ease out
            current = num * eased;
            setCount(display(current));

            if (step >= steps) {
              clearInterval(timer);
              setCount(display(num));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [hasAnimated, parseTarget]);

  return (
    <span ref={ref} className={hasAnimated ? "stat-animate inline-block" : ""}>
      {hasAnimated ? count : "0"}
    </span>
  );
}

export default function HeroSection() {
  const titleRef = useScrollReveal({ threshold: 0.1 });
  const imgRef = useScrollReveal({ threshold: 0.1 });
  const statsRef = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="heroSection" className="hero-modern-section">
      {/* Background glow orbs */}
      <div className="hero-glow hero-glow-1"></div>
      <div className="hero-glow hero-glow-2"></div>

      <div className="hero-modern-container">
        {/* Massive Typography */}
        <div ref={titleRef} className="hero-modern-title-container scroll-reveal">
          <div className="hero--section--content">
            <p className="section--title" style={{ color: 'var(--primary)', fontWeight: '700', letterSpacing: '2px', marginBottom: '16px', display: 'block' }}>
              INNOVATION & EXCELLENCE
            </p>
            <h1 className="hero--section--title">
              <span className="hero--title--color">iTsoftMak</span><br/>Solutions
            </h1>
            <p className="hero--section-description">
              Empowering businesses through cutting-edge technology. We deliver world-class Software Development, Cybersecurity, AI, and Networking solutions.
              <br /><br />
              <span style={{ fontSize: '16px', fontWeight: 'bold', color: 'var(--heading-color)' }}>Founded by Daniel Makai</span>
            </p>
          </div>
        </div>

        {/* Dynamic Image & Floating Elements */}
        <div ref={imgRef} className="hero-modern-visuals scroll-reveal reveal-delay-2">
          <div className="hero-image-wrapper hero-float">
            <div className="hero-image-glow-border"></div>
            <img src="./img/hero.jpeg" alt="Daniel Makai" className="hero-modern-img" />
          </div>

          {/* Floating Stats Pills */}
          <div ref={statsRef} className="hero-floating-stats">
            <div className="stat-pill stat-pill-1 scroll-reveal--right reveal-delay-3">
              <span className="stat-pill-value"><AnimatedCounter target="4+" /></span>
              <span className="stat-pill-label">Years Exp</span>
            </div>
            
            <div className="stat-pill stat-pill-2 scroll-reveal--left reveal-delay-4">
              <span className="stat-pill-value"><AnimatedCounter target="10+" /></span>
              <span className="stat-pill-label">Projects</span>
            </div>

            <div className="stat-pill stat-pill-3 scroll-reveal--right reveal-delay-5">
              <span className="stat-pill-value"><AnimatedCounter target="1.2k+" /></span>
              <span className="stat-pill-label">Hours Dev</span>
            </div>
            
            <div className="stat-pill stat-pill-4 scroll-reveal--scale reveal-delay-6">
              <span className="stat-pill-value text-accent-2"><AnimatedCounter target="1st" /></span>
              <span className="stat-pill-label">Hackathon</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll-indicator scroll-reveal reveal-delay-7">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}
