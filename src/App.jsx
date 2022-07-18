import axios from 'axios';
import { useEffect, useState } from 'react'
import './App.css'
import UserList from './components/UserList'
import UsersForm from './components/UsersForm'

function App() {

const [ users, setUsers ] = useState([]);

useEffect(()=>{
  axios.get('https://users-crud1.herokuapp.com/users/')
  .then(res => setUsers(res.data))
}, [])

const getUsers = () =>{
  axios.get('https://users-crud1.herokuapp.com/users/')
  .then(res => setUsers(res.data))
}

  return (
    <div className="App">
      <UsersForm getUsers={getUsers}/>
      <UserList users={users}/>
    </div>
  )
}

export default App
