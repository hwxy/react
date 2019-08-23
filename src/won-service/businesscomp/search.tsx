import React from "react";
             
class Navigation extends React.Component {
  constructor(props: any) {
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
    return <div />;
  }
}
export default Navigation;
