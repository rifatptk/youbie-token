import React, { useState } from "react";
import "./Timeline.scss";

const Timeline = () => {
  const [timeline2019, settimeline2019] = useState([
    {
      id: 1,
      pointsShown: true,
      quarter: "Q1",
      points: [
        "UI/UX Live Streaming Platform ",
        "Begin Development of Live Streaming Platform ",
        "Build Brand Identity ",
        "Expand local operation to 10 tier-one cities in Indonesia",
        "Onboard 50.000 users on Tokoin ecosystem",
      ],
    },
    {
      id: 2,
      pointsShown: false,
      quarter: "Q2",
      points: [
        "Bug Testing For Live Streaming",
        "Complete Live Streaming Development",
        "Cryptocurrency Mainnet Integration (BTC,LTC,ETH) ",
        "Premium Subscription Development / Integration ",
        "UI/UX NFT Marketplace ",
        "NFT Marketplace Development  ",
        "Smart Contract Bug Testing (NFT Marketplace) ",
        "Physical Marketplace UI/UX ",
        "UI/UX NFT Marketplace ",
      ],
    },
    {
      id: 3,
      pointsShown: false,
      quarter: "Q3",
      points: [
        "Physical Marketplace Development",
        "Physical Marketplace Bug Testing / Integration",
        "Integrate Web3 Wallets (Metamask, Walletconnect)",
        "Develop Youbie Token Smart Contract",
        "Exchange Listings",
        "Youbie Token Contract Audit",
        "Launch Youbie Token",
        "Marketing Campaign",
        "Host Youbie Gaming Tournament",
      ],
    },
    {
      id: 4,
      pointsShown: false,
      quarter: "Q4",
      points: [
        "Marketing Campign II",
        "Contract Top Streamers",
        "Exchange Listings II",
      ],
    },
  ]);

  const pointShownSetter19 = (timeStampID) => {
    const newtimeline = timeline2019.map((itm) => {
      if (itm.id === timeStampID) {
        return { ...itm, pointsShown: !itm.pointsShown };
      } else {
        return itm;
      }
    });
    settimeline2019(newtimeline);
  };

  return (
    <div id="timeline">
      <div id="line"></div>
      <div id="container">
        {timeline2019.map((timestamp) => (
          <div
            className="timestamp"
            key={timestamp.id}
            style={timestamp.pointsShown ? { outlineOffset: 8 } : null}
            onClick={() => pointShownSetter19(timestamp.id)}
          >
            <strong>{timestamp.quarter}</strong>
            {timestamp.pointsShown && (
              <ul className="points">
                {timestamp.points.map((point) => (
                  <li key={point} className="point">
                    <small>{point}</small>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
