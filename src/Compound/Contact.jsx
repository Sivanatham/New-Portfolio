import React, { useEffect } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./Contact.css";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
useEffect(() => {
  ScrollTrigger.matchMedia({

    // ✅ DESKTOP ONLY
    "(min-width: 768px)": () => {
      gsap.fromTo(
        ".contact-animate",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#contact",
            start: "top 85%",
          },
        }
      );
    },

    // ❌ MOBILE – NO GSAP
    "(max-width: 767px)": () => {
      gsap.set(".contact-animate", {
        opacity: 1,
        y: 0,
        clearProps: "all",
      });
    },
  });

  return () => ScrollTrigger.killAll();
}, []);


  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title contact-animate">
          Contact <span>Me</span>
        </h2>

        <p className="contact-desc contact-animate">
          I’m actively looking for exciting opportunities and collaborative
          projects where I can contribute my skills and grow professionally.
          Let’s connect and build something impactful.
        </p>

        <div className="contact-cards">
          {/* EMAIL */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=siva3736nathan@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card contact-animate"
          >
            <FaEnvelope className="contact-icon" />
            <div>
              <p className="label">Email</p>
              <p className="value">siva3736nathan@gmail.com</p>
            </div>
          </a>

          {/* PHONE */}
          <a
            href="tel:+919342555138"
            className="contact-card contact-animate"
            onClick={(e) => {
              if (window.innerWidth >= 768) e.preventDefault();
            }}
          >
            <FiPhone className="contact-icon" />
            <div>
              <p className="label">Phone</p>
              <p className="value">+91 93425 55138</p>
            </div>
          </a>
        </div>

        <div className="contact-social contact-animate">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/Sivanatham"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </div>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=siva3736nathan@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn contact-animate"
        >
          Send a Message
        </a>
      </div>
    </section>
  );
};

export default Contact;
