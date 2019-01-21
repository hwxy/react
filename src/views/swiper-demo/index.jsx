import React from "react";
import styles from "@/asset/sass/views/swiper-demo.module.scss";
// import commonStyles from "../../asset/sass/common/normalize.scss";
import Carousel from "rmc-nuka-carousel";

class SwiperDemo extends React.Component {
  render() {
    return (
      <div className="swiper-page">
        <Carousel autoplay={true} wrapAround={true}>
          <div className={styles["swiper-block"]}>
            <span>111</span>
          </div>
          <div className={styles["swiper-block"]}>
            <span>222</span>
          </div>
          <div className={styles["swiper-block"]}>
            <span>333</span>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default SwiperDemo;
