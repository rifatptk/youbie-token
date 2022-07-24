import React from 'react';
import './Testimonial.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import user3 from '../../assets/images/user-3.png';
import user4 from '../../assets/images/user-4.png';
import user5 from '../../assets/images/user-5.png';




const Testimonial = () => {
    const testimonialSliderConfig = {
        type: "loop",
        perPage: 1,
        perMove: 1,
        gap: 30,
        arrows: false,
        mediaQuery: "min",
        breakpoints: {
          640: {
            perPage: 2,
          },
          992: {
            perPage: 3,
          },
        },
    }



    return (
        <div className='testimonial-section'>
            <section id="testimonial" className="testimonial section">
          <div
            className="bg__holder"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <p className="section__para one" data-aos="fade-up">#TESTIMONIAL</p>
                <h2 className="heading__1" data-aos="fade-up">Feedbacks</h2>
                <p className="section__para two" data-aos="fade-up">
                  Streamers & Influencers
                </p>
              </div>
            </div>
            <Splide aria-label="My Favorite Images"   options={testimonialSliderConfig}>
                <SplideSlide>
                <section
              id="testimonial__slider"
              className="splider testimonial__slider"
              aria-label="Splide Basic HTML Example"
              data-aos="fade-up"
            >
              <div className="splide__track">
                <ul className="splide__list">
                  <li className="splide__slide">
                    <div className="card-box">
                      <div className="user">
                        <div className="user__img">
                          <img
                            src={user4}
                            alt="Client"
                            width="116"
                            height="146"
                            className="img-fluid"
                          />
                        </div>
                        <div className="card-box__content">
                          <h5 className="card-box__title">Kimberly</h5>
                          <p className="designation">Gamer/Creator</p>
                        </div>
                      </div>
                      <div className="stars">
                        <span className="star">
                          <svg
                            version="1.2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="18"
                          >
                            <path
                              d="m10.1.1 3.1 5.6 6.2 1.2-4.3 4.6.7 6.4-5.7-2.7-5.8 2.7.8-6.4L.8 6.9 7 5.7 10.1.1"
                             fill="#feb600"
                            />
                          </svg>
                        </span>
                        <span className="star">
                          <svg
                            version="1.2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="18"
                          >
                            <path
                              d="m10.1.1 3.1 5.6 6.2 1.2-4.3 4.6.7 6.4-5.7-2.7-5.8 2.7.8-6.4L.8 6.9 7 5.7 10.1.1"
                             fill="#feb600"
                            />
                          </svg>
                        </span>
                        <span className="star">
                          <svg
                            version="1.2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="18"
                          >
                            <path
                              d="m10.1.1 3.1 5.6 6.2 1.2-4.3 4.6.7 6.4-5.7-2.7-5.8 2.7.8-6.4L.8 6.9 7 5.7 10.1.1"
                             fill="#feb600"
                            />
                          </svg>
                        </span>
                        <span className="star">
                          <svg
                            version="1.2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="18"
                          >
                            <path
                              d="m10.1.1 3.1 5.6 6.2 1.2-4.3 4.6.7 6.4-5.7-2.7-5.8 2.7.8-6.4L.8 6.9 7 5.7 10.1.1"
                             fill="#feb600"
                            />
                          </svg>
                        </span>
                        <span className="star">
                          <svg
                            version="1.2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="18"
                          >
                            <path
                              d="m10.1.1 3.1 5.6 6.2 1.2-4.3 4.6.7 6.4-5.7-2.7-5.8 2.7.8-6.4L.8 6.9 7 5.7 10.1.1"
                             fill="#feb600"
                            />
                          </svg>
                        </span>
                      </div>
                      <p className="card-box__text">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. ”
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
                </SplideSlide>
                <SplideSlide>
                <section
              id="testimonial__slider"
              className="splider testimonial__slider"
              aria-label="Splide Basic HTML Example"
              data-aos="fade-up"
            >
              <div className="splide__track">
                <ul className="splide__list">
                  <li className="splide__slide">
                    <div className="card-box">
                      <div className="user">
                        <div className="user__img">
                          <img
                            src={user3}
                            alt="Client"
                            width="116"
                            height="146"
                            className="img-fluid"
                          />
                        </div>
                        <div className="card-box__content">
                          <h5 className="card-box__title">Dr. Crypto Vendor</h5>
                          <p className="designation">Content Creator</p>
                        </div>
                      </div>
                      <div className="stars">
                        <span className="star">
                          <svg
                            version="1.2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="18"
                          >
                            <path
                              d="m10.1.1 3.1 5.6 6.2 1.2-4.3 4.6.7 6.4-5.7-2.7-5.8 2.7.8-6.4L.8 6.9 7 5.7 10.1.1"
                             fill="#feb600"
                            />
                          </svg>
                        </span>
                        <span className="star">
                          <svg
                            version="1.2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="18"
                          >
                            <path
                              d="m10.1.1 3.1 5.6 6.2 1.2-4.3 4.6.7 6.4-5.7-2.7-5.8 2.7.8-6.4L.8 6.9 7 5.7 10.1.1"
                             fill="#feb600"
                            />
                          </svg>
                        </span>
                        <span className="star">
                          <svg
                            version="1.2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="18"
                          >
                            <path
                              d="m10.1.1 3.1 5.6 6.2 1.2-4.3 4.6.7 6.4-5.7-2.7-5.8 2.7.8-6.4L.8 6.9 7 5.7 10.1.1"
                             fill="#feb600"
                            />
                          </svg>
                        </span>
                        <span className="star">
                          <svg
                            version="1.2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="18"
                          >
                            <path
                              d="m10.1.1 3.1 5.6 6.2 1.2-4.3 4.6.7 6.4-5.7-2.7-5.8 2.7.8-6.4L.8 6.9 7 5.7 10.1.1"
                             fill="#feb600"
                            />
                          </svg>
                        </span>
                        <span className="star">
                          <svg
                            version="1.2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="18"
                          >
                            <path
                              d="m10.1.1 3.1 5.6 6.2 1.2-4.3 4.6.7 6.4-5.7-2.7-5.8 2.7.8-6.4L.8 6.9 7 5.7 10.1.1"
                             fill="#feb600"
                            />
                          </svg>
                        </span>
                      </div>
                      <p className="card-box__text">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. ”
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
                </SplideSlide>
                <SplideSlide>
                <section
              id="testimonial__slider"
              className="splider testimonial__slider"
              aria-label="Splide Basic HTML Example"
              data-aos="fade-up"
            >
              <div className="splide__track">
                <ul className="splide__list">
                  <li className="splide__slide">
                    <div className="card-box">
                      <div className="user">
                        <div className="user__img">
                          <img
                            src={user5}
                            alt="Client"
                            width="116"
                            height="146"
                            className="img-fluid"
                          />
                        </div>
                        <div className="card-box__content">
                          <h5 className="card-box__title">Lily</h5>
                          <p className="designation">Content Creator</p>
                        </div>
                      </div>
                      <div className="stars">
                        <span className="star">
                          <svg
                            version="1.2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="18"
                          >
                            <path
                              d="m10.1.1 3.1 5.6 6.2 1.2-4.3 4.6.7 6.4-5.7-2.7-5.8 2.7.8-6.4L.8 6.9 7 5.7 10.1.1"
                             fill="#feb600"
                            />
                          </svg>
                        </span>
                        <span className="star">
                          <svg
                            version="1.2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="18"
                          >
                            <path
                              d="m10.1.1 3.1 5.6 6.2 1.2-4.3 4.6.7 6.4-5.7-2.7-5.8 2.7.8-6.4L.8 6.9 7 5.7 10.1.1"
                             fill="#feb600"
                            />
                          </svg>
                        </span>
                        <span className="star">
                          <svg
                            version="1.2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="18"
                          >
                            <path
                              d="m10.1.1 3.1 5.6 6.2 1.2-4.3 4.6.7 6.4-5.7-2.7-5.8 2.7.8-6.4L.8 6.9 7 5.7 10.1.1"
                             fill="#feb600"
                            />
                          </svg>
                        </span>
                        <span className="star">
                          <svg
                            version="1.2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="18"
                          >
                            <path
                              d="m10.1.1 3.1 5.6 6.2 1.2-4.3 4.6.7 6.4-5.7-2.7-5.8 2.7.8-6.4L.8 6.9 7 5.7 10.1.1"
                             fill="#feb600"
                            />
                          </svg>
                        </span>
                        <span className="star">
                          <svg
                            version="1.2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="18"
                          >
                            <path
                              d="m10.1.1 3.1 5.6 6.2 1.2-4.3 4.6.7 6.4-5.7-2.7-5.8 2.7.8-6.4L.8 6.9 7 5.7 10.1.1"
                             fill="#feb600"
                            />
                          </svg>
                        </span>
                      </div>
                      <p className="card-box__text">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. ”
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
                </SplideSlide>
                <SplideSlide>
                <section
              id="testimonial__slider"
              className="splider testimonial__slider"
              aria-label="Splide Basic HTML Example"
              data-aos="fade-up"
            >
              <div className="splide__track">
                <ul className="splide__list">
                  <li className="splide__slide">
                    <div className="card-box">
                      <div className="user">
                        <div className="user__img">
                          <img
                            src={user4}
                            alt="Client"
                            width="116"
                            height="146"
                            className="img-fluid"
                          />
                        </div>
                        <div className="card-box__content">
                          <h5 className="card-box__title">Kimberly</h5>
                          <p className="designation">Gamer/Creator</p>
                        </div>
                      </div>
                      <div className="stars">
                        <span className="star">
                          <svg
                            version="1.2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="18"
                          >
                            <path
                              d="m10.1.1 3.1 5.6 6.2 1.2-4.3 4.6.7 6.4-5.7-2.7-5.8 2.7.8-6.4L.8 6.9 7 5.7 10.1.1"
                             fill="#feb600"
                            />
                          </svg>
                        </span>
                        <span className="star">
                          <svg
                            version="1.2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="18"
                          >
                            <path
                              d="m10.1.1 3.1 5.6 6.2 1.2-4.3 4.6.7 6.4-5.7-2.7-5.8 2.7.8-6.4L.8 6.9 7 5.7 10.1.1"
                             fill="#feb600"
                            />
                          </svg>
                        </span>
                        <span className="star">
                          <svg
                            version="1.2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="18"
                          >
                            <path
                              d="m10.1.1 3.1 5.6 6.2 1.2-4.3 4.6.7 6.4-5.7-2.7-5.8 2.7.8-6.4L.8 6.9 7 5.7 10.1.1"
                             fill="#feb600"
                            />
                          </svg>
                        </span>
                        <span className="star">
                          <svg
                            version="1.2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="18"
                          >
                            <path
                              d="m10.1.1 3.1 5.6 6.2 1.2-4.3 4.6.7 6.4-5.7-2.7-5.8 2.7.8-6.4L.8 6.9 7 5.7 10.1.1"
                             fill="#feb600"
                            />
                          </svg>
                        </span>
                        <span className="star">
                          <svg
                            version="1.2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="18"
                          >
                            <path
                              d="m10.1.1 3.1 5.6 6.2 1.2-4.3 4.6.7 6.4-5.7-2.7-5.8 2.7.8-6.4L.8 6.9 7 5.7 10.1.1"
                             fill="#feb600"
                            />
                          </svg>
                        </span>
                      </div>
                      <p className="card-box__text">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. ”
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
                </SplideSlide>
        </Splide>
          </div>
        </section>
        </div>
    );
};

export default Testimonial;