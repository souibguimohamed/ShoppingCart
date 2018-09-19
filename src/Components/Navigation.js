import React, { Component } from 'react';
import Cart from './Cart';
import './Navigation.css';

class Navigation extends Component {
  render() {
    const NumberOfItem=this.props.NumberOfItem;
    const TotalPrice = this.props.TotalPrice;
    return (
      <div className="navigationBar">
          <div className="Title">Shopping Cart React</div>
          <Cart NumberOfItem={NumberOfItem}
                TotalPrice={TotalPrice}/>
      </div> 
    );
  }
}

export default Navigation;