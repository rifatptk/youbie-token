import React from "react";
import "./Testimonial.css";
import "@splidejs/react-splide/css";

const Testimonial = () => {
  return (
    <div className="testimonial-section">
      <section id="testimonial" className="testimonial section">
        <div id="bg_fx" className="bg__holder"></div>
        <div className="container">
          <h2 className="heading__1" data-aos="fade-up">
            Supported By
          </h2>
          <h4 className="comming-soon">Comming Soon</h4>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
