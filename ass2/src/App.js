
import React from 'react';
import UserProfile from './UserProfile';

const App = () => {
  const user = {
    name: 'John Doe',
    age: 28,
    location: 'New York',
    bio: 'Software developer and tech enthusiast.'
  };

  return (
    <div>
      <h1>User Information</h1>
      <UserProfile 
        name={user.name} 
        age={user.age} 
        location={user.location} 
        bio={user.bio} 
      />
    </div>
  );
}

export default App;
