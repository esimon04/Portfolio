import './App.css';
import GamePortfolio from './GameShowcase/GamePortfolio';
import SkillCareer from './Skills/SkillsCareer';
import PersonalIntroduction from './Header/PersonalIntroduction';

export default function App() {
  return (
    <main className="App">
      <div className="flex-container">
        <PersonalIntroduction/>
        <SkillCareer/>
        <GamePortfolio/>
      </div>
    </main>
  );
}