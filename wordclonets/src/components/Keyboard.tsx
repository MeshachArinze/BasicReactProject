/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import  { useCallback, useEffect, useContext } from "react";
import Key from "./Key";
import { AppContext } from "./context";

function Keyboard() {
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const {
    disabledLetters,
    gameOver,
    onSelectLetter,
    onEnter,
    onDelete,
  } = useContext(AppContext);

  const handleKeyboard = useCallback(
    (event) => {
      if (gameOver.gameOver) return;
      if (event === "Enter") {
        onEnter();
      } else if (event.key === "Backspace") {
        onDelete();
      } else {
        keys1.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
        keys2.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
        keys3.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
      }
    },
    [gameOver.gameOver, keys1, keys2, keys3, onDelete, onEnter, onSelectLetter]
  );
  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  console.log(disabledLetters);
  return (
    <div className="keyboard" onKeyDown={handleKeyboard}>
      <div className="line1">
        {keys1.slice().map((key, index) => {
          return <Key key={index} keyVal={key} disabled={disabledLetters.includes(key)} bigKey={undefined} />;
        })}
      </div>
      <div className="line2">
        {keys2.slice().map((key, index) => {
          return <Key key={index} keyVal={key} disabled={disabledLetters.includes(key)} bigKey={undefined} />;
        })}
      </div>
      <div className="line3">
        <Key keyVal={"ENTER"} bigKey disabled={undefined} />
        {keys3.slice().map((key, index) => {
          return <Key key={index} keyVal={key} disabled={disabledLetters.includes(key)} bigKey={undefined} />;
        })}
        <Key keyVal={"DELETE"} bigKey disabled={undefined} />
      </div>
    </div>
  );
}

export default Keyboard;
