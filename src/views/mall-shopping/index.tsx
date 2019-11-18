import React, { Component, RefObject, useState } from 'react';

import { connect } from 'react-redux';

import { addnum, delnum, setNum } from "@/core/redux/action/mall-shop";

// scss
import Style from "@/asset/sass/views/mall-shopping.module.scss";

import { apiGet } from "@/core/network/index.tsx";
  
import 'react-virtualized/styles.css';

class Child1 extends React.Component{
   
  state = {}
  
  componentWillMount(){
    console.log('willMount', 2);
  }

  componentDidMount(){
    console.log('didMount', 2);
  }

  // static getDerivedStateFromProps(){
  //   console.log('DerivedState', 2);
  //   return null;
  // }

  // getSnapshotBeforeUpdate(){
  //   console.log('Snapshot', 2);
  //   return null;
  // }

  componentWillReceiveProps(){
    console.log('receiveProps', 2);
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

  componentWillMount(){
    console.log('willMount', 3);
  }

  componentDidMount(){
    console.log('didMount', 3);
  }

  // static getDerivedStateFromProps(){
  //   console.log('DerivedState', 3);
  //   return null;
  // }
  // getSnapshotBeforeUpdate(){
  //   console.log('Snapshot', 3);
  //   return null;
  // }   

  componentWillReceiveProps(){
    console.log('receiveProps', 3);
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

const Child3 = () => {
  return (
    <div>44</div>
  )
}

interface S{}
interface P{
  add: () => {},
  del: () => {},
  [propName: string]: any;
}

class Parent extends React.Component<P, S>{

  state = {}

  ele: RefObject<any>

  constructor(props: any){
    super(props);
    this.ele = React.createRef();
  }

  // static getDerivedStateFromProps(){
  //   console.log('DerivedState', 1);
  //   return null;
  // }
  
  // getSnapshotBeforeUpdate(){
  //   console.log('Snapshot', 1);
  //   return null;
  // }

  // componentWillMount(){
  //   console.log('willMount', 1);
  // }

  // componentDidUpdate(){
  //   console.log('didupdate', 1);
  // }
  
  // componentDidMount(){
  //   console.log('didMount', 1);

  // }

  // componentWillReceiveProps(){
  //   console.log('receiveProps', 1);
  // }

  render(){
    let { add, del, set } = this.props;
    return (
      <div>
        <div>
          {/* <Child1></Child1>
          <Child2></Child2>
          <Child3></Child3> */}
          <button onClick={()=>{add()}}>add点击</button>
          <button onClick={()=>{del()}}>del点击</button>
          <button onClick={()=>{set()}}>set点击</button>
        </div>
      </div>
    )
  }

}


import { createSelector } from "reselect";

const getVisibilityFilter = (state : any) => {
  console.log(state)
  return state.mallShop.counter;
}
//下面的函数是经过包装的
export const getVisibleTodos = createSelector(
  [ getVisibilityFilter],
  (filter: number) => {
    console.log(11);
    switch (filter) {
      case 1:
        return 1
      case 2:
        return 2
    }
  }
)



const MapStateToProps = (state: any, props: any): object => {
  return {
    todos: getVisibleTodos(state)
  }
}



const MapDispatchToProps = (dispatch: any, props: any): object => {
  return {
    add(){
      
      dispatch(addnum(1))
    },
    del(){
      dispatch(delnum(2))
    },
    set(){
      dispatch(setNum(10))
    },
  }
}
export default connect(MapStateToProps, MapDispatchToProps)(Parent);

// import React, { useMemo, useState } from 'react';
// import ReactDOM from "react-dom";

// class Parent extends React.Component<any, any> {
//   constructor(props: any) {
//     super(props);
//     this.state = {clicks: 0};
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     // 当子元素里的按钮被点击时，
//     // 这个将会被触发更新父元素的 state，
//     // 即使这个按钮在 DOM 中不是直接关联的后代
//     this.setState((state: any) => ({
//       clicks: state.clicks + 1
//     }));
//   }

//   render() {
//     return (
//       <div onClick={this.handleClick}>
//         <p>Number of clicks: {this.state.clicks}</p>
//         <p>
//           Open up the browser DevTools
//           to observe that the button
//           is not a child of the div
//           with the onClick handler.
//         </p>
//         <Modal>
//           <Child />
//         </Modal>
//       </div>
//     );
//   }
// }

// function Child() {
//   // 这个按钮的点击事件会冒泡到父元素
//   // 因为这里没有定义 'onClick' 属性
//   return (
//     <div className="modal">
//       <button>Click</button> =》 child 的点击依然会触发parent里面的事件
//     </div>
//   );
// }

// export default Parent;
// import React, { Component } from 'react';
// import { Button } from 'antd-mobile';

// class TodoList extends Component <any, any> {
//   constructor(props: any) {
//     super(props);
//     this.handleTest2 = this.handleTest2.bind(this);
//   }
//   handleTest = () => {
//     console.log('test');
//   }

//   handleTest2() {
//     console.log('test2');
//   }

//   componentDidMount() {}

//   render() {
//     return (
//       <div className="todo-list">
//         {this.props.list.map((todo: any, index: any) => (<div key={index}>
//           <span className="item-text ">{todo}</span>
//           <Button onClick={() => this.props.deleteTodo(index)} >done</Button>
//         </div>))}
//       </div>
//     );
//   }
// }

// export default TodoList;