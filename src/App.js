import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ProvinceDetails from './Pages/Detials';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/province/:provinceName" element={<ProvinceDetails />} />
    </Routes>
  </Router>
);

export default App;
