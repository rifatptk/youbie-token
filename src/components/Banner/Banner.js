import React, { useRef, useState } from 'react';
import './Banner.css';
import video from '../../assets/videos/hero-bg.mp4';
import youbieLogo from '../../assets/images/youbie.png';
import heroBg from '../../assets/images/hero-bg.png';
import copyIcon from '../../assets/images/copy-icon.svg';
import doubleCheck from '../../assets/images/double-check.png';
const Banner = () => {
  // const [showModal, setShowModal] = useState(false);
  const copyBtnRef = useRef();
  const inputValRef = useRef();

  // handle copy to clipboard
  const handleCopyToClicpBoard = () => {
    // replace copy img
    copyBtnRef.current.setAttribute('src', doubleCheck);
    // copy text to clipboard
    const text = inputValRef.current.value;
    window.navigator.clipboard.writeText(text);

    // selection default input box value
  };

  return (
    <div className="banner-section">
      <section id="hero" className="hero section">
        <div className="bg__holder">
          <video
            className="bg__video"
            id="bgHeroVideo"
            playsInline
            autoPlay
            muted
            loop
            poster={heroBg}
          >
            <source id="bgVideoSrc" src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="container" id="heroCont">
          <div className="row h-100  align-items-center justify-content-end">
            <div className="col-lg-4 order-1 order-md-0"></div>

            <div id="herotext" className="col-lg-8">
              <div className="hero__content">
                <img
                  src={youbieLogo}
                  alt="Youbie"
                  className="hero__logo mb-5"
                  width="441"
                  height="95"
                />
                <h1 className="heading__1 mb-3">Uncensored Live Streaming</h1>
                <p className="para ">
                  The first crypto powered, DAO operated, all in one live
                  streaming platform
                </p>
                <div className="token-search">
                  <form>
                    <div className="input-group">
                      <input
                        ref={inputValRef}
                        type="text"
                        className="form-control"
                        defaultValue="0x5c4ADaF43D676Fb1BacEFEca8008799B03746D22"
                        aria-describedby="copy-btn"
                      />
                      <span
                        className="input-group-text"
                        id="copy-btn"
                        onClick={handleCopyToClicpBoard}
                      >
                        <img
                          ref={copyBtnRef}
                          src={copyIcon}
                          alt="Copy"
                          width="21"
                          height="16"
                        />
                      </span>
                    </div>
                  </form>
                </div>
                <div className="button-group">
                  <a href="https://pancakeswap.finance/swap?outputCurrency=0x5c4ADaF43D676Fb1BacEFEca8008799B03746D22">
                    <div className="you-btn">Buy</div>
                  </a>
                  <a href="/files/YoubieWhitepaper.pdf" download>
                    <div
                      className="you-btn"
                      //  onClick={() => setShowModal(true)}
                    >
                      Whitepaper
                    </div>
                  </a>

                  <a href=" https://youbie.tv/">
                    <div className="you-btn">Watch</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* {showModal && (
        <div id="modal">
          <div className="modalContent">
            <div className="closeModal" onClick={() => setShowModal(false)}>
              x
            </div>
            <div className="modalMessage">Staking is coming soon!</div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Banner;
