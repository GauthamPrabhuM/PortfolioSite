import React, { useState, useEffect, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import AnimatedCursor from "react-animated-cursor";

import About from "../About/About";
import Contact from "../Contact/Contact";
import Landing from "../Landing/Landing";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import PositionsOfResponsibility from "../PositionsOfResponsibility/PositionsOfResponsibility";
import Header from "../Header/Header";
import Research from "../Research/Research";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Experience from "../Experience/Experience";
import Education from "../Education/Education";
import Achievements from "../Achievements/Achievements";

export default function Main() {
  const [light, setLight] = useState(false);

  // Initialize particles
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  const desktopParticlesConfig = {
    color: { value: light ? "#3c3c40" : "#ffffff" },
    links: {
      color: light ? "#3c3c40" : "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.4,
      width: 1.5,
    },
    collisions: { enable: true },
    move: {
      directions: "none",
      enable: true,
      outModes: { default: "bounce" },
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: { enable: true, area: 800 },
      value: 80,
    },
    opacity: { value: 0.5 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 5 } },
  };
  
const mobileParticlesConfig = {
  color: { value: light ? "#000000" : "#ffffff" },
  links: {
    color: light ? "#000000" : "#ffffff",
    distance: 80,
    enable: true,
    opacity: 0.3,
    width: 1,
  },
  collisions: { enable: false },
  move: {
    directions: "none",
    enable: true,
    outModes: { default: "bounce" },
    random: true,
    speed: 3,
    straight: false,
  },
  number: {
    density: { enable: true, area: 400 },
    value: 50,
  },
  opacity: { value: 0.4 },
  shape: { type: "circle" },
  size: { value: { min: 0.5, max: 3 } },
};

  // Configure particles based on screen width
  const getParticlesConfig = () => {
    const width = window.innerWidth;
    return width > 768 ? desktopParticlesConfig : mobileParticlesConfig;
  };

  // Load theme from localStorage
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setLight(theme === "true");
  }, []);

  return (
    <div id={light ? "lightid" : null}>
      <Header light={light} setLight={setLight} />
      <Breadcrumb light={light} />
      <AnimatedCursor /* ...props... */ />
      <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={{
        particles: getParticlesConfig(),
      }} />
      <div className="section-container">
        <Landing light={light} />
      </div>
      <div className="section-container">
        <About light={light} />
      </div>
      <div className="section-container">
        <Education light={light} />
      </div>
      <div className="section-container">
        <Experience light={light} />
      </div>
      <div className="section-container">
        <Research light={light} />
      </div>
      <div className="section-container">
        <Achievements light={light} />
      </div>
      <div className="section-container">
        <PositionsOfResponsibility light={light} />
      </div>
      <div className="section-container">
        <Skills light={light} />
      </div>
      <div className="section-container">
        <Projects light={light} />
      </div>
      <div className="section-container">
        <Contact light={light} />
      </div>
    </div>
  
  );
}


  
  // Configure particles based on screen width
