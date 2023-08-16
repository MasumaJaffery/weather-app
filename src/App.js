import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Province from './components/Provinces';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Province />
        <Routes>
          <Route path="/" />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
