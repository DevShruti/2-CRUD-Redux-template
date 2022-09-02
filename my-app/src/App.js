import React from 'react';
import "./App.css";
import { useSelector } from "react-redux";


function App() {
  const userList = useSelector((state) => state.users.value);
  return (
    
    
    <div className="displayUsers">
      {userList.map((user) => {
        return (
          <div>
            <h1> {user.name}</h1>
            </div>
  );
})};
</div>
  )}

export default App;
