import React from 'react';
import { Link } from 'react-router-dom';
import './TopTeam.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'
import team1 from '../../assets/images/team-1.png'
import team2 from '../../assets/images/team-2.png'
import team3 from '../../assets/images/team-3.png'
import team4 from '../../assets/images/team-4.png'
import team5 from '../../assets/images/team-5.png'
import team6 from '../../assets/images/team-6.png'
import team7 from '../../assets/images/team-7.png'
import team8 from '../../assets/images/team-8.png'
import team9 from '../../assets/images/team-9.png'
import team10 from '../../assets/images/team-10.png'


const TopTeam = () => {
    const topSliderConfig = {
    type: "loop",
      perPage: 3,
      gap: 10,
      arrows: false,
      autoplay: true,
      interval: 3000,
      mediaQuery: "min",
      breakpoints: {
        576: {
          perPage: 5,
        },
        768: {
          destroy: true,
        },
      },
    }

    return (
        <div className='top-team-section'>
            <section id="top-teams" className="top-teams section">
          <div className="container">
            <div className="row gx-4 gy-5">
              <div className="col-lg-5" data-aos="fade-up">
                <p className="section__para one">#Legneds</p>
                <h2 className="heading__1">Top Ranking Teams</h2>
                <p className="section__para two">Be one of the greatest team!</p>
                <p className="para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <h3 className="heading__3">Coming soon...</h3>
              </div>
              <div className="col-lg-7" data-aos="fade-up">
                <ul className="team-list">
                  <li className="team-list__item">
                    <Link to="/" className="team-list__item-link">
                      <img
                        src={team1}
                        alt="team logo"
                        className="img-fluid"
                      />
                    </Link>
                  </li>
                  <li className="team-list__item">
                    <Link to="/" className="team-list__item-link">
                      <img
                        src={team2}
                        alt="team logo"
                        className="img-fluid"
                      />
                    </Link>
                  </li>
                  <li className="team-list__item">
                    <Link to="/" className="team-list__item-link">
                      <img
                        src={team3}
                        alt="team logo"
                        className="img-fluid"
                      />
                    </Link>
                  </li>
                  <li className="team-list__item">
                    <Link to="/" className="team-list__item-link">
                      <img
                        src={team4}
                        alt="team logo"
                        className="img-fluid"
                      />
                    </Link>
                  </li>
                  <li className="team-list__item">
                    <Link to="/" className="team-list__item-link">
                      <img
                        src={team5}
                        alt="team logo"
                        className="img-fluid"
                      />
                    </Link>
                  </li>
                  <li className="team-list__item">
                    <Link to="/" className="team-list__item-link">
                      <img
                        src={team6}
                        alt="team logo"
                        className="img-fluid"
                      />
                    </Link>
                  </li>
                  <li className="team-list__item">
                    <Link to="/" className="team-list__item-link">
                      <img
                        src={team7}
                        alt="team logo"
                        className="img-fluid"
                      />
                    </Link>
                  </li>
                  <li className="team-list__item">
                    <Link to="/" className="team-list__item-link">
                      <img
                        src={team8}
                        alt="team logo"
                        className="img-fluid"
                      />
                    </Link>
                  </li>
                  <li className="team-list__item">
                    <Link to="/" className="team-list__item-link">
                      <img
                        src={team9}
                        alt="team logo"
                        className="img-fluid"
                      />
                    </Link>
                  </li>
                  <li className="team-list__item">
                    <Link to="/" className="team-list__item-link">
                      <img
                        src={team10}
                        alt="team logo"
                        className="img-fluid"
                      />
                    </Link>
                  </li>
                </ul>
                <Splide aria-label="My Favorite Images"   options={topSliderConfig}>
                <SplideSlide>
                <section id="team-list-splide" className=" team-list-splide" aria-label="Team list splide">
                  <div className="splide__trac">
                    <ul className="splide__list">
                      <li className="splide__slide">
                        <Link to="/" className="team-list__item-link">
                          <img
                            src={team1}
                            alt="team logo"
                            className="img-fluid"
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </section>
                </SplideSlide>
                <SplideSlide>
                <section id="team-list-splide" className=" team-list-splide" aria-label="Team list splide">
                  <div className="splide__trac">
                    <ul className="splide__list">
                      <li className="splide__slide">
                        <Link to="/" className="team-list__item-link">
                          <img
                            src={team2}
                            alt="team logo"
                            className="img-fluid"
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </section>
                </SplideSlide>
                <SplideSlide>
                <section id="team-list-splide" className=" team-list-splide" aria-label="Team list splide">
                  <div className="splide__trac">
                    <ul className="splide__list">
                      <li className="splide__slide">
                        <Link to="/" className="team-list__item-link">
                          <img
                            src={team3}
                            alt="team logo"
                            className="img-fluid"
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </section>
                </SplideSlide>
                <SplideSlide>
                <section id="team-list-splide" className=" team-list-splide" aria-label="Team list splide">
                  <div className="splide__trac">
                    <ul className="splide__list">
                      <li className="splide__slide">
                        <Link to="/" className="team-list__item-link">
                          <img
                            src={team4}
                            alt="team logo"
                            className="img-fluid"
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </section>
                </SplideSlide>
                <SplideSlide>
                <section id="team-list-splide" className=" team-list-splide" aria-label="Team list splide">
                  <div className="splide__trac">
                    <ul className="splide__list">
                      <li className="splide__slide">
                        <Link to="/" className="team-list__item-link">
                          <img
                            src={team5}
                            alt="team logo"
                            className="img-fluid"
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </section>
                </SplideSlide>
                <SplideSlide>
                <section id="team-list-splide" className=" team-list-splide" aria-label="Team list splide">
                  <div className="splide__trac">
                    <ul className="splide__list">
                      <li className="splide__slide">
                        <Link to="/" className="team-list__item-link">
                          <img
                            src={team6}
                            alt="team logo"
                            className="img-fluid"
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </section>
                </SplideSlide>
                <SplideSlide>
                <section id="team-list-splide" className=" team-list-splide" aria-label="Team list splide">
                  <div className="splide__trac">
                    <ul className="splide__list">
                      <li className="splide__slide">
                        <Link to="/" className="team-list__item-link">
                          <img
                            src={team7}
                            alt="team logo"
                            className="img-fluid"
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </section>
                </SplideSlide>
                <SplideSlide>
                <section id="team-list-splide" className=" team-list-splide" aria-label="Team list splide">
                  <div className="splide__trac">
                    <ul className="splide__list">
                      <li className="splide__slide">
                        <Link to="/" className="team-list__item-link">
                          <img
                            src={team8}
                            alt="team logo"
                            className="img-fluid"
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </section>
                </SplideSlide>
                <SplideSlide>
                <section id="team-list-splide" className=" team-list-splide" aria-label="Team list splide">
                  <div className="splide__trac">
                    <ul className="splide__list">
                      <li className="splide__slide">
                        <Link to="/" className="team-list__item-link">
                          <img
                            src={team9}
                            alt="team logo"
                            className="img-fluid"
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </section>
                </SplideSlide>
                <SplideSlide>
                <section id="team-list-splide" className=" team-list-splide" aria-label="Team list splide">
                  <div className="splide__trac">
                    <ul className="splide__list">
                      <li className="splide__slide">
                        <Link to="/" className="team-list__item-link">
                          <img
                            src={team10}
                            alt="team logo"
                            className="img-fluid"
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </section>
                </SplideSlide>
                </Splide>
              </div>
            </div>
          </div>
        </section>
        </div>
    );
};

export default TopTeam;