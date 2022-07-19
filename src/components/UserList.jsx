import React from 'react';

const UserList = ({ users, selectUser, deleteUser }) => {


    return (
        <ul>
            <h2>Usuarios</h2>
            {users.map((user)=> (
                <li key={user.id}>
                <h3>{user.first_name}  {user.last_name}</h3>
                <p>{user.email}</p>
                <p>{user.birthday}</p>
                <button onClick={()=> deleteUser(user.id)}>delete</button>
                <button onClick={()=> selectUser(user)}>edit</button>
                </li> 
            ))}     
        </ul>
    );
};

export default UserList;