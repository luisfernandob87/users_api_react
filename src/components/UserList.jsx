import React from 'react';

const UserList = ({ users }) => {


    return (
        <ul>
            <h2>Usuarios</h2>
            {users.map((user)=> (
                <li key={user.id}>
                <h3>{user.first_name}  {user.last_name}</h3>
                <p>{user.email}</p>
                <p>{user.birthday}</p>
                <button>delete</button>
                <button>edit</button>
                </li> 
            ))}

           
        </ul>
    );
};

export default UserList;