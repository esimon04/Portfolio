import React from 'react';
import "./Career.css"

const careerExperiences = [
    {
      company: 'Northrop Grumman',
      position: 'Associate Software Engineer: January 2023 - Current',
      bulletPoints: [
        'Redesigning and implementing existing radar middleware system written in C++',
        'Building new radar sensor manager from the ground up (IPC, Multi-threaded, Shared Memory)',
        'Detangling components from older node architecture system to standalone C++ classes. Requires full understanding of how each component functions within the existing architecture ',
        'Setup Jenkins automated build/testing environment',
        'Acting Scrum Master for team of (~8) software engineers running daily standup, sprint planning, and retrospectives.'
      ],
    },
    {
        company: 'Northrop Grumman',
        position: 'Summer Internships: 2020-2022',
        bulletPoints: [
          'Created radar mode testing harness',
          'Developed a copyright marking check to be used on all repositories to ensure the protection of Northrop’s intellectual property',
          'Worked with a small team to develop a python application that pulls data from Jira to create metrics that define a project\'s value/performance',
        ],
      },
      {
        company: 'University of Maryland',
        position: 'Graduated December 2022',
        bulletPoints: [
          'BS of Computer Science',
          'BA of Economics',
          'Relevant Courses: Game Programming, Computer Vision, Data Structures, Object Oriented Programming, Handheld Programming, and Algorithms'
        ],
      }
  ];

// Define a Career component to list career experiences
const Career = () => {
  return (
    <div className="career"> {/* Container for the career section */}
      <h2>Career and Education</h2>  {/* Section title */}
      {careerExperiences.map((experience, index) => (
        <div key={index} className="career-item">  {/* Individual career entry */}
          <h3>{experience.company}</h3>  {/* Company name */}
          <h4>{experience.position}</h4>  {/* Position at the company */}
          <ul>  {/* Unordered list for bullet points */}
            {experience.bulletPoints.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Career;