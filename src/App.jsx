import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <h1>Guitar Practice</h1>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
