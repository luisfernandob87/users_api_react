import React from 'react';

const UserList = ({ users, selectUser, deleteUser }) => {


    return (
        <ul>
            <h2>Users</h2>
            {users.map((user)=> (
                <li key={user.id}>
                    <div className='data'>
                        <h3>Name: {user.first_name}  {user.last_name}</h3>
                        <p>Email: {user.email}</p>
                        <p>Birthday: {user.birthday}</p>
                    </div>
                    <div className='button'>
                        <button onClick={()=> deleteUser(user.id)}><img src="/src/delete.svg" alt="" /></button>
                        <button onClick={()=> selectUser(user)}><img src="/src/edit.svg" alt="" /></button>
                    </div>
                </li> 
            ))}     
        </ul>
    );
};

export default UserList;