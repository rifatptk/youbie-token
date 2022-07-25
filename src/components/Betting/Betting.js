import React from 'react';
import './Betting.css';
import trend1 from '../../assets/images/trend-1.png'
import trend2 from '../../assets/images/trend-2.png'
import trend3 from '../../assets/images/trend-3.png'
import "@splidejs/react-splide/css";
import BettingSlider from './BettingSlider';




const Betting = () => {


    return (
        <div className='betting-section'>
            <section id="betting" className="betting section">
          <div
            className="bg__holder"></div>
          <div className="container">
            <div className="row gx-4 gy-5 gx-lg-5">
              <div className="col-xl-6">
                <p className="section__para one" data-aos="fade-up">Youbie</p>
                <h2 className="heading__1" data-aos="fade-up">Online Betting</h2>
                <p className="section__para two" data-aos="fade-up">
                  Bet, Watch and Earn!
                </p>
                <p className="para" data-aos="fade-up">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul className="betting-list">
                  <li className="betting-list__item" data-aos="fade-up">
                    <div className="item-img">
                      <img
                        src={trend1}
                        alt="Bet"
                        width="75"
                        height="68"
                        className="img-fluid"
                      />
                    </div>
                    <div className="details">
                      <h4 className="betting__title">Bet</h4>
                      <p className="betting__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </li>
                  <li className="betting-list__item" data-aos="fade-up">
                    <div className="item-img">
                      <img
                        src={trend2}
                        alt="Watch"
                        width="75"
                        height="68"
                        className="img-fluid"
                      />
                    </div>
                    <div className="details">
                      <h4 className="betting__title">Watch</h4>
                      <p className="betting__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </li>
                  <li className="betting-list__item" data-aos="fade-up">
                    <div className="item-img">
                      <img
                        src={trend3}
                        alt="Earn"
                        width="75"
                        height="68"
                        className="img-fluid"
                      />
                    </div>
                    <div className="details">
                      <h4 className="betting__title">Earn</h4>
                      <p className="betting__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </li>
                </ul>
                <h3 className="heading__3">Coming soon...</h3>
              </div>
              <div className="col-xl-6" data-aos="fade-up">
                  <BettingSlider/>
              </div>
            </div>
          </div>
        </section>
        </div>
    );
};

export default Betting;