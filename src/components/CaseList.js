import React from 'react';

const mockCases = [
  { id: 1, title: "Case 1", status: "Pending", description: "Description of case 1." },
  { id: 2, title: "Case 2", status: "Closed", description: "Description of case 2." },
  { id: 3, title: "Case 3", status: "Active", description: "Description of case 3." },
];

const CaseList = () => {
  return (
    <div className="case-list">
      <h2>All Cases</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {mockCases.map((caseItem) => (
            <tr key={caseItem.id}>
              <td>{caseItem.title}</td>
              <td>{caseItem.status}</td>
              <td>{caseItem.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CaseList;