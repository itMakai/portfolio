import "./AboutMe.css"; // Import the CSS file

export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/ME.jpg" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading"></h1>
          <p className="hero--section-description">
          Hello! I’m Daniel Makai, a dedicated and enthusiastic Software Engineer with a strong background in full-stack development. I specialize in creating dynamic and efficient web applications using modern technologies like Django, React, Python, and JavaScript. My passion lies in building scalable solutions that solve real-world problems while delivering exceptional user experiences.

I am currently a student at Taita Taveta University taking Bachelor of Science in Information Technology,I have developed a solid foundation in software development and network security. Additionally, my professional experience includes working on various projects, such as e-commerce platforms, student management systems, and AI-driven websites, where I honed my skills in both frontend and backend development.

Beyond coding, I have a keen interest in learning new technologies and staying updated with industry trends. My journey includes completing programs like the ALX Software Engineering course and the Cisco Networking Academy’s Network Security certification, which have enriched my understanding of software systems and security.


          </p>
          <p className="hero--section-description">
          When I’m not coding, I enjoy collaborating with other developers, mentoring aspiring engineers, and contributing to projects that make a difference. I believe in continuous growth, teamwork, and the power of technology to bring positive change.

Feel free to explore my projects, connect with me, or share ideas—I’m always excited to work on meaningful initiatives and bring ideas to life!

          </p>
        </div>
      </div>
    </section>
  );
}