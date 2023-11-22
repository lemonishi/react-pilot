import React from "react";
import "./skills.css";

const SkillTile = (props) => {
  return (
    <div className="skills">
      <img
        src={props.src}
        alt={props.alt}
      />
      <span>{props.span}</span>
    </div>
  );
};

export default SkillTile;
