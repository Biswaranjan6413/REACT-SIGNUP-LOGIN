import './App.css';
import React from 'react';
import SignupComponent from './SignupComponent';
import LoginComponent from './LoginComponent';
import Dasboard from'./Dashboard';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  
  return (
    <Router>
    <Routes>
  
      <Route path="/" element={<LoginComponent/>} />
      <Route path="/SignupComponent" element={<SignupComponent />} />
      <Route path="/Dashboard" element={<div>Welcome to Dashboard</div>} />
    </Routes>
  </Router>
    
    
);
}

export default App;
