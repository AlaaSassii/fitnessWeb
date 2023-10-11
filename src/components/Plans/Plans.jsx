import React from "react";
import "./Plans.css";
import { planData } from "../../data/plansData";
const Plans = () => {
  return (
    <div className='plans-container'>
      <div className='program-header' style={{ gap: "2rem" }}>
        <span className='stroke-text'>READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className='stroke-text'>NOW WITHUS</span>
      </div>
    </div>
  );
};

export default Plans;
