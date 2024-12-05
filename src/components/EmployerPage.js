import React from "react";
import { Link } from 'react-router-dom';

import '../styles/EmployerPage.css';


const EmployerPage = () => {
  return (
    <div className="page">
      <h2>Employer Page</h2>
      <div>
      <h2>Employer Page</h2>
      <p>Welcome, Employer! Your data goes here.</p>
      <Link to="/">Back to Welcome</Link>
      </div>
      <p>Wallet connected: 0x3r...456</p>
      <p>Wallet Balance: 300 ETH</p>

      <div className="card">
        <p>Info on Employee 0x3r...123</p>
        <p>Tokens: 100 ETH (Vest: 60 ETH, left 40 ETH)</p>
        <p>Duration: 12 months</p>
      </div>

      <div className="progress">
        <div className="progress-bar" style={{ width: "60%" }}></div>
      </div>

      <div className="action-buttons">
        <button className="action-button">Creating Vesting Contract</button>
        <button className="action-button gray">Edit Contract</button>
        <button className="action-button red">Cancel Contract</button>
      </div>

      <a href="/" className="link">Add Support | View Transactions History</a>
    </div>
  );
};

export default EmployerPage;
