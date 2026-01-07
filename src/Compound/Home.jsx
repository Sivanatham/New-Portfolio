import React,{useRef,useEffect} from "react";
import Navbar from "./Navbar";
import siva from "../assets/Siva.jpg"
import {gsap} from "gsap";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import {TypeAnimation} from 'react-type-animation'
import Sivan from "../assets/sivadp.jpeg";
function Home(){
    const home=useRef(null);
    
    // useEffect(()=>{
    //     gsap.fromTo("h1",
    //         {scale:0.2,opacity:0},
    //         {scale:1,opacity:1,duration:0.8,ease:"power1.in"}
    //     );
    // })
    return(
       <>
       <div className="home" id="home">
            <h1 className="h1"ref={home}>SIVANATHAN D</h1>
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
            <img src={siva} className="desimg"/>
            <img src={Sivan} className="sivadp"/>
            {/* <h3>MERN Stack Developer</h3> */}
            <p>I specialize in building scalable backend systems and modern, responsive web applications using the MERN stack. I work with <span>MongoDB, Express.js, React, and Node.js</span>, focusing on clean code, performance, and intuitive user experiences.</p>
             <Navbar />
            {/* <h3>Its My Name</h3> */}
            {/* <img src={Siva} alt="Sivanthan" /> */}
       </div>
       </>
    );

    //  <div className="home">
    //         <Navbar />
    //         <h1>Sivanathan D</h1>
    //     </div>
}
export default Home;