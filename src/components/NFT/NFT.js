import React from "react";
import "./NFT.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
import nft1 from "../../assets/images/nft1.jpg";
import nft2 from "../../assets/images/nft2.jpg";
import nft3 from "../../assets/images/nft3.jpg";
import nft4 from "../../assets/images/nft4.jpg";
import verifiedIcon from "../../assets/images/verified-icon.svg";
import user1 from "../../assets/images/nfts1.jpg";
import user2 from "../../assets/images/nfts2.jpg";
import user3 from "../../assets/images/nfts3.jpg";
import user4 from "../../assets/images/nfts4.jpg";

const NFT = () => {
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
    <div className="nft-section">
      <section id="nfts" className="nfts section ">
        <div className="bg__holder"></div>
        <div className="container">
          <p className="section__para one" data-aos="fade-up">
            #NFT
          </p>
          <h2 className="heading__1" data-aos="fade-up">
            NFT Marketplace
          </h2>
          <p className="section__para two" data-aos="fade-up">
            Mint, Buy & Sell NFTs
          </p>
          <Splide aria-label="My Favorite Images" options={sliderConfig}>
            <SplideSlide>
              <div className="splide__track">
                <ul className="splide__list">
                  <li className="splide__slide">
                    <div className="card" data-aos="fade-up">
                      <Link to="/" className="strech__link"></Link>
                      <div className="card-img-top">
                        <img
                          src={nft1}
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
                          <div>
                            <div>
                              <small className="text-white">
                                Mystic Masks IV <br />
                                UnZiped{" "}
                                <img
                                  src={verifiedIcon}
                                  alt="Verified"
                                  width="16"
                                  height="16"
                                  className="img-fluid mb-1"
                                />
                              </small>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="splide__track">
                <ul className="splide__list">
                  <li className="splide__slide">
                    <div className="card" data-aos="fade-up">
                      <Link to="/" className="strech__link"></Link>
                      <div className="card-img-top">
                        <img
                          src={nft2}
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

                          <small className="text-white">
                            Ez Headshots <br />
                            COD_Degen{" "}
                            <img
                              src={verifiedIcon}
                              alt="Verified"
                              width="16"
                              height="16"
                              className="img-fluid mb-1"
                            />
                          </small>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="splide__track">
                <ul className="splide__list">
                  <li className="splide__slide">
                    <div className="card" data-aos="fade-up">
                      <Link to="/" className="strech__link"></Link>
                      <div className="card-img-top">
                        <img
                          src={nft3}
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
                          <small className="text-white">
                            WorldWar10 <br />
                            DavidM{" "}
                            <img
                              src={verifiedIcon}
                              alt="Verified"
                              width="16"
                              height="16"
                              className="img-fluid mb-1"
                            />
                          </small>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="splide__track">
                <ul className="splide__list">
                  <li className="splide__slide">
                    <div className="card" data-aos="fade-up">
                      <Link to="/" className="strech__link"></Link>
                      <div className="card-img-top">
                        <img
                          src={nft4}
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
                          <p className="text-white">
                            Cyber City <br />
                            Jacob{" "}
                            <img
                              src={verifiedIcon}
                              alt="Verified"
                              width="16"
                              height="16"
                              className="img-fluid mb-1"
                            />
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </SplideSlide>
          </Splide>

          <div className="load-more">
            <a
              href="https://youbie.tv/nft-marketplace/explore"
              className="you-btn"
              target="_blank"
              rel="noreferrer"
            >
              Browse
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NFT;
