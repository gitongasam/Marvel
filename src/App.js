import React from 'react';
import './Components/style.css';
import { Main } from './Components/Main';
import { Movies } from './Components/Movies'; // Adjusted import statement
import { Comics } from './Components/Comics';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <header>
        <nav>
        <h1 className="navbar-title">Marvel App</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
            <li>
              <Link to="/comics">Comics</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/comics" element={<Comics />} />
      </Routes>
    </Router>
  );
}

export default App;
