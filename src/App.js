import React, { useState } from "react";
import "./css/styles.css";
import  Navigation from "./components/Navigation";
import  Me  from "./components/Me";
import  Footer  from "./components/Footer";
import Portfolio from "./components/Portfolio";
import background from "./assets/images/plug.png"


function App() {
  const [projects] = useState([
    {

    }
  ])
  return (
    <div style= {{ backgroungImage: `url(${background})` }}>
  
      <Navigation />  
      <Me />
      <Portfolio />
      <Footer />


      
    </div>
  );
}

export default App;
