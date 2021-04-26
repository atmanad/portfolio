import React, { Component } from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from "mdbreact";
import Preloader from "./Preloader";
import LazyLoad from 'react-lazyload'
export default class skills extends Component {
  render() {
    return (
      <div className="container my-100" id="projects">
        <p className="h2 text-center text-theme mb-5">Projects</p>
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
                      <div className='filler' />
                      <LazyLoad placeholder={<Preloader />} once={true} offset={[-90, 100]}>
                        <img src={require("../img/vps1.webp")} alt="First slide" className=" project-image img-fluid" />
                      </LazyLoad>
                      <div className='filler' />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="2">
                    <MDBView>
                      <div className='filler' />
                      <LazyLoad placeholder={<Preloader />} once={true} offset={[-90, 100]}>
                        <img src={require("../img/vps2.webp")} alt="Second slide" className=" project-image img-fluid" />
                      </LazyLoad>
                      <div className='filler' />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="3">
                    <MDBView>
                      <div className='filler' />
                      <LazyLoad placeholder={<Preloader />} once={true} offset={[-90, 100]}>
                        <img src={require("../img/vps3.webp")} alt="Third slide" className="project-image img-fluid" />
                      </LazyLoad>
                      <div className='filler' />
                    </MDBView>
                  </MDBCarouselItem>
                </MDBCarouselInner>
              </MDBCarousel>
            </MDBContainer>
            <a href="https://virtualpolicestation.atmandas.co" className="project-link" target="_blank" rel="noopener noreferrer">
              <h2 className='text-center project-title mt-2'>Virtual Police Station</h2>
            </a>
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
                      <div className='filler' />
                      <LazyLoad placeholder={<Preloader />} once={true} offset={[-90, 100]}>
                        <img src={require("../img/mysuru1.webp")} alt="First slide" className="project-image img-fluid" />
                      </LazyLoad>
                      <div className='filler' />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="2">
                    <MDBView>
                      <div className='filler' />
                      <LazyLoad placeholder={<Preloader />} once={true} offset={[-90, 100]}>
                        <img src={require("../img/mysuru2.webp")} alt="Second slide" className=" project-image img-fluid z-depth-1" />
                      </LazyLoad>
                      <div className='filler' />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="3">
                    <MDBView>
                      <div className='filler' />
                      <LazyLoad placeholder={<Preloader />} once={true} offset={[-90, 100]}>
                        <img src={require("../img/mysuru3.webp")} alt="Third slide" className=" project-image img-fluid" />
                      </LazyLoad>
                      <div className='filler' />
                    </MDBView>
                  </MDBCarouselItem>
                </MDBCarouselInner>
              </MDBCarousel>
            </MDBContainer>
            <a href="https://mysuru.atmandas.co" className="project-link" target="_blank" rel="noopener noreferrer">
              <h2 className='text-center project-title mt-2'>Mysuru Tourism</h2>
            </a>
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
                      <div className='filler' />
                      <LazyLoad placeholder={<Preloader />} once={true} offset={[-90, 100]}>
                        <img src={require("../img/mydoc1.webp")} alt="First slide" className=" project-image img-fluid" />
                      </LazyLoad>
                      <div className='filler' />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="2">
                    <MDBView>
                      <div className='filler' />
                      <LazyLoad placeholder={<Preloader />} once={true} offset={[-90, 100]}>
                        <img src={require("../img/mydoc2.webp")} alt="Second slide" className=" project-image img-fluid" />
                      </LazyLoad>
                      <div className='filler' />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="3">
                    <MDBView>
                      <div className='filler' />
                      <LazyLoad placeholder={<Preloader />} once={true} offset={[-90, 100]}>
                        <img src={require("../img/mydoc3.webp")} alt="Third slide" className=" project-image img-fluid" />
                      </LazyLoad>
                      <div className='filler' />
                    </MDBView>
                  </MDBCarouselItem>
                </MDBCarouselInner>
              </MDBCarousel>
            </MDBContainer>
            <a href="https://mydoc.atmandas.co" className="project-link" target="_blank" rel="noopener noreferrer">
              <h2 className='text-center project-title mt-2'>MyDoc</h2>
            </a>
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
                      <div className='filler' />
                      <LazyLoad placeholder={<Preloader />} once={true} offset={[-90, 100]}>
                        <img src={require("../img/dsccvrgu1.webp")} alt="First slide" className=" project-image img-fluid" />
                      </LazyLoad>
                      <div className='filler' />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="2">
                    <MDBView>
                      <div className='filler' />
                      <LazyLoad placeholder={<Preloader />} once={true} offset={[-90, 100]}>
                        <img src={require("../img/dsccvrgu2.webp")} alt="Second slide" className=" project-image img-fluid" />
                      </LazyLoad>
                      <div className='filler' />
                    </MDBView>
                  </MDBCarouselItem>
                </MDBCarouselInner>
              </MDBCarousel>
            </MDBContainer>
            <a href="https://dsccvrgu.tech" className="project-link" target="_blank" rel="noopener noreferrer">
              <h2 className='text-center project-title mt-2'>DSC CVRGU</h2>
            </a>
          </div>
        </div>
      </div>
    );
  }
}