import React, { useState } from "react";
import "./Timeline.scss";

const Timeline = () => {
  const [timeline2018, settimeline2018] = useState([
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
  ]);
  const [timeline2019, settimeline2019] = useState([
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
  ]);

  const pointShownSetter18 = (timeStampID) => {
    const newtimeline = timeline2018.map((itm) => {
      if (itm.id === timeStampID) {
        return { ...itm, pointsShown: !itm.pointsShown };
      } else {
        return itm;
      }
    });
    settimeline2018(newtimeline);
  };
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
        <div id="left">
          {timeline2018.map((timestamp) => (
            <div
              className="timestamp"
              key={timestamp.id}
              style={timestamp.pointsShown ? { outlineOffset: 8 } : null}
              onClick={() => pointShownSetter18(timestamp.id)}
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
        <div id="right">
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
    </div>
  );
};

export default Timeline;
