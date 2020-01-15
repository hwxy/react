// comp
import StateHelp from "won-common/stateHelp";
// scss
import Style from "@/asset/sass/views/mall-homepage.module.scss";
// uicomp
import { WingBlank } from "antd-mobile";
// buscomp
import Navigation from "won-bcomp/navigation";
import Search from "won-bcomp/search";
import Carousel from "won-common/carousel";
import Grid from "won-common/grid";
import loadingHoc from "won-common/loading";
// store
import Store from "./store";
class HomePage extends StateHelp {
  renderCarousel() {
    let list = Store.getBanner().map((val, index) => (
      <a
        key={index}
        style={{
          width: "100%",
          display: "block"
        }}
      >
        <img
          style={{
            display: "block",
            width: "100%"
          }}
          alt=""
          src={val.icon}
        />
      </a>
    ));
          console.log(Store.getBanner());
          
    return (
      <Carousel className={Style["carousel"]} autoplay={false} infinite={false}>
        {list}
      </Carousel>
    );
  }
  render() {
    let GridData = Store.getQuick();
    return (
      <div>
        <Search />
        {this.renderCarousel()}
        <Grid data={GridData} />
        <WingBlank size="md">
          <div className={Style["toutiao__container"]}>
            <div className={Style["toutiao__title"]}>呼呼头条</div>
            <Carousel
              vertical
              dots={false}
              dragging={false}
              swiping={false}
              autoplay={true}
              infinite
            >
              <div className={Style["toutiaoItem"]}>carousel 1</div>
              <div className={Style["toutiaoItem"]}>carousel 2</div>
              <div className={Style["toutiaoItem"]}>carousel 3</div>
            </Carousel>
          </div>
        </WingBlank>
        <Navigation {...this.props} />
      </div>
    );
  }
}

export default loadingHoc(async () => {
  await Store.init();
}, HomePage);
