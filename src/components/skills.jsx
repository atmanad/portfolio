import React from "react";

class Main extends React.Component {
  render() {
    return (
      <div id="skills" className="my-100">
        <div className="container">
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
                      height="90"
                      width="86.3"
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
                      height="90"
                      width="90"
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
                      height="90"
                      width="49.8"
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
                      height="60.84"
                      width="90"
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
                      height="90"
                      width="81.5"
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
                      height="55.05"
                      width="90"
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
                      height="90"
                      width="79.52"
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
                      height="90"
                      width="80.09"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
