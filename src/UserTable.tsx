import React, { useState, useEffect, useRef, MouseEvent } from "react";
import User from "./User";
import { UserProps } from './UserProps';

export const UserTable = ({users, currentUser, updateUser} : UserProps) => {

  const [ user, setUser ] = useState(currentUser);
  const emailRef = useRef(null);
  const nameRef = useRef(null);

  const test = () => {
    // `current` points to the mounted text input element
    if(!nameRef.current) {
      return;
    }
    // console.log(ReactDOM.findDOMNode(nameRef.current));
    // ReactDOM.findDOMNode(nameRef.current).setAttribute('value', 'hihi'); // nameRef.current.value = 'hihi'
  };

  // const user = {
  //   id: null,
  //   email: "hihi@gmail.com",
  //   name: "hihi"
  // }
  const handleInputChange = (event : MouseEvent<HTMLInputElement>) => {
    // const { name, value } = event.target;
    console.log(event.target);
    // console.log(name, value);
    // setUser({ ...user, [name]: value });
  }
  
  useEffect(
    () => {
      setUser(currentUser)
    },
    [ {currentUser} ]
  );

  useEffect(() => {

  });

  // const addUser = (user) => {
  //   console.log(user);
  //   setUser({...user, user})
  // }

  // const getUsers = () => {
  //   // console.log(users);
  // }

  const fillText = (user : User) => {
    console.log(user);
    // console.log(emailRef);
    // emailRef.value = user.email;
    // input.value = user.email;
  }

  return (
    <div>
    <table>
      <thead>
        <tr>
          <th>email</th>
          <th>name</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
        {users.length > 0 ? (
          users.map((user : User) => (
            <tr key={user.id} onClick={() => fillText(user)}>
              <td>{user.email}</td>
              <td>{user.name}</td>
              <td>
                {/* <button onClick={props.action({user})}>
                </button> */}
                
                {/* <button onClick={props.addUser(user)}>

                </button> */}
                {/* <button onClick={getUsers}>

                </button> */}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <th>No users</th>
          </tr>
        )
        }
      </tbody>
    </table>

<form id="userForm"
onSubmit={event => {
  // props.addUser(user);
  event.preventDefault();
  updateUser(user.id, user);
}}
>
<label>Email</label>
<input ref={emailRef} type="text" name="email" value={user.email} onChange={() => handleInputChange} />
<label>Name</label>
<input ref={nameRef} type="text" name="name" value={user.name} onChange={() => handleInputChange} />
<button>Edit user</button>
<button onClick={() => test}>Test</button>
</form>
</div>
  )
}