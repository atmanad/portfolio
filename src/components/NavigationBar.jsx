import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaBarsStaggered } from "react-icons/fa6";

import "../css/style.css"

function NavigationBar() {
  return (
    <Navbar expand="lg" className="bg-theme">
      <Container>
        <Navbar.Brand href="#intro">
          <strong className="fs-30 pl-3 text-e0e0e0">ATMAN DAS</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" >
          <FaBarsStaggered />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="text-right">
            <Nav.Link href="#home" >Home</Nav.Link>
            <Nav.Link href="#skills" >Skills</Nav.Link>
            <Nav.Link href="#experience" >Experience</Nav.Link>
            <Nav.Link href="#projects" >Projects</Nav.Link>
            <Nav.Link href="#contact" >Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;