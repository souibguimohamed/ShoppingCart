import React, { Component } from 'react';
import CartHeader from './CartHeader';

/*===== Style Components Imports =====*/
import {NavContainer,Title} from './Style/NavigationStyling';
/*===== Style Components Imports =====*/

class Navigation extends Component{
    render(){
        return(
            <NavContainer>
                <Title>Shopping Cart Website</Title>
                <CartHeader TheState={this.props.TheState}/>
            </NavContainer>
        )
    }
}
export default Navigation;