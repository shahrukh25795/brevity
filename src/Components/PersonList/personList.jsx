import React, { Component } from 'react';
import { getApi } from '../../Request/request';
import Person from '../PersonList/Person/person'
import './personList.scss';

class PersonList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            personList: []
        }
    }

    componentDidMount() {
        this.getPersonList();
    }

    getPersonList = () => {
        getApi('users/').then((res) => {
            if (res.status === 200) {
                this.setState({ personList: res.data })
            }
        })
    }

    render() {
        return (
            <div className="container">
                <h1>Person List</h1>
                <Person personList={this.state.personList} />
            </div>
        )
    }
}

export default PersonList