import React from "react";
import "./NewsFeed.css";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import premium1 from "../../assets/images/go-premium-1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";

const NewsFeed = () => {
  const premiumSliderConfig = {
    type: "loop",
    perPage: 1,
    gap: 30,
    arrows: false,
    autoplay: true,
    interval: 3000,
    mediaQuery: "min",
    breakpoints: {
      576: {
        perPage: 2,
      },
      768: {
        type: "slide",
        perPage: 3,
        pagination: false,
      },
    },
  };

  return (
    <div className="newsfeed-section">
      <section id="newsfeed" className="newsfeed section">
        <div className="container">
          <div className="row gx-4 gy-5 gx-lg-5">
            <div className="col-xl-6">
              <p className="section__para one" data-aos="fade-up">
                #LATEST
              </p>
              <h2 className="heading__1" data-aos="fade-up">
                Newsfeed
              </h2>
              <p className="section__para two" data-aos="fade-up">
                News & Update
              </p>
              <p className="para" data-aos="fade-up">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <Splide aria-label="My Favorite Images" options={premiumSliderConfig}>
                <SplideSlide>
                  <div className="latest__posts" data-aos="fade-up">
                    <section
                      id="newsfeed-splide"
                      className="newsfeed-splide"
                      aria-label="The newsfeed splide."
                    >
                      <div className="splide__track">
                        <ul className="splide__list">
                          <li className="splide__slide">
                            <div className="card-box">
                              <div className="card-box__img">
                                <img
                                  src={premium1}
                                  alt="News"
                                  width="210"
                                  height="101"
                                  className="img-fluid"
                                />
                              </div>
                              <div className="card-box__body">
                                <div className="meta">
                                  <div className="user">
                                    <FontAwesomeIcon
                                      icon={faUserCircle}
                                      style={{ color: "#0c8dac" }}
                                    />
                                    <Link to="/" className="username">
                                      By Lorem
                                    </Link>
                                  </div>
                                  |
                                  <div className="date">
                                    <FontAwesomeIcon
                                      icon={faCalendarDays}
                                      style={{ color: "#0c8dac" }}
                                    />{" "}
                                    <Link to="/" className="text">
                                      April 21, 2022
                                    </Link>
                                  </div>
                                </div>
                                <p className="card-box__text">
                                  Lorem ipsum dolor sit, amet consectetur
                                  adipisicing elit. Cum, quisquam!
                                </p>
                                <Link to="/" className="readmore">
                                  <span className="text">Read More</span>
                                  <FontAwesomeIcon
                                    icon={faArrowRight}
                                    style={{ color: "#cb0e52" }}
                                  />
                                </Link>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </section>
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="latest__posts" data-aos="fade-up">
                    <section
                      id="newsfeed-splide"
                      className=" newsfeed-splide"
                      aria-label="The newsfeed splide."
                    >
                      <div className="splide__track">
                        <ul className="splide__list">
                          <li className="splide__slide">
                            <div className="card-box">
                              <div className="card-box__img">
                                <img
                                  src={premium1}
                                  alt="News"
                                  width="210"
                                  height="101"
                                  className="img-fluid"
                                />
                              </div>
                              <div className="card-box__body">
                                <div className="meta">
                                  <div className="user">
                                    <FontAwesomeIcon
                                      icon={faUserCircle}
                                      style={{ color: "#0c8dac" }}
                                    />
                                    <Link to="/" className="username">
                                      By Lorem
                                    </Link>
                                  </div>
                                  |
                                  <div className="date">
                                    <FontAwesomeIcon
                                      icon={faCalendarDays}
                                      style={{ color: "#0c8dac" }}
                                    />{" "}
                                    <Link to="/" className="text">
                                      April 21, 2022
                                    </Link>
                                  </div>
                                </div>
                                <p className="card-box__text">
                                  Lorem ipsum dolor sit, amet consectetur
                                  adipisicing elit. Cum, quisquam!
                                </p>
                                <Link to="/" className="readmore">
                                  <span className="text">Read More</span>
                                  <FontAwesomeIcon
                                    icon={faArrowRight}
                                    style={{ color: "#cb0e52" }}
                                  />
                                </Link>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </section>
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="latest__posts" data-aos="fade-up">
                    <section
                      id="newsfeed-splide"
                      className=" newsfeed-splide"
                      aria-label="The newsfeed splide."
                    >
                      <div className="splide__track">
                        <ul className="splide__list">
                          <li className="splide__slide">
                            <div className="card-box">
                              <div className="card-box__img">
                                <img
                                  src={premium1}
                                  alt="News"
                                  width="210"
                                  height="101"
                                  className="img-fluid"
                                />
                              </div>
                              <div className="card-box__body">
                                <div className="meta">
                                  <div className="user">
                                    <FontAwesomeIcon
                                      icon={faUserCircle}
                                      style={{ color: "#0c8dac" }}
                                    />
                                    <Link to="/" className="username">
                                      By Lorem
                                    </Link>
                                  </div>
                                  |
                                  <div className="date">
                                    <FontAwesomeIcon
                                      icon={faCalendarDays}
                                      style={{ color: "#0c8dac" }}
                                    />{" "}
                                    <Link to="/" className="text">
                                      April 21, 2022
                                    </Link>
                                  </div>
                                </div>
                                <p className="card-box__text">
                                  Lorem ipsum dolor sit, amet consectetur
                                  adipisicing elit. Cum, quisquam!
                                </p>
                                <Link to="/" className="readmore">
                                  <span className="text">Read More</span>
                                  <FontAwesomeIcon
                                    icon={faArrowRight}
                                    style={{ color: "#cb0e52" }}
                                  />
                                </Link>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </section>
                  </div>
                </SplideSlide>
              </Splide>
            </div>
            <div className="col-xl-6" data-aos="fade-up">
              <div className="feature__post">
                <div className="card-box">
                  <div className="card-box__img">
                    <img
                      src={premium1}
                      alt="News"
                      width="210"
                      height="101"
                      className="img-fluid"
                    />
                  </div>
                  <div className="card-box__body">
                    <div className="meta">
                      <div className="user">
                        <FontAwesomeIcon
                          icon={faUserCircle}
                          style={{ color: "#0c8dac" }}
                        />
                        <Link to="/" className="username">
                          By Lorem
                        </Link>
                      </div>
                      |
                      <div className="date">
                        <i className="fa-solid fa-calendar-days"></i>
                        <FontAwesomeIcon
                          icon={faCalendarDays}
                          style={{ color: "#0c8dac" }}
                        />
                        <Link to="/" className="text">
                          April 21, 2022
                        </Link>
                      </div>
                    </div>
                    <h4 className="card-box__title">Website Development</h4>
                    <p className="card-box__text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Suscipit repellendus, minus doloremque eaque asperiores
                      cumque voluptatum, explicabo doloribus obcaecati iste
                      nostrum animi voluptas harum accusamus sapiente quam, sunt
                      cum laborum.
                    </p>
                    <Link to="/" className="readmore">
                      <span className="text">Read More </span>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        style={{ color: "#cb0e52" }}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsFeed;
