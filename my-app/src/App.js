import React from 'react';
import "./App.css";
import { useState } from "react";
import { useSelector , useDispatch } from "react-redux";
import { addUser, deleteUser, updateUsername } from "./features/Users";


function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  return (
    <div className="addUser">
        <input
          type="text"
          placeholder="Name..."
        
        />
        <input
          type="text"
          placeholder="Username..."
          
        />
        <button
          onClick={() => {
            dispatch(
              addUser({
                id: userList[userList.length - 1].id + 1,
                name,
                username,
              })
            );
          }}
        > Add User
        </button>
      
    
    <div className="displayUsers">
      {userList.map((user) => {
        return (
          <div>
            <h1> {user.name}</h1>
            <h1>{user.username}</h1>
            </div>
  );
})};
</div>
</div>
  )}

export default App;
