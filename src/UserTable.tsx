import React, { useState, useEffect, useRef, MouseEvent, ChangeEvent, useLayoutEffect } from "react";
import ReactDOM from "react-dom";
import User from "./User";
import { UserProps } from './UserProps';

export const UserTable = ({users, currentUser, updateUser} : UserProps) => {

  const [ user, setUser ] = useState<User>(currentUser);
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  const test = (event: MouseEvent<HTMLButtonElement>) => {
    // `current` points to the mounted text input element
    console.log(event.target);
    if(!nameRef.current) {
      return;
    }
    console.log(ReactDOM.findDOMNode(nameRef.current));
    // ReactDOM.findDOMNode(nameRef.current).setAttribute('value', 'hihi'); // nameRef.current.value = 'hihi'
  };

  // const user = {
  //   id: null,
  //   email: "hihi@gmail.com",
  //   name: "hihi"
  // }
  const handleInputChange = (event : ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    console.log(name, value);
    // console.log(event.currentTarget.name);
    setUser({ ...user, [name]: value });
    console.log(user);
    // console.log(event.target);
    // console.log(name, value);
  }
  
  useEffect(
    () => {
      setUser(currentUser)
    },
    [ {currentUser} ]
  );

  // https://linguinecode.com/post/how-to-use-react-useref-with-typescript
  useLayoutEffect(() => {
    console.log(emailRef);
    console.log(nameRef);
  });

  // const addUser = (user) => {
  //   console.log(user);
  //   setUser({...user, user})
  // }

  // const getUsers = () => {
  //   // console.log(users);
  // }

  const fillText = (user : User) => {
    // console.log(user);
    // console.log(emailRef);
    if(emailRef.current !== null) {
      emailRef.current.value = user.email;
    }
    if(nameRef.current !== null) {
      nameRef.current.value = user.name;
    }
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
<input ref={emailRef} type="text" name="email" defaultValue={user.email} onChange={(e : ChangeEvent<HTMLInputElement>) => handleInputChange(e)} />
<label>Name</label>
<input ref={nameRef} type="text" name="name" defaultValue={user.name} onChange={handleInputChange} />
<button>Edit user</button>
<button onClick={(e : MouseEvent<HTMLButtonElement>) => test(e)}>Test</button>
</form>
</div>
  )
}