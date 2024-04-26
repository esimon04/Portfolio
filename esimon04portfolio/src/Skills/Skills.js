import React from 'react';
import './Skills.css'

// Skills section with separate lists for languages and tools
const SkillsSection = () => {
  const languages = [
    'C#',
    'Python',
    'Java',
    'C++',
    'C',
    'Ruby',
    'Assembly(x86)',
    'JavaScript',
  ];

  const tools = [
    'Unity',
    'React',
    'Git',
    'Aseprite',
    'Bitbucket',
    'Jenkins',
    'Jira',
    'Visual Studio'
  ];

  return (
    <div className="skills-section">
      {/* Grid for languages */}
      <div className="skills-subsection">
        <h2>Languages</h2>
        <div className="skills-grid"> {/* Define the grid layout */}
          {languages.map((language, index) => (
            <div key={index} className="skills-grid-item"> {/* Individual grid item */}
              {language}
            </div>
          ))}
        </div>
      </div>

      {/* Grid for tools */}
      <div className="skills-subsection">
        <h2>Tools</h2>
        <div className="skills-grid">  {/* Define the grid layout */}
          {tools.map((tool, index) => (
            <div key={index} className="skills-grid-item">  {/* Individual grid item */}
              {tool}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;