import React, { useState } from "react";
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import "./Testimonials.css";
const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;
  const { name, review, image, status } = testimonialsData[selected];
  return (
    <div className='Testimonials'>
      <div className='left-h'>
        <span>Testimonials</span>
        <span className='stroke-text'>What They</span>
        <span>say about us</span>
        <span>{review}</span>
        <span>
          <span style={{ color: "var(--orange)" }}>{name}</span> -{" "}
          <span>{status}</span>
        </span>
      </div>
      <div className='right-t'>
        <div></div>
        <div></div>
        <img src={image} />
        <div className='arrows'>
          <img
            src={leftArrow}
            onClick={() => {
              selected === 0
                ? setSelected(tLength - 1)
                : setSelected((prev) => prev - 1);
            }}
          />
          <img
            src={rightArrow}
            onClick={() => {
              selected === tLength - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
