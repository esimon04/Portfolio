import React from 'react';
import './PersonalIntroduction.css'

// Component for a brief personal introduction
const PersonalIntroduction = () => {
  return (
    <div className="personal-introduction">  {/* Container for the introduction */}
      <h1>Hello!</h1>  {/* Greeting */}
      <h2>My name is Ethan</h2>  {/* Personal introduction */}
      <p>{"I am a software engineer trying to break into the video game industry."}</p>
      <p>{"Thank you for taking the time to look at my portfolio!"}</p>
      <p>{"ethan.simon0430@gmail.com"}</p>
    </div>
  );
};

export default PersonalIntroduction;
