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
    <section id="Contact" className="section-container relative overflow-hidden py-24">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px] -translate-y-1/2 -z-10 pointer-events-none"></div>
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

      <div ref={headerRef} className="scroll-reveal flex flex-col items-center text-center mb-16 relative z-10">
        <p className="text-cyan-400 font-semibold tracking-widest uppercase text-sm mb-3">Get In Touch</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Together</span></h2>
        <p className="text-zinc-400 text-lg max-w-2xl">
          Tell us what you are building, improving, or protecting. We will get
          back with a practical next step.
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <form
          ref={(el) => {
            form.current = el;
            formRef.current = el;
          }}
          onSubmit={sendEmail}
          className="bg-zinc-900/40 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-2xl shadow-2xl scroll-reveal reveal-delay-2"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="relative group">
              <input
                type="text"
                name="first-name"
                id="first-name"
                required
                disabled={isSubmitting}
                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 pt-6 pb-2 text-zinc-100 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all peer disabled:opacity-50"
                placeholder=" "
              />
              <label htmlFor="first-name" className="absolute text-sm text-zinc-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-cyan-400">First Name</label>
            </div>
            
            <div className="relative group">
              <input
                type="text"
                name="last-name"
                id="last-name"
                required
                disabled={isSubmitting}
                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 pt-6 pb-2 text-zinc-100 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all peer disabled:opacity-50"
                placeholder=" "
              />
              <label htmlFor="last-name" className="absolute text-sm text-zinc-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-cyan-400">Last Name</label>
            </div>

            <div className="relative group">
              <input
                type="email"
                name="email"
                id="email"
                required
                disabled={isSubmitting}
                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 pt-6 pb-2 text-zinc-100 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all peer disabled:opacity-50"
                placeholder=" "
              />
              <label htmlFor="email" className="absolute text-sm text-zinc-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-cyan-400">Email Address</label>
            </div>

            <div className="relative group">
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                required
                disabled={isSubmitting}
                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 pt-6 pb-2 text-zinc-100 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all peer disabled:opacity-50"
                placeholder=" "
              />
              <label htmlFor="phone-number" className="absolute text-sm text-zinc-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-cyan-400">Phone Number</label>
            </div>
          </div>

          <div className="relative group mb-8">
            <textarea
              id="message"
              name="message"
              rows="6"
              required
              disabled={isSubmitting}
              className="w-full bg-black/20 border border-white/10 rounded-xl px-4 pt-6 pb-2 text-zinc-100 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all peer resize-y min-h-[150px] disabled:opacity-50"
              placeholder=" "
            />
            <label htmlFor="message" className="absolute text-sm text-zinc-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-cyan-400">How can we help you?</label>
          </div>

          <label htmlFor="checkbox" className="flex items-center gap-3 mb-10 cursor-pointer group">
            <div className="relative flex items-center justify-center">
              <input type="checkbox" required name="checkbox" id="checkbox" disabled={isSubmitting} className="peer appearance-none w-5 h-5 border-2 border-zinc-600 rounded bg-black/20 checked:bg-cyan-500 checked:border-cyan-500 transition-all cursor-pointer disabled:opacity-50" />
              <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">I agree to be contacted about my inquiry</span>
          </label>
          
          <div className="flex justify-center md:justify-end">
            <button 
              type="submit" 
              disabled={isSubmitting} 
              className="w-full md:w-auto px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-xl shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none flex items-center justify-center gap-3"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
            </button>
          </div>
        </form>

        {/* Status Messages */}
        <div className={`mt-8 overflow-hidden transition-all duration-500 ${status.message ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className={`p-5 backdrop-blur-md border rounded-xl text-center font-medium flex items-center justify-center gap-3 ${
            status.type === 'success' 
              ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' 
              : 'bg-rose-500/10 border-rose-500/30 text-rose-400'
          }`}>
            {status.type === 'success' ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
            {status.message}
          </div>
        </div>
      </div>
    </section>
  );
}
