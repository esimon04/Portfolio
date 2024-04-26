import './App.css';
import GamePortfolio from './GameShowcase/GamePortfolio';
import SkillCareer from './Skills/SkillsCareer';

export default function App() {
  return (
    <main className="App">
      <div className="flex-container">
        <GamePortfolio/>
        <SkillCareer/>
      </div>
    </main>
  );
}