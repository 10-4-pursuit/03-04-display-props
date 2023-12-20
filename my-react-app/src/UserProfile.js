import React from 'react'

const UserProfile = (props) => {
  return (
    <div>
        <p>Username: {props.username}</p>
        <p>Age: {props.age}</p>
    </div>
  )
}

export default UserProfile