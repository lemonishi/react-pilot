import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./components/navbar/navbar.jsx";
import Intro from "./components/intro/intro.jsx";
import Skills from "./components/skills/skills.jsx";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar />
    <Intro />
    <Skills />
  </React.StrictMode>
);
