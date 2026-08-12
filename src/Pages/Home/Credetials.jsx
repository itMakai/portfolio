import data from "../../data/index.json";
import useScrollReveal, { useScrollRevealList } from "../../hooks/useScrollReveal";

export default function ResumeAndCertificates() {
  const downloadRef = useScrollReveal();
  const addCertRef = useScrollRevealList();

  return (
    <section className="section-container bg-zinc-900/20 rounded-3xl mt-12" id="resume">
      <div ref={downloadRef} className="scroll-reveal flex justify-center mb-24">
        <a
          href="./files/Daniel Makai CV.pdf"
          download
          className="btn-outline px-10 py-4 shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all"
        >
          Download Founder's Profile
        </a>
      </div>

      <div className="flex flex-col items-center mb-12">
        <p className="section-title">Recognition</p>
        <h2 className="section-heading text-center">Awards to the Founder</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-primary via-accent to-accent-2 rounded-full mt-4"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {data?.certificates?.map((item, index) => (
          <div
            key={index}
            ref={addCertRef(index)}
            className={`glass-card overflow-hidden group scroll-reveal reveal-delay-${(index % 4) + 1}`}
          >
            <div className="aspect-[4/3] w-full bg-zinc-800 p-4 flex items-center justify-center overflow-hidden">
              <img src={item.src} alt={`${item.title} - Award`} className="w-full h-full object-contain filter drop-shadow-xl group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-zinc-50 mb-2 leading-tight">{item.title}</h3>
              <p className="text-sm text-zinc-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
