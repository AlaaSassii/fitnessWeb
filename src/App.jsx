import React from "react";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Reasons from "./components/Reasons/Reasons";

const App = () => {
  return (
    <div className='App'>
      <Hero />
      <Programs />
      <Reasons />
    </div>
  );
};

export default App;
