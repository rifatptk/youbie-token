import React from 'react';
import './Introduction.css'
import introductionImg from '../../assets/images/Introduction-graphic-min.gif'

const Introduction = () => {
    return (
        <div className='introduction-section py-5'>
            <div className="container">
            <div className="row g-4 align-items-center justify-content-between">
              <div className="col-md-6" data-aos="fade-up">
                <h2 className="heading__2">Introduction</h2>
                <p className="para">
                 Welcome to Youbie. The first crypto powered, DAO operated live streaming platform allow any content creator to easily tap into NFTs and cryptocurrency. The Youbie platform is packed with features such as live streaming, subscription based profiles, selling physical products, selling NFTs and winning cash prizes in gaming tournaments, we truely are the only needed platform to make revenue as a content creator. All within a simple user friendly pannel, content creators are able to manage everything. 
                </p>
                <p className="para">
                 As Youbie is powered by cryptocurrency we made sure to make the platform operate with ease. Users can top up their accounts with over 5 differnet cryptocurreny assets and instatnly start tipping, buying physical products and NFTs and subscribing to their favourite creators private profile. 
                </p>
              </div>
              <div className="col-md-5" data-aos="fade-up">
                <div className="intro-img">
                  <img
                    src={introductionImg}
                    alt="Introduction"
                    width="574"
                    height="606"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Introduction;