import axios from 'axios';
import { useEffect, useState } from 'react'
import './App.css'
import UserList from './components/UserList'
import UsersForm from './components/UsersForm'

function App() {

const [ users, setUsers ] = useState([]);
const [ userSelected, setUserSelected ] = useState(null);

useEffect(()=>{
  axios.get('https://users-crud1.herokuapp.com/users/')
  .then(res => setUsers(res.data))
}, [])

const getUsers = () =>{
  axios.get('https://users-crud1.herokuapp.com/users/')
  .then(res => setUsers(res.data))
}
const selectUser = (user) => {
  setUserSelected(user)
}
const deselectedUser = () => setUserSelected(null);

const deleteUser = (id) => {
  axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
  .then(() => getUsers())
}



  return (
    <div className="App">
      <UsersForm getUsers={getUsers} 
      userSelected={userSelected}
      deselectedUser={deselectedUser}/>
      <UserList users={users} 
      selectUser={selectUser}
      deleteUser={deleteUser}/>
    </div>
  )
}

export default App
