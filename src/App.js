import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { UserTable } from './UserTable';

let initialUsersState = [
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

  function addUser(user) {
    user.id = users.length + 1;
    setUsers([...users, user]);
  }

  const updateUser = (id, updatedUser) => {
    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
	}
  

  return (
    <div className="App">
      <UserTable 
      users={users} 
      updateUser={updateUser}
      currentUser={initialUsersState[0]}
      >

      </UserTable>

    </div>
  );
}

export default App;
