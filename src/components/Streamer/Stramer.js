import React from 'react';
import { Link } from 'react-router-dom';
import './Streamer.css';
import trend1 from '../../assets/images/str1.jpg';
import trend2 from '../../assets/images/str2.jpg';
import trend3 from '../../assets/images/str3.jpg';
import trend4 from '../../assets/images/str4.jpg';
import user1 from '../../assets/images/sts1.jpg';
import user2 from '../../assets/images/sts2.jpg';
import user3 from '../../assets/images/sts3.jpg';
import user4 from '../../assets/images/sts4.jpg';
import verifiedIcon from '../../assets/images/verified-icon.svg';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Stramer = () => {
  const sliderConfig = {
    type: 'loop',
    perPage: 1,
    gap: 10,
    arrows: false,
    autoplay: true,
    interval: 3000,
    mediaQuery: 'min',
    breakpoints: {
      576: {
        perPage: 2,
      },
      768: {
        perPage: 2,
      },
      992: {
        perPage: 3,
      },
      1200: {
        perPage: 4,
        type: 'slide',
        pagination: false,
      },
    },
  };

  return (
    <div className="streamers-section">
      <section id="streamers" className="streamers section ">
        <div id="bg_fx" className="bg__holder"></div>

        <div className="container">
          <p className="section__para one">#GOSTREAM</p>
          <h2 className="heading__1">Trending Streamers</h2>
          <p className="section__para two">
            Hang-out with your favorite streamers!
          </p>
          <Splide aria-label="My Favorite Images" options={sliderConfig}>
            <SplideSlide>
              <a
                className="text-decoration-none"
                href="https://youbie.tv/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="card streamer-box" data-aos="fade-up">
                  <Link to="/" className="strech__link"></Link>
                  <div className="card-img-top">
                    <img
                      src={trend1}
                      alt="Streamer"
                      width="397"
                      height="264"
                      className="img-fluid"
                    />
                  </div>

                  <div className="card-body">
                    <div className="user">
                      <span className="user__icon">
                        <img
                          src={user1}
                          alt="user"
                          width="90"
                          height="135"
                          className="img-fluid"
                        />
                      </span>
                      <p className="streamer__tag">Gamer/Creator</p>
                    </div>
                    <div className="title">
                      <h5 className="card-title">Janine</h5>
                      <img
                        src={verifiedIcon}
                        alt="Verified"
                        width="16"
                        height="16"
                        className="img-fluid"
                      />
                    </div>
                    <p className="card-text">
                      I stream Fortnite every day. 5pm EST
                    </p>
                  </div>
                </div>
              </a>
            </SplideSlide>
            <SplideSlide>
              <a
                className="text-decoration-none"
                href="https://youbie.tv/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="card streamer-box" data-aos="fade-up">
                  <Link to="/" className="strech__link"></Link>
                  <div className="card-img-top">
                    <img
                      src={trend2}
                      alt="Streamer"
                      width="397"
                      height="264"
                      className="img-fluid"
                    />
                  </div>
                  <div className="card-body">
                    <div className="user">
                      <span className="user__icon">
                        <img
                          src={user2}
                          alt="user"
                          width="90"
                          height="135"
                          className="img-fluid"
                        />
                      </span>
                      <p className="streamer__tag">Gamer/Creator</p>
                    </div>
                    <div className="title">
                      <h5 className="card-title">Michael</h5>
                      <img
                        src={verifiedIcon}
                        alt="Verified"
                        width="16"
                        height="16"
                        className="img-fluid"
                      />
                    </div>
                    <p className="card-text">
                      Hang out with me every weekdays, 4pm EST
                    </p>
                  </div>
                </div>
              </a>
            </SplideSlide>
            <SplideSlide>
              <a
                className="text-decoration-none"
                href="https://youbie.tv/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="card streamer-box" data-aos="fade-up">
                  <Link to="/" className="strech__link"></Link>
                  <div className="card-img-top">
                    <img
                      src={trend3}
                      alt="Streamer"
                      width="397"
                      height="264"
                      className="img-fluid"
                    />
                  </div>
                  <div className="card-body">
                    <div className="user">
                      <span className="user__icon">
                        <img
                          src={user3}
                          alt="user"
                          width="90"
                          height="135"
                          className="img-fluid"
                        />
                      </span>
                      <p className="streamer__tag">Content Creator</p>
                    </div>
                    <div className="title">
                      <h5 className="card-title">Dr. Crypto Vendor</h5>
                      <img
                        src={verifiedIcon}
                        alt="Verified"
                        width="16"
                        height="16"
                        className="img-fluid"
                      />
                    </div>
                    <p className="card-text">Come and say Hi!</p>
                  </div>
                </div>
              </a>
            </SplideSlide>
            <SplideSlide>
              <a
                className="text-decoration-none"
                href="https://youbie.tv/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="card streamer-box" data-aos="fade-up">
                  <Link to="/" className="strech__link"></Link>
                  <div className="card-img-top">
                    <img
                      src={trend4}
                      alt="Streamer"
                      width="397"
                      height="264"
                      className="img-fluid"
                    />
                  </div>
                  <div className="card-body">
                    <div className="user">
                      <span className="user__icon">
                        <img
                          src={user4}
                          alt="user"
                          width="90"
                          height="135"
                          className="img-fluid"
                        />
                      </span>
                      <p className="streamer__tag">Gamer/Creator</p>
                    </div>
                    <div className="title">
                      <h5 className="card-title">Kimberly</h5>
                      <img
                        src={verifiedIcon}
                        alt="Verified"
                        width="16"
                        height="16"
                        className="img-fluid"
                      />
                    </div>
                    <p className="card-text">
                      Valorant Stram every tuesday, 2pm EST
                    </p>
                  </div>
                </div>
              </a>
            </SplideSlide>
          </Splide>
          <div className="load-more">
            <a
              href="https://youbie.tv/"
              target="_blank"
              rel="noreferrer"
              className="you-btn you-streamer-btn"
            >
              Browse
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stramer;
