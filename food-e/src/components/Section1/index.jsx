import React from "react";
import "./section1.css";

import one from "./one.png";
import two from "./two.png";
import three from "./three.png";
import four from "./four.png";
import five from "./five.png";
import fruit from "./fruit.png"
import tomato from "./tomato.png"

import Fade from "react-reveal/Fade";

const Section1 = () => {
  return (
    <div className="container-1">
      <div className="text1">
      <Fade top>
        "Good and healthy food for your everyday"
        </Fade>
        <Fade bottom>
          <img src={three} className="image-5"></img>
        </Fade>
      </div>
      <div className="div-1">
        <Fade bottom>
          <img src={one} className="image-1"></img>
        </Fade>
        <Fade bottom>
          <img src={two} className="image-2"></img>
        </Fade>
        <Fade bottom>
          <img src={five} className="image-3"></img>
        </Fade>
        <Fade bottom>
          <img src={four} className="image-4"></img>
        </Fade>
      </div>
    </div>
  );
};

export default Section1;
