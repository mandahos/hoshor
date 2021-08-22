import React, { useState } from "react";
import "./css/styles.css";
import  Navigation from "./components/Navigation";
import  Footer  from "./components/Footer";
import { makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles({
  root: {
    background: '#b1b7d1',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});
// import background from "./assets/images/plug.png"


export default function App() {
   return (
    <div className={classes.root}>
      <Navigation />

      
        
        <Footer />
    </div>
  )
}