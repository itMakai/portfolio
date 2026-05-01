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
        <div className="resume--highlights">
          <div className="highlight--box">
            <h3>Experience</h3>
            <div className="highlight--item">
              <h4>Automation Engineer Intern</h4>
              <div className="meta">
                Ardhi Sacco Society Limited | Aug 2022 – 2026
              </div>
              <p>
                Developed an automated loan management system using C#.NET, and
                deployed tasks to NAS using Docker, ensuring high availability.
              </p>
            </div>
            <div className="highlight--item">
              <h4>Software Engineer Intern</h4>
              <div className="meta">
                Taita Taveta University | Jun 2024 – Jun 2025
              </div>
              <p>
                Rebuilt the university website using Python (Django Cotton) and
                established CI/CD pipelines via GitLab.
              </p>
            </div>
          </div>

          <div className="highlight--box">
            <h3>Education & Research</h3>
            <div className="highlight--item">
              <h4>B.Sc. in Information Technology</h4>
              <div className="meta">Taita Taveta University</div>
              <p>
                Focus on Software Engineering and Artificial Intelligence.
                Currently researching AI & ML applications for farming
                productivity in Kenya.
              </p>
            </div>
            <div className="highlight--item">
              <h4>Certificate in Software Engineering</h4>
              <div className="meta">ALX Software Engineering</div>
              <p>
                Intensive curriculum covering Full Stack Development, DevOps,
                and System Engineering.
              </p>
            </div>
          </div>
        </div>

        <div className="resume--download">
          <a
            href="./files/Daniel Makai.pdf"
            download
            className="btn btn-download"
          >
            Download Full Resume
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
