import React from 'react';
import './RoadMap.css';
import roadmapLine from '../../assets/images/roadmap-line.png';
import binanceCoin from '../../assets/images/binance-coin.svg';
import settingIcon from '../../assets/images/settings.png';


const RoadMap = () => {
    return (
        <div className='roadmap-section'>
            <section id="roadmap" class="roadmap section">
          <div class="container">
            <div class="row gy-5">
              <div class="col-lg-9 order-1 order-lg-0">
                <div class="roadmap__line">
                  <img
                    src={roadmapLine}
                    alt="Roadmap Line"
                    width="1019"
                    height="101"
                    class="img-fluid line"
                  />
                  <div class="icon-group">
                    <span class="icon">
                      <img
                        src={binanceCoin}
                        alt="binance-coin"
                        width="28"
                        height="30"
                        class="img-fluid"
                      />
                    </span>
                    <span class="icon">
                      <img
                        src={settingIcon}
                        alt="settings"
                        width="28"
                        height="28"
                        class="img-fluid"
                      />
                    </span>
                    <span class="icon">
                      <img
                        src={settingIcon}
                        alt="settings"
                        width="28"
                        height="28"
                        class="img-fluid"
                      />
                    </span>
                  </div>
                  <div class="quaters">
                    <div class="quater-1" data-aos="fade-up">
                      <div class="q-block">
                        <h5 class="heading__5">Q1</h5>
                        <div class="content">
                          <h6 class="heading__6">Lorem ipsum dolor</h6>
                          <p class="q-text">
                            sit amet, consectetur adipiscing elit
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="quater-2" data-aos="fade-up">
                      <div class="q-block">
                        <h5 class="heading__5">Q2</h5>
                        <div class="content">
                          <h6 class="heading__6">Lorem ipsum dolor</h6>
                          <p class="q-text">
                            sit amet, consectetur adipiscing elit
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="quater-3" data-aos="fade-up">
                      <div class="q-block">
                        <h5 class="heading__5">Q3</h5>
                        <div class="content">
                          <h6 class="heading__6">Lorem ipsum dolor</h6>
                          <p class="q-text">
                            sit amet, consectetur adipiscing elit
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="quater-4" data-aos="fade-up">
                      <div class="q-block">
                        <h5 class="heading__5">Q4</h5>
                        <div class="content">
                          <h6 class="heading__6">Lorem ipsum dolor</h6>
                          <p class="q-text">
                            sit amet, consectetur adipiscing elit
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3" data-aos="fade-up">
                <h2 class="heading__4">Roadmap</h2>
                <p class="para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p class="para">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p class="para">
                  Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
              </div>
            </div>
          </div>
        </section>
        </div>
    );
};

export default RoadMap;