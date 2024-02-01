import React, { useState } from "react";
import "./TicTacToe.css";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const winner = calculateWinner(board);

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }

    return null;
  }

  const handleClick = (index) => {
    if (winner || board[index]) {
      return;
    }

    const newBoard = board.slice();
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const getStatus = () => {
    if (winner) {
      return `Winner: ${winner}`;
    } else if (board.every((square) => square)) {
      return "It's a draw!";
    } else {
      return `Next player: ${isXNext ? "X" : "O"}`;
    }
  };

  return (
    <div className="tic-tac-toe">
      <h2>Tic Tac Toe</h2>
      <div className="grid">
        {board.map((value, index) => (
          <div
            key={index}
            className={`square ${value}`}
            onClick={() => handleClick(index)}
          >
            {value}
          </div>
        ))}
      </div>
      <div className="status">{getStatus()}</div>
    </div>
  );
};

export default TicTacToe;
