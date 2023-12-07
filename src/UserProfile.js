import React from 'react';

const UserProfile = ({name, age}) => {

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default UserProfile;
