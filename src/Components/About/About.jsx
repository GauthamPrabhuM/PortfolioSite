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
            Hi! I'm Gautham Prabhu M, an AI Engineer at Cisco Systems, specializing in building intelligent systems, large language models, and agentic AI solutions. I also have strong full-stack software development capabilities and an active interest in quantum computing.
          </p>
          <p>
            I graduated from Manipal Institute of Technology (CGPA: 8.91) with a degree in Computer Science and Engineering, with a minor in Big Data Analytics. My professional experience includes building AI/ML systems for production environments, designing microservices architectures, and conducting research in quantum machine learning for medical imaging applications.
          </p>
          <p>
            I'm passionate about solving complex engineering problems and exploring the intersection of AI, quantum computing, and distributed systems. I thrive in collaborative environments and enjoy contributing to cutting-edge projects that push technological boundaries.
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
