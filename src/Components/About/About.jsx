import React from "react";
import "./About.css";
import me from "../../Assets/me.png";
import me2 from "../../Assets/me2.png";
import { MdSimCardDownload } from "react-icons/md";
import ReactGA from 'react-ga4';
import resume from "../../Assets/GauthamPrabhuMResumeAug2024.pdf";

export default function About(props) {
  const trackResumeDownload = () => {
    ReactGA.event('file_download', {
      file_name: 'GauthamPrabhuMResume',
      file_type: 'pdf',
      timestamp: new Date().toISOString(),
    });
  };

  return (
    <div className="about_main" id={props.light ? "lightid" : null}>
      <h2 className="about_header" id="about">About Me</h2>
      <div className="about_content">
        <div className="about_left">
          <div className="about_image_wrapper">
            <img src={props.light ? me2 : me} className="me" alt="Gautham Prabhu" />
          </div>
        </div>
        <div className="about_txt">
          <p>
            Hi! I'm Gautham Prabhu M, a Full-Stack Software Developer at Cisco with a passion for building scalable applications and exploring quantum computing.
          </p>
          <p>
            I graduated from Manipal Institute of Technology with a degree in Computer Science. My experience spans across full-stack development, cloud infrastructure, and research in quantum machine learning.
          </p>
          <p>
            I thrive in collaborative environments and love solving complex problems. When I'm not coding, you'll find me exploring new technologies or contributing to open-source projects.
          </p>
          <a href={resume} download onClick={trackResumeDownload}>
            <button className="download">
              Download Resume <MdSimCardDownload className="d_icon" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
