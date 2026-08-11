import data from "../../data/index.json";
import "./Credetials.css";
import useScrollReveal, {
  useScrollRevealList,
} from "../../hooks/useScrollReveal";

export default function ResumeAndCertificates() {
  const downloadRef = useScrollReveal();
  const addCertRef = useScrollRevealList();

  return (
    <section className="resume--section" id="resume">
      <div ref={downloadRef} className="resume--download scroll-reveal">
        <a
          href="./files/Daniel Makai CV.pdf"
          download
          className="btn btn-download glow-btn"
        >
          Download Founder's Profile
        </a>
      </div>

      <div className="portfolio--container-box">
         <h2 className="sections--heading text-center" style={{width: '100%', marginTop: '60px'}}>Awards to the Founder</h2>
      </div>

      <div className="certificates--container">
        {data?.certificates?.map((item, index) => (
          <div
            key={index}
            ref={addCertRef(index)}
            className={`certificate--card scroll-reveal--scale reveal-delay-${
              (index % 4) + 1
            }`}
          >
            <div className="certificate--img">
              <img src={item.src} alt={`${item.title} - Award to the Founder`} />
            </div>
            <div className="certificate--content">
              <h3 className="certificate--title">{item.title}</h3>
              <p className="text-md">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
