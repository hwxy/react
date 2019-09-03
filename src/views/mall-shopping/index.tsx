import React, { Component } from 'react';

import { connect } from 'react-redux';

import { addnum } from "@/core/redux/action/mall-shop";

// interface P{
//   add: any
// }

// class Shop extends Component<P>{

//     handleClick = () => {
//       let { add } =  this.props;
//       add();
//     }

//     render(){
//       return (
//         <div onClick={this.handleClick}>btn</div>
//       )
//     }
// }

// const MapStateToProps = () => ({})

// const MapDispatchToProps = (dispatch: Function) => {
//   return {
//     add(){
//       dispatch(addnum(1));
//     }
//   }
// }

// export default connect(MapStateToProps, MapDispatchToProps)(Shop);

class Child1 extends React.Component{
   
  state = {}
  
  // componentWillMount(){
  //   console.log('willMount', 2);
  // }

  componentDidMount(){
    console.log('didMount', 2);
  }

  static getDerivedStateFromProps(){
    console.log('DerivedState', 2);
    return null;
  }

  getSnapshotBeforeUpdate(){
    console.log('Snapshot', 2);
    return null;
  }

  componentDidUpdate(){
    console.log('didupdate', 2);
  }

  render(){
    return (
      <div>222</div>
    )
  } 
}
class Child2 extends React.Component{
  state = {}

  // componentWillMount(){
  //   console.log('willMount', 3);
  // }

  componentDidMount(){
    console.log('didMount', 3);
  }

  static getDerivedStateFromProps(){
    console.log('DerivedState', 3);
    return null;
  }
  getSnapshotBeforeUpdate(){
    console.log('Snapshot', 3);
    return null;
  }

  componentDidUpdate(){
    console.log('didupdate', 3);
  }

  render(){
    return (
      <div>333</div>
    )
  } 
}

class Parent extends React.Component{
  state = {}
  static getDerivedStateFromProps(){
    console.log('DerivedState', 1);
    return null;
  }
  
  getSnapshotBeforeUpdate(){
    console.log('Snapshot', 1);
    return null;
  }

  // componentWillMount(){
  //   console.log('willMount', 1);
  // }
  componentDidUpdate(){
    console.log('didupdate', 1);
  }
  
  componentDidMount(){
    console.log('didMount', 1);
  }

  render(){
    return (
      <div>
        <Child1></Child1>
        <Child2></Child2>
        <button onClick={()=>{this.setState({a:1})}}>点击</button>
      </div>
    )
  }

}
export default Parent;