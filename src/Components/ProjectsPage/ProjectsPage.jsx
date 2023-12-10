import React, { useCallback, useState, useEffect } from "react";
import "./ProjectsPage.css";
import AnimatedCursor from "react-animated-cursor";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import astro from "../../Assets/Skills/astro.png"
import vikas from "../../Assets/Skills/vikas.png"

import psychup from "../../Assets/Skills/psych.png";
import datagrad from "../../Assets/Skills/datagrad.png";
import decrypt from "../../Assets/Skills/decrypt.png";
import atlantis from "../../Assets/Skills/atlantis.png";
import ecommerce from "../../Assets/Skills/ecommerce.png";
import chattify from "../../Assets/Skills/chattify.png";
import discussion from "../../Assets/Skills/discussion.png";
import todo from "../../Assets/Skills/todo.png";

import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { HiGlobeAlt } from "react-icons/hi";
import Header from "../Header/Header";

export default function ProjectsPage() {
  const [light, setLight] = useState(false);

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  var particlesObj;
  var width = window.innerWidth;
  if (width > 768) {
    particlesObj = {
      color: {
        value: light ? "#000000" : "#ffffff",
      },
      links: {
        color: light ? "#000000" : "#ffffff",
        distance: 100,
        enable: true,
        opacity: 0.25,
        width: 1,
      },
      collisions: {
        enable: false,
      },
      move: {
        directions: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: true,
        speed: 4,
        straight: true,
      },
      number: {
        density: {
          enable: false,
          area: 600,
        },
        value: 100,
      },
      opacity: {
        value: 0.25,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: 3,
      },
    };
  } else {
    particlesObj = {
      color: {
        value: light ? "#000000" : "#ffffff",
      },
      nb: Math.round(Math.sqrt(width)),
      links: {
        color: light ? "#000000" : "#ffffff",
        distance: 50,
        enable: true,
        opacity: 0.25,
        width: 0.6,
      },
      collisions: {
        enable: false,
      },
      move: {
        directions: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: true,
        speed: 4,
        straight: true,
      },
      number: {
        density: {
          enable: false,
          area: 0,
        },
        value: 50,
      },
      opacity: {
        value: 0.25,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: 2,
      },
    };
  }
  useEffect(() => {
    if (localStorage.getItem("theme") == "true") {
      setLight(true);
    }
  }, []);

  return (
    <>
      <Header light={light} setLight={setLight} />
      <AnimatedCursor
        innerSize={20}
        outerSize={20}
        color={light ? "0,0,0" : "255, 255, 255"}
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />

      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          density_auto: true,
          background: {},
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: false,
            },
            modes: {
              push: {
                quantity: 2,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: particlesObj,
          detectRetina: false,
        }}
      />

      <div className="projectsPage_main" id={light ? "lightid" : null}>
        <div className="projectsPage_header">All Projects</div>
        <div className="card_c">
          {/*Psychup */}
          <div className="mainc">
            <div className="proj_card" id={light ? "proj_card_light" : null}>
              <img src={vikas} className="proj_img"  id={light ? "proj_img_light" : null}></img>
              <div className="proj_title">Vikas</div>
              <div className="proj_text">
              A real-time, multimodal solution linking disaster victims and first responders from NDRF: streamlining support to the most vulnerable.
              </div>
              <div className="icons_c">
                <a
                  target="__blank"
                  href="https://github.com/GauthamPrabhuM/SIH2K22"
                >
                  <AiFillGithub className="picon" />
                </a>
                <a target="__blank" href="https://vikas-066f8f.webflow.io/">
                  <HiGlobeAlt className="picon" />
                </a>
              </div>
            </div>
            <div className="inner_card"></div>
          </div>

          {/*Datagrad */}

          <div className="mainc">
            <div className="proj_card" id={light ? "proj_card_light" : null}>
            <div className="proj_title">Quantum Ecosystem for Efficient Detection of Cardiovascular Diseases</div>
              <div className="proj_text">
              A quantum machine learning framework aimed to analyze ECG Data, harnessing the power of quantum ML algorithms for ECGs. The project was funded by the Ministry of Electronics and Information Technology and AWS.

              </div>
              <div className="icons_c2">
              <a
                target="__blank"
                href="https://github.com/GauthamPrabhuM/Quantum-Ecosystem-for-Efficient-Detection-of-Cardiovascular-Diseases"
              >
                <AiFillGithub className="picon" />
              </a>
              </div>
            </div>
            <div className="inner_card"></div>
          </div>

          {/*Decrypt */}

          <div className="mainc">
            <div className="proj_card"  id={light ? "proj_card_light" : null}>
              <img src={astro} className="proj_img"  id={light ? "proj_img_light" : null}></img>
              <div className="proj_title">Astronomy Club Website</div>
              <div className="proj_text">
              Enhanced the website of the Astronomy Club of Manipal. 
              </div>
              <div className="icons_c2">
                <a
                  target="__blank"
                  href="https://github.com/Astronomy-Manipal/Astronomy-Manipal.github.io"
                >
                  <AiFillGithub className="picon" />
                </a>
                <a target="__blank" href="https://astronomy-manipal.github.io/">
                  <HiGlobeAlt className="picon" />
                </a>
              </div>
            </div>
            <div className="inner_card"></div>
          </div>

          {/*Atlantis */}
          <div className="mainc">
            <div className="proj_card"  id={light ? "proj_card_light" : null}>
              <div className="proj_title">Distributed Banking System </div>
              <div className="proj_text">
              The distributed-bank management system is intended to serve as an easy-to-understand demonstration of how to create a distributed application utilizing sockets and client-server architecture.
              </div>
              <div className="icons_c2">
                {/* <AiFillGithub className="picon" />{" "} */}
                <a target="__blank" href="https://github.com/GauthamPrabhuM/distributed-banking-system">
                  <AiFillGithub className="picon" />{" "}
                </a>
              </div>
            </div>
            <div className="inner_card"></div>
          </div>

          {/*Ecommerce */}
          <div className="mainc">
            <div className="proj_card"  id={light ? "proj_card_light" : null}>
              <img src={ecommerce} className="proj_img"  id={light ? "proj_img_light" : null}></img>
              <div className="proj_title">Kritika: An Ecommerce website</div>
              <div className="proj_text">
                A basic Ecommerce website built using Flask to showcase women's handicrafts . 
              </div>
              <div className="icons_c2">
                <a
                  target="__blank"
                  href="https://github.com/GauthamPrabhuM/kritika"
                >
                  <AiFillGithub className="picon" />
                </a>
              </div>
            </div>
            <div className="inner_card"></div>
          </div>
        </div>

      </div>
    </>
  );
}
