import React from "react";
import "./Testimonial.css";
import "@splidejs/react-splide/css";
import coin from "../../assets/images/CoinMarketCap.png";
import gecko from "../../assets/images/CoinGhecko.png";
import lbank from "../../assets/images/LBank.png";
import dex from "../../assets/images/Dextools.png";
import latoken from "../../assets/images/LaToken.png";

const Testimonial = () => {
  return (
    <div className="testimonial-section">
      <section id="testimonial" className="testimonial section">
        <div className="bg__holder"></div>
        <div className="container">
          <h2 className="heading__1" data-aos="fade-up">
            Supported By
          </h2>
          <div className="text-center my-5">
            <img className="brand border-end" src={coin} alt="" />
            <img className="brand border-end" src={gecko} alt="" />
            <img className="brand" src={lbank} alt="" />
          </div>
          <div className="text-center">
            <img className="brand border-end" src={dex} alt="" />
            <img className="brand" src={latoken} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
