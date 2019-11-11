import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getUser } from '../../Redux/Actions/Effects/effects';
import Person from '../PersonList/Person/person'
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
        this.props.getUser((res) => {
            this.setState({
                personList: res.data
            })
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
    return bindActionCreators(
        {
            getUser,
            personListUpdate: (persons) => ({ type: actionTypes.PERSONS_LIST, payload: { personList: persons } })
        },
        dispatch,
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonList);