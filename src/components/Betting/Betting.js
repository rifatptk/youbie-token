import React from 'react';
import './Betting.css';
import trend1 from '../../assets/images/trend-1.png'
import trend2 from '../../assets/images/trend-2.png'
import trend3 from '../../assets/images/trend-3.png'
import trend4 from '../../assets/images/trend-4.png'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";




const Betting = () => {
    const bettingSliderConfig = {
        type: "fade",
        rewind: true,
        pagination: false,
        arrows: false,
        perPage: 1,
    }
    const thumbnaiSliderConfig ={
        fixedWidth: 146,
      fixedHeight: 96,
      gap: 12,
      rewind: true,
      pagination: false,
      isNavigation: true,
      breakpoints: {
        600: {
          fixedWidth: 60,
          gap: 5,
          fixedHeight: 44,
        },
      }
    } 

    return (
        <div className='betting-section'>
            <section id="betting" className="betting section">
          <div
            className="bg__holder"></div>
          <div className="container">
            <div className="row gx-4 gy-5 gx-lg-5">
              <div className="col-xl-6">
                <p className="section__para one" data-aos="fade-up">Youbie</p>
                <h2 className="heading__1" data-aos="fade-up">Online Betting</h2>
                <p className="section__para two" data-aos="fade-up">
                  Bet, Watch and Earn!
                </p>
                <p className="para" data-aos="fade-up">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul className="betting-list">
                  <li className="betting-list__item" data-aos="fade-up">
                    <div className="item-img">
                      <img
                        src={trend1}
                        alt="Bet"
                        width="75"
                        height="68"
                        className="img-fluid"
                      />
                    </div>
                    <div className="details">
                      <h4 className="betting__title">Bet</h4>
                      <p className="betting__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </li>
                  <li className="betting-list__item" data-aos="fade-up">
                    <div className="item-img">
                      <img
                        src={trend2}
                        alt="Watch"
                        width="75"
                        height="68"
                        className="img-fluid"
                      />
                    </div>
                    <div className="details">
                      <h4 className="betting__title">Watch</h4>
                      <p className="betting__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </li>
                  <li className="betting-list__item" data-aos="fade-up">
                    <div className="item-img">
                      <img
                        src={trend3}
                        alt="Earn"
                        width="75"
                        height="68"
                        className="img-fluid"
                      />
                    </div>
                    <div className="details">
                      <h4 className="betting__title">Earn</h4>
                      <p className="betting__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </li>
                </ul>
                <h3 className="heading__3">Coming soon...</h3>
              </div>
              <div className="col-xl-6" data-aos="fade-up">
                <section
                  id="betting-main-carousel"
                  className="betting-main-carousel"
                  aria-label="The carousel with thumbnails. Selecting a thumbnail will change the Beautiful Gallery carousel."
                >
                  <div className="splide__track">
                    <ul className="splide__list">
                      <li className="splide__slide">
                        <img
                          src={trend1}
                          alt="slide"
                          width="520"
                          height="400"
                          className="slide__img"
                        />
                      </li>
                      <li className="splide__slide">
                        <img
                          src={trend2}
                          alt="slide"
                          width="520"
                          height="400"
                          className="slide__img"
                        />
                      </li>
                      <li className="splide__slide">
                        <img
                          src={trend3}
                          alt="slide"
                          width="520"
                          height="400"
                          className="slide__img"
                        />
                      </li>
                      <li className="splide__slide">
                        <img
                          src={trend3}
                          alt="slide"
                          width="520"
                          height="400"
                          className="slide__img"
                        />
                      </li>
                      <li className="splide__slide">
                        <img
                          src="./assets/images/trend-1.png"
                          alt="slide"
                          width="520"
                          height="400"
                          className="slide__img"
                        />
                      </li>
                      <li className="splide__slide">
                        <img
                          src="./assets/images/trend-2.png"
                          alt="slide"
                          width="520"
                          height="400"
                          className="slide__img"
                        />
                      </li>
                      <li className="splide__slide">
                        <img
                          src="./assets/images/trend-3.png"
                          alt="slide"
                          width="520"
                          height="400"
                          className="slide__img"
                        />
                      </li>
                    </ul>
                  </div>
                </section>

                <section
                  id="betting-thumbnail-carousel"
                  className="splide betting-thumbnail-carousel"
                  aria-label="The carousel with thumbnails. Selecting a thumbnail will change the Beautiful Gallery carousel."
                >
                  <div className="splide__arrows">
                    <button className="splide__arrow splide__arrow--prev">
                      <svg
                        version="1.2"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="12"
                        style={{transform:'rotate(90deg)'}}
                      >
                        <path
                          d="m.9.3 8.1 6 8.1-6v5.1l-8.1 6-8.1-6z"
                            fill='#fff'
                        />
                      </svg>
                    </button>
                    <button className="splide__arrow splide__arrow--next">
                      <svg
                        version="1.2"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="12"
                        style={{transform: `rotate(-90deg)`}}
                      >
                        <path
                          d="m.9.3 8.1 6 8.1-6v5.1l-8.1 6-8.1-6z"
                          fill="#fff"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="splide__track">
                    <ul className="splide__list">
                      <li className="splide__slide">
                        <img
                          src={trend1}
                          alt="slide"
                          width="520"
                          height="400"
                          className="slide__img"
                        />
                      </li>
                      <li className="splide__slide">
                        <img
                          src={trend2}
                          alt="slide"
                          width="520"
                          height="400"
                          className="slide__img"
                        />
                      </li>
                      <li className="splide__slide">
                        <img
                          src={trend3}
                          alt="slide"
                          width="520"
                          height="400"
                          className="slide__img"
                        />
                      </li>
                      <li className="splide__slide">
                        <img
                          src={trend4}
                          alt="slide"
                          width="520"
                          height="400"
                          className="slide__img"
                        />
                      </li>
                      <li className="splide__slide">
                        <img
                          src={trend1}
                          alt="slide"
                          width="520"
                          height="400"
                          className="slide__img"
                        />
                      </li>
                      <li className="splide__slide">
                        <img
                          src={trend2}
                          alt="slide"
                          width="520"
                          height="400"
                          className="slide__img"
                        />
                      </li>
                      <li className="splide__slide">
                        <img
                          src={trend3}
                          alt="slide"
                          width="520"
                          height="400"
                          className="slide__img"
                        />
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
        </div>
    );
};

export default Betting;