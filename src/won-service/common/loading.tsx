import React, { Component } from "react";

// scss
import Style from '@/asset/sass/won-service/common/loading.module.scss';

interface S{
  hasInit: Boolean  
  data: any
}

interface P{
  
}

const Loading = () => {
  return (
    <div className={Style['ldsRing']}>
      <div className={Style['ldsRingItem']}/>
      <div className={Style['ldsRingItem']}/>
      <div className={Style['ldsRingItem']}/>
      <div className={Style['ldsRingItem']}/>
    </div>
  );
};


export default (func: Function, Comp: any) => {
  class LoadingMiddleware extends Component<P,S> {
    state = {
      hasInit: false,
      data: []
    };     

    async componentDidMount() {
      let data = await func();
      this.setState({
        hasInit: true,
        data
      })
    }

    render() {
      let { hasInit, data } = this.state;
      return !hasInit ? <Loading></Loading> :  <Comp data={data} {
        ...this.props
      }/>;
    }
  }
  return LoadingMiddleware;
};
