import React from 'react';
import Survey from './Survey';

const Dashboard = (props) => {
  return (
    <div>
      <p>You made it to the secret area!</p>
      <button onClick={props.handleLogout}>Log out</button>
      <Survey user={props.user} />
    </div>
  )
}

export default Dashboard;
