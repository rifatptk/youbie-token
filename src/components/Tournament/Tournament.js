import React from 'react';
import './Tournament.css';
import tournamentImg from '../../assets/images/tournament-img.png';

const Tournament = () => {
    return (
        <div className='tournament-section'>
            <section id="tournament" className="tournament section">
          <div
            className="bg__holder"></div>
          <div className="container">
            <div className="row gx-4 gx-lg-5 gy-5 align-items-center">
              <div className="col-lg-5">
                <p className="section__para one" data-aos="fade-up">Youbie</p>
                <h2 className="heading__1" data-aos="fade-up">Tournament</h2>
                <p className="section__para two" data-aos="fade-up">
                  Winner takes it all!
                </p>
                <p className="para" data-aos="fade-up">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <h3 className="heading__3">Coming soon...</h3>
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