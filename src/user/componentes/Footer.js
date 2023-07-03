import React from 'react';

function Footer(props) {
    return (
        <div>
            <div className="footer bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <p className="mb-4"><img src="assest/images/logo.png" alt="Image" className="img-fluid" /></p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nemo minima qui dolor, iusto iure.</p>
                            <p><a href="#">Learn More</a></p>
                        </div>
                        <div className="col-lg-3">
                            <h3 className="footer-heading"><span>Our Company</span></h3>
                            <ul className="list-unstyled">
                                <li><a href="#">About</a></li>
                                <li><a href="#">News</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Our Team</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Projects</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <h3 className="footer-heading"><span>Our Services</span></h3>
                            <ul className="list-unstyled">
                                <li><a href="#">Industrial</a></li>
                                <li><a href="#">Construction</a></li>
                                <li><a href="#">Remodeling</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <h3 className="footer-heading"><span>Contact</span></h3>
                            <ul className="list-unstyled">
                                <li><a href="#">Help Center</a></li>
                                <li><a href="#">Support Community</a></li>
                                <li><a href="#">Press</a></li>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Our Partners</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="copyright">
                                <p>
                                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                    Copyright © All rights reserved | This template is made with <i className="icon-heart text-danger" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Footer;