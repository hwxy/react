import "@/asset/sass/views/mall-homepage.module.scss";
import React from "react";
import HomepageNav from "won-common/homepage-nav";
class HomePage extends React.Component {
  render() {
    return (
      <div>
        商城
        <HomepageNav />
      </div>
    );
  }
}

export default HomePage;
