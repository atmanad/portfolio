import React, { Component } from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
  "mdbreact";
export default class skills extends Component {
  render() {
    return (
      <div className="container my-4" id="projects">
        <p className="h2 text-center text-theme">Projects</p>
        <div className="row">
          <div className="col-md-5 my-3 mx-auto">
            <MDBContainer>
              <MDBCarousel
                activeItem={1}
                length={3}
                showControls={true}
                showIndicators={true}
                className="z-depth-1">
                <MDBCarouselInner>
                  <MDBCarouselItem itemId="1">
                    <MDBView>
                      <a href="https://virtualpolicestation.herokuapp.com" target="_blank" rel="noopener noreferrer">
                        <img
                          className="d-block img-fluid"
                          src={require("../img/vps1.png")} alt="First slide" />
                      </a>
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="2">
                    <MDBView>
                      <a href="https://virtualpolicestation.herokuapp.com" target="_blank" rel="noopener noreferrer">
                        <img
                          className="d-block img-fluid"
                          src={require("../img/vps2.png")} alt="Second slide" />
                      </a>
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="3">
                    <MDBView>
                      <a href="https://virtualpolicestation.herokuapp.com" target="_blank" rel="noopener noreferrer">
                        <img
                          className="d-block img-fluid"
                          src={require("../img/vps3.png")} alt="Third slide" />
                      </a>
                    </MDBView>
                  </MDBCarouselItem>
                </MDBCarouselInner>
              </MDBCarousel>
            </MDBContainer>
            <h2 className='text-center project-title mt-2'>Virtual Police Station</h2>
          </div>
          <div className="col-md-5 my-3 mx-auto">
            <MDBContainer>
              <MDBCarousel
                activeItem={1}
                length={3}
                showControls={true}
                showIndicators={true}
                className="z-depth-1">
                <MDBCarouselInner>
                  <MDBCarouselItem itemId="1">
                    <MDBView>
                      <a href="https://error404-mysuru.herokuapp.com" target="_blank" rel="noopener noreferrer">
                        <img
                          className="d-block img-fluid project-image"
                          src={require("../img/mysuru1.png")} alt="First slide" />
                      </a>
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="2">
                    <MDBView>
                      <a href="https://error404-mysuru.herokuapp.com" target="_blank" rel="noopener noreferrer">
                        <img
                          className="d-block img-fluid project-image"
                          src={require("../img/mysuru2.png")} alt="Second slide" />
                      </a>
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="3">
                    <MDBView>
                      <a href="https://error404-mysuru.herokuapp.com" target="_blank" rel="noopener noreferrer">
                        <img
                          className="d-block img-fluid project-image"
                          src={require("../img/mysuru3.png")} alt="Third slide" />
                      </a>
                    </MDBView>
                  </MDBCarouselItem>
                </MDBCarouselInner>
              </MDBCarousel>
            </MDBContainer>
            <h2 className='text-center project-title mt-2'>Mysuru Tourism</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 my-3 mx-auto">
            <MDBContainer>
              <MDBCarousel
                activeItem={1}
                length={3}
                showControls={true}
                showIndicators={true}
                className="z-depth-1">
                <MDBCarouselInner>
                  <MDBCarouselItem itemId="1">
                    <MDBView>
                      <a href="https://error404-mydoc.herokuapp.com" target="_blank" rel="noopener noreferrer">
                        <img
                          className="d-block img-fluid project-image"
                          src={require("../img/mydoc1.png")} alt="First slide" />
                      </a>
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="2">
                    <MDBView>
                      <a href="https://error404-mydoc.herokuapp.com" target="_blank" rel="noopener noreferrer">
                        <img
                          className="d-block img-fluid project-image"
                          src={require("../img/mydoc2.png")} alt="Second slide" />
                      </a>
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="3">
                    <MDBView>
                      <a href="https://error404-mydoc.herokuapp.com" target="_blank" rel="noopener noreferrer">
                        <img
                          className="d-block img-fluid project-image"
                          src={require("../img/mydoc3.png")} alt="Third slide" />
                      </a>
                    </MDBView>
                  </MDBCarouselItem>
                </MDBCarouselInner>
              </MDBCarousel>
            </MDBContainer>
            <h2 className='text-center project-title mt-2'>MyDoc</h2>
          </div>
          <div className="col-md-5 my-3 mx-auto">
            <MDBContainer>
              <MDBCarousel
                activeItem={1}
                length={2}
                showControls={true}
                showIndicators={true}
                className="z-depth-1">
                <MDBCarouselInner>
                  <MDBCarouselItem itemId="1">
                    <MDBView>
                      <a href="https://dsccvrgu.tech" target="_blank" rel="noopener noreferrer">
                        <img
                          className="d-block img-fluid"
                          src={require("../img/dsccvrgu1.png")} alt="First slide" />
                      </a>
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="2">
                    <MDBView>
                      <a href="https://dsccvrgu.tech" target="_blank" rel="noopener noreferrer">
                        <img
                          className="d-block img-fluid"
                          src={require("../img/dsccvrgu2.png")} alt="Second slide" />
                      </a>
                    </MDBView>
                  </MDBCarouselItem>
                </MDBCarouselInner>
              </MDBCarousel>
            </MDBContainer>
            <h2 className='text-center project-title mt-2'>DSC CVRGU</h2>
          </div>
        </div>
      </div>
    );
  }
}
