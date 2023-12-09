import React from "react";
import "./Contact.css";
import bitmoji from "../../Assets/Skills/bitmoji.png";
import { AiOutlineInstagram } from "react-icons/ai";
import { CgMail } from "react-icons/cg";
import { FaLinkedinIn } from "react-icons/fa";
import { BsMedium, BsGithub } from "react-icons/bs";
export default function Contact(props) {
  return (
    <div className="contact_main" id={props.light ? "lightid" : null}>
      <div className="contact_header" id="contact">
        Get In Touch With Me
      </div>
      <div className="logo_C" id={props.light ? "logo_light" : null}>
        <a href="https://instagram.com/gotham424242" target="__blank">
          <AiOutlineInstagram className="logo" />
        </a>
        <a href="mailto:gauthamprabhu9@gmail.com">
          <CgMail className="logo" />
        </a>
        <a
          href="https://www.linkedin.com/in/gautham-prabhu-5b2342192/"
          target={"__blank"}
        >
          <FaLinkedinIn className="logo" />
        </a>
        <a href="https://github.com/GauthamPrabhuM" target={"__blank"}>
          <BsGithub className="logo" />
        </a>
      </div>
      <div className="c_text">Feel free to contact me :D  </div>
      <img src={bitmoji} className="bitmoji" />
    </div>
  );
}
