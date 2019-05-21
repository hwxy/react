import { Carousel } from "antd-mobile";
import StateHelp from "./stateHelp";

class WonCarousel extends StateHelp {
  render() {
    return <Carousel {...this.props}>{this.props.children}</Carousel>;
  }
}

// <Carousel className="my-carousel"
// vertical
// dots={false}
// dragging={false}
// swiping={false}
// autoplay
// infinite
// >
// <div className="v-item">carousel 1</div>
// <div className="v-item">carousel 2</div>
// <div className="v-item">carousel 3</div>
// </Carousel>

export default WonCarousel;
