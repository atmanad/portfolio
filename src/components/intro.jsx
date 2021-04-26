import React, { Component } from "react";
import { MDBView, MDBMask } from "mdbreact";
export default class intro extends Component {
  render() {
    return (
      <MDBView id="intro">
        <MDBMask overlay="black-strong">
          <div className="flex-center mt-3">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-md-12 mt-5">
                <img
                  src={require("../img/avatar.jfif")}
                  className="rounded-circle img-fluid mx-auto"
                  alt="avatar"
                  data-aos="zoom-out"
                />
                <h2
                  className="display-4 font-weight-bold white-text pt-5 mb-2"
                  data-aos="zoom-out"                >
                  Hey!, I'm Atman
                </h2>
                <hr className="hr-light" />
                <h4 className="white-text mt-4 mb-2" data-aos="zoom-out">
                  An IT undergraduate passionate about Web Development
                </h4>
                <h4 className="white-text" data-aos="zoom-out">
                  Web Dev Lead
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
