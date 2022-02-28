import logo from './assets/logo.png';
import './App.css';
import { Routes, Route, Router, Outlet, Link } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Preferences from './components/preferences/Preferences';
import Home from './components/home/Home';
import About from './components/about/About';

export default function App() {
  return (
    <div className="App">
      <h1>Tillyvivor!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/preferences" element={<Preferences />} />
        <Route path="/a7893217" element={<Dashboard />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}