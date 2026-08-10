import React from "react";
import "./CallToAction.css";
import useScrollReveal from "../../hooks/useScrollReveal";

export default function CallToAction() {
  const containerRef = useScrollReveal();

  return (
    <section className="cta--section" id="ready-to-work">
      <div className="cta--container scroll-reveal--scale" ref={containerRef}>
        <div className="cta--badge">
          <span className="pulse-dot"></span> Available for Work
        </div>
        <h2 className="cta--heading">Ready to accelerate your business?</h2>
        <p className="cta--description">
          Whether you need a custom enterprise application, robust cybersecurity auditing, or intelligent AI solutions, iTsoftMak Solutions is your trusted partner. Let's build something amazing together.
        </p>
        
        <div className="cta--contact-cards">
          <a href="tel:+254115784503" className="cta--contact-card">
            <div className="cta--icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div className="cta--contact-details">
              <span>Call Us Directly</span>
              <strong>+254 115 784 503</strong>
            </div>
          </a>

          <a href="mailto:itsoftmak@gmail.com" className="cta--contact-card">
            <div className="cta--icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div className="cta--contact-details">
              <span>Email Sales & Support</span>
              <strong>itsoftmak@gmail.com</strong>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
