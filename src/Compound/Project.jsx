import React,{useEffect, useRef}  from "react";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import project1 from "../assets/local food.jpg";
import project2 from "../assets/scanner image.jpg";
import project3 from "../assets/Screenshot (168).png";

gsap.registerPlugin(ScrollTrigger);

function Project(){
     const caref = useRef(null);
     

useEffect(()=>{
    
    setTimeout(()=>{
      
      gsap.set(".card-grid", { opacity: 0, y: 100 });
      gsap.to(".card-grid",
    {
      scrollTrigger:{
        trigger: ".card-grid",
        start:"top 50%",
        toggleActions:"restart none none none"
      },
      
      opacity:1,
      y:0,
      duration:1.5,
      ease: "power3.out",
      stagger: 0.5,
    }
    );
    },100)
},[]);
    return(
        <div className="project" id="project" >
            <h2>Hands-on Implementation</h2>
         <div className="card-grid" ref={caref}>
              <div className="card">
             <img src={project1} alt="Local food delivery" />
            <p>A full-stack MERN stack web application that connects local chefs with hungry users.</p>
            <div className="btns">
                <a href="https://www.linkedin.com/posts/sivanathan007_mernstack-reactjs-nodejs-activity-7355212964641034240-ykfT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFJcUQoB1E-yckK3gJcdnw7a_7rfxBF6oJQ" target="_blank" className="tag1">Live Demo</a>
        
                <a href="https://github.com/Sivanatham/Home-made-food-delivery.git" target="_blank" className="tag2">GitHub</a>
            </div>
           </div>
           <div className="card" >
             <img src={project2} alt="Local food delivery" />
            <p>Its a Lightweight Application Real Time Image sharing and Compressing using QR code</p>
            <div className="btns">
                <a href="https://www.linkedin.com/posts/sivanathan007_webdevelopment-github-javascript-activity-7349974378433966081-qDqa?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFJcUQoB1E-yckK3gJcdnw7a_7rfxBF6oJQ" target="_blank" className="tag1">Live Demo</a>
                <a href="https://github.com/Sivanatham/Snap2qr.git" target="_blank" className="tag2">GitHub</a>
            </div>
           </div>
           <div className="card" >
             <img src={project3} alt="Local food delivery" />
            <p>My first web application a fully responsive static website for a local restaurant.</p>
            <div className="btns">
                <a href="https://siva-60034643944.development.catalystserverless.in/app/index.html" target="_blank" className="tag1">Live Demo</a>
                <a href="https://www.linkedin.com/posts/sivanathan007_mobile-phone-view-activity-7258113234920996864-7zP3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFJcUQoB1E-yckK3gJcdnw7a_7rfxBF6oJQ" target="_blank" className="tag3">Mobile view</a>
            </div>
           </div>
         </div>
        </div>
    );
}
export default Project;