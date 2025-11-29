import "./Work.css";
import React from "react";
import ciscoimg from "../../Assets/Work/cisco.png";
import iitkgp from "../../Assets/Work/iitkgp.png";
import { AiFillCalendar } from "react-icons/ai";

export default function Work(props) {
  return (
    <div className="work_main" id={props.light ? "lightid" : null}>
      <div className="work_header" id="workex">
        Work Experience
      </div>

      <div className="work_card_container">
        <div className="work_card">   

          <img src={ciscoimg} alt="Cisco" className="work_card_logo" />
          <div className="work_card_content">
            <div className="work_card_title">Software Engineer</div>
            <div className="work_card_duration">
              <AiFillCalendar className="calender" />
              Aug 2024 - Present
            </div>
          </div>
        </div>
      </div>

      <div className="work_card_container">
        <div className="work_card">
          <img src={ciscoimg} alt="Cisco" className="work_card_logo" />
          <div className="work_card_content">
            <div className="work_card_title">Software Engineering Intern</div>
            <div className="work_card_duration">
              <AiFillCalendar className="calender" />
              Jan 2024 - June 2024
            </div>
          </div>
        </div>
      </div>

      <div className="work_card_container">
        <div className="work_card">
          <img src={iitkgp} alt="IIT KGP" className="work_card_logo" />
          <div className="work_card_content">
            <div className="work_card_title">Medical Informatics Lab, Deep Learning Intern</div>
            <div className="work_card_duration">
              <AiFillCalendar className="calender" />
              June 2023 - August 2023
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
