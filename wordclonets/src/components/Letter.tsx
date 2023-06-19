/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect } from "react";
import { AppContext } from "./context";

function Letter({
  letterPos,
  attemptVal,
}: {
  letterPos: number;
  attemptVal: number;
}): JSX.Element {
  const { board, setDisabledLetters, currAttempt, correctWord } =
    useContext(AppContext) as any;
  const letter = board[attemptVal][letterPos];
  const correct = correctWord.toUpperCase()[letterPos] === letter;
  const almost =
    !correct && letter !== "" && correctWord.toUpperCase().includes(letter);
  const letterState =
    currAttempt.attempt > attemptVal &&
    (correct ? "correct" : almost ? "almost" : "error") ;

  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      console.log(letter);
      setDisabledLetters((prev: never) => [...prev, letter]);
    }
  }, [almost, correct, currAttempt.attempt, letter, setDisabledLetters]);
  return (
    <div className="letter" id={letterState }>
      {letter}
    </div>
  );
}

export default Letter;
