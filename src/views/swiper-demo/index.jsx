import React from "react";
import "./index.scss";
import Carousel from "rmc-nuka-carousel";

class SwiperDemo extends React.Component {
  render() {
    return (
      <div className="swiper-page">
        <Carousel>
          <div className="swiper-block" />
          <div className="swiper-block" />
          <div className="swiper-block" />
        </Carousel>
      </div>
    );
  }
}

export default SwiperDemo;
