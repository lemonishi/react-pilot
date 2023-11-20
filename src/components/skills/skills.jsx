import { useState } from "react";
import React from "react";
import "./skills.css";

const skills = () => {
  const [clickLang, setClickLang] = useState(true);
  const handleClickLang = () => {
    setClickLang(true);
    setClickFE(false);
    setClickBE(false);
  };
  const [clickFE, setClickFE] = useState(false);
  const handleClickFE = () => {
    setClickFE(true);
    setClickBE(false);
    setClickLang(false);
  };
  const [clickBE, setClickBE] = useState(false);
  const handleClickBE = () => {
    setClickBE(true);
    setClickFE(false);
    setClickLang(false);
  };

  return (
    <div className="skills-container">
      <div className="skills-title">
        <span className="line-span"></span>
        <span className="skills-title-text">Skills</span>
        <span className="line-span"></span>
      </div>
      <div className="skills-tab">
        <div
          className="skills-language"
          onClick={handleClickLang}
        >
          <span>Languages</span>
        </div>
        <div
          className="skills-frontend"
          onClick={handleClickFE}
        >
          <span>Frontend</span>
        </div>
        <div
          className="skills-backend"
          onClick={handleClickBE}
        >
          <span>Backend</span>
        </div>
      </div>
      <div className={`language-list${clickLang ? "-active" : ""}`}>
        <div className="skills">
          <img
            src="./assets/python.svg"
            alt="Python"
          />
          <span>Python</span>
        </div>
        <div className="skills">
          <img
            src="./assets/java.svg"
            alt="Java"
          />
          <span>Java</span>
        </div>
      </div>
      <div className={`frontend-list${clickFE ? "-active" : ""}`}>
        <div className="skills">React</div>
        <div className="skills">Tailwind</div>
      </div>
      <div className={`backend-list${clickBE ? "-active" : ""}`}>
        <div className="skills">Spring</div>
        <div className="skills">Express</div>
      </div>
    </div>
  );
};

export default skills;
