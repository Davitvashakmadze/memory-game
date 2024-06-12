import React, { useState, useEffect } from "react";
import GameBoard from "./GameBoard";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const generateGridItems = (gridSize, theme) => {
  const size = gridSize === "6x6" ? 36 : 16;
  const items = Array.from({ length: size / 2 }, (_, i) => i + 1);
  const gridItems = shuffleArray([...items, ...items]);
  return gridItems;
};

const Gaming = ({ gridSize, numPlayers, theme }) => {
  const [newGame, setNewGame] = useState(false);
  const [gridItems, setGridItems] = useState([]);
  const [revealedItems, setRevealedItems] = useState([]);
  const [matchedItems, setMatchedItems] = useState([]);
  const [moves, setMoves] = useState(0);

  const handleNewGame = () => {
    console.log("new game started");
    setNewGame(true);
    document.body.style.backgroundColor = "rgba(21, 41, 56, 1)";
  };

  useEffect(() => {
    const items = generateGridItems(gridSize, theme);
    setGridItems(items);
    setRevealedItems([]);
    setMatchedItems([]);
    setMoves(0);
  }, [gridSize, theme]);

  const handleItemClick = (index) => {
    if (revealedItems.length < 2 && !revealedItems.includes(index) && !matchedItems.includes(index)) {
      const newRevealedItems = [...revealedItems, index];
      setRevealedItems(newRevealedItems);

      if (newRevealedItems.length === 2) {
        setMoves(moves + 1);
        const [firstIndex, secondIndex] = newRevealedItems;
        if (gridItems[firstIndex] === gridItems[secondIndex]) {
          setMatchedItems([...matchedItems, firstIndex, secondIndex]);
        }
        setTimeout(() => setRevealedItems([]), 1000);
      }
    }
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
              <button className="btn restart" onClick={() => setNewGame(false)}>Restart</button>
              <button className="btn newGame" onClick={handleNewGame}>
                New Game
              </button>
            </div>
          </div>
          <div className={`main-app-wrapper app-gaming ${gridSize}`}>
            <div className="grid-container">
              {gridItems.map((item, index) => (
                <div
                  key={index}
                  className={`grid-item ${revealedItems.includes(index) || matchedItems.includes(index) ? "revealed" : ""}`}
                  onClick={() => handleItemClick(index)}
                >
                  {revealedItems.includes(index) || matchedItems.includes(index) ? item : ""}
                </div>
              ))}
            </div>
          </div>
          <div className="players-wrapper">
            <div className="player-wrapper single-wrapper">
              <div className="player time-info">
                <h3>Moves</h3>
                <h4>{moves}</h4>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gaming;
