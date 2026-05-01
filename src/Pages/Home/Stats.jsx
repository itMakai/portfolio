import React from "react";
import "./Stats.css";

export default function Stats() {
  const stats = [
    { label: "Years Experience", value: "4+" },
    { label: "Completed Projects", value: "10+" },
    { label: "Hackathon Award", value: "1st" },
    { label: "Hours in ALX Dev", value: "1.2k+" },
  ];

  return (
    <section className="stats--section" id="stats">
      <div className="stats--container">
        {stats.map((stat, index) => (
          <div key={index} className="stat--card">
            <h2 className="stat--value">{stat.value}</h2>
            <p className="stat--label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
