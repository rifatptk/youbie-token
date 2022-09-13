import React from "react";
import "./Tournament.css";
import tournamentImg from "../../assets/images/tournament-img.png";

const Tournament = () => {
  return (
    <div className="tournament-section">
      <section id="tournament" className="tournament section ">
        <div className="bg__holder"></div>
        <div className="container">
          <div className="row gx-4 gx-lg-5 gy-5 align-items-center">
            <div className="col-lg-5">
              <p className="section__para one" data-aos="fade-up">
                Youbie
              </p>
              <h2 className="heading__1" data-aos="fade-up">
                Tournaments
              </h2>
              <p className="section__para two" data-aos="fade-up">
                Winner takes it all!
              </p>
              <p className="para" data-aos="fade-up">
                Youbie Tournaments is a unique platform that allows anyone, no
                matter their skill to join gaming tournaments. All that is
                needed is a Youbie account and to fund your wallet with our
                supported cryptocurrencies! Users can quickly join a wide
                variety of tournaments that are hosted weekly for cash prizes.
                We support thousands of games across PC, console, and mobile.
                Running low on funds? Keep an eye out for free-to-enter
                tournaments that still reward cash prizes!
              </p>
              <a
                href="https://youbie.tv/tournaments"
                target="_blank"
                rel="noreferrer"
              >
                <div className="btn btn-danger">Enter Tournaments</div>
              </a>
            </div>
            <div className="col-lg-7">
              <div className="tournament-img" data-aos="fade-up">
                <img
                  src={tournamentImg}
                  alt="Tournament"
                  className="img-fluid"
                  width="820"
                  height="380"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tournament;
