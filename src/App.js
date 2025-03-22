// App.js
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/sidebar';
import CaseSummaryCard from './components/CaseSummarycard';
import Chatbot from './components/Chatbot';
import CaseList from './components/CaseList';
import Login from './components/Login';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      {!loggedIn ? (
        <Login onLogin={() => setLoggedIn(true)} />
      ) : (
        <div>
          <Navbar onLogout={() => setLoggedIn(false)} />
          <Sidebar />
          <div className="content">
            <h1>User Dashboard</h1>
            <div className="summary-cards">
              <CaseSummaryCard title="Pending Cases" status="Pending" count={5} />
              <CaseSummaryCard title="Closed Cases" status="Closed" count={8} />
              <CaseSummaryCard title="Active Cases" status="Active" count={15} />
            </div>
            <CaseList />
            <Chatbot />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

