import React, { Component } from 'react';
import { getApi } from '../../Request/request';
import Person from '../PersonList/Person/person'
import { connect } from 'react-redux';
import * as actionTypes from '../../Redux/Actions/ActionType/actionType';
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
        this.props.personListUpdate(["New Data"])
    }

    getPersonList = () => {
        getApi('users/').then((res) => {
            if (res.status === 200) {
                this.setState({ personList: res.data })
            }
        })
    }

    render() {
        console.log("redux state", this.props.personList)
        return (
            <div className="container">
                <h1>Person List</h1>
                <Person personList={this.state.personList} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        personList: state.Persons.personList,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        personListUpdate: (persons) => dispatch({ type: actionTypes.PERSONS_LIST, payload: { personList: persons } }),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonList);