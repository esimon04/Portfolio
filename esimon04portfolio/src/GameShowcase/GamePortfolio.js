import React from 'react';
import GameGrid from './GameShowcase';
import { projects } from '../data/Data';
import './GamePortfolio.css'

const GamePortfolio = () => {
  return (
    <div>
      <h1 className='portfolio-header'>Unity Games</h1>
      <GameGrid games={projects} />
    </div>
  );
};

export default GamePortfolio;
