import React from 'react';
import '../personList.scss'

const Person = propps => {
    console.log("props", propps)
    return (
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
                {propps.personList.map((i, index) => {
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
    )
}

export default Person;