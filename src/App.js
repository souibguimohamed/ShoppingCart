import React, { Component } from 'react';
import MainContent from './Components/MainContent';
import Navigation from './Components/Navigation';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      NoI:0,
      TotalPrice:0
    }
  }
  render() {
    const NumberOfItem = this.state.NoI;
    const TotalPrice = this.state.TotalPrice;
    const handleAdding=(numberOfItem,Price)=>{
      const FinalPrice = TotalPrice+Price;
      this.setState({
        NoI:numberOfItem,
        TotalPrice:FinalPrice
      });
    }
    return (
      <div className="App">
        <Navigation NumberOfItem={NumberOfItem}
                    TotalPrice={TotalPrice}/>
        <MainContent NumberOfItem={NumberOfItem}
                     handleAdding={handleAdding}/>
      </div>
    );
  }
}

export default App;
