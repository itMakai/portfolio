import React from "react";
import { Link } from "react-scroll";
import "./HeroSection.css"; // Import the CSS file
import ContactMe from "./ContactMe"; // Import the ContactMe component

export default function HeroSection() {
  return (
    <>
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Hey, I'm Daniel</p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">Software</span>{" "}
              <br />
              Engineer
            </h1>
            <p className="hero--section-description">
              Innovative Software Engineer with a strong foundation in Backend
              Development (Python, C#.NET) and DevOps. Currently conducting
              advanced research on AI integration in Kenyan agriculture. Proven
              track record in winning international hackathons by developing
              AI-driven solutions for climate change.
            </p>
          </div>
          <Link
            to="Contact"
            smooth={true}
            offset={-70}
            duration={500}
            className="btn btn-primary"
          >
            Get In Touch
          </Link>
        </div>
        <div className="hero--section--img">
          <img src="./img/hero.jpeg" alt="Hero Section" />
        </div>
      </section>
    </>
  );
}
