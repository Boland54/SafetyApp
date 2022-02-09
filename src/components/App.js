import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./pages/Home";
import Committee from "./pages/Committee";
import Problems from "./pages/Problems";
import Accidents from "./pages/Accidents";
import "./App.css";
import Form from "./report/Form";
import Footer from "./footer/Footer";



function App() {
  return (

    <div className="container">
      <Router>
        <Navbar />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/form" exact component={Form} />
          <Route path="/problems" exact component={Problems} />
          <Route path="/accidents" exact component={Accidents} />
          <Route path="/committee" exact component={Committee} />
        </Switch>
        <Footer />

      </Router>
   
    </div>
    
          
  );
}

export default App;
//https://github.com/briancodex/react-navbar-v1/tree/master/src/components
