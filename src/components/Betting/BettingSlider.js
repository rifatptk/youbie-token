import React, { useState } from "react";
import './BettingSlider.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

// import images
import trend1 from '../../assets/images/trend-1.png'
import trend2 from '../../assets/images/trend-2.png'
import trend3 from '../../assets/images/trend-3.png'
import trend4 from '../../assets/images/trend-4.png'


const BettingSlider = ()=> {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
console.log(thumbsSwiper);


  return (
    <div className="swiper-slider-section">
      <Swiper
      loop={true}
      spaceBetween={10}
  
      modules={[FreeMode, Navigation, Thumbs]}
      className="SwiperTop"
      >
        <SwiperSlide>
          <img src={trend1}  alt="trend1"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={trend2}  alt="trend1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={trend3}  alt="trend1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={trend1}  alt="trend1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={trend2}  alt="trend1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={trend3}  alt="trend1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={trend1}  alt="trend1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={trend1}  alt="trend1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={trend1}  alt="trend1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={trend1}  alt="trend1" />
        </SwiperSlide>
      </Swiper>
      <Swiper
            style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
        onSwiper={setThumbsSwiper}
        loop={true}
        navigation={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="swiperBottom"
      >
        <SwiperSlide>
          <img src={trend1}  alt="trend1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={trend2}  alt="trend1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={trend3}  alt="trend1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={trend1}  alt="trend1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={trend2}  alt="trend1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={trend3}  alt="trend1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={trend1}  alt="trend1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={trend2}  alt="trend1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={trend3}  alt="trend1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={trend4}  alt="trend1" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default BettingSlider;