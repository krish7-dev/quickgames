import './App.css';
import {Routes,BrowserRouter as Router,Route } from "react-router-dom";
import Home from './Home'
import Minesweeper from './minesweeper/Minesweeper'
import Hangman from './hangman/Hangman';
function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/minesweeper" element={<Minesweeper/>} />
          <Route exact path="/hangman" element={<Hangman/>} />
        </Routes>
    </Router>
  );
}

export default App;
