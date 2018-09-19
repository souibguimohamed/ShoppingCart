import React, { Component } from 'react';
import image from './reactLogo.png';
import './Item.css';

class Item extends Component {
  render() {
      const NumberOfItem = this.props.NumberOfItem;
      const handleAdding = this.props.handleAdding;
      const Price=this.props.Price;
    return (
      <div className="ItemBox">
          <img src={image} alt="blablaimage"/>
          <div>
              <p>Description text</p>
              <button onClick={()=>{handleAdding(NumberOfItem+1,Price)}}>Add to Cart</button>
          </div>
      </div>
    );
  }
}

export default Item;