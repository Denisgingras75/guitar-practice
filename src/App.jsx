import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Practice from './pages/Practice.jsx';
import Battle from './pages/Battle.jsx';
import History from './pages/History.jsx';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header className="header">
          <div className="header-left">
            <span className="logo">&#127908;</span>
            <h1 className="title">FREESTYLE BATTLE</h1>
          </div>
          <nav className="nav-links">
            <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Home</NavLink>
            <NavLink to="/practice" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Practice</NavLink>
            <NavLink to="/battle" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Battle</NavLink>
            <NavLink to="/history" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>History</NavLink>
          </nav>
        </header>
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/battle" element={<Battle />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
