import React from "react";
import data from "../../data/index.json";
import "./MySkills.css";
import useScrollReveal, {
  useScrollRevealList,
} from "../../hooks/useScrollReveal";

export default function MySkills() {
  const headingRef = useScrollReveal();
  const addCardRef = useScrollRevealList();

  return (
    <section className="skills--section" id="mySkills">
      <div ref={headingRef} className="scroll-reveal" style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <p className="sub--title text-center block">Our Technology Stack</p>
        <h2 className="section--heading text-center">Core Technologies</h2>
        <div className="section-glow-divider"></div>
        
        <div className="bento-grid-container">
          {data?.skills?.map((item, index) => (
            <div
              key={index}
              ref={addCardRef(index)}
              className={`bento-card scroll-reveal reveal-delay-${index + 1}`}
            >
              {/* Subtle background glow on hover */}
              <div className="bento-glow"></div>
              
              <div className="bento-content">
                <div className="bento-icon-wrapper">
                  <img src={item.src} alt={item.title} className="bento-icon" />
                </div>
                <div className="bento-text">
                  <h3 className="bento-title">{item.title}</h3>
                  <p className="bento-description">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}