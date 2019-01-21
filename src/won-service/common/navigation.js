import React from "react";
import "@/asset/sass/won-service/common/navigation.module.scss";
import { NavLink } from "react-router-dom";
class Navigation extends React.Component {
  componentDidMount() {}
  render() {
    let pathname = this.props.location.pathname;
    return (
      <div styleName="container">
        <div styleName="nav">
          <NavLink
            to="/"
            styleName={pathname === "/" ? "nav-icon nav-active" : "nav-icon"}
          >
            <span className="icon-12 fz30" />
            <span className="fz20">首页</span>
          </NavLink>
          <NavLink to="/shopping" styleName="nav-icon">
            购物车
          </NavLink>
          <NavLink
            to="/login"
            styleName={
              pathname === "/login" ? "nav-icon nav-active" : "nav-icon"
            }
          >
            登录
          </NavLink>
          <NavLink
            to="/icon"
            styleName={
              pathname === "/icon" ? "nav-icon nav-active" : "nav-icon"
            }
          >
            图标
          </NavLink>
        </div>
      </div>
    );
  }
}
export default Navigation;
