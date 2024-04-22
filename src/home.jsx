import React from "react";

function home() {
  return (
    <div>
      <div className="main-app-wrapper">
        <div className="Select-Theme">
          <label htmlFor="">Select Theme</label>
          <div className="btn-wrapper">
            <button>Numbers</button>
            <button>Icons</button>
          </div>
        </div>
        <div className="num-players"></div>
        <div className="grid-size"></div>
        <button className="start">Start Game</button>
      </div>
    </div>
  );
}

export default home;
