import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function User() {
    const notverf = "❌";
    const verf = "✔️";
    const [users, setUsers] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/auths/getusers');
                if (Array.isArray(response.data.users)) {
                    setUsers(response.data.users);
                } else {
                    console.error('Invalid users data:', response.data);
                }
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);
    
    const handleDelete = async (userId) => {
        try {
            // Make delete request to your API endpoint passing the userId to be deleted
            await axios.delete(`http://localhost:8000/api/auths/deleteuser/${userId}`);
            // After successful deletion, fetch users again to update the list
            const response = await axios.get('http://localhost:8000/api/auths/getusers');
            setUsers(response.data.users);
               
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };
    const totalUsers = users ? users.length : 0;
    return (
        <>
            <Wrapper>
                <center>
                    <h2>User : {totalUsers}</h2>
                    <br /><br /><br />
                    <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <th>User</th>
                                <th>Email ID</th>
                                <th>Verification</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users !== null && users.map(user => (
                                <tr key={user?._id}>
                                    <td>{user?.username}</td>
                                    <td>{user?.email}</td>
                                    <td>{user.isVerified ? verf : notverf}</td>
                                    <td><button disabled={user.isAdmin} className={user.isAdmin ? 'grey' : 'red'} onClick={() => handleDelete(user._id)}>Delete</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
                </center>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.section`
    .red {
        outline: none;
        border: none;
        border-radius: 12px;
        padding: 13px 20px;
        background-color: red;
        color: white;
    }
    .grey {
        outline: none;
        border: none;
        border-radius: 12px;
        padding: 13px 20px;
        background-color: grey;
        color: white;
    }

    table {
        border-collapse: collapse;
        width: 70%;
        overflow-y: scroll;
    }

    th, td {
        padding: 10px;
        text-align: center;
    }

    th {
        background-color: rgba(98, 84, 243, 2);
        color: white;
        font-size: large;
        letter-spacing: 2px;
    }

    td {
        font-size: medium;
        border-bottom: 1px solid black;
    }
    @media screen and (max-width: 500px) {
        .table{
         overflow-x: scroll;
        }
       }
`;

export default User;
