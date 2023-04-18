import React from "react";
import "./Footer.css";
import instagram from "./instagram.svg";
import twitter from "./twitter.svg";
import github from "./github.svg";
import { Link as LinkRouter } from "react-router-dom";

function Footer() {
  return (
    <div className="Footer">
      <div className="Footer_text">
        <h2>MyTinerary</h2>
        <LinkRouter to="home" className="link">
          Home
        </LinkRouter>
        <LinkRouter to="cities" className="link">
          Cities
        </LinkRouter>
      </div>

      <div className="Footer_text">
        <h2>Say Hello</h2>
        <p>Cra 19 #23-08</p>
        <p>57+3105157158</p>
        <p>Suport@mytinerary.com</p>
      </div>

      <div className="Footer_text rights">
        <h4>© 2022 MyTinerary Inc. All rights reserved.</h4>
      </div>

      <div className="footer_icon">
        <img src={instagram} alt="instagram"></img>
        <img src={twitter} alt="twitter"></img>
        <img src={github} alt="github"></img>
      </div>
    </div>
  );
}

export default Footer;
