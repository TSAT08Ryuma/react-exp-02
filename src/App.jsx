import React, { useEffect, useState } from "react";
import './App.css'
import Home from './pages/home'
import Chart from './pages/chart'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<Home/ >}/>
          <Route path="/chart" element={<Chart/ >}/>
          <Route path="/" element={<Home/ >}/>
        </Routes>
        </Router>

    </>
  )
}

export default App

