import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

import img from '../images/1.jpg';
import {Thumbnail,ItemInfos,ItemContact,ProductName,ProductPrice,ProductStock,ContactTitle,ContactDetails} from './Style/ItemDescriptionStyling';
class ItemDescription extends Component{
    render(){
        if(isNaN(this.props.match.params.id)){
            return(<Redirect to="/Error"/>);
        }else{
            let Exist =false;
            for(var i = 0;i<this.props.TheState.items.length;i++){
                if(parseInt(this.props.match.params.id,10) === this.props.TheState.items[i].id){
                    Exist = true;
                }
            }
            if(!Exist){
                return(<Redirect to="/Error"/>);
            }
        }
        const ProductID=parseInt(this.props.match.params.id,10);
        const TheState=this.props.TheState;
        return(
            <div>
                <Thumbnail src={img}/>
                <ItemInfos>
                    <ProductName>{TheState.items[ProductID-1].name}</ProductName>
                    <ProductPrice>{TheState.items[ProductID-1].price}$</ProductPrice>
                    <ProductStock>Still available just {TheState.items[ProductID-1].itemStock}</ProductStock>
                    <button onClick={()=>{this.props.handleAddToCart(ProductID)}}>Add To Cart</button>
                </ItemInfos>
                <ItemContact>
                    <ContactTitle>Contact informations</ContactTitle>
                    <ContactDetails>
                        Phone Number : +(216)54055887<br/>
                        Email : mohamed@souibgui.com<br/>
                        Website : www.souibgui.com
                    </ContactDetails>
                </ItemContact>
            </div>
        );

    }
}
export default ItemDescription;