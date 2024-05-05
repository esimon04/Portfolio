import React from 'react';
import './GameShowcase.css'

// Component to represent a single game
const GameCard = ({ game }) => {
  return (
    <a href={game.link} className="game-card-link" target="_blank" rel="noopener noreferrer"> {/* Target new tab */}
        <div className="game-card">
            <img src={game.image} alt={game.title} />
            <div>
              <h3>{game.title}</h3>
              <p>{game.description}</p>
            </div>
        </div>
    </a>
  );
};

// Component for the grid
const GameGrid = ({ games }) => {
  return (
    <div className="game-grid">
      {games.map((game, index) => (
        <GameCard key={index} game={game} />
      ))}
    </div>
  );
};

export default GameGrid;
