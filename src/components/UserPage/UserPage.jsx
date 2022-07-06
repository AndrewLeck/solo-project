import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h2>Welcome, {user.username}! How can I help you today?</h2>
      <input/>
      <button>Search</button>

      {/* <p>Your ID is: {user.id}</p> */}
      <div>
          <title> Fact of the day </title>
          <p>(API end point will go here to generate a random fact per day)</p>
      </div>
      <div>
          <button>Give Feedback</button>
      </div>
      
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
