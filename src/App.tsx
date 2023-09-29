import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Pokemon, Pokemons } from "./pages/index"

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/pokemons/:name' element={<Pokemon />} />
          <Route path='/pokemons' element={<Pokemons />} />
          <Route path='/' element={<Pokemons />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
