import React, { PureComponent } from "react";
import { withRouter, RouteComponentProps } from "react-router";
// cookie
import cookie from "@/core/util/cookie";
// network
import { apiGet } from "@/core/network";
import queryString from "@/core/util/queryString";

let config = {
  getCodeApi:"https://open.weixin.qq.com/connect/oauth2/authorize",
  AppSecret: "7efdfdb2c2c2f274f68dad0732c81cda",
  AppId: "wxd04bb4652f8757c4",
} 

let defaultOption = {
  redirect_uri: encodeURIComponent(
    window.location.origin + window.location.pathname + window.location.search
  ),
  response_type: "code",
  scope: "snsapi_userinfo",
  state: "undefined#wechat_redirect",
}

export const getCode = () => {
  let url = `${config.getCodeApi}?appid=${config.AppId}&redirect_uri=${defaultOption.redirect_uri}&response_type=${defaultOption.response_type}&scope=${defaultOption.scope}&state=${defaultOption.state}`;
  return window.open(url, '_self');
}


type IAuthHocProps = RouteComponentProps & {};

function AuthHoc(Component: any) {
  class AuthHoc extends PureComponent<IAuthHocProps, any> {
    constructor(props: IAuthHocProps) {
      super(props);
      this.state = {
        showComp: false
      }
      // let sessionToken = cookie.get("sessionToken");
      // if (!sessionToken) {
      //   this.props.history.push("/login");
      // }
    }

    async componentWillMount(){
      let code = queryString.get('code');
      let sessionToken = cookie.get('sessionToken')
      if(sessionToken){

      }else if(code){
        let user = await apiGet('/api/wxUserInfo', {
          code
        })
        console.log(user)
      }else{
        getCode();
      }
    }
    
    render() {
      let { showComp } = this.state
      if(!showComp) return null;
      return <Component></Component>;
    }
  }
  return withRouter(AuthHoc);
}
export default AuthHoc;
