import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import WelcomePage from './components/WelcomePage';
import EmployeePage from './components/EmployeePage';
import EmployerPage from './components/EmployerPage';

function App() {
  console.log('App is rendering');

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/employee" element={<EmployeePage />} />
          <Route path="/employer" element={<EmployerPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
