import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/WelcomePage.css';

function WelcomePage() {
    console.log('WelcomePage is rendering');
    const navigate = useNavigate();
  
    const handleEmployeeLogin = () => {
      navigate('/employee');
    };
  
    const handleEmployerLogin = () => {
      navigate('/employer');
    };
  
    return (
      <div>
        <h1>Welcome to Vesting App</h1>
        <button onClick={handleEmployeeLogin}>Employee Login</button>
        <button onClick={handleEmployerLogin}>Employer Login</button>
      </div>
    );
  }
  
  export default WelcomePage;