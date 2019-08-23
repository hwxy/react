import React from "react";
import Style from "@/asset/sass/won-service/businesscomp/navigation.module.scss";
import { NavLink } from "react-router-dom";

interface ContainerProps{
  location?: any,
  QQBtnShow?: any
}

interface ContainerState {
  render?: any
}

class Navigation extends React.Component<ContainerProps, ContainerState> {
  constructor(props: any) {
    super(props);
    this.state = {
      render: false
    };
  }

  render() {
    let pathname = this.props.location.pathname;
    return (
      <div className={Style['container']}>
        <div className={Style['nav']}>
          <NavLink
            to="/"
            className={pathname === "/" ? `${Style['navIcon']} ${Style['navActive']}`: `${Style['navIcon']}`}
          >
            <span className="icon-12 fz25" />
            <span>首页</span>
          </NavLink>
          <NavLink to="/shopping" className={Style["navIcon"]}>
            <span className="icon-72 fz25" />
            购物车
          </NavLink>
          <NavLink
            to="/login"
            className={
              pathname === "/login" ? `${Style['navIcon']} ${Style['navActive']}`: `${Style['navIcon']}`
            }
          >
            <span className="icon-17 fz25" />
            登录
          </NavLink>
          <NavLink
            to="/icon"
            className={
              pathname === "/icon" ? `${Style['navIcon']} ${Style['navActive']}`: `${Style['navIcon']}`
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
