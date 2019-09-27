import React, { Component, RefObject, useState } from 'react';

import { connect } from 'react-redux';

import { addnum, delnum } from "@/core/redux/action/mall-shop";

// scss
import Style from "@/asset/sass/views/mall-shopping.module.scss";



// import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer"
import { List, WindowScroller, AutoSizer, InfiniteLoader } from 'react-virtualized';
// import 'react-virtualized/styles.css';
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

// class Child1 extends React.Component{
   
//   state = {}
  
//   // componentWillMount(){
//   //   console.log('willMount', 2);
//   // }

//   componentDidMount(){
//     console.log('didMount', 2);
//   }

//   static getDerivedStateFromProps(){
//     console.log('DerivedState', 2);
//     return null;
//   }

//   getSnapshotBeforeUpdate(){
//     console.log('Snapshot', 2);
//     return null;
//   }

//   // componentWillReceiveProps(){
//   //   console.log('receiveProps', 2);
//   // }

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

//   // componentWillMount(){
//   //   console.log('willMount', 3);
//   // }

//   componentDidMount(){
//     console.log('didMount', 3);
//   }

//   static getDerivedStateFromProps(){
//     console.log('DerivedState', 3);
//     return null;
//   }
//   getSnapshotBeforeUpdate(){
//     console.log('Snapshot', 3);
//     return null;
//   } 

//   // componentWillReceiveProps(){
//   //   console.log('receiveProps', 3);
//   // }

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

//   static getDerivedStateFromProps(){
//     console.log('DerivedState', 1);
//     return null;
//   }
  
//   getSnapshotBeforeUpdate(){
//     console.log('Snapshot', 1);
//     return null;
//   }

//   // componentWillMount(){
//   //   console.log('willMount', 1);
//   // }
//   componentDidUpdate(){
//     console.log('didupdate', 1);
//   }
  
//   componentDidMount(){
//     console.log('didMount', 1);

//   }

//   render(){
//     let { add, del } = this.props;
//     return (
//       <div>
//         <div>
//           {/* <Child1></Child1>
//           <Child2></Child2>
//           <Child3></Child3> */}
//           <button onClick={()=>{add()}}>add点击</button>
//           <button onClick={()=>{del()}}>del点击</button>
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

const list = [
  'Brian Vaughn1',
  'Brian Vaughn2',
  'Brian Vaughn3',
  'Brian Vaughn4',
  'Brian Vaughn5',
  'Brian Vaughn6',
  'Brian Vaughn7',
  'Brian Vaughn8',
  'Brian Vaughn9',
  'Brian Vaughn10',
  'Brian Vaughn11',
  'Brian Vaughn12',
  'Brian Vaughn13',
  'Brian Vaughn14',
  'Brian Vaughn15',
  'Brian Vaughn16',
  'Brian Vaughn17',
  'Brian Vaughn18',
  'Brian Vaughn19',
  'Brian Vaughn20',
  'Brian Vaughn20',
  'Brian Vaughn20',
  'Brian Vaughn20',
  'Brian Vaughn20',
  'Brian Vaughn20',
  'Brian Vaughn20',
  'Brian Vaughn20',
  'Brian Vaughn20',
  'Brian Vaughn20',
  'Brian Vaughn20',
  'Brian Vaughn20',
  'Brian Vaughn20',
  'Brian Vaughn20',
  'Brian Vaughn20',
  'Brian Vaughn20',
  'Brian Vaughn20',
  'Brian Vaughn20',
  'Brian Vaughn20',
  'Brian Vaughn20',
  'Brian Vaughn20',
  'Brian Vaughn20',
  'Brian Vaughn20',
  'Brian Vaughn20',
  'Brian Vaughn20',
  'Brian Vaughn20',
  'Brian Vaughn20',
  'Brian Vaughn20',
  'Brian Vaughn20',
  'Brian Vaughn20',
  'Brian Vaughn20',
  'Brian Vaughn20',
  'Brian Vaughn20',
  'Brian Vaughn20',
  'Brian Vaughn20',
  'Brian Vaughn20',
  'Brian Vaughn20',
  'Brian Vaughn20',
  'Brian Vaughn20',
  'Brian Vaughn20',
];

function rowRenderer ({ key, index, style }: any) {
  return (
    <div
      key={key}
      style={style}
    >
      {list[index]}
    </div>
  )
}
const STATUS_LOADING = 1; 
const STATUS_LOADED = 2;

class Shopping extends React.Component<any, any>{

  _timeoutIdMap: any

  constructor(props: any) {
    super(props);

    this.state = {
      loadedRowCount: 0,
      loadedRowsMap: {},
      loadingRowCount: 0,
    };

    this._timeoutIdMap = {};

    this._clearData = this._clearData.bind(this);
    this._isRowLoaded = this._isRowLoaded.bind(this);
    this._loadMoreRows = this._loadMoreRows.bind(this);
    // this._rowRenderer = this._rowRenderer.bind(this);
  }

  render() {
    return (
        <InfiniteLoader
          minimumBatchSize={5}
          isRowLoaded={this._isRowLoaded}
          loadMoreRows={this._loadMoreRows}
          rowCount={list.length}>
          {({onRowsRendered, registerChild}) => (
            <AutoSizer disableHeight>
              {({width}) => (
                <List
                  ref={registerChild}
                  height={200}
                  onRowsRendered={onRowsRendered}
                  rowCount={list.length}
                  rowHeight={30}
                  rowRenderer={rowRenderer}
                  width={width}
                />
              )}
            </AutoSizer>
          )}
        </InfiniteLoader>
    );
  }

  _clearData() {
    this.setState({
      loadedRowCount: 0,
      loadedRowsMap: {},
      loadingRowCount: 0,
    });
  }

  _isRowLoaded({ index } : any) {
    const {loadedRowsMap} = this.state;
    return !!loadedRowsMap[index]; // STATUS_LOADING or STATUS_LOADED
  }

  _loadMoreRows({startIndex, stopIndex} : any) {
    console.log(startIndex, stopIndex, 22);
    const {loadedRowsMap, loadingRowCount} = this.state;
    const increment = stopIndex - startIndex + 1;

    for (var i = startIndex; i <= stopIndex; i++) {
      loadedRowsMap[i] = STATUS_LOADING;
    }

    this.setState({
      loadingRowCount: loadingRowCount + increment,
    });

    setTimeout(() => {
      const {loadedRowCount, loadingRowCount} = this.state;

      delete this._timeoutIdMap['a'];

      for (var i = startIndex; i <= stopIndex; i++) {
        loadedRowsMap[i] = STATUS_LOADED;
      }

      this.setState({
        loadingRowCount: loadingRowCount - increment,
        loadedRowCount: loadedRowCount + increment,
      });

      promiseResolver();
    }, 1000 + Math.round(Math.random() * 2000));

    this._timeoutIdMap['a'] = true;

    let promiseResolver: any;

    return new Promise(resolve => {
      promiseResolver = resolve;
    });
  }

  _rowRenderer({index, key, style}: any) {
    return (
      <div key={key} style={style}>
        {index}
      </div>
    );
  }
}
// const Shopping  = () => {
//   let [ scrollToIndex, setScrollToIndex] = useState(1);
//   // setTimeout(()=>{
//   //   setScrollToIndex(20);
//   // }, 5000)
//   return (
//     <div className={Style.padding}>
    {/* <WindowScroller>
    {({height, isScrolling, registerChild, onChildScroll, scrollTop}) => {
      return (
        // AutoSizer 自动更改list高度
      <div>
        <AutoSizer disableHeight>
          {({width}) => (
            <div>
              <List
                ref={el => {
                  let windo:any = window
                  windo['listEl'] = el;
                }}
                autoHeight  // 指定列表外元素高度为auto
                className={Style.list} // 指定包含list元素 class 同autoHeight， height
                height={height}  // 指定列表外元素高度
                isScrolling={isScrolling}
                onScroll={onChildScroll} // ???
                overscanRowCount={2} // 在可见范围内的上下展示行数
                rowCount={30} // 列表中的函数
                rowHeight={40} // 行高
                rowRenderer={rowRenderer} // 行渲染的函数
                scrollToAlignment="end" // 指定索引使在当前列表中间 出现在可视中
                scrollToIndex={scrollToIndex} // 指定索引在可见位置
                scrollTop={scrollTop} // 距离页面的滚动距离 来显示当前list
                width={width}
              />
            </div>
          )}
        </AutoSizer>
      </div>
      );
  }}
  </WindowScroller> */}
//      <InfiniteLoader
//           isRowLoaded={()=>{
//             return false
//           }}
//           loadMoreRows={({startIndex, stopIndex}) => {
//             const {loadedRowsMap, loadingRowCount} = this.state;
//             const increment = stopIndex - startIndex + 1;
        
//             for (var i = startIndex; i <= stopIndex; i++) {
//               loadedRowsMap[i] = STATUS_LOADING;
//             }
        
//             this.setState({
//               loadingRowCount: loadingRowCount + increment,
//             });
        
//             const timeoutId = setTimeout(() => {
//               const {loadedRowCount, loadingRowCount} = this.state;
        
//               delete this._timeoutIdMap[timeoutId];
        
//               for (var i = startIndex; i <= stopIndex; i++) {
//                 loadedRowsMap[i] = STATUS_LOADED;
//               }
        
//               this.setState({
//                 loadingRowCount: loadingRowCount - increment,
//                 loadedRowCount: loadedRowCount + increment,
//               });
        
//               promiseResolver();
//             }, 1000 + Math.round(Math.random() * 2000));
        
//             this._timeoutIdMap[timeoutId] = true;
        
//             let promiseResolver;
        
//             return new Promise(resolve => {
//               promiseResolver = resolve;
//             });
//           }}
//           rowCount={list.length}>
//           {({onRowsRendered, registerChild}) => (
//             <AutoSizer disableHeight>
//               {({width}) => (
//                 <List
//                   ref={registerChild}
//                   height={200}
//                   onRowsRendered={onRowsRendered}
//                   rowCount={list.length}
//                   rowHeight={30}
//                   rowRenderer={rowRenderer}
//                   width={width}
//                 />
//               )}
//             </AutoSizer>
//           )}
//         </InfiniteLoader>
//   </div>
//   );
// }
export default Shopping