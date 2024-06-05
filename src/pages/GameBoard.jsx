import React, { useState } from "react";
import Gaming from "./Gaming";

function GameBoard() {
  const [gameStarted, setGameStarted] = useState(false);
  const [gridSize, setGridSize] = useState("4x4"); // default grid size

  const handleClickStartGame = () => {
    console.log("Start");
    setGameStarted(true);
    document.body.style.backgroundColor = "#FFF";
  };

  return (
    <div>
      {gameStarted ? (
        <Gaming gridSize={gridSize} />   
      ) : (
        <div>
          <h1>Memory Game</h1>
          <div className="main-app-wrapper">
            <div className="Select-Theme">
              <label>Select Theme</label>
              <div className="btn-wrapper">
                <button className="active">Numbers</button>
                <button>Icons</button>
              </div>
            </div>
            <div className="num-players">
              <label>Numbers of Players</label>
              <div className="btn-wrapper">
                <button className="active">1</button>
                <button>2</button>
                <button>2</button>
                <button>3</button>
              </div>
            </div>
            <div className="grid-size">
              <label>Grid Size</label>
              <div className="btn-wrapper">
                <button className={gridSize === "4x4" ? "active" : ""} onClick={() => setGridSize("4x4")}>4x4</button>
                <button className={gridSize === "6x6" ? "active" : ""} onClick={() => setGridSize("6x6")}>6x6</button>
              </div>
            </div>
            <button className="start" onClick={handleClickStartGame}>
              Start Game
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default GameBoard;
