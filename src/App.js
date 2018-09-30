import React, { Component } from 'react';
import AppContainer from './AppStyling';
import Item from './Components/Item';
class App extends Component {
  render() {

    /**===== This block of code is used to make a dynamic items using the state.items =====**/
    const numberOfProducts = this.props.TheState.items.length;
    const Items = [];
    for (let index = 1; index < numberOfProducts+1; index++) {
      Items.push(<Item  key={index} TheState={this.props.TheState} productID={index} handleAddToCart={this.props.handleAddToCart}/>);
    }
    /**===== End Of The Block Generation =====**/

    return (
      <AppContainer >
        {Items}
      </AppContainer>
    );
  }
}

export default App;
