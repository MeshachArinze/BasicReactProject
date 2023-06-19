/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import  { useContext } from "react";
import { AppContext } from "./context";

const GameOver: () => JSX.Element = () => {
  const { currAttempt, gameOver, correctWord } = useContext(
    AppContext
  ) as any;
  return (
    <div className="gameOver">
      <h3>
        {gameOver.guessedWord
          ? "You Correctly Guessed the Wordle"
          : "You Failed to Guess the Word"}
      </h3>
      <h1>Correct Word: {correctWord}</h1>
      {gameOver.guessedWord && (
        <h3>You guessed in {currAttempt.attempt} attempts</h3>
      )}
    </div>
  );
};

export default GameOver;
