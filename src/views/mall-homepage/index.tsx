// comp
import StateHelp from "won-common/stateHelp";


// scss
import "@/asset/sass/views/mall-homepage.module.scss";

// uicomp
import { WingBlank } from "antd-mobile";

// buscomp
import Navigation from "won-bcomp/navigation";
import Search from "won-bcomp/mall-homepage/search/index";
import Carousel from "won-common/carousel";
import Grid from "won-common/grid";

// redux
import { connect } from 'react-redux';
import action from '../../core/redux/action/mall-homepage'

class HomePage extends StateHelp {
  GridData: any = null
  carouselData: any = null
  constructor(props: any) {
    super(props);

    // 栅格数据
    this.GridData = Array.from(new Array(8)).map((_val, i) => ({
      icon:
        "https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png",
      text: `name${i}`
    }));

    // 轮播图数据
    this.carouselData = [
      "AiyWuByWklrrUDlFignR",
      "TekJlZRVCjLFexlOCuWn",
      "IJOtIlfsYdTyaDTRVrLI"
    ].map(val => {
      return (
        <a
          key={val}
          href="http://www.alipay.com"
          style={{
            display: "inline-block",
            width: "100%",
            height: 176
          }}
        >
          <img
            style={{
              display: "block"
            }}
            alt=""
            src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
          />
        </a>
      );
    });
  }
  render() {
    return (
      <div>
        <Search />
        <Carousel autoplay={true} infinite>
          {this.carouselData}
        </Carousel>
        <Grid data={this.GridData} />
        <WingBlank size="md">
          <div styleName="toutiao__container">
            <div styleName="toutiao__title">呼呼头条</div>
            <Carousel
              vertical
              dots={false}
              dragging={false}
              swiping={false}
              autoplay={true}
              infinite
            >
              <div styleName="toutiao-item">carousel 1</div>
              <div styleName="toutiao-item">carousel 2</div>
              <div styleName="toutiao-item">carousel 3</div>
            </Carousel>
          </div>
        </WingBlank>
        <Navigation {...this.props} />
      </div>
    );
  }
}
const mapStateToProps = () => {
  return {
    a:1
  };
},
mapDispatchToProps = (dispatch: any) => {
  return {
    init: () => {
      return dispatch(action());
    }
  };
};

export default HomePage;
