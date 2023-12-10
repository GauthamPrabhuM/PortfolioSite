import React from "react";
import "./Research.css";
import paper from "../../Assets/SuryaanshRathinam_ComparisonOfFrontendFrameworks.pdf";
import paper2 from "../../Assets/Review_Paper.pdf";

import { GiArchiveResearch } from "react-icons/gi";
import { MdPresentToAll } from "react-icons/md";
import { FaFileDownload } from "react-icons/fa";
export default function Research(props) {
  return (
    <div className="projects_main" id={props.light ? "lightid" : null}>
      <div className="projects_header" id="research">
        Research Work
      </div>
      <div className="research-card">
          {/* <div className="r-card-border"></div> */}
          <div className="research-title">
          QuCardio: Application of Quantum Machine Learning for Detection of Cardiovascular Diseases

          </div>
          <div className="research-author">Sharanya Prabhu, Shourya Gupta, Gautham Manuru Prabhu, Aarushi Dhanuka, Vivekananda Bhat</div>
          <div className="research-flex">
            <div className="research-presented">
              {/* <div>
          <MdPresentToAll className="research-icon"/>
          </div> */}
              
            </div>
            <div className="research-published">
              {/* <div><GiArchiveResearch className="research-icon"/></div> */}
             Published in{" "}
              <a
                href="https://ieeexplore.ieee.org/document/10335179"
                target={"_blank"}
              >
                IEEE Access 
              </a>
            </div>
          </div>

         
        </div>
      <div>
        <div className="research-card">
          {/* <div className="r-card-border"></div> */}
          <div className="research-title">
          VIKAS: A Multimodal Framework to Aid in Effective Disaster Management
          </div>
          <div className="research-author">- Gautham Manuru Prabhu, Tanay Gupta, Metta Venkata Srujan, A.R. Soumya, Anshita Palorkar, Anurag Chowdhury</div>
          <div className="research-flex">
            <div className="research-presented">
              {/* <div>
          <MdPresentToAll className="research-icon"/>
          </div> */}
              Presented at:{" "}
              <a href="https://atis2022.com/" target={"_blank"}>
                ATIS 2022 Conference
              </a>
            </div>
            <div className="research-published">
              {/* <div><GiArchiveResearch className="research-icon"/></div> */}
              Published in{" "}
              <a
                href="https://link.springer.com/chapter/10.1007/978-981-99-2264-2_22"
                target={"_blank"}
              >
                Springer's CCIS Series (Volume 1804)
              </a>
            </div>
          </div>

         
        </div>
        <div className="research-card">
          {/* <div className="r-card-border"></div> */}
          <div className="research-title">
          EyeEncrypt: A Cyber-Secured Framework for Retinal Image Segmentation
          </div>
          <div className="research-author">
            - Govardhan Hegde, Shourya Gupta, Gautham Manuru Prabhu, Dr. Sulatha V Bhandary
          </div>
          <div className="research-flex">
            <div className="research-published">
              Presented at:{" "}
              <a href="https://atis2022.com/" target={"_blank"}>
                ATIS 2022 Conference
              </a>
            </div>
            <div className="research-published">
              Published in:{" "}
              <a
                href="https://link.springer.com/chapter/10.1007/978-981-99-2264-2_9"
                target={"_blank"}
              >
                Springer's CCIS Series (Volume 1804)
              </a>
            </div>
            
          </div>

        
        </div>
      </div>
      <div className="research-card">
          {/* <div className="r-card-border"></div> */}
          <div className="research-title">
          Addressing Vaccine Misinformation on Social Media by leveraging Transformers and User Association Dynamics
          </div>
          <div className="research-author">-Chirag Rao, Gautham Manuru Prabhu, Ajay Rajendra, Shourya Gupta, Nisha P. Shetty</div>
          <div className="research-flex">
            <div className="research-presented">
              {/* <div>
          <MdPresentToAll className="research-icon"/>
          </div> */}
              Presented at:{" "}
              <a href="https://www.icmlde.org/" target={"_blank"}>
                ICMLDE 2023 Conference
              </a>
            </div>
            <div className="research-published">
              {/* <div><GiArchiveResearch className="research-icon"/></div> */}
             To be: Published in{" "}
              <a
                href="https://www.sciencedirect.com/journal/procedia-computer-science/special-issues"
                target={"_blank"}
              >
                Procedia- computer-science
              </a>
            </div>
          </div>

         
        </div>
        <div className="research-card">
          {/* <div className="r-card-border"></div> */}
          <div className="research-title">
          A Systematic Review of Deep Learning Approaches for Vessel Segmentation in Retinal Fundus Images

          </div>
          <div className="research-author">-Govardhan Hegde, Srikanth Prabhu, Shourya Gupta, Gautham Manuru Prabhu, Anshita Palorkar, Metta Venkata Srujan, Sulatha V Bhandary</div>
          <div className="research-flex">
            <div className="research-presented">
              {/* <div>
          <MdPresentToAll className="research-icon"/>
          </div> */}
              Presented at:{" "}
              <a href="http://aicecs.in/" target={"_blank"}>
                AICECS 2023 Conference
              </a>
            </div>
            <div className="research-published">
              {/* <div><GiArchiveResearch className="research-icon"/></div> */}
               Published in{" "}
              <a
                href="https://iopscience.iop.org/article/10.1088/1742-6596/2571/1/012021"
                target={"_blank"}
              >
                IOP: Journal of Physics: Conference Series 
              </a>
            </div>
          </div>
          

         
        </div>
        <div className="research-card">
          {/* <div className="r-card-border"></div> */}
          <div className="research-title">
          Exploring Design Optimisation Techniques of a Radio Telescope Using Fixed Costing Constraints
          </div>
          <div className="research-author">-Aditya Arun Iyer , Gautham Manuru Prabhu , Tanay Gupta, Shrey Deshmukh, Rushit Rivankar</div>
          <div className="research-flex">
            <div className="research-presented">
              {/* <div>
          <MdPresentToAll className="research-icon"/>
          </div> */}
              Presented at:{" "}
              <a href="http://aicecs.in/" target={"_blank"}>
                AICECS 2023 Conference
              </a>
            </div>
            <div className="research-published">
              {/* <div><GiArchiveResearch className="research-icon"/></div> */}
               Published in{" "}
              <a
                href="https://iopscience.iop.org/article/10.1088/1742-6596/2571/1/012031"
                target={"_blank"}
              >
                IOP: Journal of Physics: Conference Series 
              </a>
            </div>
          </div>
          

         
        </div>
    </div>
  );
}
