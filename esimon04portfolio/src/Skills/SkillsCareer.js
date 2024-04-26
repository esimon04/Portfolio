import React from 'react';
import './SkillsCareer.css'
import SkillsSection from './Skills';
import ContactSection from './Contact';

// Skills section with separate lists for languages and tools
const SkillCareer = () => {
 

  return (
    <div className = "skills-career-section">
        <SkillsSection/>
        <ContactSection/>
    </div>
  );
};

export default SkillCareer;