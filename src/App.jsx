import React, { useEffect, useState } from "react";
import './App.css'
import Home from './pages/home'
import Chart from './pages/chart'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./pages/notfound";
import Customer from "./pages/customer";
import Orders from "./pages/orders";

function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<Home/ >}/>
          <Route path="/chart" element={<Chart/ >}/>
          <Route path="/customer" element={<Customer/ >}/>
          <Route path="/orders" element={<Orders />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>

    </>
  )
}

export default App

