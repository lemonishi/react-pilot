import React, { useState } from "react";
import "./intro.css";

const Intro = () => {
  return (
    <div className="intro-container">
      <div className="title-container">
        <span className="title">Lennon's</span>
        <span className="subtitle">First Portfolio Site</span>
        <span className="title-desc">
          Computer Science Undergradute at National University of Singapore
        </span>
      </div>
      <div className="banner-container">
        <img
          src="./assets/intro-banner.png"
          alt="Intro Banner"
          className="intro-banner"
        />
      </div>
    </div>
  );
};

export default Intro;
