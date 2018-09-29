import React, { Component } from 'react';
import AppContainer from './AppStyling';
import Navigation from './Components/Navigation';
import Item from './Components/Item';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      items:[
        {id:1,name:"souris",price:7,itemStock:1},
        {id:2,name:"clavier",price:10,itemStock:20},
        {id:3,name:"laptop",price:5,itemStock:7},
        {id:4,name:"pc gamer",price:17,itemStock:19},
        {id:5,name:"modem",price:15,itemStock:20}
      ],
      clientItems:[]
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

  render() {

    /**===== This block of code is used to make a dynamic items using the state.items =====**/
    const numberOfProducts = this.state.items.length;
    const Items = [];
    for (let index = 1; index < numberOfProducts+1; index++) {
      Items.push(<Item TheState={this.state} productID={index} handleAddToCart={this.handleAddToCart}/>);
    }
    /**===== End Of The Block Generation =====**/

    return (
    <AppContainer>
      <Navigation TheState={this.state} />
      {Items}
    </AppContainer>
    );
  }
}

export default App;
