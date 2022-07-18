import React, { useState } from 'react';
import axios from 'axios';

const UsersForm = ({getUsers}) => {

const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [birthday, setBirthday] = useState("");

const submit = (e)=> {
    e.preventDefault();
    const users = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        birthday: birthday
    }
    console.log(users);
           axios.post('https://users-crud1.herokuapp.com/users/', users)
                .then(() => getUsers());
 }
    return (
        <div>
            <form onSubmit={submit}>
                <h2>Form</h2>
                <div>
                <label htmlFor="firstName">First Name </label>
                <input type="text" name="firstName" id="firstName" value={firstName}
                onChange={e => setFirstName(e.target.value)}/>    
                </div>
                <div>
                <label htmlFor="lastName">Last Name </label>
                <input type="text" name="lastName" id="lastName" value={lastName}
                onChange={e => setLastName(e.target.value)}/>    
                </div>
                <div>
                <label htmlFor="email">Email </label>
                <input type="email" name="email" id="email" value={email}
                onChange={e => setEmail(e.target.value)}/>    
                </div>
                <div>
                <label htmlFor="password">Password </label>
                <input type="password" name="password" id="password" value={password}
                onChange={e => setPassword(e.target.value)}/>    
                </div>
                <div>
                <label htmlFor="birthday">Date of Birth </label>
                <input type="date" name="birthday" id="birthday" value={birthday}
                onChange={e => setBirthday(e.target.value)}/>    
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default UsersForm;