import "@/asset/sass/views/mall-login.module.scss";
import { List, InputItem, Button, WingBlank } from "antd-mobile";

//支持react 和react-native 的表单校验 和element 一样
import { createForm } from "rc-form";

import React from "react";
class Login extends React.Component {
  state = {
    value: 1
  };
  onSubmit = () => {
    this.props.form.validateFields({ force: true }, error => {
      if (!error) {
        console.log(this.props.form.getFieldsValue());
      } else {
        alert("Validation failed");
      }
    });
  };
  onReset = () => {
    this.props.form.resetFields();
  };
  validateAccount = (rule, value, callback) => {
    let phoneRule = /^1[3|4|5|7|8][0-9]{9}$/;
    let emailRule = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (phoneRule.test(value) || emailRule.test(value)) {
      callback();
    } else {
      callback(new Error("请输入规范的手机号或邮箱"));
    }
  };
  render() {
    const { getFieldProps, getFieldError } = this.props.form;
    return (
      <div styleName="container">
        <form>
          <div styleName="title">
            <i className="icon-161 f-l" />
            <span className="pr40">登录</span>
          </div>
          <List styleName="login-content">
            <InputItem
              data-role="login-input"
              {...getFieldProps("account", {
                rules: [
                  { required: true, message: "Please input account" },
                  { validator: this.validateAccount }
                ]
              })}
              clear
              error={!!getFieldError("account")}
              onErrorClick={() => {
                alert(getFieldError("account").join("、"));
              }}
              placeholder="手机号/邮箱"
            >
              <span className="fz20">账号</span>
            </InputItem>
            <InputItem
              data-role="login-input"
              {...getFieldProps("password")}
              placeholder="请输入6-20位密码"
              type="password"
              maxLength="20"
            >
              <span className="fz20">密码</span>
            </InputItem>
          </List>
          <WingBlank size="lg">
            <Button
              type="primary"
              size="large"
              onClick={this.onSubmit}
              className="mt30"
            >
              保存
            </Button>
          </WingBlank>
        </form>
        <div styleName="other-login">
          <div styleName="login-header">
            <div styleName="header__line" />
            <span styleName="header__tip">其他登录方式</span>
            <div styleName="header__line" />
          </div>
          <div styleNamea="login__application">
            <div styleName="application">
              <i className="icon-163" />
              <br />
              <span styleName="application__tip">QQ</span>
            </div>
            <div styleName="application">
              <i className="icon-162" />
              <br />
              <span styleName="application__tip">微信</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Login = createForm()(Login);
export default Login;
