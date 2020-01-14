import { Carousel } from "antd-mobile";
// import StateHelp from "./stateHelp";
import React, { Component } from "react";

class WonCarousel extends Component<any, any> {
  render() {
    return <Carousel {...this.props}>{this.props.children}</Carousel>;
  }
}

export default WonCarousel;
