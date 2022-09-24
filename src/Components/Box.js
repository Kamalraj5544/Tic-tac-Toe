import React from "react";
import "./Box.css";

const Box = ({ value, onclick }) => {
  const style = value === "X" ? "x" : "o";
  return (
    <div>
      <button id={style} className="box" onClick={onclick}>
        {value}
      </button>
    </div>
  );
};

export default Box;
