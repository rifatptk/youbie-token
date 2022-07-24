import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';


const Footer = () => {
    return (
        <div className='footer-section'>
        <footer id="footer">
        <section id="footer-widgets" className="section footer-widgets">
          <div className="container">
            <div className="row gx-4 gy-5">
              <div className="col-lg-6">
                <div className="row gx-4 gy-5">
                  <div className="col-sm-6" data-aos="fade-up">
                    <h2 className="heading__1">Youbie</h2>
                    <p className="para">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <div className="col-sm-6 d-none d-md-block">
                    <div className="widget" data-aos="fade-up">
                      <h4 className="widget__title">LEGAL & SAFETY</h4>
                      <ul className="footer-nav">
                        <li className="footer-nav__item">
                          <Link to="/" className="footer-nav__item-link">
                            Terms & Conditions
                          </Link>
                        </li>
                        <li className="footer-nav__item">
                          <Link to="/" className="footer-nav__item-link">
                            Privacy Policy
                          </Link>
                        </li>
                        <li className="footer-nav__item">
                          <Link to="/" className="footer-nav__item-link">
                            Cookies Policy
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row gx-4 gy-5">
                  <div className="col-sm-6 col-md-4 d-md-none">
                    <div className="widget" data-aos="fade-up">
                      <h4 className="widget__title">LEGAL & SAFETY</h4>
                      <ul className="footer-nav">
                        <li className="footer-nav__item">
                          <Link to="/" className="footer-nav__item-link">
                            Terms & Conditions
                          </Link>
                        </li>
                        <li className="footer-nav__item">
                          <Link to="/" className="footer-nav__item-link">
                            Privacy Policy
                          </Link>
                        </li>
                        <li className="footer-nav__item">
                          <Link to="/" className="footer-nav__item-link">
                            Cookies Policy
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4">
                    <div className="widget" data-aos="fade-up">
                      <h4 className="widget__title">Links</h4>
                      <ul className="footer-nav">
                        <li className="footer-nav__item">
                          <Link to="/" className="footer-nav__item-link">
                            Website.com
                          </Link>
                        </li>
                        <li className="footer-nav__item">
                          <Link to="/" className="footer-nav__item-link">
                            Site.com
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4">
                    <div className="widget" data-aos="fade-up">
                      <h4 className="widget__title">Socials</h4>
                      <ul className="footer-nav">
                        <li className="footer-nav__item">
                          <Link to="/" className="footer-nav__item-link">
                            Twitter
                          </Link>
                        </li>
                        <li className="footer-nav__item">
                          <Link to="/" className="footer-nav__item-link">
                            Facebook
                          </Link>
                        </li>
                        <li className="footer-nav__item">
                          <Link to="/" className="footer-nav__item-link">
                            Instagram
                          </Link>
                        </li>
                        <li className="footer-nav__item">
                          <Link to="/" className="footer-nav__item-link">
                            Youtube
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4">
                    <div className="widget" data-aos="fade-up">
                      <h4 className="widget__title">Company</h4>
                      <ul className="footer-nav">
                        <li className="footer-nav__item">
                          <Link to="/" className="footer-nav__item-link"> About </Link>
                        </li>
                        <li className="footer-nav__item">
                          <Link to="/" className="footer-nav__item-link">
                            Contact
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="copyright" className="copyright">
          <div className="container">
            <p className="text">COPYRIGHT 2022, CREATED BY YOUBIE</p>
          </div>
        </section>
      </footer>
        </div>
    );
};

export default Footer;