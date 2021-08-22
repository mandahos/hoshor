import React, { useState } from "react";
import "./css/styles.css";
import  Navigation from "./components/Navigation";
import  Footer  from "./components/Footer";
import { makeStyles } from '@material-ui/core/styles';


// import background from "./assets/images/plug.png"


export default function App() {
  
  return (
    <div >
      <Navigation />

      
        
        <Footer />
    </div>
  )
}