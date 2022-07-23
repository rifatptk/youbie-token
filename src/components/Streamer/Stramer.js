import React from 'react';
import './Streamer.css';
import { Link } from 'react-router-dom';
import trendBgImg from '../../assets/images/trend-bg.png';
import trend1  from '../../assets/images/trend-1.png';
import user1  from '../../assets/images/user-1.png';


const Stramer = () => {
    return (
        <div classNameName='streamers'>
           <section id="streamers" className="streamers section">
          <div className="bg__holder"
            style={trendBgImg}
          ></div>

          <div className="container">
            <p className="section__para one" data-aos="fade-up">#GOSTREAM</p>
            <h2 className="heading__1" data-aos="fade-up">Trending Streamers</h2>
            <p className="section__para two" data-aos="fade-up">
              Hang-out with your favorite streamers!
            </p>

            <section
              id="streamer-splide"
              className="splide streamer-splide"
              aria-label="Streamers slider"
            >
              <div className="splide__track">
                <ul className="splide__list">
                  <li className="splide__slide">
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
                          <span className="is-live">LIVE</span>
                        </div>
                        <p className="card-text">
                          50k followers • 15k Premium Subscribers
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

          
            <div className="load-more">
              <Link to="/" className="you-btn">Browse</Link>
            </div>
          </div>
        </section>
        </div>
    );
};

export default Stramer;