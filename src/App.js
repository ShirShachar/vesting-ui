import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import EmployeePage from "./components/EmployeePage";
import EmployerPage from "./components/EmployerPage";
import "./styles.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<EmployeePage />} />
        <Route path="/employer" element={<EmployerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
