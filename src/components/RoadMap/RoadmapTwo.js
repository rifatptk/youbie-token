import React from "react";
import "./RoadmapTwo.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
// import { Pagination } from "swiper";
import { useRef } from "react";

function RoadMapTwo() {
  const roadLineRef = useRef();

  const handleAnimation = () => {
    console.log(roadLineRef.current.classList.contains("activeCircle"));
  };

  return (
    <div className="roadmap-two">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="roadmap-item">
            <h4>Q1 </h4>
            <div className="road-line activeSlide">
              <div
                onClick={handleAnimation}
                ref={roadLineRef}
                className="circle activeCircle"
              ></div>
            </div>
            <ul>
              <li>
                <span>✓</span>UI/UX Live Streaming Platform{" "}
              </li>
              <li>
                <span>✓</span>Begin Development of Live Streaming Platform{" "}
              </li>
              <li>
                <span>✓</span>Begin Development of Live Streaming Platform{" "}
              </li>
              <li>
                <span>✓</span> Build Brand Identity{" "}
              </li>
              <li>
                <span>✓</span> Build Brand Identity{" "}
              </li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="roadmap-item">
            <h4>Q2 </h4>
            <div className="road-line">
              <div className="circle "></div>
            </div>
            <ul>
              <li>
                <span>✓</span>Bug Testing For Live Streaming{" "}
              </li>
              <li>
                <span>✓</span>Complete Live Streaming Development{" "}
              </li>
              <li>
                <span>✓</span>Cryptocurrency Mainnet Integration (BTC,LTC,ETH
              </li>
              <li>
                <span>✓</span> Premium Subscription Development / Integration{" "}
              </li>
              <li>
                <span>✓</span>UI/UX NFT Marketplace{" "}
              </li>
              <li>
                <span>✓</span>NFT Marketplace Development
              </li>
              <li>
                <span>✓</span>Smart Contract Bug Testing (NFT Marketplace
              </li>
              <li>
                <span>✓</span>Physical Marketplace UI/UX
              </li>
              <li>
                <span>✓</span>Physical Marketplace UI/UX
              </li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="roadmap-item">
            <h4>Q3 </h4>
            <div className="road-line">
              <div className="circle"></div>
            </div>
            <ul>
              <li>
                <span>✓</span>Physical Marketplace Developmen
              </li>
              <li>
                <span>✓</span>Physical Marketplace Bug Testing / Integration{" "}
              </li>
              <li>
                <span>✓</span>Integrate Web3 Wallets (Metamask, Walletconnect){" "}
              </li>
              <li>
                <span>✓</span>Develop Youbie Token Smart Contract{" "}
              </li>
              <li>
                <span>✓</span>Exchange Listings I <span> ☐ </span> Youbie Token
                Contract Audit{" "}
              </li>
              <li>
                <span>✓</span> ☐ Launch Youbie Token ☐
              </li>
              <li>
                <span>✓</span>Marketing Campaign I ☐ Host Youbie Gaming
                Tournament{" "}
              </li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="roadmap-item">
            <h4>Q4 </h4>
            <div className="road-line">
              <div className="circle"></div>
            </div>
            <ul>
              <li>
                <span>✓</span> Marketing Campign II ☐ Contract Top Streamers{" "}
              </li>
              <li>
                <span>✓</span>☐ Exchange Listings II
              </li>
            </ul>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
export default RoadMapTwo;
