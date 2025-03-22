import React from 'react';

const Navbar = ({ onLogout }) => {
  return (
    <nav>
      <h2>User Dashboard</h2>
      <button onClick={onLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;