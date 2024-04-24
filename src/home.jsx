import React from "react";

function home() {
  return (
    <div>
      <h1>Memory Game</h1>
      <div className="main-app-wrapper">
        <div className="Select-Theme">
          <label htmlFor="">Select Theme</label>
          <div className="btn-wrapper">
            <button>Numbers</button>
            <button>Icons</button>
          </div>
        </div>
        <div className="num-players">
          <label htmlFor="">Numbers of Players</label>
          <div className="btn-wrapper">
            <button>1</button>
            <button>2</button>
            <button>2</button>
            <button>3</button>
          </div>
        </div>
        <div className="grid-size">
          <label htmlFor="">Grid Size</label>
          <div className="btn-wrapper">
            <button>4x4</button>
            <button>6x6</button>
          </div>
        </div>
        <button className="start">Start Game</button>
      </div>
    </div>
  );
}

export default home;
