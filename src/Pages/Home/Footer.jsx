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
        {/* Column 1: Brand */}
        <div ref={brandRef} className="footer--column scroll-reveal">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src="./logo.png" alt="iTsoftMak Solutions" style={{ height: '48px', marginRight: '12px', borderRadius: '8px' }} />
            <h4 style={{ margin: 0, fontSize: "28px", color: "var(--heading-color)" }}>
              iTsoftMak<span style={{ color: "var(--primary)" }}> Solutions</span>
            </h4>
          </div>
          <p className="footer--tagline">
            Empowering businesses through cutting-edge technology. Software Development, Cybersecurity, AI, and Networking solutions.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div ref={navRef} className="footer--column scroll-reveal reveal-delay-2">
          <h5 className="footer--column-title">Quick Links</h5>
          <ul className="footer--nav-links">
            <li><Link smooth={true} to="heroSection">Home</Link></li>
            <li><Link smooth={true} to="MyPortfolio">Portfolio</Link></li>
            <li><Link smooth={true} to="services">Services</Link></li>
            <li><Link smooth={true} to="mySkills">Skills</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact Us */}
        <div ref={contactRef} className="footer--column scroll-reveal reveal-delay-3">
          <h5 className="footer--column-title">Contact Us</h5>
          <ul className="footer--contact-links">
            <li><a href="tel:+254115784503">+254 115 784 503</a></li>
            <li><a href="mailto:itsoftmak@gmail.com">itsoftmak@gmail.com</a></li>
            <li><a href="mailto:danielmakai92@gmail.com">danielmakai92@gmail.com</a></li>
          </ul>
        </div>
      </div>
      <hr className="divider" />
      <div ref={bottomRef} className="footer--bottom scroll-reveal reveal-delay-4">
        <p>© {new Date().getFullYear()} iTsoftMak Solutions. All rights reserved.</p>
        <div className="footer--legal-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
