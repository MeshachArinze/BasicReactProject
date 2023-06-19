/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AppContext } from "./context";

function Key({ keyVal, bigKey, disabled }: {
    keyVal: any;
    bigKey: any;
    disabled: any;
}): JSX.Element {
  const { gameOver, onSelectLetter, onDelete, onEnter } =
    useContext(AppContext);

  const selectLetter: () => void = () => {
    if (gameOver.gameOver) return;
    // if (keyVal === "ENTER") {
    //   onEnter();
    // } else if (keyVal === "DELETE") {
    //   onDelete();
    // } else {
    //   onSelectLetter(keyVal);
    // }

    switch (keyVal) {
      case "ENTER":
        onEnter();
        break;
      case "DELETE":
        onDelete();
        break;
      default:
        onSelectLetter(keyVal);
        break;
    }
  };
  return (
    <div
      className="key"
      id={bigKey ? "big" : disabled && "disabled"}
      onClick={selectLetter}
    >
      {keyVal}
    </div>
  );
}

export default Key;
