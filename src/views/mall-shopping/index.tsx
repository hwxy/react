import React, { PureComponent } from "react";

class Shopping extends PureComponent {
  state = {
    value: 1
  };
  componentWillMount() {
    setTimeout(() => {
      this.setState({
        value: 2
      });
    }, 1000);
    setTimeout(() => {
      this.setState({
        value: 3
      });
    }, 1000);
  }
  render() {
    let { value } = this.state;
    return (
      <div>
      </div>
    );
  }
}
export default Shopping;