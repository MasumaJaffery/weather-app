import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Province from './components/Provinces';
import ProvinceDetails from './pages/detials';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Province />} />
      <Route path="/province/:provinceName" element={<ProvinceDetails />} />
    </Routes>
  </Router>
);

export default App;
