import React from "react";
import "./Projects.css";
import vikas from "../../Assets/Skills/vikas.png";
import datagrad from "../../Assets/Skills/datagrad.png";
import decrypt from "../../Assets/Skills/decrypt.png";
import astro from "../../Assets/Skills/astro.png"
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { HiGlobeAlt } from "react-icons/hi";
export default function Projects(props) {
  return (
    <div className="projects_main" id={props.light ? "lightid" : null}>
      <div className="projects_header" id="projects">
        My Projects
      </div>
      <div className="morep">
        <a href="/projects" id="more_link">
          More Projects...
        </a>
      </div>
      <div className="card_c">
        {/*Psychup */}
        <div className="mainc">
          <div className="proj_card" id={props.light ? "proj_card_light" : null}>
            <img src={vikas} className="proj_img"   id={props.light ? "proj_img_light" : null}></img>
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
          <div className="proj_card"  id={props.light ? "proj_card_light" : null}>
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
          <div className="proj_card"  id={props.light ? "proj_card_light" : null}>
            <img src={astro} className="proj_img"  id={props.light ? "proj_img_light" : null}></img>
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
      </div>
    </div>
  );
}
