import React,{useEffect, useRef}  from "react";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function Contact(){

    useEffect(()=>{
        const isMobile = window.innerWidth < 368;
            
              if (isMobile) {
                gsap.set(".contact", { opacity: 1, y: 0 });
                return;
              }
        
        setTimeout(()=>{
          
          gsap.set(".contact", { opacity: 0, y: 100 });
          gsap.to(".contact",
        {
          scrollTrigger:{
            trigger: ".contact",
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
        <>
        <div className="contact" id="contact">
            <h1>Contact</h1>
            <p><i id="phone" class='fa fa-phone' style={{ position:'relative',right:'10px'}}></i>+91 9342555138</p>
            <p><i id="mail" class='fa fa-envelope'style={{ position:'relative',right:'10px'}}></i>siva3736nathan@gmail.com</p>
            <h3><i class='fas fa-map-pin'style={{ position:'relative',right:'10px',color:'red'}}></i>TRICHY</h3>
             <a href="https://www.linkedin.com/in/sivanathan007/" target="_blank"><i class="fa fa-linkedin-square"></i></a>
            <a href="https://github.com/Sivanatham/" ><i class="fa fa-github" target="_blank" ></i></a>
        </div>
        </>
        
    );
}
export default Contact;
    