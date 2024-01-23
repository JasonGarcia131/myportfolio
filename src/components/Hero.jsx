import React from "react";
import Projects from "./Projects";
import MyInfo from "./MyInfo";
import About from "./pages/About";

const Hero = () => {
  return (
    <div className="w-full py-2 mt-20 flex flex-col justify-around lg:flex-row">
      <MyInfo />
      <About />
    </div>
  );
};

export default Hero;
