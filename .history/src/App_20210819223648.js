import React, { useState } from "react";
import "./css/styles.css";
import  Navigation from "./components/Navigation";
import  Me  from "./components/Me";
import  Footer  from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume"
// import background from "./assets/images/plug.png"


export default function App() {
  const [projects] = useState([
    {
      name: "Med-Planner",
      description: "A web application which provides caregivers and patients an easy solution for managing their apointments.",
      url: "https://mandahos.github.io/med-planner/",
      github: "https://github.com/mandahos/med-planner.git",
      image: "med-planner.jpg"

    }
  ])

  const [meSelected, setMeSelected] = useState(true);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState (false);

  return (
    <div>
      <Navigation
      // meSelected={meSelected}
      // setMeSelected={setMeSelected}
      // portfolioSelected={portfolioSelected}
      // setPortfolioSelected={setPortfolioSelected}
      // resumeSelected={resumeSelected}
      // setResumeSelected={setResumeSelected}
      />

      {/* {portfolioSelected ? (<Portfolio projects={projects}/>) */}
        {/* : resumeSelected ? (<Resume />) */}
        : (<Me />)}
        
        <Footer />
    </div>
  )