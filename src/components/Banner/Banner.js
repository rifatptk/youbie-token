import React, { useRef } from 'react';
import './Banner.css'
import { Link } from 'react-router-dom';
import video from '../../assets/videos/hero-bg.mp4'
import youbieLogo from '../../assets/images/youbie.png';
import heroBg from '../../assets/images/hero-bg.png'
import copyIcon from '../../assets/images/copy-icon.svg';
import doubleCheck from '../../assets/images/double-check.png';
const Banner = () => {
  const copyBtnRef = useRef();
  const inputValRef = useRef();

// handle copy to clipboard
const handleCopyToClicpBoard = ()=>{
  // replace copy img
  copyBtnRef.current.setAttribute("src", doubleCheck);
  // copy text to clipboard
  const text = inputValRef.current.value;
  window.navigator.clipboard.writeText(text);

  // selection default input box value
  

}


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

          <div className="container">
            <div className="row align-items-center justify-content-end">
              <div className="col-lg-4 order-1 order-md-0"></div>
              
              <div className="col-lg-8 ">
                <div className="hero__content">
                  <img
                    src={youbieLogo}
                    alt="Youbie"
                    className="hero__logo"
                    width="441"
                    height="95"
                  />
                  <h1 className="heading__1">Uncensored Live Streaming</h1>
                  <p className="para">
                    The first crypto powered, DAO operated, all in one live streaming platform
                  </p>
                  <div className="token-search">
                    <form>
                      <div className="input-group">
                        <input
                        ref={inputValRef}
                          type="text"
                          className="form-control"
                          defaultValue="To Be Announced"
                          aria-describedby="copy-btn"
                        />
                        <span className="input-group-text" id="copy-btn" onClick={handleCopyToClicpBoard}>
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
                    <Link to="/" className="you-btn">Buy</Link>
                    <Link to="/" className="you-btn">Stake</Link>
                    <Link to="/" className="you-btn">Watch</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Banner;