import React from 'react';

const Navbar = ({ onLogout }) => {
  return (
    <nav>
      <h2>User Dashboard</h2>
      <button onClick={onLogout} style={{ width:"auto", backgroundColor: "#e63946"}}>Logout</button>
    </nav>
  );
};

export default Navbar;