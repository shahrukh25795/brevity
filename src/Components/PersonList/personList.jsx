import React, { Component } from 'react';
import { getApi } from '../../Request/request';
import './personList.scss';

class PersonList extends Component{
    constructor(props){
        super(props);
        this.state = {
            personList : []
        }
    }

    componentDidMount(){
        this.getPersonList();
    }

    getPersonList = () => {
        getApi('users/').then((res)=>{
            if(res.status === 200){
                this.setState({personList : res.data},()=>console.log(this.state.personList))
            }
        })
    }

    render(){
        return (
            <div className="container">
                <h1>Person List</h1>
                <table className="person_list_table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>Website</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.personList.map((i, index) => {
                            return (
                                <tr key={`keys_${i.id}_${index}`}>
                                    <td>{i.name}</td>
                                    <td>{i.phone}</td>
                                    <td>{i.email}</td>
                                    <td>{i.website}</td>
                                    <td>{i.address ? i.address.street + ' ' + i.address.city + ' - ' + i.address.zipcode : null}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default PersonList