import React, { useState } from "react";
import Gaming from "./Gaming";

function GameBoard() {
  const [gameStarted, setGameStarted] = useState(false);
  const [gridSize, setGridSize] = useState("4x4");
  const [numPlayers, setNumPlayers] = useState(1);
  const [theme, setTheme] = useState("Numbers");

  const handleClickStartGame = () => {
    console.log("Start");
    setGameStarted(true);
    document.body.style.backgroundColor = "#FFF";
  };

  return (
    <div>
      {gameStarted ? (
        <Gaming gridSize={gridSize} numPlayers={numPlayers} theme={theme} />
      ) : (
        <div>
          <h1>Memory Game</h1>
          <div className="main-app-wrapper">
            <div className="Select-Theme">
              <label>Select Theme</label> 
              <div className="btn-wrapper">
                <button
                  className={theme === "Numbers" ? "active" : ""}
                  onClick={() => setTheme("Numbers")}
                >
                  Numbers
                </button>
                <button
                  className={theme === "Icons" ? "active" : ""}
                  onClick={() => setTheme("Icons")}
                >
                  Icons
                </button>
              </div>
            </div>
            <div className="num-players">
              <label>Number of Players</label>
              <div className="btn-wrapper">
                <button
                  className={numPlayers === 1 ? "active" : ""}
                  onClick={() => setNumPlayers(1)}
                >
                  1
                </button>
                <button
                  className={numPlayers === 2 ? "active" : ""}
                  onClick={() => setNumPlayers(2)}
                >
                  2
                </button>
                <button
                  className={numPlayers === 3 ? "active" : ""}
                  onClick={() => setNumPlayers(3)}
                >
                  3
                </button>
                <button
                  className={numPlayers === 4 ? "active" : ""}
                  onClick={() => setNumPlayers(4)}
                >
                  4
                </button>
              </div>
            </div>
            <div className="grid-size">
              <label>Grid Size</label>
              <div className="btn-wrapper">
                <button
                  className={gridSize === "4x4" ? "active" : ""}
                  onClick={() => setGridSize("4x4")}
                >
                  4x4
                </button>
                <button
                  className={gridSize === "6x6" ? "active" : ""}
                  onClick={() => setGridSize("6x6")}
                >
                  6x6
                </button>
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
