import React, { useState } from "react";
import GameBoard from "./GameBoard";

const Gaming = () => {
  const [newGame, setNewGame] = useState(false);

  const handleNewGame = () => {
    console.log("new game started");
    setNewGame(true)
    document.body.style.backgroundColor = "rgba(21, 41, 56, 1)"
  };

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
          <div className="main-app-wrapper">
            <div className="grid-container">
              {[...Array(16)].map((_, index) => (
                <div key={index} className="grid-item"></div>
              ))}
            </div>
          </div>
          <div className="players-wrapper">
            {/* <div className="player-wrapper">
          {[...Array(4)].map((_, index) => (
              <div key={index} className="player active-player"></div>
            ))}
          </div> */}
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
