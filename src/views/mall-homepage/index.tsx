// comp
import StateHelp from "won-common/stateHelp";

// scss
import Style from "@/asset/sass/views/mall-homepage.module.scss";


// uicomp
import { WingBlank } from "antd-mobile";

// buscomp
import Navigation from "won-bcomp/navigation";
import Search from "won-bcomp/mall-homepage/search";
import Carousel from "won-common/carousel";
import Grid from "won-common/grid";
import loadingHoc from "../../won-service/common/loading";

// redux
import { connect } from 'react-redux';
import action from '../../core/redux/action/mall-homepage'

// store
import Store from './store';

// lodash
import _ from 'lodash';

interface IGridData{
  icon: string,
  text: string  
}
class HomePage extends StateHelp {
  constructor(props: any) {
    super(props);
  }
    
  renderCarousel(){
    let list = Store.getBanner().map((val, index)=>(
        <a
        key={index}
        style={{
          width: "100%",
          display: "block",
        }}
      >
        <img
          style={{
            display: "block",
            width: '100%'
          }}
          alt=""
          src={val.icon}
        />
      </a>
    ));
    
    return (
      <Carousel className={Style['carousel']} autoplay={false} infinite={false}>
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
          <div className={Style['toutiao__container']}>
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
// const mapStateToProps = () => {
//   return {
//     a:1
//   };
// },
// mapDispatchToProps = (dispatch: any) => {
//   return {
//     init: () => { 
//       return dispatch(action());
//     }
//   };
// };

export default loadingHoc(async ()=>{
  await Store.init();
}, HomePage);
