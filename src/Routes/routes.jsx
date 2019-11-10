import React, {Component} from 'react';
import {Switch, BrowserRouter,Route} from 'react-router-dom'
import PersonList from '../Components/PersonList/personList';

class Routes extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <BrowserRouter>
            <Switch>
                <Route exact path="/" render={(props) => <PersonList {...props} />} />
            </Switch>
        </BrowserRouter>
        )
    }
}

export default Routes