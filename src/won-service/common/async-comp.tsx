import React from "react";
export default (comp:any) => {
  class Async extends React.Component {
    state = {
      comp: null,
      loading: false
    };
    asyncComponent: any
    loading: any
    constructor(props:any) {
      super(props);
      this.asyncComponent = <div>error</div>;
    }
    async componentWillMount() {
      const { default: Component } = await comp();
      this.loading = true;
      this.setState({
        loading: true,
        comp: Component
      });
    }
    render() {
      let { comp: Component } = this.state;
      let AsyncComponent: any = Component;
      return <div>{this.loading && <AsyncComponent {...this.props} />}</div>;
    }
  }
  return Async;
};
