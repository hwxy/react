import React from "react";
import "@/asset/sass/views/swiper-demo.module.scss";
import Carousel from "rmc-nuka-carousel";

class SwiperDemo extends React.Component {
  render() {
    return (
      <div styleName="swiper-page">
        <Carousel>
          <div styleName="swiper-block" />
          <div styleName="swiper-block" />
          <div styleName="swiper-block" />
        </Carousel>
      </div>
    );
  }
}

export default SwiperDemo;
