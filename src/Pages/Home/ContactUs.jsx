import React, { useRef, useState } from "react";
import useScrollReveal from "../../hooks/useScrollReveal";

export default function ContactUs() {
  const form = useRef();
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const headerRef = useScrollReveal();
  const formRef = useScrollReveal();

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    const formData = new FormData(form.current);
    const data = {
      firstName: formData.get("first-name"),
      lastName: formData.get("last-name"),
      email: formData.get("email"),
      phone: formData.get("phone-number"),
      message: formData.get("message")
    };

    try {
      const response = await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus({ type: "success", message: "Your message has been sent successfully! We will get back to you soon." });
      form.current.reset();
    } catch (error) {
      console.error(error);
      setStatus({ type: "error", message: "Failed to send your message. Please try again or email us directly." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="Contact" className="section-container">
      <div ref={headerRef} className="scroll-reveal flex flex-col items-center text-center mb-12">
        <p className="section-title">Get In Touch</p>
        <h2 className="section-heading">Contact Us</h2>
        <p className="text-lg max-w-2xl mt-4">
          Tell us what you are building, improving, or protecting. We will get
          back with a practical next step.
        </p>
      </div>
      <form
        ref={(el) => {
          form.current = el;
          formRef.current = el;
        }}
        onSubmit={sendEmail}
        className="max-w-3xl mx-auto glass-card p-8 md:p-12 scroll-reveal reveal-delay-2"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <label htmlFor="first-name" className="flex flex-col gap-2">
            <span className="text-md font-medium">First Name</span>
            <input
              type="text"
              className="w-full bg-zinc-900/50 border border-white/10 rounded-lg p-3 text-zinc-100 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              name="first-name"
              id="first-name"
              required
              disabled={isSubmitting}
            />
          </label>
          <label htmlFor="last-name" className="flex flex-col gap-2">
            <span className="text-md font-medium">Last Name</span>
            <input
              type="text"
              className="w-full bg-zinc-900/50 border border-white/10 rounded-lg p-3 text-zinc-100 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              name="last-name"
              id="last-name"
              required
              disabled={isSubmitting}
            />
          </label>
          <label htmlFor="email" className="flex flex-col gap-2">
            <span className="text-md font-medium">Email</span>
            <input
              type="email"
              className="w-full bg-zinc-900/50 border border-white/10 rounded-lg p-3 text-zinc-100 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              name="email"
              id="email"
              required
              disabled={isSubmitting}
            />
          </label>
          <label htmlFor="phone-number" className="flex flex-col gap-2">
            <span className="text-md font-medium">Phone Number</span>
            <input
              type="tel"
              className="w-full bg-zinc-900/50 border border-white/10 rounded-lg p-3 text-zinc-100 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              name="phone-number"
              id="phone-number"
              required
              disabled={isSubmitting}
            />
          </label>
        </div>

        <label htmlFor="message" className="flex flex-col gap-2 mb-6">
          <span className="text-md font-medium">Message</span>
          <textarea
            className="w-full bg-zinc-900/50 border border-white/10 rounded-lg p-3 text-zinc-100 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-y min-h-[150px]"
            id="message"
            name="message"
            rows="8"
            placeholder="Type your message..."
            required
            disabled={isSubmitting}
          />
        </label>
        <label htmlFor="checkbox" className="flex items-start gap-3 mb-8 cursor-pointer">
          <input type="checkbox" required name="checkbox" id="checkbox" disabled={isSubmitting} className="mt-1 w-5 h-5 accent-primary bg-zinc-900 border-white/20 rounded cursor-pointer" />
          <span className="text-sm">I agree to be contacted about my inquiry</span>
        </label>
        <div className="flex justify-center">
          <button type="submit" disabled={isSubmitting} className="btn-primary w-full md:w-auto px-12 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2">
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : "Send Message"}
          </button>
        </div>
      </form>
      {status.message && (
        <div className={`max-w-3xl mx-auto mt-6 p-4 border rounded-lg text-center font-medium ${
          status.type === 'success' 
            ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' 
            : 'bg-red-500/10 border-red-500/20 text-red-400'
        }`}>
          {status.message}
        </div>
      )}
    </section>
  );
}
