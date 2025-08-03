import Silks from "./assets/Silks"
import Home from "./Compound/Home"
import About from "./Compound/About"
import Skills from "./Compound/Skills"
import Project from "./Compound/Project"
import Contact from "./Compound/Contact"
import { Routes,Route } from "react-router-dom"
function App(){

  return(
    <>
      <div style={{ position: "absolute", zIndex: -1, top: 0, left: 0, width: "100vw", height: "100vh",pointerEvents: "none" }}>
        <Silks raysOrigin="top-center"
          raysColor="#39008f"
          raysSpeed={1.5}
          backgroundColor="#060010"
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"/>     
      </div>
       {/* <Navbar /> */}
         <Home/>
         <About/>
         <Skills/>
         <Project/>
         <Contact/>
      
    </>
  );
}
export default App;