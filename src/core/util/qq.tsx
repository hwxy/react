import StateHelp from "../../won-service/common/stateHelp";
export default (Comp: any) => {
  class QQLogin extends StateHelp {
    QQBtnShow: boolean = true;
    qqLogin = () => {
      let win: any = window;
      win["qc"].Login.showPopup({
        appId: "1106805458",
        redirectURI: "http://hWu.try.com/"
      });
      // QC.Login.getMe((a)=>{console.log(a)})
    };
    componentDidMount() {
      // loadJS(
      //   "http://qzonestyle.gtimg.cn/qzone/openapi/qc_loader.js",
      //   {
      //     "data-appid": "1106805458",
      //     charset: "utf-8"
      //   },
      //   () => {
      // setTimeout(()=>{
      // let win: any = window
      // win["qc"].Login({
      //   btnId: "qqLoginBtn"
      // }, (...arg: any[]) => {
      //   console.log(arg, 11);
      // });
      // this.doRender();
    }
    // );

    render() {
      return (
        <Comp
          onLogin={this.qqLogin}
          {...this.props}
          QQBtnShow={this.QQBtnShow}
        />
      );
    }
  }
  return QQLogin;
};
