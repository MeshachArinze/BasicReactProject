import React from "react";

const Square = (props) => {
  return (
    <div
      className={props.value ? "btn disabled" : "btn"}
      onClick={props.onClick}
    ></div>
  );
};

export default Square;
