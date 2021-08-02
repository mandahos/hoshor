import React, { useState } from "react";
import "./css/styles.css";
import  Navigation from "./components/Navigation";
import  Me  from "./components/Me";
import  Footer  from "./components/Footer";
import Portfolio from "./components/Portfolio";


function App() {
  return (
    <div className="App" >
  
      <Navigation />  
      <Me />
      <Portfolio />
      <Footer />


      
    </div>
  );
}

export default App;
