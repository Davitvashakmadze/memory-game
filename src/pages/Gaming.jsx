import React, { useState, useEffect } from "react";
import GameBoard from "./GameBoard";

const Gaming = ({ gridSize }) => {
  const [newGame, setNewGame] = useState(false);
  const [gridItems, setGridItems] = useState([]);

  const handleNewGame = () => {
    console.log("new game started");
    setNewGame(true);
    document.body.style.backgroundColor = "rgba(21, 41, 56, 1)";
  };

  useEffect(() => {
    const size = gridSize === "6x6" ? 36 : 16;
    setGridItems([...Array(size)].map((_, index) => <div key={index} className="grid-item"></div>));
  }, [gridSize]);

  return (
    <div>
      {newGame ? (
        <GameBoard />
      ) : (
        <div className="gaming-wrapper">
          <div className="app-header">
            <h2>Memory</h2>
            <div className="btns">
              <button className="btn restart">Restart</button>
              <button className="btn newGame" onClick={handleNewGame}>
                New Game
              </button>
            </div>
          </div>
          <div className={`main-app-wrapper app-gaming ${gridSize}`}>
            <div className="grid-container">
              {gridItems}
            </div>
          </div>
          <div className="players-wrapper">
            <div className="player-wrapper single-wrapper">
              <div className="player time-info">
                <h3>Time</h3>
                <h4>1:35</h4>
              </div>
              <div className="player move-info">
                <h3>Moves</h3>
                <h4>35</h4>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gaming;
