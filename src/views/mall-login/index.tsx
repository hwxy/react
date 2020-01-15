import React from "react";
// base ui comp
import { InputItem, Button, WingBlank, Toast } from "antd-mobile";
//
import { withRouter, RouteComponentProps } from 'react-router'
// scss
import Style from "@/asset/sass/views/mall-login.module.scss";
// network
import { apiPost } from "@/core/network"; 
// util
import cookie from "@/core/util/cookie";       
     
type ContainerProps = RouteComponentProps<any> & {}

interface ContainerState { 
  account: string,
  accountError: boolean,
  password: string, 
  passwordError: boolean,
  inputType: any
}  


class Login extends React.Component<ContainerProps, ContainerState> {
  state = {
    account: "",
    accountError: false,
    password: "",
    passwordError: false,
    inputType: 'password'
  }
  onLogin = () => {
    let { account, password } = this.state;
    let { history } = this.props;
    let isVaildAccount =  this.accountVaild(account);
    let isVaildPassword =  this.passwordVaild(password);
    if(!isVaildAccount || !isVaildPassword){
      if(!isVaildAccount) this.setState({
        accountError: true
      });
      if(!isVaildPassword) this.setState({
        passwordError: true
      });
      return;
    }
    apiPost("/api/login", 
      {
        phone: account,
        password   
      }
    ).then((res: any) => {
      if(res){
        let { status, message } = res
        if(status == 2){
          cookie.set('phone', account, { expires: 7, path: '' });
          cookie.set('sessionToken', res.token, { expires: 7, path: '' });
          history.push('/shopping')
        }
        Toast.info(message);
      }
    });
  }
  accountVaild = (value: string): boolean => {
    let regExp: RegExp = /^1[3456789]\d{9}$/;    
    return regExp.test(value);
  }
  onAccountChange = (value: string): void => {
    let isVaild = this.accountVaild(value);
    this.setState({
      accountError: !isVaild,
    });
  
    this.setState({
      account: value
    });
  }
  onAccountErrorClick = () => {
    Toast.info('请输入规范手机号');
  }
  passwordVaild = (value: string): boolean => {
    let regExp: RegExp = /\d{6,12}$/;
    return regExp.test(value);
  }
  onPassWordChange = (value: string): void => {
    let isVaild = this.passwordVaild(value);
    this.setState({
      passwordError: !isVaild,
    });
    this.setState({
      password: value
    });
  }
  onPassWordErrorClick = () => {
    Toast.info('请输入6到12位密码');
  }
  onRegister = () => {
    this.props.history.push('/register')
  } 
  renderEye = () => {
    return (
      <div className="icon-99" onClick={() => {
        let { inputType } = this.state;
        this.setState({
          inputType: inputType == 'password' ? 'text' : 'password'
        })
      }}></div>
    )
  }
  render() {
    let { accountError, passwordError, inputType } = this.state;
    return ( 
      <div className={Style.container}>     
        <form>
          <div className={Style.tip}>
            <span className={Style.tip__message}>没有账号？</span>
            <span className={Style.tip__btn} onClick={this.onRegister}>申请</span>
          </div>
          <div className={Style['loginContent']}>
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
              type={inputType as any}
              maxLength={20}
              clear
              extra={this.renderEye()}
              onErrorClick={this.onPassWordErrorClick}
            >
              <span className="fz20">密码</span>
            </InputItem>
            <WingBlank size="lg">
              <Button
                onClick={this.onLogin}
                type="primary"
                size="large"
                className="mt30"
              >        
              登录
              </Button>
            </WingBlank>
          </div>
        </form>    
      </div>
    );
  }
}

export default withRouter(Login);
