import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-section">
      <footer id="footer">
        <section id="footer-widgets" className="section footer-widgets">
          <div className="container">
            <div className="row gx-4 gy-5">
              <div className="col-lg-6">
                <div className="row gx-4 gy-5">
                  <div className="col-sm-6" data-aos="fade-up">
                    <h2 className="heading__1">Youbie</h2>
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
                          <a
                            href="https://stake.youbie.tv"
                            target="_blank"
                            rel="noreferrer"
                            className="footer-nav__item-link"
                          >
                            Stake
                          </a>
                        </li>
                        <li className="footer-nav__item">
                          <a
                            href="https://youbie.tv/"
                            target="_blank"
                            rel="noreferrer"
                            className="footer-nav__item-link"
                          >
                            Platform
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4">
                    <div className="widget" data-aos="fade-up">
                      <h4 className="widget__title">Socials</h4>
                      <ul className="footer-nav">
                        <li className="footer-nav__item">
                          <a
                            href="https://t.me/youbietoken"
                            target="_blank"
                            rel="noreferrer"
                            className="footer-nav__item-link"
                          >
                            Telegram
                          </a>
                        </li>
                        <li className="footer-nav__item">
                          <a
                            href="https://medium.com/@youbietoken"
                            target="_blank"
                            rel="noreferrer"
                            className="footer-nav__item-link"
                          >
                            Medium
                          </a>
                        </li>
                        <li className="footer-nav__item">
                          <a
                            href="https://instagram.com/youbietoken/"
                            target="_blank"
                            rel="noreferrer"
                            className="footer-nav__item-link"
                          >
                            Instagram
                          </a>
                        </li>
                        <li className="footer-nav__item">
                          <a
                            href="https://twitter.com/youbietoken"
                            target="_blank"
                            rel="noreferrer"
                            className="footer-nav__item-link"
                          >
                            Twitter
                          </a>
                        </li>
                        <li className="footer-nav__item">
                          <a
                            href="https://www.reddit.com/u/YoubieToken"
                            target="_blank"
                            rel="noreferrer"
                            className="footer-nav__item-link"
                          >
                            Reddit
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4">
                    <div className="widget" data-aos="fade-up">
                      <h4 className="widget__title">Company</h4>
                      <ul className="footer-nav">
                        <li className="footer-nav__item">
                          <Link to="/" className="footer-nav__item-link">
                            Contact
                          </Link>
                        </li>
                        <li className="footer-nav__item">
                          <p
                            className="footer-nav__item-link"
                            style={{ textTransform: "unset" }}
                          >
                            contact@youbie.tv
                          </p>
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
