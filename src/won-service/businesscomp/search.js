import React from "react";
import "@/asset/sass/won-service/businesscomp/search.module.scss";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      render: false
    };
  }

  doRender = () => {
    return new Promise(r => {
      this.setState(
        {
          render: true
        },
        () => {
          r();
        }
      );
    });
  };
  render() {
    return <div styleName="container" />;
  }
}
export default Navigation;
