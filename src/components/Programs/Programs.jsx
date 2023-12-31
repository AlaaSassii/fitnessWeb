import React from "react";
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";
import "./programs.css";
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
            <div className='join-now'>
              <span>Join Now</span>
              <img src={RightArrow} alt='' className='image-arrow' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
