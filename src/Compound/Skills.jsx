import React,{useEffect, useRef}  from "react";
import {gsap} from "gsap";


function Skills(){
    const caref = useRef(null);

useEffect(()=>{
    gsap.from(caref.current.querySelectorAll(".skills-card"),
       {
        y: 200,
      opacity: 0.2,
      duration: 1.5,
      ease: "back.out",
      stagger: 0.1,
       }
    )
});
    return(
        <div className="skills" id="skills">
            <h1>Skills</h1>
            <div className="skills-grid" ref={caref}>
                <div className="skill-card">HTML</div>
                <div className="skill-card">CSS</div>
                <div className="skill-card">JavaScript</div>
                <div className="skill-card">React.js</div>
                <div className="skill-card">Node.js</div>
                <div className="skill-card">Express.js</div>
                <div className="skill-card">MongoDb</div>
                <div className="skill-card" >Git  and  GitHub</div>
                <div className="skill-card">REST API</div>
                <div className="skill-card">Google    Cloud</div>
            </div>
            <h1 >Programming Languages</h1>
                 <div className="skills-grid">
                <div className="skill-card">Python</div>
                <div className="skill-card">JAVA</div>
                <div className="skill-card">C++</div>
            </div>
            <h1 >Tools and Libraries</h1>
             <div className="skills-grid">
                <div className="skill-card">GSAP</div>
                <div className="skill-card">Three.js</div>
                <div className="skill-card">React Bits</div>
                <div className="skill-card">Postman</div>
            </div>
        </div>
    );
}
export default Skills;