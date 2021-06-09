import { useState } from 'react';
//import styles from './App.module.css';

import UserForm from './components/User/UserForm';
import UserList from './components/User/UserList';

const DUMMY_USERS = [
  {
    name: 'billy',
    age: 10,
    id: Math.random().toString()
  },
  {
    name: 'aaron',
    age: 12,
    id: Math.random().toString()
  }
];

const App = function () {
  const [users, setUsers] = useState(DUMMY_USERS);
  const addUserHandler = (user) => {
    setUsers(prevUsers => {
      return [user, ...prevUsers]
    })
  }
  return (
    <>
      <UserForm onAddUser={addUserHandler}/>
      <UserList items={users}/>
    </>
  );
}

export default App;
