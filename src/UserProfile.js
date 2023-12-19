import React from 'react';

const UserProfile = (props) => {
    return (
        <div>
            <h2>User Profile</h2>
            <p>Username: {props.username}</p>
            <p>Age: {props.age}</p>
            <p>Location: {props.location}</p>
            <p>Email: {props.email}</p>
        </div>
    );
};

export default UserProfile;