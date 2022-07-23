import React from 'react';
import './NFT.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'
import { Link } from 'react-router-dom';
import nft1 from '../../assets/images/nft-1.png';
import binanceCoin from '../../assets/images/binance-coin.svg';
import user1 from '../../assets/images/user-1.png';
import user2 from '../../assets/images/user-2.png';
import user3 from '../../assets/images/user-3.png';
import user4 from '../../assets/images/user-4.png';


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
    }
    return (
        <div className='nft-section'>
          <section id="nfts" className="nfts section">
          <div
            className ="bg__holder"></div>
          <div className="container">
            <p className="section__para one" data-aos="fade-up">#NFT</p>
            <h2 className="heading__1" data-aos="fade-up">NFT Marketplace</h2>
            <p className="section__para two" data-aos="fade-up">
              Mint, Buy & Sell NFTs
            </p>
            <Splide aria-label="My Favorite Images"   options={sliderConfig}>
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
                          <p className="streamer__tag">Nft Collection</p>
                        </div>
                        <div className="block">
                          <p className="text">Gains:</p>
                          <div className="percentage">+99.99%</div>
                        </div>
                        <div className="block">
                          <p className="text">Floor Price:</p>
                          <div className="count">
                            <span className="icon">
                              <img
                                src={binanceCoin}
                                alt="binance-coin"
                                className="img-fluid"
                                width="20"
                                height="20"
                              />
                            </span>
                            0.5
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
                              src={user2}
                              alt="user"
                              width="90"
                              height="135"
                              className="img-fluid"
                            />
                          </span>
                          <p className="streamer__tag">Nft Collection</p>
                        </div>
                        <div className="block">
                          <p className="text">Gains:</p>
                          <div className="percentage">+99.99%</div>
                        </div>
                        <div className="block">
                          <p className="text">Floor Price:</p>
                          <div className="count">
                            <span className="icon">
                              <img
                                src={binanceCoin}
                                alt="binance-coin"
                                className="img-fluid"
                                width="20"
                                height="20"
                              />
                            </span>
                            0.5
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
                              src={user3}
                              alt="user"
                              width="90"
                              height="135"
                              className="img-fluid"
                            />
                          </span>
                          <p className="streamer__tag">Nft Collection</p>
                        </div>
                        <div className="block">
                          <p className="text">Gains:</p>
                          <div className="percentage">+99.99%</div>
                        </div>
                        <div className="block">
                          <p className="text">Floor Price:</p>
                          <div className="count">
                            <span className="icon">
                              <img
                                src={binanceCoin}
                                alt="binance-coin"
                                className="img-fluid"
                                width="20"
                                height="20"
                              />
                            </span>
                            0.5
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
                              src={user4}
                              alt="user"
                              width="90"
                              height="135"
                              className="img-fluid"
                            />
                          </span>
                          <p className="streamer__tag">Nft Collection</p>
                        </div>
                        <div className="block">
                          <p className="text">Gains:</p>
                          <div className="percentage">+99.99%</div>
                        </div>
                        <div className="block">
                          <p className="text">Floor Price:</p>
                          <div className="count">
                            <span className="icon">
                              <img
                                src={binanceCoin}
                                alt="binance-coin"
                                className="img-fluid"
                                width="20"
                                height="20"
                              />
                            </span>
                            0.5
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </SplideSlide>
        </Splide>
           
            <div  className="load-more">
              <Link to="/" className="you-btn">Browse</Link>
            </div>
          </div>
        </section>
        </div>
    );
};

export default NFT;