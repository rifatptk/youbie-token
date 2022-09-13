import React from "react";
import "./Testimonial.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import user3 from "../../assets/images/user-3.png";
import user4 from "../../assets/images/user-4.png";
import user5 from "../../assets/images/user-5.png";

const Testimonial = () => {
  const testimonialSliderConfig = {
    type: "loop",
    perPage: 1,
    perMove: 1,
    gap: 30,
    arrows: false,
    mediaQuery: "min",
    breakpoints: {
      640: {
        perPage: 2,
      },
      992: {
        perPage: 3,
      },
    },
  };

  return (
    <div className="testimonial-section">
      <section id="testimonial" className="testimonial section">
        <div className="bg__holder"></div>
        <div className="container">
          <h2 className="heading__1" data-aos="fade-up">
            Supported By
          </h2>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
