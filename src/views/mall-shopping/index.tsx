import React, { RefObject } from 'react';
import './index.scss';

interface ShopChildProps{
  children: JSX.Element[] | JSX.Element
}



const ShopChild = (props: ShopChildProps): JSX.Element => {
  console.log(React.Children.toArray(props.children).sort(()=>{ return -1}));
  let map: JSX.Element[] = React.Children.map(props.children, (a: JSX.Element,b: number) : JSX.Element=>{
    return (
      <div>111</div>
    );
  });
  return (
    <div>
        {map}
    </div>
  )
}

const ShopChild2 : any = () : any => {
  return (
    <div>
        4444
    </div>
  )
}

const ShopChild3 : any = (): any => {
  return (
    <div>
        33333
    </div>
  )
}

interface P{
}

class Shop extends React.Component<P>{
  textInput: any = null
  constructor(props: any){
    super(props);
    this.textInput = React.createRef();
  }
  componentDidMount(){
    console.log(this.textInput, 111)
  }
  render(){

    return (
      <div>
        <ShopChild>
          <ShopChild2>
          </ShopChild2>
          <ShopChild3>
          </ShopChild3>
      </ShopChild>
      </div>
    )
  }
}



export default Shop;