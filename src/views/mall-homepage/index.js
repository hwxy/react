import "@/asset/sass/views/mall-homepage";
// import { TabBar } from "antd-mobile";
import React from "react";
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "redTab",
      hidden: false,
      fullScreen: false
    };
  }

  render() {
    return <div>1</div>;
  }
}

export default HomePage;
