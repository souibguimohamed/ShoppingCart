import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Error from './Components/Error';
import App from './App';
import Navigation from './Components/Navigation';
import ItemDescription from './Components/ItemDescription';
class Main extends Component{
    constructor(props){
        super(props);
        this.state={
          items:[
            {id:1,name:"Souris",price:7,itemStock:1,img:"1.jpg"},
            {id:2,name:"Clavier",price:10,itemStock:20,img:"1.jpg"},
            {id:3,name:"Laptop",price:5,itemStock:7,img:"1.jpg"},
            {id:4,name:"Pc Gamer",price:17,itemStock:19,img:"1.jpg"},
            {id:5,name:"Modem",price:15,itemStock:20,img:"1.jpg"}
          ],
          clientItems:[],
          IsOpen:false
        }
      }
      
  ///////-------------- Start Function handleAddToCart --------------///////
  handleAddToCart = (id)=>{
    this.state.items.forEach((item)=>{
      if(item.id===id){ //we use this condition to elimite the decrement the quantity by every item
        if(item.itemStock > 0){
          /*** Part 1 ***/
          //Start Decrement The Stock
          let decrementStock = this.state.items.map((item)=>{
            if(item.id===id){
              item.itemStock--;
            }
            return item;
          });
          this.setState({items:decrementStock});
          //End Decrement The Stock

          /*** Part 2 ***/

          //we suppose that item is not exist so we check if this is true 
          //so if the item exist we update Exists variable 
          //if not we push a new object to the updateItems
          //finally we update the state
          let Exists  = false;
          let updateItems = this.state.clientItems.map((item)=>{
            if(item.productId === id){
              item.quantity++;
              Exists = true;
            }
            return item;
          });
          if(!Exists){
            updateItems.push({productId:id,quantity:1});
          }
          this.setState({
            clientItems:updateItems
          })
        }else{
          alert("Out Of Stock");
        }
      }else{
        return item
      }
    });
    }
  ///////-------------- End Function handleAddToCart --------------///////
  ///////-------------- Start Function removeFromCart --------------///////
  removeFromCart =(TheSelectedID)=>{
    let FinalArray=[];
    let quatityRemoved=0;//i use this variable for adding the quantity to the itemstock
    FinalArray=this.state.clientItems.filter((item)=>{
      if(item.productId !==TheSelectedID){
        return item;
      }
      quatityRemoved=item.quantity;
      return null;
    });
    this.setState({
      clientItems:FinalArray
    })
    //we add the quantity of the selected item to items state
    FinalArray=[];
    FinalArray=this.state.items.filter((item)=>{
      if(item.id ===TheSelectedID){
        item.itemStock+=quatityRemoved;
        return item;
      }
      return item;
    });
    this.setState({
      items:FinalArray
    })
  }
  ///////-------------- End Function removeFromCart --------------///////
  ///////-------------- Start Function changeDisplayedBox --------------///////
  changeDisplayedBox =()=>{
    this.setState({
      IsOpen:!this.state.IsOpen
    })
  }
  ///////-------------- End Function changeDisplayedBox --------------///////

    render(){
        return(
            <BrowserRouter>
                <div>
                    <Navigation TheState={this.state} 
                        removeFromCart={this.removeFromCart} 
                        changeDisplayedBox={this.changeDisplayedBox}
                        />
                    <Switch>
                        <Route  exact 
                                path="/" 
                                render={(props)=>{
                                    return(
                                    <App {...props} 
                                    TheState={this.state} 
                                    removeFromCart={this.removeFromCart} 
                                    changeDisplayedBox={this.changeDisplayedBox}
                                    handleAddToCart={this.handleAddToCart} />
                                    );
                                }} 
                        />
                        <Route  path="/items/:id" 
                                render={(props)=>{
                                    return(
                                    <ItemDescription {...props} 
                                                    TheState={this.state}  
                                                    handleAddToCart={this.handleAddToCart}/>
                                    );
                                }} 
                        />
                        <Route component={Error} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}
export default Main;