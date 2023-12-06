import React from 'react';
import UserProfile from './UserProfile';
import './App.css';

function App() {
  return (
    <div>
      <UserProfile  name="Daniel Torres"  age={40} />
      <UserProfile name="Miguel Cervantes" age={50} />
    </div>
  );
}

export default App;
