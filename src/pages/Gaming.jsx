import React from "react";

const Gaming = () => {
  return (
    <div>
      <div className="gaming-wrapper">
        <div className="app-header">
          <h2>Memory</h2>
          <div className="btns">
            <button className="btn restart">Restart</button>
            <button className="btn newGame">New Game</button>
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
    </div>
  );
};

export default Gaming;
