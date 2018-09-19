import React,{Component} from 'react';  
import './Cart.css';
import Icon from './Cart.png';
class Cart extends Component{
    render(){
        const NumberOfItem=this.props.NumberOfItem;
        const TotalPrice = this.props.TotalPrice;
        return(
            <div className="Cart">
                <p>No. of items	: {NumberOfItem}<br/>Total	: {TotalPrice}</p>
                <img src={Icon} alt="icon"/>
            </div>
        );
    }
}
export default Cart;