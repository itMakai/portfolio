import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import "./HeroSection.css";
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
    <section
      id="heroSection"
      className="hero-modern-section"
      style={{ "--hero-bg-image": "url('/files/iTsoftMak%20logo.jpeg')" }}
    >
      <div className="hero-modern-container">
        <div
          ref={titleRef}
          className="hero-modern-title-container scroll-reveal"
        >
          <div className="hero--section--content">
            <p className="hero-eyebrow">
              Software, AI, cybersecurity, and networks
            </p>
            <h1 className="hero--section--title">
              Modern technology systems for ambitious organizations.
            </h1>
            <p className="hero--section-description">
              iTsoftMak Solutions designs and builds secure web platforms,
              enterprise software, AI-powered workflows, and reliable business
              infrastructure for teams that need technology to move faster.
            </p>

            <div className="hero-actions">
              <Link
                smooth={true}
                offset={-96}
                duration={500}
                to="Contact"
                className="btn btn-primary"
              >
                Start a project
              </Link>
              <Link
                smooth={true}
                offset={-96}
                duration={500}
                to="MyPortfolio"
                className="btn btn-secondary"
              >
                View work
              </Link>
            </div>

            <div className="hero-service-tags" aria-label="Core services">
              <span>Custom software</span>
              <span>Cybersecurity</span>
              <span>AI solutions</span>
              <span>Networking</span>
            </div>
          </div>
        </div>

        <div
          ref={imgRef}
          className="hero-modern-visuals scroll-reveal reveal-delay-2"
        >
          <div className="hero-image-wrapper hero-float">
            <div className="hero-image-glow-border"></div>
            <img
              src="/files/iTsoftMak%20logo.jpeg"
              alt="iTsoftMak Solutions - Enterprise Technology Agency by Daniel Makai"
              className="hero-modern-img"
              onError={(event) => {
                event.currentTarget.src = "/logo.png";
              }}
            />
          </div>

          <div ref={statsRef} className="hero-floating-stats">
            <div className="stat-pill stat-pill-1 scroll-reveal--right reveal-delay-3">
              <span className="stat-pill-value">
                <AnimatedCounter target="4+" />
              </span>
              <span className="stat-pill-label">Years building</span>
            </div>

            <div className="stat-pill stat-pill-2 scroll-reveal--left reveal-delay-4">
              <span className="stat-pill-value">
                <AnimatedCounter target="10+" />
              </span>
              <span className="stat-pill-label">Projects shipped</span>
            </div>

            <div className="stat-pill stat-pill-3 scroll-reveal--right reveal-delay-5">
              <span className="stat-pill-value">
                <AnimatedCounter target="1.2k+" />
              </span>
              <span className="stat-pill-label">Engineering hours</span>
            </div>

            <div className="stat-pill stat-pill-4 scroll-reveal--scale reveal-delay-6">
              <span className="stat-pill-value text-accent-2">
                <AnimatedCounter target="1st" />
              </span>
              <span className="stat-pill-label">Award-winning</span>
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
