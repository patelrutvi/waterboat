import React from 'react';
import { Link } from 'react-router-dom';

function Blog(props) {
    return (
        <div>
            <div className="intro-section" style={{ backgroundImage: 'url("assest/images/hero_2.jpg")' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 mx-auto text-center" data-aos="fade-up">
                            <h1>Blog Posts</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, in distinctio nostrum laborum sed quisquam voluptate facilis non.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mb-5 mb-lg-5 col-lg-4">
                            <div className="blog-entry">
                                <Link to={'/singlepage'} className="img-link">
                                    <img src="assest/images/hero_1.jpg" alt="Image" className="img-fluid" />
                                </Link>
                                <div className="blog-entry-contents">
                                    <h3><a href="#">Consectetur Adipisicing Elit Expedita Beatea</a></h3>
                                    <div className="meta">Posted by <a href="#">Admin</a> In <a href="#">News</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-5 mb-lg-5 col-lg-4">
                            <div className="blog-entry">
                                <Link to={'/singlepage'} className="img-link">
                                    <img src="assest/images/hero_1.jpg" alt="Image" className="img-fluid" />
                                </Link>
                                <div className="blog-entry-contents">
                                    <h3><a href="#">Consectetur Adipisicing Elit Expedita Beatea</a></h3>
                                    <div className="meta">Posted by <a href="#">Admin</a> In <a href="#">News</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-5 mb-lg-5 col-lg-4">
                            <div className="blog-entry">
                                <Link to={'/singlepage'} className="img-link">
                                    <img src="assest/images/hero_1.jpg" alt="Image" className="img-fluid" />
                                </Link>
                                <div className="blog-entry-contents">
                                    <h3><a href="#">Consectetur Adipisicing Elit Expedita Beatea</a></h3>
                                    <div className="meta">Posted by <a href="#">Admin</a> In <a href="#">News</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-5 mb-lg-5 col-lg-4">
                            <div className="blog-entry">
                                <Link to={'/singlepage'} className="img-link">
                                    <img src="assest/images/hero_1.jpg" alt="Image" className="img-fluid" />
                                </Link>
                                <div className="blog-entry-contents">
                                    <h3><a href="#">Consectetur Adipisicing Elit Expedita Beatea</a></h3>
                                    <div className="meta">Posted by <a href="#">Admin</a> In <a href="#">News</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-5 mb-lg-5 col-lg-4">
                            <div className="blog-entry">
                                <Link to={'/singlepage'} className="img-link">
                                    <img src="assest/images/hero_1.jpg" alt="Image" className="img-fluid" />
                                </Link>
                                <div className="blog-entry-contents">
                                    <h3><a href="#">Consectetur Adipisicing Elit Expedita Beatea</a></h3>
                                    <div className="meta">Posted by <a href="#">Admin</a> In <a href="#">News</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-5 mb-lg-5 col-lg-4">
                            <div className="blog-entry">
                                <Link to={'/singlepage'} className="img-link">
                                    <img src="assest/images/hero_1.jpg" alt="Image" className="img-fluid" />
                                </Link>
                                <div className="blog-entry-contents">
                                    <h3><a href="#">Consectetur Adipisicing Elit Expedita Beatea</a></h3>
                                    <div className="meta">Posted by <a href="#">Admin</a> In <a href="#">News</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row text-center mt-5">
                        <div className="col-12">
                            <a href="#" className="p-3 d-inline-block">1</a>
                            <a href="#" className="p-3 d-inline-block">2</a>
                            <span className="p-3 d-inline-block text-black">3</span>
                            <a href="#" className="p-3 d-inline-block">4</a>
                            <a href="#" className="p-3 d-inline-block">5</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Blog;