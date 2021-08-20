import React, { useState } from "react";
import "./css/styles.css";
import  Navigation from "./components/Navigation";
import  Footer  from "./components/Footer";

// import background from "./assets/images/plug.png"


export default function App() {
  // const [projects] = useState([
  //   {
  //     name: "Med-Planner",
  //     description: "A web application which provides caregivers and patients an easy solution for managing their apointments.",
  //     url: "https://mandahos.github.io/med-planner/",
  //     github: "https://github.com/mandahos/med-planner.git",
  //     image: "med-planner.jpg"

  //   }
  // ])

 

  return (
    <div>
      <Navigation />

      
        
        <Footer />
    </div>
  )
}