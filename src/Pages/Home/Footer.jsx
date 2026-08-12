import { Link } from "react-scroll";
import React from "react";
import useScrollReveal from "../../hooks/useScrollReveal";

function Footer() {
  const brandRef = useScrollReveal();
  const navRef = useScrollReveal();
  const contactRef = useScrollReveal();
  const bottomRef = useScrollReveal();

  return (
    <footer className="bg-zinc-950 border-t border-white/5 pt-20 pb-8 px-6 mt-12 relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-32 bg-primary/20 blur-[100px] pointer-events-none rounded-full"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        <div ref={brandRef} className="lg:col-span-2 scroll-reveal">
          <div className="flex items-center gap-3 mb-6">
            <img src="/logo.png" alt="iTsoftMak Solutions" className="w-12 h-12 object-cover rounded-xl border border-white/10" />
            <h4 className="text-2xl font-heading font-bold text-white">
              iTsoftMak <span className="text-primary">Solutions</span>
            </h4>
          </div>
          <p className="text-zinc-400 max-w-md leading-relaxed">
            Empowering businesses through practical software, cybersecurity,
            AI, and networking solutions. We build technology that moves you faster.
          </p>
        </div>

        <div ref={navRef} className="scroll-reveal reveal-delay-2">
          <h5 className="text-lg font-bold text-white mb-6 font-heading tracking-wide">Quick Links</h5>
          <ul className="flex flex-col gap-4 text-zinc-400">
            <li>
              <Link smooth={true} to="heroSection" className="hover:text-primary transition-colors cursor-pointer">Home</Link>
            </li>
            <li>
              <Link smooth={true} to="services" className="hover:text-primary transition-colors cursor-pointer">Services</Link>
            </li>
            <li>
              <Link smooth={true} to="MyPortfolio" className="hover:text-primary transition-colors cursor-pointer">Projects</Link>
            </li>
            <li>
              <Link smooth={true} to="resume" className="hover:text-primary transition-colors cursor-pointer">Certifications</Link>
            </li>
          </ul>
        </div>

        <div ref={contactRef} className="scroll-reveal reveal-delay-3">
          <h5 className="text-lg font-bold text-white mb-6 font-heading tracking-wide">Contact Us</h5>
          <ul className="flex flex-col gap-4 text-zinc-400">
            <li>
              <a href="tel:+254115784503" className="hover:text-primary transition-colors" aria-label="Call iTsoftMak Solutions">+254 115 784 503</a>
            </li>
            <li>
              <a href="mailto:itsoftmak@gmail.com" className="hover:text-primary transition-colors" aria-label="Email iTsoftMak Solutions">itsoftmak@gmail.com</a>
            </li>
            <li>
              <a href="mailto:danielmakai92@gmail.com" className="hover:text-primary transition-colors" aria-label="Email Founder Daniel Makai">danielmakai92@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div ref={bottomRef} className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500 scroll-reveal reveal-delay-4 relative z-10">
        <p>&copy; {new Date().getFullYear()} iTsoftMak Solutions. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
