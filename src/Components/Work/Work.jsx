import "./Work.css";
import React from "react";
import ciscoimg from "../../Assets/Work/cisco.png";
import iitkgp from "../../Assets/Work/iitkgp.png"
import apt from "../../Assets/Work/apt2.png";
import santanet from "../../Assets/Work/santanet.png";
import pefo from "../../Assets/Work/pefo.png";

import { IoIosArrowDropright } from "react-icons/io";

import { AiFillCalendar } from "react-icons/ai";
// ... Other imports

export default function Work(props) {
  return (
    <div className="work_main" id={props.light ? "lightid" : null}>
      <div className="work_header" id="workex">
        Work Experience
      </div>
      <div className="work_card_container">
        <div className="card_cont">
          <div className="work_card" id={props.light ? "work_card_light" : null}>
            <div className="logo_container">
              <img src={ciscoimg} alt="Cisco" className="work_card_img" />
            </div>
          </div>
          <div className="card_bg1" id={props.light ? "card_bg1_light" : null}></div>
          <div className="dur" id={props.light ? "dur_light" : null}>
            <AiFillCalendar className="calender" />
            Jan '24 -
          </div>
        </div>
      </div>
      <div className="work_card_container">
        <div className="card_cont">
          <div className="work_card" id={props.light ? "work_card_light" : null}>
            <div className="logo_container">
              <img src={iitkgp} alt="IIT KGP" className="work_card_img" />
            </div>
          </div>
          <div className="card_bg1" id={props.light ? "card_bg1_light" : null}></div>
          <div className="dur" id={props.light ? "dur_light" : null}>
            <AiFillCalendar className="calender" />
            June '23 - August '23'
          </div>
        </div>
      </div>
    </div>
  );
}
