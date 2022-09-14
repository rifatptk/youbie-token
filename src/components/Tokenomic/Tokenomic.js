import React from "react";
import "./Tokenomic.css";
import tokenomic from "../../assets/images/tokenomics.png";

const Tokenomic = () => {
  return (
    <div className="tokenomics-section">
      <section id="tokenomics" className="tokenomics section ">
        <div className="container">
          <div className="row gx-4 gy-5 align-items-center">
            <div className="col-md-5">
              <p className="section__para one" data-aos="fade-up">
                Youbie
              </p>
              <h2 className="heading__1" data-aos="fade-up">
                Tockenomics
              </h2>
              <p className="text-white">
                The total supply of Youbie is 1,000,000,000. We have burned 43%
                of tokens at launch. Additionally, every transaction has a 2%
                Buyback + Burn tax resulting in a forever lowering supply. The
                token contract also has a 2% marketing and 2% development tax
                which allows us to continue to develop and market the project.
                In the future, we plan on eliminating tax and having the
                Youbie.tv platform be the main revenue stream for token holders.{" "}
              </p>
            </div>
            <div className="col-md-7">
              <img src={tokenomic} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tokenomic;
