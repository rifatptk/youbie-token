import React from "react";
import "./Timeline.scss";

const timeline2018 = [
  {
    id: 1,
    pointsShown: true,
    quarter: "Q3",
    points: [
      "Website launch",
      "Whitepaper release",
      "TOKOIN token distributions starts",
      "TOKOIN Wallet development",
    ],
  },
  {
    id: 2,
    pointsShown: false,
    quarter: "Q4",
    points: [
      "POC Launch on TestNet",
      "Onboard logistic partners on Tokoin ecosystem",
    ],
  },
];

const timeline2019 = [
  {
    id: 1,
    pointsShown: false,
    quarter: "Q1",
    points: [
      "Launch dApps on MainNet",
      "Onboard Warehousing partners on Tokoin ecosystem",
      "Onboard Financial partners on Tokoin ecosystem",
      "Expand local operation to 10 tier-one cities in Indonesia",
      "Onboard 50.000 users on Tokoin ecosystem",
    ],
  },
  {
    id: 2,
    pointsShown: false,
    quarter: "Q2",
    points: [
      "Launch Data Reputation engine",
      "Launch Data Visualization platform",
      "Launch Partner Suite platform",
    ],
  },
  {
    id: 3,
    pointsShown: false,
    quarter: "Q3",
    points: [
      "Launch TOKOIN POS system",
      "Launch Data Exchange platform for Token Stacking and Loyalty program",
      "Expand local operation to all capital cities in Indonesia",
      "Onboard 10.000 users for TOKOIN POS system",
    ],
  },
  {
    id: 4,
    pointsShown: false,
    quarter: "Q4",
    points: [
      "Expand hyper-local operation to Thailand,  Vietnam, Philippine, Malaysia and other potential emerging market",
    ],
  },
];

const Timeline = () => {
  return (
    <div id="timeline">
      <div id="line"></div>
      <div id="container">
        <div id="left"></div>
        <div id="right">
          {timeline2019.map((timestamp) => (
            <div className="timestamp" key={timestamp.id}>
              {timestamp.quarter}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
