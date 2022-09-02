import React from 'react';
import "./App.css";



function App() {

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
        <button>
          Add User
        </button>
      </div>
  );
}

export default App;
