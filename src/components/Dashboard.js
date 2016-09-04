import React from 'react';

const Dashboard = (props) => {
  return (
    <div>
      <p>You made it to the secret area!</p>
      <button onClick={props.handleLogout}>Log out</button>
    </div>
  )
}

export default Dashboard;
