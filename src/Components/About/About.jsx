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
            Hi! I'm Gautham Prabhu M, an AI Engineer at Cisco Systems, specializing in building intelligent systems, LLMs, and agentic AI solutions. I'm passionate about developing scalable applications that solve real-world problems, with a strong full-stack development foundation and active interests in quantum computing.
          </p>
          <p>
            I build cutting-edge AI/ML projects in production environments—from AI agents for supply chain automation to computer vision systems for manufacturing quality control. My work spans RAG systems, multimodal learning, quantum machine learning, and distributed systems architecture.
          </p>
          <p>
            I graduated from Manipal Institute of Technology (CGPA: 8.91) in Computer Science and Engineering, with a minor in Big Data Analytics. I thrive in collaborative environments and am driven by the challenge of pushing technological boundaries.
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
