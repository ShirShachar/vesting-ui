import React from 'react';
import '../styles/Header.css';


function Header() {
  return (
    <header className="header">
      <button className="back-button" onClick={() => window.history.back()}>Back</button>
      <h1>Vesting App</h1>
    </header>
  );
}

export default Header;
