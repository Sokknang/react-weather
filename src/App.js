import React from 'react';
import './App.css';
import * as ReactBootStrap from "react-bootstrap";
import SighUp from "./Components/SighUp";
import Features from "./Components/Features";
import Map from "./Components/Map";
import LogIn from "./Components/LogIn";
import NavBar from "./Components/Navbar"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
        <Router>
        <NavBar/>
 

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/features" component={Features}>
              <Features />
          </Route>
          <Route path="/map" component={Map}>
            <Map />
          </Route>
          <Route path="/login" component={LogIn}>
            <LogIn />
          </Route>
          <Route path="/signup" component={SighUp}>
            <SighUp />
          </Route>
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
