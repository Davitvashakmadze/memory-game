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
        <div className="main-app-wrapper"></div>
      </div>
    </div>
  );
};

export default Gaming;
