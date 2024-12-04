import React from "react";
import "./styles.css";

const EmployeePage = () => {
  return (
    <div className="page">
      <h2>Employee Page</h2>
      <p>Wallet connected: 0x3r...123</p>
      <div className="progress">
        <div className="progress-bar" style={{ width: "60%" }}></div>
      </div>
      <p>60% vested</p>

      <div className="card">
        <p>Total: 100 ETH</p>
        <p>Vested: 60 ETH</p>
        <p>Locked: 40 ETH</p>
      </div>

      <div className="card">
        <p>Next Vesting:</p>
        <p>Tokens: 10 ETH</p>
        <p>Next Unlock Date: Dec 1, 2024</p>
      </div>

      <button className="action-button">Withdraw Tokens</button>
      <a href="/" className="link">View Transactions History</a>
    </div>
  );
};

export default EmployeePage;
