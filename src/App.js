import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProvinceDetails from './Pages/Detials';
import Home from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <Router>
    <Routes>
      <Route path="/weather-app/" element={<Home />} />
      <Route path="/province/:provinceName" element={<ProvinceDetails />} />
    </Routes>
  </Router>
);
export default App;
