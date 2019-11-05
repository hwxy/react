// import React, { Component, RefObject, useState } from 'react';

// import { connect } from 'react-redux';

// import { addnum, delnum } from "@/core/redux/action/mall-shop";

// // scss
// import Style from "@/asset/sass/views/mall-shopping.module.scss";

// import { apiGet } from "@/core/network/index.tsx";
  
// import 'react-virtualized/styles.css';

// class Child1 extends React.Component{
   
//   state = {}
  
//   componentWillMount(){
//     console.log('willMount', 2);
//   }

//   componentDidMount(){
//     console.log('didMount', 2);
//   }

//   // static getDerivedStateFromProps(){
//   //   console.log('DerivedState', 2);
//   //   return null;
//   // }

//   // getSnapshotBeforeUpdate(){
//   //   console.log('Snapshot', 2);
//   //   return null;
//   // }

//   componentWillReceiveProps(){
//     console.log('receiveProps', 2);
//   }

//   componentDidUpdate(){
//     console.log('didupdate', 2);
//   }

//   render(){
//     return (
//       <div>222</div>
//     )
//   } 
// }
// class Child2 extends React.Component{
//   state = {}

//   componentWillMount(){
//     console.log('willMount', 3);
//   }

//   componentDidMount(){
//     console.log('didMount', 3);
//   }

//   // static getDerivedStateFromProps(){
//   //   console.log('DerivedState', 3);
//   //   return null;
//   // }
//   // getSnapshotBeforeUpdate(){
//   //   console.log('Snapshot', 3);
//   //   return null;
//   // }   

//   componentWillReceiveProps(){
//     console.log('receiveProps', 3);
//   }

//   componentDidUpdate(){
//     console.log('didupdate', 3);
//   }

//   render(){
//     return (
//       <div>333</div>
//     )
//   } 
// }

// const Child3 = () => {
//   return (
//     <div>44</div>
//   )
// }

// interface S{}
// interface P{
//   add: () => {},
//   del: () => {},
//   [propName: string]: any;
// }

// class Parent extends React.Component<P, S>{

//   state = {}

//   ele: RefObject<any>

//   constructor(props: any){
//     super(props);
//     this.ele = React.createRef();
//   }

//   // static getDerivedStateFromProps(){
//   //   console.log('DerivedState', 1);
//   //   return null;
//   // }
  
//   // getSnapshotBeforeUpdate(){
//   //   console.log('Snapshot', 1);
//   //   return null;
//   // }

//   componentWillMount(){
//     console.log('willMount', 1);
//   }

//   componentDidUpdate(){
//     console.log('didupdate', 1);
//   }
  
//   componentDidMount(){
//     console.log('didMount', 1);

//   }

//   componentWillReceiveProps(){
//     console.log('receiveProps', 1);
//   }

//   render(){
//     let { add, del } = this.props;
//     return (
//       <div>
//         <div>
//           <Child1></Child1>
//           <Child2></Child2>
//           <Child3></Child3>
//           <button onClick={() => {
//             this.setState({
//               a: 1
//             })
//           }}>点击</button>
//           {/* <button onClick={()=>{add()}}>add点击</button>
//           <button onClick={()=>{del()}}>del点击</button> */}
//         </div>
//       </div>
//     )
//   }

// }

// const MapStateToProps = (state: any, props: any): object => {
//   return {
    
//   }
// }

// const MapDispatchToProps = (dispatch: any, props: any): object => {
//   return {
//     add(){
//       dispatch(addnum(1))
//     },
//     del(){
//       dispatch(delnum(2))
//     },
//   }
// }
// export default connect(MapStateToProps, MapDispatchToProps)(Parent);

import React, { useMemo, useState } from 'react';
import ReactDOM from "react-dom";

// 在 DOM 中有两个容器是兄弟级 （siblings）
const appRoot = document.getElementById('app-root');
const modalRoot = document.getElementById('modal-root');
class Modal extends React.Component {
  el: Element

  constructor(props: any) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    // 在 Modal 的所有子元素被挂载后，
    // 这个 portal 元素会被嵌入到 DOM 树中，
    // 这意味着子元素将被挂载到一个分离的 DOM 节点中。
    // 如果要求子组件在挂载时可以立刻接入 DOM 树，
    // 例如衡量一个 DOM 节点，
    // 或者在后代节点中使用 ‘autoFocus’，
    // 则需添加 state 到 Modal 中，
    // 仅当 Modal 被插入 DOM 树中才能渲染子元素。
    (modalRoot as Element).appendChild(this.el);
  }

  componentWillUnmount() {
    (modalRoot as Element).removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    );
  }
}

class Parent extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {clicks: 0};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // 当子元素里的按钮被点击时，
    // 这个将会被触发更新父元素的 state，
    // 即使这个按钮在 DOM 中不是直接关联的后代
    this.setState((state: any) => ({
      clicks: state.clicks + 1
    }));
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <p>Number of clicks: {this.state.clicks}</p>
        <p>
          Open up the browser DevTools
          to observe that the button
          is not a child of the div
          with the onClick handler.
        </p>
        <Modal>
          <Child />
        </Modal>
      </div>
    );
  }
}

function Child() {
  // 这个按钮的点击事件会冒泡到父元素
  // 因为这里没有定义 'onClick' 属性
  return (
    <div className="modal">
      <button>Click</button> =》 child 的点击依然会触发parent里面的事件
    </div>
  );
}

export default Parent;

// import { Component } from "react";
// import { DatePicker, List } from 'antd-mobile';
// import enUs from 'antd-mobile/lib/date-picker/locale/en_US';

// const nowTimeStamp = Date.now();
// const now = new Date(nowTimeStamp);
// // GMT is not currently observed in the UK. So use UTC now.
// const utcNow = new Date(now.getTime() + (now.getTimezoneOffset() * 60000));

// // Make sure that in `time` mode, the maxDate and minDate are within one day.
// let minDate = new Date(nowTimeStamp - 1e7);
// const maxDate = new Date(nowTimeStamp + 1e7);
// // console.log(minDate, maxDate);
// if (minDate.getDate() !== maxDate.getDate()) {
//   // set the minDate to the 0 of maxDate
//   minDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate());
// }

// function formatDate(date: any) {
//   /* eslint no-confusing-arrow: 0 */
//   const pad = (n: any) => n < 10 ? `0${n}` : n;
//   const dateStr = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
//   const timeStr = `${pad(date.getHours())}:${pad(date.getMinutes())}`;
//   return `${dateStr} ${timeStr}`;
// }

// class Demo extends Component {
//   state = {
//     date: now,
//     time: now,
//     utcDate: utcNow,
//     dpValue: null,
//     customChildValue: null,
//     visible: false,
//   }
//   render() {
//     return (
//       <List className="date-picker-list" style={{ backgroundColor: 'white' }}>
//         <DatePicker
//           dismissText=" "
//           mode="date"
//           title=""
//           extra="Optional"
//           value={this.state.date}
//           onChange={date => this.setState({ date })}
//           minDate={new Date()}
//         >
//           <List.Item arrow="horizontal">Date</List.Item>
//         </DatePicker>
//       </List>
//     );
//   }
// }

// export default Demo;