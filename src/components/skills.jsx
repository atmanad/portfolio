import React from "react";

class Main extends React.Component {
  render() {
    return (
      <div id="skills">
        <div className="container my-60">
          <h2 className="text-center text-theme h2">Skill set</h2>
          <div className="row">
            <div className="col-6 col-md-3">
              <div data-aos="zoom-in">
                <div className="card">
                  <div className="card-body">
                    <i className="html-text fab fa-html5 ml-2"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div data-aos="zoom-in">
                <div className="card">
                  <div className="card-body">
                    <i className="css-text fab fa-css3-alt ml-2"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div data-aos="zoom-in">
                <div className="card">
                  <div className="card-body">
                    <i className="js-text fab fa-js-square ml-2"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div data-aos="zoom-in">
                <div className="card">
                  <div className="card-body">
                    <img
                      src={require("../img/jquery.png")}
                      className="b-img"
                      alt="jquery"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div data-aos="zoom-in">
                <div className="card">
                  <div className="card-body">
                    <img
                      src={require("../img/firebase.png")}
                      className="b-img"
                      alt="firebase"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div data-aos="zoom-in">
                <div className="card">
                  <div className="card-body">
                    <img
                      src={require("../img/mongodb.png")}
                      className="b-img"
                      alt="alt"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div data-aos="zoom-in">
                <div className="card">
                  <div className="card-body">
                    <img
                      src={require("../img/mysql.png")}
                      className="b-img"
                      alt="alt"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div data-aos="zoom-in">
                <div className="card">
                  <div className="card-body">
                    <i className="bootstrap-text fab fa-bootstrap ml-2"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div data-aos="zoom-in">
                <div className="card">
                  <div className="card-body">
                    <img
                      src={require("../img/react.png")}
                      className="b-img"
                      alt="react"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div data-aos="zoom-in">
                <div className="card">
                  <div className="card-body">
                    <img
                      src={require("../img/node.png")}
                      className="b-img"
                      alt="node"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-6 col-md-3">
              <div data-aos="zoom-in">
                <div className="card">
                  <div className="card-body">
                    <img
                      src={require("../img/express.png")}
                      className="b-img"

                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div> */}
            <div className="col-6 col-md-3">
              <div data-aos="zoom-in">
                <div className="card">
                  <div className="card-body">
                    <img
                      src={require("../img/c.png")}
                      className="b-img"
                      alt="c"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div data-aos="zoom-in">
                <div className="card">
                  <div className="card-body">

                    <img
                      src={require("../img/cpp.png")}
                      className="b-img"

                      alt="cpp"
                    />

                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-6 col-md-3 my-2">
              <div data-aos="zoom-in">
                <div className="card">
                  <div className="card-body">
                    <span>
                      Python<i className="python-text fab fa-python ml-2"></i>
                    </span>
                    <div className="progress">
                      <div
                        className="progress-bar-striped python-bg"
                        role="progressbar"
                        aria-valuenow="30"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "35%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3 my-2">
              <div data-aos="zoom-in">
                <div className="card">
                  <div className="card-body">
                    <span>
                      Java<i className="fab fa-java ml-2"></i>
                    </span>
                    <div className="progress">
                      <div
                        className="progress-bar-striped java-bg"
                        role="progressbar"
                        aria-valuenow="40"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "40%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Main;
