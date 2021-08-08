import React, { Component } from "react";
import { MDBView, MDBMask } from "mdbreact";
export default class intro extends Component {
  render() {
    return (
      <MDBView id="intro">
        <MDBMask overlay="black-stron">
          <div className="flex-center mt-3">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-md-12 mt-5">
                <img
                  src={require("../img/avatar.webp")}
                  className="img-fluid mx-auto rounded-circle"
                  alt="avatar"
                  height="233"
                  width="216" />
                <h2 className="intro-text pt-5 mb-2">
                  Hey!, I'm Atman
                </h2>
                <hr className="hr-light" />
                <h3 className="text-e0e0e0 mt-4 mb-2">
                  Full Stack Web Developer
                </h3>
                <h4 className="text-e0e0e0">
                  Former Web Dev Lead
                  <br className="d-sm-none" /> @
                  <a href="https://dsccvrgu.tech" target="_blank" rel="noopener noreferrer">
                    DSC CVRGU
                  </a>
                </h4>
              </div>
            </div>
          </div>
        </MDBMask>
      </MDBView>
    );
  }
}
