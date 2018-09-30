import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Error from './Components/Error';
import App from './App';
class Main extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={App} exact />
                    <Route component={Error} />
                </Switch>
            </BrowserRouter>
        );
    }
}
export default Main;