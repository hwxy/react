// comp
import StateHelp from "won-common/stateHelp";


// scss
// import Style from "@/asset/sass/views/mall-homepage.module.scss";


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

// store
import Store from './store';

interface IGridData{
  icon: string,
  text: string  
}
class HomePage extends StateHelp {

  GridData: IGridData[] = []

  carouselData: JSX.Element[] = []

  constructor(props: any) {
    super(props);
  }
     
  async componentWillMount(){
    await Store.init();
    this.GridData = Store.getQuick();
    this.carouselData = Store.getBanner().map((val, index)=>(
      <a
      key={index + 'a'}
      style={{
        display: "inline-block",
        width: "100%",
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
    await this.doRender();
  }

  render() {
    return (
      <div>
        <Search />
        <Carousel className={'aa'} autoplay={true} infinite>
          {this.carouselData}
        </Carousel>
        <Grid data={this.GridData} />
        <WingBlank size="md">
          <div className="toutiao__container">
            <div className="toutiao__title">呼呼头条</div>
            <Carousel
              vertical
              dots={false}
              dragging={false}
              swiping={false}
              autoplay={true}
              infinite
            >
              <div className="toutiao-item">carousel 1</div>
              <div className="toutiao-item">carousel 2</div>
              <div className="toutiao-item">carousel 3</div>
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
