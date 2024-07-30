import React from "react";
import "./Positions.css";

export default function Positions(props) {
  return (
    <>
      <div className="about_main" id={props.light ? "lightid" : null}>
        <div className="about_txt" id="positions">
          <h1>Positions of Responsibility</h1>
          <ol>
            <li> Co-Founder and Technical Head, Project Kalpana (12/2022  - 09/2023)</li>
            <li>General Secretary and Treasurer, Association For Computer Machinery, Manipal (08/2022 - 08/2023)</li>
            <li>Technical Head, The Astronomy Club of Manipal (09/2022 - 09/2023)</li>
          </ol>
        </div>
      </div>
    </>
  );
}
