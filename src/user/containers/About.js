import React from 'react';

function About(props) {
    return (
        <div>
            <div className="intro-section" style={{ backgroundImage: 'url("assest/images/hero_1.jpg")' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 mx-auto text-center" data-aos="fade-up">
                            <h1>About WaterBoat</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, in distinctio nostrum laborum sed quisquam voluptate facilis non.</p>
                            <p><a href="#" className="btn btn-primary py-3 px-5">Contact</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="assest/images/hero_2.jpg" alt="Image" className="img-fluid" />
                        </div>
                        <div className="col-md-6">
                            <span className="text-serif text-primary">About Us</span>
                            <h3 className="heading-92913 text-black">Welcome To Our Website</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, illum, quasi. Odit velit deserunt eligendi unde, enim. Enim fugiat.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium eius ullam impedit architecto debitis facilis!</p>
                            <p><a href="#" className="btn btn-primary py-3 px-4">Learn More</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-section bg-image overlay" style={{ backgroundImage: 'url("assest/images/hero_1.jpg")' }}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="counter-39392">
                                <h3>349</h3>
                                <span>Number of Yacht</span>
                            </div>
                        </div>
                        <div className="col">
                            <div className="counter-39392">
                                <h3>7000+</h3>
                                <span>Customers Satisfied</span>
                            </div>
                        </div>
                        <div className="col">
                            <div className="counter-39392">
                                <h3>120</h3>
                                <span>Number of Staffs</span>
                            </div>
                        </div>
                        <div className="col">
                            <div className="counter-39392">
                                <h3>493</h3>
                                <span>Sea Destinations</span>
                            </div>
                        </div>
                        <div className="col">
                            <div className="counter-39392">
                                <h3>230</h3>
                                <span>Professional Sailors</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-section">
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-md-7 text-center">
                            <span className="text-serif text-primary">Team</span>
                            <h3 className="heading-92913 text-black text-center">Our Team</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 mb-lg-0">
                            <div className="person">
                                <figure>
                                    <img src="assest/images/person_1.jpg" alt="Image" className="img-fluid" />
                                    <div className="social">
                                        <a href="#"><span className="icon-facebook" /></a>
                                        <a href="#"><span className="icon-twitter" /></a>
                                        <a href="#"><span className="icon-linkedin" /></a>
                                    </div>
                                </figure>
                                <div className="person-contents">
                                    <h3>Craig Daniel</h3>
                                    <span className="position">Engineer</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-lg-0">
                            <div className="person">
                                <figure>
                                    <img src="assest/images/person_2.jpg" alt="Image" className="img-fluid" />
                                    <div className="social">
                                        <a href="#"><span className="icon-facebook" /></a>
                                        <a href="#"><span className="icon-twitter" /></a>
                                        <a href="#"><span className="icon-linkedin" /></a>
                                    </div>
                                </figure>
                                <div className="person-contents">
                                    <h3>Craig Daniel</h3>
                                    <span className="position">Engineer</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-lg-0">
                            <div className="person">
                                <figure>
                                    <img src="assest/images/person_3.jpg" alt="Image" className="img-fluid" />
                                    <div className="social">
                                        <a href="#"><span className="icon-facebook" /></a>
                                        <a href="#"><span className="icon-twitter" /></a>
                                        <a href="#"><span className="icon-linkedin" /></a>
                                    </div>
                                </figure>
                                <div className="person-contents">
                                    <h3>Craig Daniel</h3>
                                    <span className="position">Engineer</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-lg-0">
                            <div className="person">
                                <figure>
                                    <img src="assest/images/person_4.jpg" alt="Image" className="img-fluid" />
                                    <div className="social">
                                        <a href="#"><span className="icon-facebook" /></a>
                                        <a href="#"><span className="icon-twitter" /></a>
                                        <a href="#"><span className="icon-linkedin" /></a>
                                    </div>
                                </figure>
                                <div className="person-contents">
                                    <h3>Craig Daniel</h3>
                                    <span className="position">Engineer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-section bg-image overlay" style={{ backgroundImage: 'url("assest/images/hero_2.jpg")' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7 text-center">
                            <h2 className="text-white">Get In Touch With Us</h2>
                            <p className="lead text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <p className="mb-0"><a href="#" className="btn btn-warning py-3 px-5 text-white">Contact Us</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default About;