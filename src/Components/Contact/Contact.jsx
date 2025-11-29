import React from "react";
import "./Contact.css";
import bitmoji from "../../Assets/Skills/bitmoji.png";
import { AiOutlineInstagram } from "react-icons/ai";
import { CgMail } from "react-icons/cg";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import ReactGA from 'react-ga4';

export default function Contact(props) {
  const trackSocialClick = (platform) => {
    ReactGA.event('social_click', {
      platform: platform,
      timestamp: new Date().toISOString(),
    });
  };

  return (
    <div className="contact_main" id={props.light ? "lightid" : null}>
      <div className="contact_header" id="contact">
        Get In Touch With Me
      </div>
      <div className="logo_C" id={props.light ? "logo_light" : null}>
        <a
          href="https://instagram.com/gotham424242"
          target="__blank"
          rel="noopener noreferrer"
          onClick={() => trackSocialClick('instagram')}
        >
          <AiOutlineInstagram className="logo" />
        </a>
        <a
          href="mailto:gauthamprabhu9@gmail.com"
          onClick={() => trackSocialClick('email')}
        >
          <CgMail className="logo" />
        </a>
        <a
          href="https://www.linkedin.com/in/gautham-prabhu-5b2342192/"
          target={"__blank"}
          rel="noopener noreferrer"
          onClick={() => trackSocialClick('linkedin')}
        >
          <FaLinkedinIn className="logo" />
        </a>
        <a
          href="https://github.com/GauthamPrabhuM"
          target={"__blank"}
          rel="noopener noreferrer"
          onClick={() => trackSocialClick('github')}
        >
          <BsGithub className="logo" />
        </a>
      </div>
      <div className="c_text">Feel free to contact me :D  </div>
      <img src={bitmoji} className="bitmoji" alt="Bitmoji character" />
    </div>
  );
}
