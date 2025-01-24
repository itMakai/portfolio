import data from "../../data/index.json";
import "./Credetials.css"; 

export default function ResumeAndCertificates() {
  return (
    <section className="resume--section" id="resume">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">My Credentials</p>
          <h2 className="sections--heading">Resume & Certificates</h2>
        </div>
      </div>
      <div className="resume--section--container">
        <div className="resume--download">
          <a href="./files/CV1.pdf" download className="btn btn-download">
            Download My Resume
          </a>
        </div>
        <div className="certificates--container">
          {data?.certificates?.map((item, index) => (
            <div key={index} className="certificate--card">
              <div className="certificate--img">
                <img src={item.src} alt="Certificate" />
              </div>
              <div className="certificate--content">
                <h3 className="certificate--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}