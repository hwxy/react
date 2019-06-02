import { PureComponent } from "react";

class StateHelp extends PureComponent {
  unmount: boolean;
  constructor(props: any) {
    super(props);
    this.state = {
      render: false
    };
    this.unmount = false;
  }

  componentWillUnmount() {
    this.unmount = true;
  }

  doRender = (fn = () => {}) => {
    if (this.unmount) return;
    return new Promise(res => {
      this.setState(
        {
          render: true
        },
        () => {
          res();
          fn();
        }
      );
    });
  };
}

export default StateHelp;
