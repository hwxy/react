import "@/asset/sass/views/mall-homepage.module.scss";
import React from "react";
import { InputItem } from "antd-mobile";
import Navigation from "won-common/navigation";
class HomePage extends React.Component {
  render() {
    return (
      <div>
        商城
        <InputItem />
        <Navigation {...this.props} />
      </div>
    );
  }
}

export default HomePage;
