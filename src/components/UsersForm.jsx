import React, { useEffect, useState } from "react";
import axios from "axios";

const UsersForm = ({ getUsers, userSelected, deselectedUser }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");

  useEffect(() => {
    if (userSelected !== null) {
      setFirstName(userSelected.first_name);
      setLastName(userSelected.last_name);
      setEmail(userSelected.email);
      setPassword(userSelected.password);
      setBirthday(userSelected.birthday);
    }
  }, [userSelected]);

  const reset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setBirthday("");
  };

  const submit = (e) => {
    e.preventDefault();
    const users = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      birthday: birthday,
    };
    if (userSelected !== null) {
      axios
        .put(
          `https://users-crud1.herokuapp.com/users/${userSelected.id}/`,
          users
        )
        .then(() => {
          getUsers();
          reset();
          deselectedUser();
        });
    } else {
      console.log(users);
      axios.post("https://users-crud1.herokuapp.com/users/", users).then(() => {
        getUsers();
        reset();
      });
    }
  };
  return (
    <div>
      <form onSubmit={submit}>
        <h2>Form</h2>
        <div>
          <label htmlFor="firstName">First Name </label>
          <br />
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name </label>
          <br />
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email </label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password </label>
          <br />
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="birthday">Birthday </label>
          <br />
          <input
            type="date"
            name="birthday"
            id="birthday"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />
        </div>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#000000"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="9" cy="7" r="4" />
            <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            <path d="M16 11h6m-3 -3v6" />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default UsersForm;
