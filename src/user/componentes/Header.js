import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <div>
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle" />
          </div>
        </div>
        <div className="site-mobile-menu-body" />
      </div>
      <div className="header-top bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6 col-lg-3">
              <Link to={"/"}>
                <img src="assest/images/logo.png" alt="Image" className="img-fluid" />
                <strong>Water</strong>Boat
              </Link>
            </div>
            <div className="col-lg-3 d-none d-lg-block">
              <div className="quick-contact-icons d-flex">
                <div className="icon align-self-start">
                  <span className="icon-location-arrow text-primary" />
                </div>
                <div className="text">
                  <span className="h4 d-block">San Francisco</span>
                  <span className="caption-text">Mountain View, Fake st., CA</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 d-none d-lg-block">
              <div className="quick-contact-icons d-flex">
                <div className="icon align-self-start">
                  <span className="icon-phone text-primary" />
                </div>
                <div className="text">
                  <span className="h4 d-block">000 209 392 312</span>
                  <span className="caption-text">Toll free</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 d-none d-lg-block">
              <div className="quick-contact-icons d-flex">
                <div className="icon align-self-start">
                  <span className="icon-envelope text-primary" />
                </div>
                <div className="text">
                  <span className="h4 d-block">info@gmail.com</span>
                  <span className="caption-text">Gournadi, 1230 Bariasl</span>
                </div>
              </div>
            </div>
            <div className="col-6 d-block d-lg-none text-right">
              <a href="#" className="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black"><span className="icon-menu h3" /></a>
            </div>
          </div>
        </div>
        <div className="site-navbar py-2 js-sticky-header site-navbar-target d-none pl-0 d-lg-block" role="banner">
          <div className="container">
            <div className="d-flex align-items-center">
              <div className="mx-auto">
                <nav className="site-navigation position-relative text-right" role="navigation">
                  <ul className="site-menu main-menu js-clone-nav mr-auto d-none pl-0 d-lg-block">
                    <li >
                      <Link to={"/"} className="nav-link text-left">Home</Link>
                    </li>
                    <li>
                      <Link to={"/about"} className="nav-link text-left">About Us</Link>
                    </li>
                    <li>
                      <Link to={"/service"} className="nav-link text-left">Services</Link>
                    </li>
                    <li>
                      <Link to={"/userboat"} className="nav-link text-left">Boat Models</Link>
                    </li>
                    <li>
                      {/* <a href="testimonials.html" className="nav-link text-left">Testimonials</a> */}
                    </li>
                    <li><Link to={"/blog"} className="nav-link text-left">Blog</Link></li>
                    <li>
                      <Link to={"/contact"} className="nav-link text-left">Contact</Link>
                    </li>
                    <li>
                      <Link to={'/auth'} className="nav-link text-left">
                        <span className="d-none d-md-inline">Login/ Signup</span>
                      </Link>
                    </li>

                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
}

export default Header;
