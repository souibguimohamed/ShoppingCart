import React, { Component } from 'react';
import CartBox from './CartBox';
import icon from '../images/icon.png';

/*===== Style Components Imports =====*/
import {CartHeaderContainer,Infos,TheIcon} from './Style/CartHeaderStyling';
/*===== Style Components Imports =====*/

class CartHeader extends Component{
    numberOfItems =()=>{
        let theResult = 0;
        this.props.TheState.clientItems.forEach(item => {
            theResult+=item.quantity;
        });
        return theResult;
    }
    totalPrice=()=>{
        let theResult = 0;
        this.props.TheState.clientItems.forEach(item => {
            let price = 0;
            this.props.TheState.items.forEach((produit)=>{
                if(item.productId === produit.id){
                    price=produit.price;
                    return;
                }
            });
            theResult+=(item.quantity*price);
        });
        return theResult;
    }
    render(){
        return(
            <CartHeaderContainer >
                <Infos>nbre of items: {this.numberOfItems()} <br/>Total Price: {this.totalPrice()}$</Infos>
                <TheIcon src={icon} 
                        alt="Cart Icon" 
                        onClick={()=>{this.props.changeDisplayedBox()}}/>
                <CartBox TheState={this.props.TheState}
                         removeFromCart={this.props.removeFromCart}
                         />
            </CartHeaderContainer>
        )
    }
}
export default CartHeader;