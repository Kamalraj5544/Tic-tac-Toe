import React from "react";
import "./PlayerBoard.css";

const PlayerScores = ({ xScore, oScore }) => {
  return (
    <div className="scoreBoard">
      <p className="xplayer">
        <b className="x">X </b> Player Score :{" "}
        <span className="x">{xScore}</span>
      </p>
      <p className="oplayer">
        <b className="o">O </b> Player Score :{" "}
        <span className="o">{oScore}</span>
      </p>
    </div>
  );
};

export default PlayerScores;
