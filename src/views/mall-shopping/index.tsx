import React, { RefObject, Component } from 'react';
import './index.scss';

interface P{}

class Shop1 extends Component {
  componentWillMount(){
    console.log('shop1 willmount')
  }
  componentDidMount(){
    console.log('shop1  mount')
    setTimeout(()=>{
      this.setState({
        a: 1
      })
    }, 5500)  
  }

  componentWillReceiveProps(){
    console.log('shop1 reserve' )
  }

  render(){
    return (
      <div>
        111
        <Shop3/>
      </div>
    )
  }
}
class Shop2 extends Component {
  componentWillMount(){
    console.log('shop2 willmount')
  }

  componentDidMount(){
    console.log('shop2  mount')
  }

  componentWillReceiveProps(){
    console.log('shop2 reserve' )
  }

  render(){
    return (
      <div>
        <Shop4></Shop4>
      </div>
    )
  }
}
class Shop3 extends Component {
  componentWillMount(){
    console.log('shop3 willmount')
  }

  componentDidMount(){
    console.log('shop3  mount')
  }

  componentWillReceiveProps(){
    console.log('shop3 reserve' )
  }

  render(){
    return (
      <div>
        333
      </div>
    )
  }
}
class Shop4 extends Component {
  componentWillMount(){
    console.log('shop4 willmount')
  }

  componentDidMount(){
    console.log('shop4  mount')
  }

  componentWillReceiveProps(){
    console.log('shop4 reserve' )
  }

  render(){
    return (
      <div>444</div>
    )
  }
}
class Shop extends React.Component<P>{
  constructor(props: P){
    super(props);
  }
  // componentDidMount(){
  //   setTimeout(()=>{
  //     this.setState({
  //       a: 1
  //     })
  //   }, 5500)  
  // }

  componentDidUpdate(){
    console.log(22) ;
  }
  render(){

    return (
      <div>
          <Shop1></Shop1>
          <Shop2></Shop2>
      </div>
    )
  }
}



export default Shop;