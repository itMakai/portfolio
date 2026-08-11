import { Link } from "react-scroll";
import React from "react";
import useScrollReveal from "../../hooks/useScrollReveal";

function Footer() {
  const brandRef = useScrollReveal();
  const navRef = useScrollReveal();
  const contactRef = useScrollReveal();
  const bottomRef = useScrollReveal();

  return (
    <footer className="footer--section">
      <div className="footer--container">
        <div ref={brandRef} className="footer--column scroll-reveal">
          <div className="footer--brand">
            <img src="/logo.png" alt="iTsoftMak Solutions" />
            <h4>
              iTsoftMak <span>Solutions</span>
            </h4>
          </div>
          <p className="footer--tagline">
            Empowering businesses through practical software, cybersecurity,
            AI, and networking solutions.
          </p>
        </div>

        <div ref={navRef} className="footer--column scroll-reveal reveal-delay-2">
          <h5 className="footer--column-title">Quick Links</h5>
          <ul className="footer--nav-links">
            <li>
              <Link smooth={true} to="heroSection">Home</Link>
            </li>
            <li>
              <Link smooth={true} to="services">Services</Link>
            </li>
            <li>
              <Link smooth={true} to="MyPortfolio">Projects</Link>
            </li>
            <li>
              <Link smooth={true} to="resume">Certifications</Link>
            </li>
          </ul>
        </div>

        <div ref={contactRef} className="footer--column scroll-reveal reveal-delay-3">
          <h5 className="footer--column-title">Contact Us</h5>
          <ul className="footer--contact-links">
            <li>
              <a href="tel:+254115784503" aria-label="Call iTsoftMak Solutions">+254 115 784 503</a>
            </li>
            <li>
              <a href="mailto:itsoftmak@gmail.com" aria-label="Email iTsoftMak Solutions">itsoftmak@gmail.com</a>
            </li>
            <li>
              <a href="mailto:danielmakai92@gmail.com" aria-label="Email Founder Daniel Makai">danielmakai92@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="divider" />

      <div ref={bottomRef} className="footer--bottom scroll-reveal reveal-delay-4">
        <p>(c) {new Date().getFullYear()} iTsoftMak Solutions. All rights reserved.</p>
        <div className="footer--legal-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
