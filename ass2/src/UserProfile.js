
import React from 'react';

const UserProfile = ({ name, age, location, bio }) => {
  return (
    <div>
      <h2>{name}'s Profile</h2>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Location:</strong> {location}</p>
      <p><strong>Bio:</strong> {bio}</p>
    </div>
  );
}

export default UserProfile;
