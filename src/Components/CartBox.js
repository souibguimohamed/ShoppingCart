import React, { Component } from 'react';

/*===== Style Components Imports =====*/
import {CartBoxContainer,ItemTitle,ItemValue,ItemDelBtn,AlertNoItems} from './Style/CartBoxStyling';
/*===== Style Components Imports =====*/

class CartBox extends Component{
    handleItems = ()=>{
        let Result =[];
        this.props.TheState.clientItems.forEach(clientItem => {
            this.props.TheState.items.forEach(item =>{
                if(item.id===clientItem.productId){
                    Result.push(
                    <tr key={item.id}>
                        <ItemTitle key={item.id}>Name:</ItemTitle>
                        <ItemValue key={item.id}>{item.name}</ItemValue>
                        <ItemTitle key={item.id}>Price:</ItemTitle>
                        <ItemValue key={item.id}>{item.price}</ItemValue>
                        <ItemTitle key={item.id}>Qantity:</ItemTitle>
                        <ItemValue key={item.id}>{clientItem.quantity}</ItemValue>
                        <td key={item.id}><ItemDelBtn onClick={()=>{this.props.removeFromCart(clientItem.productId)}}>Delete</ItemDelBtn></td>
                    </tr>
                    );
                }
            });
        });
        if(Result.length <=0){
            Result.push(<AlertNoItems  key={0}>No Products In The Cart</AlertNoItems>)
        }
        return Result;
    }
    render(){
        return(
            <CartBoxContainer Displayed={this.props.TheState}>
                <table>
                    {this.handleItems()}
                </table>
            </CartBoxContainer>
        )
    }
}
export default CartBox;