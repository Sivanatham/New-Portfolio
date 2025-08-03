import React,{useEffect, useRef}  from "react";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {TypeAnimation} from 'react-type-animation'


gsap.registerPlugin(ScrollTrigger);
function About(){
   
  useEffect(()=>{
   const isMobile = window.innerWidth < 368;

  if (isMobile) {
    gsap.set(".about", { opacity: 1, y: 0 });
    return;
  }
     gsap.set(".about", { opacity: 0, y:80 });
      gsap.to(".about",
    {
      scrollTrigger:{
        trigger: ".about",
        start: isMobile ? "top 90%" : "top 80%",
        toggleActions:"restart none none none"
      },
      
      opacity:1,
      y:0,
      duration: isMobile ? 0.4 : 1.5,
      ease: "power3.out",
      // stagger: 0.5,
    });
    setTimeout(() => ScrollTrigger.refresh(), 20);
},[]);
    return(
       <>
        <div className='about' id="about">
            {/* <h1>About Me</h1> */}
          <div className='aboutanimation'>
             <TypeAnimation            
               sequence={[
                    
                    'I am a Web Developer',
                    2000,
                    'I am a Web Designer  ',
                    2000,
                    'I am a Frontend Developer ',
                    2000,
                    'I am a MERN Stack Developer',
                    2000
                ]}
                // wrapper="span"
                speed={50} 
                repeat={Infinity}
                
    /> 
            </div> 
         <p >I’m Sivanathan, a Computer Science Engineering graduate from Sudharsan Engineering College. I’ve completed internships at <span className='s1'>Marcello Technology</span>, where I learned the basics of web development, and at <span className='s1'>Infotact Solutions</span>, where I worked on a real-time <span className='s1'>MERN stack</span> project a Home Made Food Delivery application. I’m passionate about web development and enjoy building clean, responsive interfaces. As a <span className='s1'>fresher</span>, I’m eager to start my journey in the tech field, contribute to meaningful  projects, and <span className='s1'>keep learning</span> every day.
</p>
        </div>
       </>
    );
}
export default About;