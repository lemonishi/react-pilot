import { useState } from "react";
import React from "react";
import SkillTile from "./skilltile";
import "./skills.css";

const Skills = () => {
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
        <SkillTile
          src="./assets/python.svg"
          alt="Python"
          span="Python"
        />
        <SkillTile
          src="./assets/java.svg"
          alt="Java"
          span="Java"
        />
      </div>
      <div className={`frontend-list${clickFE ? "-active" : ""}`}>
        <SkillTile
          src="./assets/react.svg"
          alt="React"
          span="React"
        />
        <SkillTile
          src="./assets/tailwind.svg"
          alt="TailwindCSS"
          span="Tailwind"
        />
      </div>
      <div className={`backend-list${clickBE ? "-active" : ""}`}>
        <SkillTile
          src="./assets/spring.svg"
          alt="Spring"
          span="Spring"
        />
        <SkillTile
          src="./assets/express.svg"
          alt="Express"
          span="Express"
        />
      </div>
    </div>
  );
};

export default Skills;
