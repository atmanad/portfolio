import React from "react";

 
export default function Introduction() {
  return (
    <div id="intro">
          <div className="row d-flex justify-content-center text-center">
            <div className="col-md mt-5 p-0">
              <img
                src={require("../img/atman.jpg")}
                className="img-fluid mx-auto rounded-circle"
                alt="avatar"
                height="216"
                width="216" />
              <h2 className="intro-text pt-5 mb-2">
                Hey!, I'm Atman
              </h2>
              <hr className="hr-light" />
              <h3 className="text-e0e0e0 mt-4 mb-2">
                .NET Full Stack Developer
              </h3>
              <h4 className="text-e0e0e0">
                Software Engineer
                <br className="d-sm-none" /> @
                <a href="https://www.cognizant.com/in/en" target="_blank" rel="noopener noreferrer">
                  Cognizant
                </a>
              </h4>
            </div>
          </div>
    </div>
  );
}

