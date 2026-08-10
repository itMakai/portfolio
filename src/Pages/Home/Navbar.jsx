import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

function WhatsAppIcon() {
  return (
    <svg
      className="topbar-icon topbar-icon--whatsapp"
      viewBox="0 0 448 512"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M380.9 97.1C339 55.1 283.2 32 223.9 32 101.5 32 1.9 131.6 1.9 254c0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1C346.2 476 448 376.4 448 254c0-59.3-25.2-115-67.1-156.9zM223.9 438.7c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.6-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.8 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
      />
    </svg>
  );
}

function GmailIcon() {
  return (
    <svg
      className="topbar-icon topbar-icon--gmail"
      viewBox="0 0 256 193"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="#4285F4"
        d="M58.181 192.05V93.14L27.507 65.077 0 49.504v125.091c0 9.658 7.827 17.455 17.455 17.455h40.726z"
      />
      <path
        fill="#34A853"
        d="M197.819 192.05h40.727c9.659 0 17.454-7.826 17.454-17.455V49.505l-31.156 17.837-27.025 25.798v98.91z"
      />
      <path
        fill="#EA4335"
        d="M58.181 93.14 53.04 45.077 58.181 0 128 52.364 197.819 0l4.67 48.632-4.67 44.509L128 145.505z"
      />
      <path
        fill="#FBBC04"
        d="M197.819 0v93.14L256 49.504V17.455C256 1.996 238.335-6.812 225.99 2.473L197.819 0z"
      />
      <path
        fill="#C5221F"
        d="M0 49.505 26.759 69.57 58.181 93.14V0L30.01 2.473C17.633-6.812 0 1.996 0 17.455v32.05z"
      />
    </svg>
  );
}

function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  // Glassmorphism scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="topbar">
        <div className="topbar-inner">
          <div className="topbar-contacts">
            <a href="https://wa.me/254115784503" className="topbar-contact">
              <WhatsAppIcon />
              +254 115 784 503
            </a>
            <a href="mailto:itsoftmak@gmail.com" className="topbar-contact">
              <GmailIcon />
              itsoftmak@gmail.com
            </a>
          </div>
          <a href="mailto:itsoftmak@gmail.com" className="topbar-cta">
            Start a project
          </a>
        </div>
      </div>

      <nav
        className={`navbar ${navActive ? "active" : ""} ${
          scrolled ? "navbar--scrolled" : "navbar--transparent"
        }`}
      >
        <div className="navbar-inner">
          <Link
            onClick={closeMenu}
            smooth={true}
            offset={-96}
            duration={500}
            to="heroSection"
            className="brand"
          >
            <img src="/logo.png" alt="iTsoftMak Solutions" />
            <span>
              iTsoftMak <strong>Solutions</strong>
            </span>
          </Link>
          <button
            type="button"
            className={`nav__hamburger ${navActive ? "active" : ""}`}
            onClick={toggleNav}
            aria-label="Toggle navigation menu"
            aria-expanded={navActive}
          >
            <span className="nav__hamburger__line"></span>
            <span className="nav__hamburger__line"></span>
            <span className="nav__hamburger__line"></span>
          </button>
          <div className={`navbar--items ${navActive ? "active" : ""}`}>
            <ul>
              <li>
                <Link
                  onClick={closeMenu}
                  activeClass="navbar--active-content"
                  spy={true}
                  smooth={true}
                  offset={-96}
                  duration={500}
                  to="heroSection"
                  className="navbar--content"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={closeMenu}
                  activeClass="navbar--active-content"
                  spy={true}
                  smooth={true}
                  offset={-96}
                  duration={500}
                  to="services"
                  className="navbar--content"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  onClick={closeMenu}
                  activeClass="navbar--active-content"
                  spy={true}
                  smooth={true}
                  offset={-96}
                  duration={500}
                  to="MyPortfolio"
                  className="navbar--content"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  onClick={closeMenu}
                  activeClass="navbar--active-content"
                  spy={true}
                  smooth={true}
                  offset={-96}
                  duration={500}
                  to="resume"
                  className="navbar--content"
                >
                  Certifications
                </Link>
              </li>
            </ul>
          </div>
          <Link
            onClick={closeMenu}
            activeClass="navbar--active-content"
            spy={true}
            smooth={true}
            offset={-96}
            duration={500}
            to="Contact"
            className="btn btn-outline-primary"
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
