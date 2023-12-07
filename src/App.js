import logo from './logo.svg';
import './App.css';
import React from'react';
import { render } from 'react-dom';
import UserProfile from './UserProfile';

function App() {
  return (
    <div>
     <UserProfile username="willdo" age="20" />     
    </div>
  );
}

export default App;
