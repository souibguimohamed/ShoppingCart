import React, { Component } from 'react';
import img from '../images/1.jpg';

/*===== Style Components Imports =====*/
import {ItemContainer,Thumbnail} from './Style/ItemStyling';
/*===== Style Components Imports =====*/


class Item extends Component{
///////-------------- Start Function To get The Title --------------///////
    TitleOfTheItem = (idItem)=>{
        const TheState = this.props.TheState;
        var result = "Untitled Product";
        TheState.items.forEach((item)=>{
            if(item.id === idItem){
                result=item.name;
            }
        });
        return result;
    }
///////-------------- End Function To get The Title --------------///////
///////-------------- Start Function To get The Price --------------///////
    PriceOfTheItem = (id)=>{
    const TheState = this.props.TheState;
    let result = 0;
    TheState.items.forEach((item)=>{
        if(item.id === id){
            result=item.price;
        }
    });
    return result;
    }
///////-------------- End Function To get The Price --------------///////
    render(){
        return(
            <ItemContainer>
                <Thumbnail src={img}/>
                <h3>{this.TitleOfTheItem(this.props.productID)}</h3>
                <h2>{this.PriceOfTheItem(this.props.productID)}$</h2>
                <button onClick={()=>{this.props.handleAddToCart(this.props.productID)}}>Add To Cart</button>
            </ItemContainer>
        )
    }
}
export default Item;