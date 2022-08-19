import React from "react";
import './RoadmapTwo.css';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper";

 function RoadMapTwo() {
  return (
    <div className="roadmap-two">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
      
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="roadmap-item">
                <h4>Current State</h4>
                <h5>May 2018</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nesciunt cum impedit provident?</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="roadmap-item">
                <h4 className="active-title">3 Months</h4>
                <h5 className="active-sub-title">May - June 2018</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nesciunt cum impedit provident? amet consectetur adid</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="roadmap-item">
                <h4>6 Months</h4>
                <h5>June - October 2018</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nesciunt cum impedit provident?</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="roadmap-item">
                <h4>1 Year</h4>
                <h5>November 2018</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nesciunt cum impedit provident?</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="roadmap-item">
                <h4>Current State</h4>
                <h5>May 2018</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nesciunt cum impedit provident?</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="roadmap-item">
                <h4>Current State</h4>
                <h5>May 2018</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nesciunt cum impedit provident?</p>
          </div>
        </SwiperSlide>

       
      </Swiper>
    </div>
  );
}
export default RoadMapTwo;