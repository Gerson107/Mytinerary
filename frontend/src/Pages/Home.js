import React from "react";
import Hero from "../Components/Hero/Hero";
import Slider from "../Components/Sliders/Slider1";

import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Hero />
      <Slider />
    </div>
  );
}

export default Home;
