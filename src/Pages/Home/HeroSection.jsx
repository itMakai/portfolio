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
              Developer
            </h1>
            <p className="hero--section-description">
              I'm a passionate Software Engineer with expertise in building dynamic, user-friendly web applications. With a strong foundation in full-stack development and a keen eye for detail, I create scalable solutions that empower businesses and communities. Let’s build something amazing together!
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