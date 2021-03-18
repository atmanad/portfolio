import React from "react";
import { MDBIcon } from "mdbreact";

class footer extends React.Component {
  render() {
    return (
      <div className="container-fluid py-50 bg-theme" id="contact">
        <div className="text-center">
          <div className="s-icon fb d-inline-block" data-aos="zoom-in">
            <a
              href="https://www.facebook.com/atmanad.GH00ST"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MDBIcon fab icon="facebook" />
            </a>
          </div>
          <div className="s-icon in d-inline-block" data-aos="zoom-in">
            <a
              href="https://www.instagram.com/__gh00st/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MDBIcon fab icon="instagram" />
            </a>
          </div>
          <div className="s-icon li d-inline-block" data-aos="zoom-in">
            <a
              href="https://www.linkedin.com/in/atmanad/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MDBIcon fab icon="linkedin" />
            </a>
          </div>
          <div className="s-icon phone d-inline-block" data-aos="zoom-in">
            <a href="tel:7008635343">
              <MDBIcon icon="phone-alt" />
            </a>
          </div>
          <div className="s-icon mail d-inline-block" data-aos="zoom-in">
            <a href="mailto:atmanad0001@gmail.com">
              <MDBIcon far icon="envelope" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default footer;
