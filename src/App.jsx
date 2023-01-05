import React, { useState } from 'react';
import Login from './components/Pages/LoginPages/Login';
import Home from './components/Pages/Homepage/Homepage'
import SingleSet from './components/Pages/OneSet/SingleSet';
import './App.css';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
      <Router>
        <div>
            <Routes>
              
              <Route 
                path="/login" 
                element={<Login />} 
              />
              <Route 
                path="/home" 
                element={<Home />} 
              />
              <Route 
                path="/singleSet" 
                element={<SingleSet/>} 
              />
            </Routes>
        </div>
      </Router>

  );
}

export default App;
