import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CategoryNav from './components/CategoryNav.jsx';
import Home from './pages/Home.jsx';
import Scales from './pages/Scales.jsx';
import Modes from './pages/Modes.jsx';
import Chords from './pages/Chords.jsx';
import Techniques from './pages/Techniques.jsx';
import Guitarists from './pages/Guitarists.jsx';
import Routines from './pages/Routines.jsx';
import Tuner from './pages/Tuner.jsx';
import SkillTrees from './pages/SkillTrees.jsx';
import Charts from './pages/Charts.jsx';
import Jam from './pages/Jam.jsx';
import Metronome from './pages/Metronome.jsx';
import CheatSheet from './pages/CheatSheet.jsx';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header className="header">
          <h1 className="title">Guitar Practice</h1>
        </header>
        <CategoryNav />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/scales" element={<Scales />} />
            <Route path="/modes" element={<Modes />} />
            <Route path="/chords" element={<Chords />} />
            <Route path="/techniques" element={<Techniques />} />
            <Route path="/guitarists" element={<Guitarists />} />
            <Route path="/skills" element={<SkillTrees />} />
            <Route path="/practice" element={<Routines />} />
            <Route path="/tuner" element={<Tuner />} />
            <Route path="/charts" element={<Charts />} />
            <Route path="/jam" element={<Jam />} />
            <Route path="/metronome" element={<Metronome />} />
            <Route path="/cheatsheet" element={<CheatSheet />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
