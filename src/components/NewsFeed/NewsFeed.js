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
      <section id="newsfeed" className="newsfeed section ">
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
                Below are project related articles for you to keep up to date.
                Additionally, we will update this section with articles related
                to streaming, gaming, and other topics that relate with our
                platform.
              </p>
              <Splide
                aria-label="My Favorite Images"
                options={premiumSliderConfig}
              >
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
                                      By Max Miceli
                                    </Link>
                                  </div>
                                  |
                                  <div className="date">
                                    <FontAwesomeIcon
                                      icon={faCalendarDays}
                                      style={{ color: "#0c8dac" }}
                                    />{" "}
                                    <Link to="/" className="text">
                                      September 6th, 2022
                                    </Link>
                                  </div>
                                </div>
                                <p className="card-box__text">
                                  The streaming wars are in full effect. Both
                                  Twitch and YouTube
                                </p>
                                <a
                                  href="https://dotesports.com/streaming/news/all-high-profile-streamers-to-leave-twitch-for-youtube-gaming"
                                  className="readmore"
                                >
                                  <span className="text">Read More</span>
                                  <FontAwesomeIcon
                                    icon={faArrowRight}
                                    style={{ color: "#cb0e52", marginLeft: 8 }}
                                  />
                                </a>
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
                                      By Joe Hernandez
                                    </Link>
                                  </div>
                                  |
                                  <div className="date">
                                    <FontAwesomeIcon
                                      icon={faCalendarDays}
                                      style={{ color: "#0c8dac" }}
                                    />
                                    <Link to="/" className="text">
                                      Sept. 22nd, 2022
                                    </Link>
                                  </div>
                                </div>
                                <p className="card-box__text">
                                  Some gambling content has been banned from
                                  Twitch after one
                                </p>
                                <a
                                  href="https://www.npr.org/2022/09/22/1124384092/twitch-bans-some-gambling-content-after-an-outcry-from-streamers"
                                  className="readmore"
                                >
                                  <span className="text">Read More</span>
                                  <FontAwesomeIcon
                                    icon={faArrowRight}
                                    style={{ color: "#cb0e52", marginLeft: 8 }}
                                  />
                                </a>
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
                                      By Austen Goslin
                                    </Link>
                                  </div>
                                  |
                                  <div className="date">
                                    <FontAwesomeIcon
                                      icon={faCalendarDays}
                                      style={{ color: "#0c8dac" }}
                                    />{" "}
                                    <Link to="/" className="text">
                                      September 27th, 2022
                                    </Link>
                                  </div>
                                </div>
                                <p className="card-box__text">
                                  From scamming drama to a ban on gambling
                                  streams , Twitch
                                </p>
                                <a
                                  href="https://www.polygon.com/23374984/twitch-streamers-revenue-youtube-move"
                                  className="readmore"
                                >
                                  <span className="text">Read More</span>
                                  <FontAwesomeIcon
                                    icon={faArrowRight}
                                    style={{ color: "#cb0e52", marginLeft: 8 }}
                                  />
                                </a>
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
                          By Youbie
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
                          September 17th, 2022
                        </Link>
                      </div>
                    </div>
                    <h4 className="card-box__title">Youbie Platform Launch</h4>
                    <p className="card-box__text">
                      Youbie Token is a newly developed digital platform that
                      offers a wide range of digital services. In the recent
                      development, the company announced the official
                    </p>
                    <a
                      href="https://finance.yahoo.com/news/youbie-token-announces-official-launch-020000444.html?.tsrc=fin-srch"
                      className="readmore"
                    >
                      <span className="text">Read More </span>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        style={{ color: "#cb0e52" }}
                      />
                    </a>
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
