import React, { useRef } from "react";
import "./Join.css";
const Join = () => {
  const form = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className='join' id='join-us'>
      <div className='left-j'>
        <hr />
        <div>
          <span className='stroke-text'>READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span className='stroke-text'>YOUR BODY</span>
          <span>WITH US?</span>
        </div>
      </div>
      <div className='right-j'>
        <form
          ref={form}
          className='email-container'
          onSubmit={() => {
            onSubmit;
          }}
        >
          <input
            type='email'
            name='user_email'
            placeholder='Enter your Email address'
          />
          <button className='btn btn-j'>join now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
