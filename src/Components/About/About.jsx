import React from "react";
import "./About.css";
import me from "../../Assets/me.png";
import me2 from "../../Assets/me2.png";
import { MdSimCardDownload } from "react-icons/md";
import resume from "../../Assets/SuryaanshRathinam_Resume.pdf";
export default function About(props) {
  return (
    <>
      <div className="about_main" id={props.light ? "lightid" : null}>
        <div className="about_header" id="about">
          <span className="letter">W</span>
          <span className="letter">h</span>
          <span className="letter">o</span>
          <span className="letter"> </span>
          <span className="letter">a</span>
          <span className="letter">m </span>
          <span className="letter"> </span>
          <span className="letter">I </span>
          <span className="letter">? </span>
        </div>
        <div className="left">
          <img src={props.light ? me2 : me} className="me" id={props.light?'light_me':null} />
          <div className="leftBg" id={props.light ? 'light_imgBg':null}></div>
        </div>
        <div className="about_txt">
          Hi! I am Gautham Prabhu M, a Computer Science Undergrad at Manipal
          Institue of Technology.I am passionate about my work a deep fascination for the ever-expanding field of Computer Science. 
          I love collaborating with others, so feel free to reach out
          <br />
          <a href={resume} download>
            <button
              className="download"
              id={props.light ? "download_light" : null}
            >
              Resume{" "}
              <MdSimCardDownload
                className="d_icon"
                id={props.light ? "d_icon_light" : null}
              />
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
