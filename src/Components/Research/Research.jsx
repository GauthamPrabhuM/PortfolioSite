import React from "react";
import "./Research.css";
import paper from "../../Assets/SuryaanshRathinam_ComparisonOfFrontendFrameworks.pdf";
import paper2 from "../../Assets/Review_Paper.pdf";

import {GiArchiveResearch} from 'react-icons/gi'
import { MdPresentToAll} from 'react-icons/md'
import {FaFileDownload} from 'react-icons/fa'
export default function Research(props) {
  return (
    <div className="projects_main" id={props.light ? "lightid" : null}>
      <div className="projects_header" id="research">
        Research Work
      </div>
      <div>
        <div className="research-card">
        {/* <div className="r-card-border"></div> */}
          <div className="research-title">Analysis and Comparison of Different Frontend Frameworks</div>
          <div className="research-author">- Suryaansh Rathinam</div>
          <div className="research-flex">

          <div className="research-presented">
          {/* <div>
          <MdPresentToAll className="research-icon"/>
          </div> */}
          Presented at:  <a href="https://atis2022.com/" target={"_blank"}>
            ATIS 2022 Conference
          </a></div>
          <div className="research-published">
          {/* <div><GiArchiveResearch className="research-icon"/></div> */}
            To be published by:{" "}
              <a href="https://www.springer.com/series/7899" target={"_blank"}>
                Springer's CCIS series
              </a>
          </div>
          </div>

          <div>
            <a href={paper} download>
              <button
                className="download_r"
                id={props.light ? "download_r_light" : null}
              >
                <FaFileDownload className="download-icon"/> PDF
              </button>
            </a>
          </div>
        </div>
        <div className="research-card">
        {/* <div className="r-card-border"></div> */}
          <div className="research-title">Survey of the use of AI models and techniques in the analysis and prediction of neuro-degenerative diseases</div>
          <div className="research-author">- Dr. Srikanth Prabhu, Suryaansh Rathinam, Chirag Rao, Anurag Choudhary</div>
          <div className="research-flex">

          <div className="research-presented">
         
          Presented at:  <a href="http://aicecs.in/" target={"_blank"}>
            AICECS 2023
          </a></div>
          <div className="research-published">
            To be published by:{" "}
              <a href="https://iopscience.iop.org/journal/1742-6596" target={"_blank"}>
              IOP: Journal of Physics
              </a>
          </div>
          </div>

          <div>
            <a href={paper2} download>
              <button
                className="download_r"
                id={props.light ? "download_r_light" : null}
              >
                <FaFileDownload className="download-icon"/> PDF
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
