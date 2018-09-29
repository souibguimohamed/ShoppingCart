import React, { Component } from 'react';

/*===== Style Components Imports =====*/
import CartBoxContainer from './Style/CartBoxStyling';
/*===== Style Components Imports =====*/

class CartBox extends Component{
    handleItems = ()=>{
        let Result =[];
        this.props.TheState.clientItems.forEach(clientItem => {
            this.props.TheState.items.forEach(item =>{
                if(item.id===clientItem.productId){
                    Result.push(
                    <tr>
                        <td>name:</td>
                        <td>{item.name}</td>
                        <td>Price:</td>
                        <td>{item.price}</td>
                        <td>Q:</td>
                        <td>{clientItem.quantity}</td>
                        <td><button>Del</button></td>
                    </tr>
                    );
                }
            });
        });
        return Result;
    }
    render(){
        return(
            <CartBoxContainer>
                <table>
                    {this.handleItems()}
                </table>
            </CartBoxContainer>
        )
    }
}
export default CartBox;