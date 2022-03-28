import React from "react";
import cityone from "./imagen1.png";
import citytwo from "./imagen2.png";
import cityfour from "./imagen4.png";
import cityfive from "./imagen5.png";
import citysix from "./imagen6.png";
import arrowIcon from "./arrow.svg";

import { Link as LinkRouter } from "react-router-dom";

import "./Hero.css";

export default function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero_info">
          <h1>My Tinerary</h1>
          <p>
            Find your perfect trip, designed by insiders who know and love their
            cities.
          </p>
          <LinkRouter to="/cities" className="button">
            Cities
          </LinkRouter>
        </div>
        <div className="hero_images">
          <img className="images1" src={cityone} alt="images1"></img>
          <img className="images2" src={citytwo} alt="images2"></img>
          <img className="images3" src={cityfour} alt="images3"></img>
          <img className="images4" src={cityfive} alt="images4"></img>
          <img className="images5" src={citysix} alt="images5"></img>
        </div>
      </div>
      <div className="arrowIcon">
        <img src={arrowIcon} alt="iconarrow"></img>
      </div>
    </>
  );
}
