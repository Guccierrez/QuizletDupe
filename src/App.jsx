import React, { useState } from "react";
import Login from "./components/Pages/Login";
import Home from "./components/Pages/Home";
import SingleSet from "./components/Pages/SingleSet";
import SingleCard from "./components/Pages/SingleCard"
import Nav from "./components/Nav/Index";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Routes>
          <Route path="/loginPages" element={<Login />} />
          <Route path="/singleSet" element={<SingleSet />} />
          <Route  path="/home" element={<Home />} />
          <Route  path="/singleSet/:id" element={<SingleCard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
