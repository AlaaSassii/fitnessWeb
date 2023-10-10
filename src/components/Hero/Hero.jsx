import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
const Hero = () => {
  return (
    <div className='hero'>
      <div className='left-h'>
        <Header />

        <div className='the-best-ad'>
          <div></div>
          <span>the best fitness club in the town</span>
        </div>

        <div className='hero-text'>
          <div>
            <span>Shape</span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
        </div>
      </div>

      <div className='right-h'>right</div>
    </div>
  );
};

export default Hero;
