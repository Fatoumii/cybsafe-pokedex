import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { PokemonDetail } from './components/PokemonDetail';

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/profile/:name" element={<PokemonDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
