import React from 'react'
import { MDBIcon } from 'mdbreact'
function Education() {
    return (
        <div id="education" className="my-100">
            <div className='container mx-auto px-4'>
                <h2 className="text-center text-theme h2 mb-5">Education</h2>
                <div className="row align-items-center connecting-lines d-flex mb-4">
                    <div className="col-2 text-center d-inline-flex bottom align-items-center justify-content-center">
                        <div className="circle">
                            <MDBIcon icon="check" />
                        </div>
                    </div>
                    <div className="col-8">
                        <h4>B.Tech</h4>
                        <p className="mb-0">C V Raman Global University, Bhubaneswar</p>
                        <p className="mb-0 text-muted">2017-2021</p>
                        <p>Information Technology</p>
                    </div>
                </div>
                <div className="row timeline">
                    <div className="col-2">
                        <div className="corner top-right"></div>
                    </div>
                    <div className="col-8">
                        <hr />
                    </div>
                    <div className="col-2">
                        <div className="corner left-bottom"></div>
                    </div>
                </div>
                <div className="row d-flex justify-content-end align-items-center connecting-lines my-5">
                    <div className="col-8 text-right">
                        <h4>12th</h4>
                        <p className="mb-0">Khallikote Jr. College, Berhampur</p>
                        <p className="mb-0 text-muted">YOP: 2016</p>
                    </div>
                    <div className="col-2 text-center d-inline-flex full align-items-center justify-content-center">
                        <div className="circle">
                            <MDBIcon icon="check" />
                        </div>
                    </div>
                </div>
                <div className="row timeline">
                    <div className="col-2">
                        <div className="corner right-bottom"></div>
                    </div>
                    <div className="col-8">
                        <hr />
                    </div>
                    <div className="col-2">
                        <div className="corner top-left"></div>
                    </div>
                </div>
                <div className="row connecting-lines align-items-center d-flex mt-4">
                    <div className="col-2 text-center d-inline-flex top align-items-center justify-content-center">
                        <div className="circle">
                            <MDBIcon icon="check" />
                        </div>
                    </div>
                    <div className="col-8">
                        <h4>10th</h4>
                        <p className="mb-0">Medical Campus, Berhampur</p>
                        <p className="mb-0 text-muted">YOP: 2014</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education
