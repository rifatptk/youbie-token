import React from 'react';
import './Tokenomic.css';
import tokenomicImg from '../../assets/images/tokenonics-img.png'


const Tokenomic = () => {
    return (
        <div className='tokenomics-section'>
             <section id="tokenomics" className="tokenomics section">
          <div className="container">
            <div className="row gx-4 gy-5 align-items-center">
              <div className="col-lg-4" data-aos="fade-up">
                <div className="tokenomics__img">
                  <img
                    src={tokenomicImg}
                    alt="Token Stats"
                    className="img-fluid"
                    width="320"
                    height="329"
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <p className="section__para one" data-aos="fade-up">Youbie</p>
                <h2 className="heading__1" data-aos="fade-up">Tokenomics</h2>
                <ul className="stat-list">
                  <li className="stat-list__item" data-aos="fade-up">
                    <div className="stat-item__percentage">75%</div>
                    <div className="stat-item__title">Lorem</div>
                    <p className="stat-item__text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </li>
                  <li className="stat-list__item" data-aos="fade-up">
                    <div className="stat-item__percentage">50%</div>
                    <div className="stat-item__title">Lorem</div>
                    <p className="stat-item__text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </li>
                  <li className="stat-list__item" data-aos="fade-up">
                    <div className="stat-item__percentage">30%</div>
                    <div className="stat-item__title">Lorem</div>
                    <p className="stat-item__text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </li>
                  <li className="stat-list__item" data-aos="fade-up">
                    <div className="stat-item__percentage">20%</div>
                    <div className="stat-item__title">Lorem</div>
                    <p className="stat-item__text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </li>
                  <li className="stat-list__item" data-aos="fade-up">
                    <div className="stat-item__percentage">10%</div>
                    <div className="stat-item__title">Lorem</div>
                    <p className="stat-item__text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        </div>
    );
};

export default Tokenomic;