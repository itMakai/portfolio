import React from "react";
import "./Services.css";
import useScrollReveal, { useScrollRevealList } from "../../hooks/useScrollReveal";

export default function Services() {
  const headingRef = useScrollReveal();
  const addCardRef = useScrollRevealList();

  const servicesList = [
    {
      title: "Software Development",
      description: "Custom built Desktop, Mobile, and Web Applications, Corporate Websites, and tailored CRM & ERP systems to streamline your operations.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      )
    },
    {
      title: "CyberSecurity",
      description: "Comprehensive Penetration Testing, System Audits, and Vulnerability Assessments to ensure your enterprise data remains secure.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      )
    },
    {
      title: "Artificial Intelligence",
      description: "Advanced Machine Learning models, predictive analytics, and process automation to drive data-driven decision making.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      )
    },
    {
      title: "Networking",
      description: "Robust and scalable network infrastructure design, implementation, and maintenance for seamless corporate connectivity.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6.01" y2="6"></line>
          <line x1="6" y1="18" x2="6.01" y2="18"></line>
        </svg>
      )
    }
  ];

  return (
    <section className="services--section" id="services">
      <div ref={headingRef} className="scroll-reveal" style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <p className="sub--title text-center block">Our Expertise</p>
        <h2 className="section--heading text-center">Our Services</h2>
        <div className="section-glow-divider"></div>
        
        <div className="services-grid-container">
          {servicesList.map((service, index) => (
            <div
              key={index}
              ref={addCardRef(index)}
              className={`service-card scroll-reveal reveal-delay-${(index % 4) + 1}`}
            >
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
