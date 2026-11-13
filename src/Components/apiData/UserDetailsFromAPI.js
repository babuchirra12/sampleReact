import React, { useState, useEffect } from 'react';

// Axios
import axios from 'axios';

// React Bootstrap
import { Table } from 'react-bootstrap';

export default function UserDetailsFromAPI() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(function (response) {

                setUsers(response.data)


            })
            .catch(function (e) {
                console.log(e);
            })





        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then((response) => response.json())
        //     .then((result) => console.log("result>>>",result))

    }, [])

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Website</th>
                        <th>Company</th>
                        <th>City</th>
                        <th>Zip</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user.name + index}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.website}</td>
                            <td>{user.company.name}</td>
                            <td>{user.address.city}</td>
                            <td>{user.address.zipcode}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}
