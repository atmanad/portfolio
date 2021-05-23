import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

class NavbarPage extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Router>
        <MDBNavbar className="bg-theme fixed-top py-3 py-md-2" dark expand="md">
          <MDBNavbarBrand>
            <strong className="fs-30 pl-3"><a href="#intro" className="text-e0e0e0">ATMAN DAS</a></strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} aria-label="navbar-toggler"><i className="white-text fas fa-align-right"></i></MDBNavbarToggler>
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav right>
              <MDBNavItem active className="p-2">
                <a href="/#intro" className="text-e0e0e0 mx-3 fs-20">
                  Home
                </a>
              </MDBNavItem>
              <MDBNavItem className="p-2">
                <a href="/#skills" className="text-e0e0e0 mx-3 fs-20">
                  Skills
                </a>
              </MDBNavItem>
              <MDBNavItem className="p-2">
                <a href="/#education" className="text-e0e0e0 mx-3 fs-20">
                  Education
                </a>
              </MDBNavItem>
              <MDBNavItem className="p-2">
                <a href="/#projects" className="text-e0e0e0 mx-3 fs-20">
                  Projects
                </a>
              </MDBNavItem>
              <MDBNavItem className="p-2">
                <a href="/#contact" className="text-e0e0e0 mx-3 fs-20">
                  Contact Me
                </a>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </Router>
    );
  }
}

export default NavbarPage;
