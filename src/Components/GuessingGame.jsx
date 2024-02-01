import React, { useState, useEffect } from "react";
import "./GuessingGame.css";

const GuessingGame = () => {
  const [secretNumber, setSecretNumber] = useState(generateRandomNumber());
  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState("");
  const [attempts, setAttempts] = useState(0);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  useEffect(() => {
    setSecretNumber(generateRandomNumber());
    setGuess("");
    setFeedback("");
    setAttempts(0);
  }, [secretNumber]);

  const handleInputChange = (event) => {
    setGuess(event.target.value);
  };

  const handleGuess = () => {
    const userGuess = parseInt(guess, 10);

    if (isNaN(userGuess)) {
      setFeedback("Please enter a valid number.");
    } else {
      setAttempts(attempts + 1);

      if (userGuess === secretNumber) {
        setFeedback(
          `Congratulations! You guessed the number in ${attempts} attempts.`
        );
      } else if (userGuess < secretNumber) {
        setFeedback("Too low. Try again!");
      } else {
        setFeedback("Too high. Try again!");
      }
    }
  };

  return (
    <div className="guessing-game">
      <p>Can you guess the secret number between 1 and 100?</p>
      <input
        type="text"
        value={guess}
        onChange={handleInputChange}
        placeholder="Enter your guess"
      />
      <button onClick={handleGuess}>Submit Guess</button>
      <p className="feedback">{feedback}</p>
    </div>
  );
};

export default GuessingGame;
