import React from "react";
import "./Premium.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import premium1 from "../../assets/images/go-premium-1.png";
import premium2 from "../../assets/images/go-premium-2.png";
import premium3 from "../../assets/images/go-premium-3.png";
import premium4 from "../../assets/images/go-premium-4.png";

const Premium = () => {
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
  };

  return (
    <div className="premium-section">
      <section id="go-premium" className="go-premium section ">
        <div id="bg_fx" className="bg__holder"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <p className="section__para one" data-aos="fade-up">
                #BeOneofUs
              </p>
              <h2 className="heading__1" data-aos="fade-up">
                Go Premium
              </h2>
              <p className="section__para two" data-aos="fade-up">
                Tip Streamers for <br /> exclusive perks!
              </p>
              <p className="para" data-aos="fade-up">
                During streams, users can tip cryptocurrency! All streamers have
                premium subscriptions that unlock once you reach the set price.
                If a streamer's premium subscription is set at $5 per month,
                after you reach that threshold their premium subscription
                automatically unlocks!
              </p>
            </div>
          </div>
          <Splide aria-label="My Favorite Images" options={sliderConfig}>
            <SplideSlide>
              <div className="splide__track">
                <ul className="splide__list">
                  <li className="splide__slide">
                    <div className="card-box" data-aos="fade-up">
                      <div className="card-box-top-img">
                        <img
                          src={premium3}
                          alt="Go Premium"
                          className="img-fluid"
                          width="406"
                          height="271"
                        />
                      </div>
                      <h3 className="card-box__title">EXCLUSIVE MEDIA</h3>
                      <p className="card-box__text">
                        Premium subscribers get access to the streamers
                        exclusive media feed! This includes videos and photos
                        only shared to the streamers supporters!
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="splide__track">
                <ul className="splide__list">
                  <li className="splide__slide">
                    <div className="card-box" data-aos="fade-up">
                      <div className="card-box-top-img">
                        <img
                          src={premium4}
                          alt="Go Premium"
                          className="img-fluid"
                          width="406"
                          height="271"
                        />
                      </div>
                      <h3 className="card-box__title">1 ON 1 CHAT</h3>
                      <p className="card-box__text">
                        Want to connect to a streamer directly? Premium
                        subscribers get access to 1 on 1 chats directly with the
                        creators!
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="splide__track">
                <ul className="splide__list">
                  <li className="splide__slide">
                    <div className="card-box" data-aos="fade-up">
                      <div className="card-box-top-img">
                        <img
                          src={premium1}
                          alt="Go Premium"
                          className="img-fluid"
                          width="406"
                          height="271"
                        />
                      </div>
                      <h3 className="card-box__title">PRIVATE STREAM</h3>
                      <p className="card-box__text">
                        Public streams can get a bit crazy… Unlock exclusive
                        subscriber only streams where creators can connect even
                        better with their supporters!
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="splide__track">
                <ul className="splide__list">
                  <li className="splide__slide">
                    <div className="card-box" data-aos="fade-up">
                      <div className="card-box-top-img">
                        <img
                          src={premium2}
                          alt="Go Premium"
                          className="img-fluid"
                          width="406"
                          height="271"
                        />
                      </div>
                      <h3 className="card-box__title">EXCLUSIVE NFT</h3>
                      <p className="card-box__text">
                        Keep missing out on your favorite creators NFTs? Unlock
                        exclusive, premium subscribers only NFTs. Even better,
                        unlock exclusive perks by just holding them!
                      </p>
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

export default Premium;
