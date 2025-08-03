import React,{useRef,useEffect} from "react";
import Navbar from "./Navbar";
import {gsap} from "gsap";
// import Siva from "../assets/sivadp.jpeg";
function Home(){
    const home=useRef(null);
    
    useEffect(()=>{
        gsap.fromTo("h1",
            {scale:0.2,opacity:0},
            {scale:1,opacity:1,duration:0.8,ease:"power1.in"}
        );
    })
    return(
       <>
       <div className="home" id="home">
            <h1 className="h1"ref={home}>SIVANATHAN</h1>
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