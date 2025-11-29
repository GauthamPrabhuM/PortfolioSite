import React from "react";
import "./Landing.css";
import main from "../../Assets/main.png";
import main_light from "../../Assets/main_light.png";
import { HashLink } from "react-router-hash-link";
import { FiArrowRight } from "react-icons/fi";

export default function Landing(props) {
  return (
    <div className="landing_main" id={props.light ? "lightid" : null}>
      <div className="landing_content">
        <div className="landing_text">
          <h1 className="landing_name">
            Hi, I'm Gautham
          </h1>
          <p className="landing_subtitle">
            Full-stack developer passionate about building scalable applications,
            exploring quantum computing, and creating impactful solutions.
          </p>
          <div className="landing_cta">
            <HashLink smooth to="/#projects" className="landing_btn landing_btn_primary">
              View My Work <FiArrowRight />
            </HashLink>
            <HashLink smooth to="/#contact" className="landing_btn landing_btn_secondary">
              Get In Touch
            </HashLink>
          </div>
        </div>
        <div className="landing_profile">
          <div className="landing_profile_ring"></div>
          <img
            src={props.light ? main_light : main}
            alt="Gautham Prabhu"
            className="landing_profile_img"
          />
        </div>
      </div>
    </div>
  );
}
