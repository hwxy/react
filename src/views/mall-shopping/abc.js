import React, { PureComponent } from "react";

class Abc extends PureComponent {
  componentWillReceiveProps() {
    console.log(arguments);
  }
  render() {
    return <div>111</div>;
  }
}
export default Abc;
