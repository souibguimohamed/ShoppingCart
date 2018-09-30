import React, { Component } from 'react';
import CartHeader from './CartHeader';

/*===== Style Components Imports =====*/
import {NavContainer,Title} from './Style/NavigationStyling';
/*===== Style Components Imports =====*/

class Navigation extends Component{
    render(){ 
        return(
            <NavContainer>
                <Title to="/" >Shopping Cart Website</Title>
                <CartHeader TheState={this.props.TheState}
                            removeFromCart={this.props.removeFromCart}
                            changeDisplayedBox={this.props.changeDisplayedBox}/>
            </NavContainer>
        )
    }
}
export default Navigation;