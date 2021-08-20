import React, { useState } from "react";
import "./css/styles.css";
import  Navigation from "./components/Navigation";
import  Me  from "./components/Me";
import  Footer  from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume"
// import background from "./assets/images/plug.png"


function App() {
  const [projects] = useState([
    {
      name: "Med-Planner",
      description: "A web application which provides caregivers and patients an easy solution for managing their apointments.",
      url: "https://mandahos.github.io/med-planner/",
      github: "https://github.com/mandahos/med-planner.git",
      image: "med-planner.jpg"

    }
  ])



 

  return (
    <div>
     <App />
        
        <Footer />
    </div>
  );
}

export default App;