import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  useEffect(() => {
    const isMobile = window.innerWidth < 767;

    if (isMobile) {
      gsap.set(".about", { opacity: 1, y: 0 });
      return;
    }

    gsap.set(".about", { opacity: 0, y: 80 });

    gsap.to(".about", {
      scrollTrigger: {
        trigger: ".about",
        start: "top 80%",
        toggleActions: "restart none none none",
      },
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power3.out",
    });

    setTimeout(() => ScrollTrigger.refresh(), 20);
  }, []);

  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* LEFT COLUMN */}
        <div className="about-left">
          <div className="service">
            <h3 className="web">Web Development</h3>
            <p>
              Building modern, responsive, and visually engaging user interfaces
              using React.js and Tailwind CSS.
            </p>
          </div>

          <div className="service">
            <h3>Full-Stack Applications</h3>
            <p>
              Designing complete end-to-end applications with seamless frontend
              and backend integration.
            </p>
          </div>

          <div className="service">
            <h3>Scalable Backend APIs</h3>
            <p>
              Developing secure and scalable RESTful APIs using Node.js,
              Express, and MongoDB.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="about-right">
          <h1>
            About <span>Me</span>
          </h1>

          <p className="about-desc">
            I’m <strong>Sivanathan</strong>, a motivated Full-Stack Developer
            passionate about building scalable backend systems and clean,
            responsive web interfaces. I enjoy transforming complex problems
            into simple, efficient solutions.
          </p>

          {/* STATS */}
          <div className="about-stats">
            <div>
              <h2>3+</h2>
              <p>Projects Built</p>
            </div>
            <div>
              <h2>B.E</h2>
              <p>Computer Science</p>
            </div>
            <div>
              <h2>2025</h2>
              <p>Graduate</p>
            </div>
          </div>

          {/* EXPERIENCE */}
          <div className="experience">
            <h2>Experience</h2>

            <p>
              <strong>INFOTACT – MERN Stack Intern</strong>
              <span> (July 2025 – Aug 2025)</span><br />
              Developed full-stack web applications using React.js, Node.js,
              Express.js, and MongoDB. Built RESTful APIs and collaborated in
              Agile teams using Git & GitHub.
            </p>

            <p>
              <strong>MARCELLO TECH – Frontend Intern</strong>
              <span> (May 2024 – June 2024)</span><br />
              Built a personal portfolio and restaurant website using HTML,
              CSS, and JavaScript while improving UI/UX and responsive design
              skills.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
