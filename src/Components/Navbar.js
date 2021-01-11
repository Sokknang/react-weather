import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

const NavBar = () => {
    return(
        <div className="App">
    <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="primary" variant="dark">
  <ReactBootStrap.Navbar.Brand href="#home">WEATHER APP</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto"> 
    <Link to="/features">
    <ReactBootStrap.Nav.Link href="#features">NEWS & VIDEOS</ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/map">
    <ReactBootStrap.Nav.Link href="#map">MAP</ReactBootStrap.Nav.Link>
    </Link>
      <ReactBootStrap.NavDropdown title="MORE" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#action/3.1">NEWS UPDATE</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2">NEWS UPDATE</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
    <Link to="/login">
    <ReactBootStrap.Nav.Link href="#login">LogIn</ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/signup">
    <ReactBootStrap.Nav.Link eventKey={2} href="#signup">
        SignUp
      </ReactBootStrap.Nav.Link>
    </Link>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
        </div>
    )
}

export default NavBar;