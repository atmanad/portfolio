import React from "react";
import { MDBIcon } from "mdbreact";

class footer extends React.Component {
  render() {
    return (
      <div className="container-fluid py-80 bg-theme" id="contact">
        <h2 className="text-center text-white h2 mb-5">Contact Me</h2>
        <div className="text-center">
          <div className="s-icon fb d-inline-block">
            <a
              href="https://www.facebook.com/atmanad.GH00ST"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="facebook icon"
            >
              <MDBIcon fab icon="facebook" />
            </a>
          </div>
          <div className="s-icon in d-inline-block">
            <a
              href="https://www.instagram.com/__gh00st/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="instagram icon"
            >
              <MDBIcon fab icon="instagram" />
            </a>
          </div>
          <div className="s-icon li d-inline-block">
            <a
              href="https://www.linkedin.com/in/atmanad/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="linkedin icon"
            >
              <MDBIcon fab icon="linkedin" />
            </a>
          </div>
          <div className="s-icon phone d-inline-block">
            <a href="tel:7008635343" aria-label="phone icon">
              <MDBIcon icon="phone-alt" />
            </a>
          </div>
          <div className="s-icon mail d-inline-block">
            <a href="mailto:atmanad0001@gmail.com" aria-label="mail icon">
              <MDBIcon far icon="envelope" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default footer;
