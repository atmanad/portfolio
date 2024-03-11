import '../css/experience.css'
 

export default function Experience() {
    return (
        <div id="experience" className="section-margin-padding">
            <div className="container">
                <h2 className="text-center text-e0e0e0 h2 pb-2">Experience</h2>
                <div className="row">
                    <div className="col-md-12">
                        <div className="main-timeline4">
                            <div className="timeline">
                                <div href="none" className="timeline-content">
                                    <span className="year">2021</span>
                                    <div className="inner-content">
                                        <h3 className="title">Full Stack Developer</h3>
                                        <p className="description">
                                            Cognizant Technology Solutions, Pune
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="timeline">
                                <a href="none" className="timeline-content">
                                    <span className="year">2021</span>
                                    <div className="inner-content">
                                        <h3 className="title">B.Tech</h3>
                                        <p className="description">
                                            C. V. Raman Global University, Odisha
                                        </p>
                                    </div>
                                </a>
                            </div>
                            <div className="timeline hide">
                                <div href="none" className="timeline-content">
                                    <span className="year">2021</span>
                                    <div className="inner-content">
                                        <h3 className="title">Web Designer</h3>
                                        <p className="description">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ex odio, rhoncus sit amet tincidunt eu, suscipit a orci. In suscipit quam eget dui auctor.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="timeline hide">
                                <a href="none" className="timeline-content">
                                    <span className="year">2015</span>
                                    <div className="inner-content">
                                        <h3 className="title">Web Developer</h3>
                                        <p className="description">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ex odio, rhoncus sit amet tincidunt eu, suscipit a orci. In suscipit quam eget dui auctor.
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}