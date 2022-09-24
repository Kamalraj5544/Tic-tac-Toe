import React from "react";
import Box from "./Box";
import "./Board.css";

const Borad = ({ board, onclick }) => {
  return (
    <div className="allBoxes">
      {board.map((ele, index) => {
        return <Box value={ele} onclick={() => onclick(index)} />;
      })}
    </div>
  );
};

export default Borad;
