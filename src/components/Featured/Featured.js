import React from 'react';
import './Featured.css'
import { Link } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'
import featured2 from '../../assets/images/features-2.png';
import featured3 from '../../assets/images/features-3.png';
import featured4 from '../../assets/images/features-1.png';


const Featured = () => {

    const sliderConfig = {
        type: "loop",
        perPage: 1,
        arrows: false,
        gap: 10,
        autoplay: true,
        interval: 3000,
        mediaQuery: "min",
        breakpoints: {
          576: {
            perPage: 2,
          },
          768: {
            gap: 20,
          },
          992: {
            perPage: 3,
            gap: 30,
            type: "slide",
            pagination: false,
          },
        }
    }




    return (
        <div className='featured-section'>
            <section id="features" className="features section">
          <div className="container">
            <p className="section__para one" data-aos="fade-up">Youbie</p>
            <h2 className="heading__1" data-aos="fade-up">Features</h2>
            <p className="section__para two" data-aos="fade-up">
              Ecosystem & Features
            </p>
            <Splide aria-label="My Favorite Images"   options={sliderConfig}>
            <SplideSlide>
            <div className="splide__track">
                <ul className="splide__list">
                  <li className="splide__slide">
                    <div className="feature-box" data-aos="fade-up">
                      <div className="feature-box__img one">
                        <img
                          src={featured2}
                          alt="Deposit Methods"
                          className="img-fluid"
                          width="195"
                          height="233"
                        />
                      </div>
                      <h3 className="feature-box__title">Low Creator Fees</h3>
                      <p className="feature-box__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      <Link to="/" className="feature-box__link">Read More</Link>
                    </div>
                  </li>
                </ul>
              </div>
            </SplideSlide>
            <SplideSlide>
            <div className="splide__track">
                <ul className="splide__list">
                  <li className="splide__slide">
                    <div className="feature-box" data-aos="fade-up">
                      <div className="feature-box__img one">
                        <img
                          src={featured3}
                          alt="Deposit Methods"
                          className="img-fluid"
                          width="195"
                          height="233"
                        />
                      </div>
                      <h3 className="feature-box__title">NFT Marketplace</h3>
                      <p className="feature-box__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      <Link to="/" className="feature-box__link">Read More</Link>
                    </div>
                  </li>
                </ul>
              </div>
            </SplideSlide>
            <SplideSlide>
            <div className="splide__track">
                <ul className="splide__list">
                  <li className="splide__slide">
                    <div className="feature-box" data-aos="fade-up">
                      <div className="feature-box__img one">
                        <img
                          src={featured4}
                          alt="Deposit Methods"
                          className="img-fluid"
                          width="195"
                          height="233"
                        />
                      </div>
                      <h3 className="feature-box__title">Deposit Methods</h3>
                      <p className="feature-box__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      <Link to="/" className="feature-box__link">Read More</Link>
                    </div>
                  </li>
                </ul>
              </div>
            </SplideSlide>

        </Splide>
          </div>
        </section>
        </div>
    );
};

export default Featured;