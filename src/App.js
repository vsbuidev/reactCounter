import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import GuessingGame from "./Components/GuessingGame";
import TicTacToe from "./Components/TicTacToe";
import Counter from "./Components/Counter";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <h1 className="app-heading">React Apps using State and Router</h1>
        <nav className="menu">
          <ul>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
            <li>
              <Link to="/guessing-game">Guessing Game</Link>
            </li>
            <li>
              <Link to="/tic-tac-toe">Tic Tac Toe</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/counter" element={<Counter />} />
          <Route path="/guessing-game" element={<GuessingGame />} />
          <Route path="/tic-tac-toe" element={<TicTacToe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
