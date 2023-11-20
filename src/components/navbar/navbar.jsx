import React, { useState } from "react";
import "./navbar.css";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick((click) => !click);
  };

  return (
    <nav className="header">
      <div className="nav-icon-container">
        <a
          href="#"
          className="nav-logo-url"
        >
          <img
            src="/assets/lemon.svg"
            alt="React Icon"
            className="nav-logo"
          />
        </a>
      </div>
      <img
        src="/assets/nav-icon.png"
        alt="Nav Mobile Icon"
        className="nav-mobile-button"
        onClick={handleClick}
      />
      <li className={`nav-content${click ? "-mobile" : ""}`}>
        <ul>
          <li>
            <a href="#">About</a>
            <a href="#">Forms</a>
            <a href="#">Contact</a>
          </li>
        </ul>
      </li>
    </nav>
  );
};

export default NavBar;
