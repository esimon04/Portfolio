import React from 'react';
import './SkillsCareer.css'
import SkillsSection from './Skills';
import Career from './Career'

// Skills section with separate lists for languages and tools
const SkillCareer = () => {
 

  return (
    <div className = "skills-career-section">
        <SkillsSection/>
        <Career/>
    </div>
  );
};

export default SkillCareer;