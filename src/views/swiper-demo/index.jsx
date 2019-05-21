import React from "react";
import styles from "@/asset/sass/views/swiper-demo.module.scss";
// import commonStyles from "../../asset/sass/common/normalize.scss";
import Carousel from "rmc-nuka-carousel";
import { getSwiperData } from "../../api/swiperDemoApi.js";

class SwiperDemo extends React.Component {
  state = {
    swiperList: ["#fff", "#000"]
  };
  componentDidMount() {
    this.getSwiperData();
  }

  getSwiperData = () => {
    getSwiperData().then(res => {
      this.setState({
        swiperList: res.data
      });
    });
  };
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
                className={styles["swiper-block"]}
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
