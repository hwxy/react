import React from "react";
import "@/asset/sass/won-service/common/homepage-nav.module.scss";
import { NavLink } from "react-router-dom";
class HomePageNav extends React.Component {
  render() {
    return (
      <div styleName="homepage-nav">
        <div styleName="nav">
          <NavLink to="/" styleName="nav__icon">
            <span className="icon-12 fz30" />
            <span className="fz20">首页</span>
          </NavLink>
          <NavLink to="/icon" styleName="nav__icon">
            购物车
          </NavLink>
          <NavLink to="/login" styleName="nav__icon">
            登录
          </NavLink>
          <NavLink to="/icon" styleName="nav__icon">
            图标
          </NavLink>
        </div>
      </div>
    );
  }
}
export default HomePageNav;
