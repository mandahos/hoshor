import React from "react";
import "./css/styles.css";
import  Navigation from "./components/Navigation";
import  Me  from "./components/Me";
import  Footer  from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume"
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import background from "./assets/images/plug.png"



export default function App() {
  return (
    <Switch>
      <Redirect exact from="./components/Me" to="/home/about" />
      <Route exact path="/home/:page?" render={props => <Me {...props} />} />
    </Switch>
  );
}