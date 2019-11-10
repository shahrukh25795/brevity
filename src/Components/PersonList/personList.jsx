import React, {Component} from 'react';

class PersonList extends Component{
    constructor(props){
        super(props);
        this.state = {
            personList : []
        }
    }

    render(){
        return <div>Hello Person List</div>
    }
}

export default PersonList