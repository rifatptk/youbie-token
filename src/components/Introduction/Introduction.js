import React from "react";
import "./Introduction.css";
import introductionImg from "../../assets/images/Introduction-graphic-min.gif";

const Introduction = () => {
  return (
    <div className="introduction-section px-5 py-5">
      <div className="container px-5">
        <div className="row g-4 align-items-center justify-content-between">
          <div className="col-md-6" data-aos="fade-up">
            <h2 className="heading__2">Introduction</h2>
            <p className="para">
              Congratulations, you have found the next decentralised
              cryptocurrency which is the backbone of the revolutionary
              all-in-one streaming platform{" "}
              <a href="https://youbie.tv">https://youbie.tv</a> . Introducing
              the first crypto-powered, DAO-operated 5-in-1 platform. Built for
              the community, by the community. We are lightyears ahead of our
              competitors with a fully built blockchain-powered ecosystem giving
              streamers more revenue streams than ever. Streamers can sell NFTs,
              physical products, host gaming tournaments, and connect with their
              fans 1 on 1 with our premium subscriptions. When we tell you we
              have it all, we mean it. Our platform has been designed in the
              most user-friendly way that it takes just minutes from signing up
              to starting your first stream, minting your first NFT, and selling
              physical products.
            </p>
            <p className="para">
              As Youbie is powered by cryptocurrency we made sure to make the
              platform operate with ease. Users can top up their accounts with
              over 5 differnet cryptocurreny assets and instatnly start tipping,
              buying physical products and NFTs and subscribing to their
              favourite creators private profile.
            </p>
          </div>
          <div className="col-md-5" data-aos="fade-up">
            <div className="intro-img">
              <img
                src={introductionImg}
                alt="Introduction"
                width="574"
                height="606"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
