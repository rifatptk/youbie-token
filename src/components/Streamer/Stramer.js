import React from 'react';
import { Link } from 'react-router-dom';
import './Streamer.css';
import trend1 from '../../assets/images/trend-1.png';
import trend2 from '../../assets/images/trend-2.png';
import trend3 from '../../assets/images/trend-3.png';
import trend4 from '../../assets/images/trend-4.png';
import user1 from '../../assets/images/user-1.png';
import user2 from '../../assets/images/user-2.png';
import user3 from '../../assets/images/user-3.png';
import user4 from '../../assets/images/user-4.png';
import verifiedIcon from '../../assets/images/verified-icon.svg';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'


const Stramer = () => {
    const sliderConfig = {
        type: "loop",
        perPage: 1,
        gap: 10,
        arrows: false,
        autoplay: true,
        interval: 3000,
        mediaQuery: "min",
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
            type: "slide",
            pagination: false,
          },
        },
    }




    return (
        <div classNameName='streamers'>
        <section id="streamers" className="streamers section">
       <div className="bg__holder"></div>

       <div className="container">
         <p className="section__para one">#GOSTREAM</p>
         <h2 className="heading__1" >Trending Streamers</h2>
         <p className="section__para two" >
           Hang-out with your favorite streamers!
         </p>
        <Splide aria-label="My Favorite Images"   options={sliderConfig}>
            <SplideSlide>
            <div class="card streamer-box" data-aos="fade-up">
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
                          <span className="is-live">LIVE</span>
                        </div>
                        <p className="card-text">
                          50k followers • 15k Premium Subscribers
                        </p>
                      </div>
                    </div>
            </SplideSlide>
            <SplideSlide>
            <div class="card streamer-box" data-aos="fade-up">
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
                          <span className="is-live">LIVE</span>
                        </div>
                        <p className="card-text">
                          50k followers • 15k Premium Subscribers
                        </p>
                      </div>
                    </div>
            </SplideSlide>
            <SplideSlide>
            <div class="card streamer-box" data-aos="fade-up">
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
                          <p className="streamer__tag">Gamer/Creator</p>
                        </div>
                        <div className="title">
                          <h5 className="card-title">Dr. Crypto Vendor</h5>
                          <img
                            src={verifiedIcon}
                            alt="Verified"
                            width="16"
                            height="16"
                            class="img-fluid"
                          />
                        </div>
                        <p className="card-text">
                          50k followers • 15k Premium Subscribers
                        </p>
                      </div>
                    </div>
            </SplideSlide>
            <SplideSlide>
            <div class="card streamer-box" data-aos="fade-up">
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
                          <span className="is-live">LIVE</span>
                        </div>
                        <p className="card-text">
                          50k followers • 15k Premium Subscribers
                        </p>
                      </div>
                    </div>
            </SplideSlide>

        </Splide>
         <div className="load-more">
           <Link to="/" className="you-btn you-streamer-btn">Browse</Link>
         </div>
       </div>
     </section>
     </div>
    );
};

export default Stramer;