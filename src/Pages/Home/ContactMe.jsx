import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./ContactMe.css";
import useScrollReveal from "../../hooks/useScrollReveal";

export default function ContactMe() {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState("");
  const headerRef = useScrollReveal();
  const formRef = useScrollReveal();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1rc5o8r",
        "template_lkq8mfh",
        form.current,
        "M-VY_Aeuxajy5A1by"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccessMessage("Your message has been sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setSuccessMessage("Failed to send your message. Please try again.");
        }
      );
  };

  return (
    <section id="Contact" className="contact--section">
      <div ref={headerRef} className="scroll-reveal">
        <p className="sub--title">Get In Touch</p>
        <p className="text-lg">
          Tell us what you are building, improving, or protecting. We will get
          back with a practical next step.
        </p>
      </div>
      <form
        ref={(el) => {
          form.current = el; // Maintain emailjs ref
          formRef.current = el; // Apply scroll-reveal ref
        }}
        onSubmit={sendEmail}
        className="contact--form--container scroll-reveal reveal-delay-2"
      >
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone Number</span>
            <input
              type="tel"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              required
            />
          </label>
        </div>

        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            name="message"
            rows="8"
            placeholder="Type your message..."
          />
        </label>
        <label htmlFor="checkbox" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">I agree to be contacted about my inquiry</span>
        </label>
        <div>
          <button type="submit" className="btn btn-primary contact--form--btn">
            Send Message
          </button>
        </div>
      </form>
      {successMessage && <p className="success-message">{successMessage}</p>}
    </section>
  );
}
