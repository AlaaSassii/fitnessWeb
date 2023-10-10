import React from "react";
import "./programs.css";
import { programsData } from "../../data/programsData";
const Programs = () => {
  return (
    <div className='Programs' id='programs'>
      <div className='programs-header'>
        <span className='stroke-text'>Explore our</span>
        <span>Programs</span>
        <span className='stroke-text'>to shape you</span>
      </div>
      <div className='programs-categories'>
        {programsData.map((program, index) => (
          <div className='category' key={`program__${index}`}>
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
