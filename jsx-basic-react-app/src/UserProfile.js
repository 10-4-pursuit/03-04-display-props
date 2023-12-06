import React from 'react';
const UserProfile = (props) => {

    const greeting = "Hello my name is ";
    const age = " and I am ";
    const years = " years old";
    return (
        <div>
            <h1>User Profile</h1>
            <p>{greeting} {props.name}</p>
            <p>{age} {props.age} {years}</p>
        </div>
    );
}

export default UserProfile