import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import project1 from "../assets/local food.jpg";
import project2 from "../assets/scanner image.jpg";
import project3 from "../assets/Screenshot (168).png";

gsap.registerPlugin(ScrollTrigger);

function Project() {
  const ref = useRef(null);

  // 🔹 PROJECT DATA (same file)
  const projects = [
    {
      title: "Delicious – Food Delivery Web App",
      desc:
        "A full-stack MERN food delivery application that enables users to explore menus, manage carts, and place orders through a clean, responsive, and user-friendly interface.",
      image: project1,
      links: {
        live:
          "https://www.linkedin.com/posts/sivanathan007_mernstack-reactjs-nodejs-activity-7355212964641034240-ykfT",
        github:
          "https://github.com/Sivanatham/Home-made-food-delivery.git",
      },
    },
    {
      title: "Snap2QR – Image Sharing via QR",
      desc:
        "A lightweight web application that allows real-time image sharing and compressionusing QR codes, focusing on performance, simplicity, and secure access.",
      image: project2,
      links: {
        live:
          "https://www.linkedin.com/posts/sivanathan007_webdevelopment-github-javascript-activity-7349974378433966081-qDqa",
        github: "https://github.com/Sivanatham/Snap2qr.git",
      },
    },
    {
      title: "Restaurant Website",
      desc:
        "A fully responsive static website designed for a local restaurant,built using HTML, CSS, and JavaScript with an emphasis on modern UI and accessibility.",
      image: project3,
      links: {
        live:
          "https://siva-60034643944.development.catalystserverless.in/app/index.html",
        mobile:
          "https://www.linkedin.com/posts/sivanathan007_mobile-phone-view-activity-7258113234920996864-7zP3",
      },
    },
  ];

useEffect(() => {
  const isMobile = window.innerWidth < 768;
  if (isMobile) return;

  gsap.from(".card", {
    y: 60,
    duration: 0.8,
    stagger: 0.25,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".card-grid",
      start: "top 85%",
      once: true,
    },
  });
}, []);





  return (
    <section className="project" id="project">
      <h2>
        Featured <span>Projects</span>
      </h2>

      <div className="card-grid" ref={ref}>
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <div className="card-img">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>

              <div className="btns">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="tag1"
                  >
                    Live Demo
                  </a>
                )}

                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="tag2"
                  >
                    GitHub
                  </a>
                )}

                {project.links.mobile && (
                  <a
                    href={project.links.mobile}
                    target="_blank"
                    rel="noreferrer"
                    className="tag3"
                  >
                    Mobile View
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
