import React from "react";
import "./TrustedBy.css";
import useScrollReveal from "../../hooks/useScrollReveal";

export default function TrustedBy() {
  const containerRef = useScrollReveal();

  const partners = [
    "Ardhi Sacco Co-operative Society",
    "Ardhi Housing Co-operative Society",
    "PeDeCe",
    "St. Joseph Catholic Church",
  ];

  return (
    <section className="trustedby--section scroll-reveal" ref={containerRef}>
      <div className="trustedby--container">
        <p className="trustedby--title">Trusted by industry leaders and organizations</p>
        <div className="trustedby--logos">
          {partners.map((partner, index) => (
            <div key={index} className="trustedby--item">
              <span>{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
