import React from "react";
import "@/asset/sass/won-service/businesscomp/navigation.module.scss";
import { NavLink } from "react-router-dom";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      render: false
    };
  }

  render() {
    let pathname = this.props.location.pathname;
    return (
      <div styleName="container">
        <div styleName="nav">
          <NavLink
            to="/"
            styleName={pathname === "/" ? "nav-icon nav-active" : "nav-icon"}
          >
            <span className="icon-12 fz25" />
            <span>首页</span>
          </NavLink>
          <NavLink to="/shopping" styleName="nav-icon">
            <span className="icon-72 fz25" />
            购物车
          </NavLink>
          <NavLink
            to="/login"
            styleName={
              pathname === "/login" ? "nav-icon nav-active" : "nav-icon"
            }
          >
            <span className="icon-17 fz25" />
            登录
          </NavLink>
          <NavLink
            to="/icon"
            styleName={
              pathname === "/icon" ? "nav-icon nav-active" : "nav-icon"
            }
          >
            <span className="icon-146 fz25" />
            图标
          </NavLink>
        </div>
      </div>
    );
  }
}
export default Navigation;
