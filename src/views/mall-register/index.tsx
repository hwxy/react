import React from "react";
// base ui comp
import { InputItem, Button, WingBlank, Toast } from "antd-mobile";
import { withRouter } from "react-router";
// scss
import Style from "@/asset/sass/views/mall-register.module.scss";
// network
import { apiPost } from "@/core/network";

interface ContainerState {
  account: string;
  accountError: boolean;
  password: string;
  passwordError: boolean;
}

class Register extends React.Component<any, ContainerState> {
  state = {
    account: "",
    accountError: false,
    password: "",
    passwordError: false
  };
  onRegister = () => {
    let { account, password } = this.state;
    let isVaildAccount = this.accountVaild(account);
    let isVaildPassword = this.passwordVaild(password);
    if (!isVaildAccount || !isVaildPassword) {
      if (!isVaildAccount)
        this.setState({
          accountError: true
        });
      if (!isVaildPassword)
        this.setState({
          passwordError: true
        });
      return;
    }
    apiPost("/api/register", {
      phone: account,
      password
    }).then((res: any) => {
      if (res) {
        let { message, status } = res;
        Toast.info(message);
        if (status === 2) {
          this.props.history.push("/login");
        }
      }
    });
  };

  accountVaild = (value: string): boolean => {
    let regExp: RegExp = /^1[3456789]\d{9}$/;
    return regExp.test(value);
  };
  onAccountChange = (value: string): void => {
    let isVaild = this.accountVaild(value);
    this.setState({
      accountError: !isVaild
    });

    this.setState({
      account: value
    });
  };
  onAccountErrorClick = () => {
    Toast.info("请输入规范手机号");
  };
  passwordVaild = (value: string): boolean => {
    let regExp: RegExp = /\d{6,12}$/;
    return regExp.test(value);
  };
  onPassWordChange = (value: string): void => {
    let isVaild = this.passwordVaild(value);
    this.setState({
      passwordError: !isVaild
    });
    this.setState({
      password: value
    });
  };
  onPassWordErrorClick = () => {
    Toast.info("请输入6到12位密码");
  };
  render() {
    let { accountError, passwordError } = this.state;
    return (
      <div className={Style.container}>
        <form>
          <div className={Style["loginContent"]}>
            <InputItem
              error={accountError}
              onChange={this.onAccountChange}
              clear
              placeholder="手机号/邮箱"
              onErrorClick={this.onAccountErrorClick}
            >
              <span className="fz20">账号</span>
            </InputItem>
            <InputItem
              error={passwordError}
              onChange={this.onPassWordChange}
              placeholder="请输入6-20位密码"
              type="password"
              maxLength={20}
              clear
              onErrorClick={this.onPassWordErrorClick}
            >
              <span className="fz20">密码</span>
            </InputItem>
            <WingBlank size="lg">
              <Button
                onClick={this.onRegister}
                type="primary"
                size="large"
                className="mt30"
              >
                注册
              </Button>
            </WingBlank>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Register);
