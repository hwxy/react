import React from "react";
import "@/asset/sass/won-service/common/homepage-nav.module.scss";
import { Link } from "react-router-dom";
class HomePageNav extends React.Component {
  render() {
    return (
      <div styleName="homepage-nav">
        <div styleName="nav">
          <Link to="/" styleName="nav__icon">
            首页
          </Link>
          <Link to="/icon" styleName="nav__icon">
            购物车
          </Link>
          <Link to="/login" styleName="nav__icon">
            登录
          </Link>
          <Link to="/icon" styleName="nav__icon">
            图标
          </Link>
        </div>
      </div>
    );
  }
}
export default HomePageNav;
