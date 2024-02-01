import React from "react";
// import Counter from "./Components/Counter";
// import GuessingGame from "./Components/GuessingGame";
import TicTacToe from "./Components/TicTacToe";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* <h1 className="app-heading">Tic Tac Toe</h1> */}
      <TicTacToe />
      {/* <GuessingGame />
      <br></br>
      <h1 className="app-heading">Counter Section</h1>
      <Counter /> */}
    </div>
  );
}

export default App;
