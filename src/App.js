import React from "react";
import Counter from "./Components/Counter";
import GuessingGame from "./Components/GuessingGame";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1 className="app-heading">Game Section</h1>
      <GuessingGame />
      <br></br>
      <h1 className="app-heading">Counter Section</h1>
      <Counter />
    </div>
  );
}

export default App;
