import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/WelcomePage.css'; // Ensure this path matches your folder structure
import logo from '../assets/vesto-logo.png'; // Add the logo to an `assets` folder

function WelcomePage() {
  const navigate = useNavigate();

  const handleEmployeeLogin = () => {
    navigate('/employee');
  };

  const handleEmployerLogin = () => {
    navigate('/employer');
  };

  return (
    <div className="welcome-page">
      <img src={logo} alt="Vesto Wallet Logo" className="logo" />
      <h1>Welcome to Vesting App</h1>
      <p>Please select your role to continue:</p>
      <div className="button-container">
        <button className="action-button" onClick={handleEmployeeLogin}>
          Employee Login
        </button>
        <button className="action-button orange" onClick={handleEmployerLogin}>
          Employer Login
        </button>
      </div>
    </div>
  );
}

export default WelcomePage;
