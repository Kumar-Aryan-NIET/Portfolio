import React, { useContext } from "react";
import "./navbar.css";
import { ThemeContext } from "../../Theme/Theme";
import homeiconl from "../../assets/home-icon.png";
import abouticonl from "../../assets/about-icon.png";
import projecticonl from "../../assets/project-icon.png";
import skilliconl from "../../assets/skill-icon.png";
import downloadicon from "../../assets/download-icon.png";
import sunIcon from "../../assets/sun-icon.png";
import moonIcon from "../../assets/moon-icon.png";

import homeicond from "../../assets/home-d.png";
import abouticond from "../../assets/about-d.png";
import projecticond from "../../assets/project-d.png";
import skillicond from "../../assets/skill-d.png";

export const useTheme = () => useContext(ThemeContext);

export const Navbar: React.FC = () => {
  const { theme, toggleTheme, isLightMode } = useTheme();
  let homeicon;
  let abouticon;
  let projecticon;
  let skillicon;
  if (!isLightMode) {
    homeicon = homeicond;
    abouticon = abouticond;
    projecticon = projecticond;
    skillicon = skillicond;
  } else {
    homeicon = homeiconl;
    abouticon = abouticonl;
    projecticon = projecticonl;
    skillicon = skilliconl;
  }
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="nav-start-space">
          {isLightMode ? (
            <div className="logo-text" style={{ color: "black" }}>
              Kumar Aryan
            </div>
          ) : (
            <div className="logo-text">Kumar Aryan</div>
          )}
        </div>
        {isLightMode ? (
          <div className="navlogo-light"></div>
        ) : (
          <div className="navlogo-dark"></div>
        )}
        <div className="navlinks">
          <a href="#home">
            <img className="home-icon" src={homeicon} alt="Home" />
          </a>
          <a href="#AboutMe-Main-Container">
            <img className="about-icon" src={abouticon} alt="About" />
          </a>
          <a href="#contact">
            <img className="skill-icon" src={skillicon} alt="Skill" />
          </a>
          <a href="#projects">
            <img className="project-icon" src={projecticon} alt="Project" />
          </a>
        </div>
        <div className="box">
          <a
            className="resume-link"
            href="https://drive.google.com/file/d/1W_ECLXcITrxhxY-ncVFNcVz5-adRdpGC/view?usp=sharing"
          >
            {isLightMode ? (
              <div className="resume-box">
                <div>
                  <span style={{ color: "black" }}>Resume</span>
                </div>
                <img
                  className="download-icon"
                  src={downloadicon}
                  alt="Download"
                />
              </div>
            ) : (
              <div className="resume-box yellow">
                <div>
                  <span style={{ color: "black" }}>Resume</span>
                </div>
                <img
                  className="download-icon"
                  src={downloadicon}
                  alt="Download"
                />
              </div>
            )}
          </a>
          <div className="mode-box">
            <div className="mode-name">
              {isLightMode ? (
                <span>Light Mode</span>
              ) : (
                <span style={{ color: "white" }}>Dark Mode</span>
              )}
            </div>
            <button className="toggle-button" onClick={toggleTheme}>
              <img
                className="mode-icon"
                src={isLightMode ? moonIcon : sunIcon}
                alt="Mode"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
