import { Carousel } from "antd-mobile";
// import StateHelp from "./stateHelp";
import React,{ Component } from 'react';
interface ContainerProps{
  vertical?: any
  dots?: any
  dragging?: any
  swiping?: any
  autoplay?: any
  infinite?: any,
  className?: string
}

interface ContainerState {}
class WonCarousel extends Component<ContainerProps, ContainerState> {
  render() {
    return <Carousel {...this.props}>{this.props.children}</Carousel>;
  }
}

export default WonCarousel;
