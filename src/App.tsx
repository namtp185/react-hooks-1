import React, { useState } from 'react';
import './App.css';
import { UserTable } from './UserTable';
import User from './User';
import { UserProps } from 'UserProps';

let initialUserForm : User = {
  id: 0,
  email: '',
  name: ''
}

let initialUsersState : User[] = [
  {
    id: 1,
    email: "go@gmail.com",
    name: "go"
  },
  {
    id: 2,
    email: "hi@gmail.com",
    name: "hi"
  },
  {
    id: 3,
    email: "go@gmail.com",
    name: "go"
  },
  {
    id: 4,
    email: "hi@gmail.com",
    name: "hi"
  },
  {
    id: 5,
    email: "go@gmail.com",
    name: "go"
  },
  {
    id: 6,
    email: "hi@gmail.com",
    name: "hi"
  },
  {
    id: 7,
    email: "go@gmail.com",
    name: "go"
  },
  {
    id: 8,
    email: "hi@gmail.com",
    name: "hi"
  },
  {
    id: 9,
    email: "go@gmail.com",
    name: "go"
  },
  {
    id: 10,
    email: "hi@gmail.com",
    name: "hi"
  },
];

function App() {

  const [users, setUsers] = useState(initialUsersState);

  const updateUser = (id : number, updatedUser : User) => {
    const new_users : User[] = (users.map(user => (user.id === id ? updatedUser : user)));
    setUsers(new_users);
    return new_users;
	}
  
  const props : UserProps = {users: users, updateUser: updateUser, currentUser: initialUserForm} ;

  return (
    <div className="App">
      <UserTable 
      // users={users} 
      // updateUser={updateUser}
      // currentUser={initialUsersState[0]}
      {...props}
      >

      </UserTable>

    </div>
  );
}

export default App;
