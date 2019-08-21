import React from "react";

import { InputItem, Button, WingBlank, WhiteSpace } from "antd-mobile";
import "@/asset/sass/views/mall-login.module.scss";

//支持react 和react-native 的表单校验 和element 一样
// import { createForm } from "rc-form";
import QQLogin from "won-util/qq";

interface ContainerProps{
  form?: any,
  QQBtnShow?: any,
  onLogin: () => {}
}

interface ContainerState {
  value?: any
}


class Login extends React.Component<ContainerProps, ContainerState> {
  static state = {
    value: 1
  };
  onReset = () => {};
  render() {
    const {
      QQBtnShow
    } = this.props;
    return (
      <div styleName="container">
        <form>
          <div styleName="title">
            <i
              className="icon-161 f-l"
              onClick={() => {
                window.history.go(-1);
              }}
            />
            <span className="pr40">登录</span>
          </div>
          <div styleName="login-content">
            <InputItem
              clear
              placeholder="手机号/邮箱"
            >
              <span className="fz20">账号</span>
            </InputItem>
            <InputItem
              placeholder="请输入6-20位密码"
              type="password"
              maxLength={20}
            >
              <span className="fz20">密码</span>
            </InputItem>
            <WingBlank size="lg">
              <Button
                type="primary"
                size="large"
                className="mt30"
              >
                登录
              </Button>
            </WingBlank>
          </div>
        </form>
        <div styleName="other-login">
          <div styleName="login-header">
            <div styleName="header__line" />
            <span styleName="header__tip">其他登录方式</span>
            <div styleName="header__line" />
          </div>
          <div styleName="login__application">
            {QQBtnShow && (
              <div
                styleName="application"
                onClick={e => {
                  e && e.stopPropagation();
                  this.props.onLogin();
                }}
              >
                <i className="icon-163" />
                <WhiteSpace size="xs" />
                <span styleName="application__tip">QQ</span>
              </div>
            )}
            <div styleName="application">
              <i className="icon-162" />
              <WhiteSpace size="xs" />
              <span styleName="application__tip">微信</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// Login = createForm()(QQLogin(Login));
export default QQLogin(Login);
