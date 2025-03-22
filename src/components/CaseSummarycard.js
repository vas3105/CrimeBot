import React from 'react';

const CaseSummarycard = ({ title, status, count }) => (
  <div className="case-summary-card">
    <h3>{title}</h3>
    <p>Status: {status}</p>
    <p>Count: {count}</p>
  </div>
);

export default CaseSummarycard;