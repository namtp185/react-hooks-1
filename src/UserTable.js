import React, {Component, useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

export const UserTable = (props) => {

  const [ user, setUser ] = useState(props.currentUser);
  const emailRef = useRef();
  const nameRef = useRef();

  const test = () => {
    // `current` points to the mounted text input element
    if(!nameRef.current) {
      return;
    }
    // console.log(ReactDOM.findDOMNode(nameRef.current));
    ReactDOM.findDOMNode(nameRef.current).setAttribute('value', 'hihi'); // nameRef.current.value = 'hihi'
  };

  // const user = {
  //   id: null,
  //   email: "hihi@gmail.com",
  //   name: "hihi"
  // }
  const handleInputChange = event => {
    const { name, value } = event.target;
    console.log(event.target);
    console.log(name, value);
    setUser({ ...user, [name]: value });
  }
  
  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
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

  const fillText = (user) => {
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
        {props.users.length > 0 ? (
          props.users.map(user => (
            <tr key={user.id} onClick={fillText(user)}>
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
  props.updateUser(user.id, user);
}}
>
<label>Email</label>
<input ref={emailRef} type="text" name="email" value={user.email} onChange={handleInputChange} />
<label>Name</label>
<input ref={nameRef} type="text" name="name" value={user.name} onChange={handleInputChange} />
<button>Edit user</button>
<button onClick={test()}>Test</button>
</form>
</div>
  )
}