import React from "react";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Reasons from "./components/Reasons/Reasons";
import Plans from "./components/Plans/Plans";

const App = () => {
  return (
    <div className='App'>
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
    </div>
  );
};

export default App;
