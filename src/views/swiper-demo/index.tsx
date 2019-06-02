import React from "react";
import "@/asset/sass/views/swiper-demo.module.scss";
import Carousel from "rmc-nuka-carousel";

class SwiperDemo extends React.Component {
  state = {
    swiperList: ["#fff", "#000"]
  };
  componentDidMount() {
    this.getSwiperData();
  }

  getSwiperData = () => {};
  render() {
    return (
      <div className="swiper-page">
        <Carousel
          autoplay={true}
          wrapAround={true}
          className={`top-swiper ${
            this.state.swiperList.length > 1 ? "" : "dots-show"
          }`}
        >
          {this.state.swiperList.map((item, index) => {
            return (
              <div
                styleName="swiper-block"
                style={{ backgroundColor: item }}
                key={index}
              >
                <span>111</span>
              </div>
            );
          })}

          {/* <div className={styles["swiper-block"]}>
            <span>222</span>
          </div>
          <div className={styles["swiper-block"]}>
            <span>333</span>
          </div> */}
        </Carousel>
      </div>
    );
  }
}

export default SwiperDemo;
