import React, { Component } from 'react';
import {ErrorContainer,ErrorFont} from './Style/ErrorStyling';
class Error extends Component{
    render(){
        return(
            <ErrorContainer>
                <ErrorFont>{"<!  Error Page    />"}</ErrorFont>
            </ErrorContainer>
        )
    }
}
export default Error;