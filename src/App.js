import React, { useState } from 'react';
import UserProfile from './UserProfile';

const App = () => {
  const [userData, setUserData] = useState({
    username: "briap14",
    age: 23,
    location: 'Brooklyn',
    email: 'briannaperalta@pursuit.org',
  });

  const handleDataChange = () => {
    setUserData({
      username: 'amarim01',
      age: 27,
      location: 'Miami',
      email: 'amarimartin01@gmail.com',
    });
  };

  return (
    <div>
      <h1>Welcome To My React App</h1>
      <UserProfile 
      username={userData.username} 
      age={userData.age}
      location={userData.location}
      email={userData.email}
      />
      <button onClick={handleDataChange}>Change User Data</button>
    </div>
  );
};


export default App;
