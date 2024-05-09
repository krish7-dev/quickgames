import './App.css';
import {Routes,BrowserRouter as Router,Route } from "react-router-dom";
import Home from './Home'
import Minesweeper from './minesweeper/Minesweeper'
function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/minesweeper" element={<Minesweeper/>} />
        </Routes>
    </Router>
  );
}

export default App;
