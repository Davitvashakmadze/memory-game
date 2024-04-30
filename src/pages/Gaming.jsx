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
            {/* Create 4x4 grid */}
            {[...Array(16)].map((_, index) => (
              <div key={index} className="grid-item"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gaming;
