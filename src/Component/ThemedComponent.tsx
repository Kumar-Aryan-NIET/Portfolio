import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../Theme/Theme";
import { Navbar } from "./Navbar/Navbar";
import LandingPage from "./LandingPage/LandingPage";
import LandingPageFooter from "./LandingPageFooter/LandingPageFooter";
import AboutMe from "./AboutMe/AboutMe";
import LiveWallpaper from "./LiveWallpaper/LiveWallpaper";

const ThemedComponent: React.FC = () => {
  const { theme, isLightMode } = useContext(ThemeContext);
  const body = document.querySelector("body");
  if (body) {
    // if(isLightMode){
    //     body.style.backgroundImage = '';
    body.style.backgroundColor = theme.dark;
    // }
    // else{
    // body.style.background = 'linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898';
    // body.style.backgroundBlendMode = 'multiply,multiply';
    // body.style.backgroundImage = 'linear-gradient(to right,#434343, #000000)';
    // }
  }
  return (
    <div className="Main-container">
      <LiveWallpaper />
      <Navbar />
      <LandingPage />
      <LandingPageFooter />

      {/* <AboutMe /> */}
    </div>
  );
};

export default ThemedComponent;
