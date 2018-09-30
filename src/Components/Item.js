import React, { Component } from 'react';
import img from '../images/1.jpg';

/*===== Style Components Imports =====*/
import {ItemContainer,Thumbnail,ProductName,ProductPrice,AddToCartBtn} from './Style/ItemStyling';
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
///////-------------- Start Function To get images --------------///////
imageOfTheItem = (id)=>{
    const TheState = this.props.TheState;
    let result = "";
    TheState.items.forEach((item)=>{
        if(item.id === id){
            result=item.img;
        }
    });
    return result;
    }
///////-------------- Start Function To get images --------------///////

    render(){
        return(
            <ItemContainer>                
                <Thumbnail src={img}/>
                <ProductName>{this.TitleOfTheItem(this.props.productID)}</ProductName>
                <ProductPrice>{this.PriceOfTheItem(this.props.productID)}$</ProductPrice>
                <AddToCartBtn onClick={()=>{this.props.handleAddToCart(this.props.productID)}}>Add To Cart</AddToCartBtn>
            </ItemContainer>
        )
    }
}
export default Item;