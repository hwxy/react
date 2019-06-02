import StateHelp from "../common/stateHelp";
// import loadJS from "./script";
export default (Comp: any) => {
  class QQLogin extends StateHelp {
    constructor(props: any) {
      super(props);
      // this.QQBtnShow = true;
    }
    async componentWillMount() {
      // loadJS(
      //   "http://qzonestyle.gtimg.cn/qzone/openapi/qc_loader.js",
      //   {
      //     "data-appid": "1106805458",
      //     charset: "utf-8"
      //   },
      //   () => {
      //     this.QQBtnShow = true;
      // eslint-disable-next-line no-undef
      // QC.Login({
      //   btnId: "qqLoginBtn"
      // });
      // this.doRender();
      //   }
      // );
    }

    componentDidMount() {}

    render() {
      return <Comp {...this.props} />;
    }
  }
  return QQLogin;
};
