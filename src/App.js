import { useState } from "react";
import "./App.css";
import Borad from "./Components/Borad";
import PlayerScores from "./Components/PlayerScores";
import Reset from "./Components/Reset";

function App() {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [board, setBoard] = useState(Array(9).fill(null));
  const [Xplaying, setXplaying] = useState(true);
  const [gameOver, setgameOver] = useState(false);
  const [scores, setscores] = useState({
    Xscore: 0,
    Oscore: 0,
  });

  const handleBoxClick = (BoxIndex) => {
    // 1. Update borad
    const updatedBoard = board.map((ele, index) => {
      if (ele === null && index === BoxIndex) {
        return Xplaying ? "X" : "O";
      } else {
        return ele;
      }
    });

    setBoard(updatedBoard);

    console.log(Xplaying, board);

    // 2. Check winner and add scores
    const winner = CheckWinner(updatedBoard);

    if (winner === "X") {
      let copyScores = scores;
      copyScores.Xscore += 1;
      setscores({
        ...scores,
        copyScores,
      });
      console.log(scores.Xscore);
    } else if (winner === "O") {
      let copyScores = scores;
      copyScores.Oscore += 1;
      setscores({
        ...scores,
        copyScores,
      });
      console.log(scores.Oscore);
    }

    console.log(winner);

    // 3. change player
    setXplaying(!Xplaying);
    console.log(Xplaying);
  };

  const CheckWinner = (board) => {
    for (let i = 0; i < winConditions.length; i++) {
      const [a, b, c] = winConditions[i];

      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        setgameOver(true);
        return board[a];
      }
    }
  };

  const reset = () => {
    setgameOver(false);
    setXplaying(true);
    setBoard(Array(9).fill(null));
  };

  return (
    <div className="App">
      <header>
        <h1>Tic-Tac-Toe</h1>
      </header>
      <PlayerScores xScore={scores.Xscore} oScore={scores.Oscore} />
      <Borad board={board} onclick={gameOver ? reset : handleBoxClick} />
      <Reset reset={reset} />
    </div>
  );
}

export default App;
