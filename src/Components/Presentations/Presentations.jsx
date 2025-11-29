import React from "react";
import "./Presentations.css";

const presentations = [
  {
    id: 1,
    title: "SatelTensor Workshop & IISc TCML Research Presentation",
    description: "Presented research on tensor-based satellite image processing and machine learning applications at Indian Institute of Science. Covered multimodal deep learning architectures for geospatial analysis.",
    institution: "Indian Institute of Science (IISc)",
    year: "2023",
    type: "Research Presentation & Workshop"
  },
  {
    id: 2,
    title: "AI-Driven Digital Transformation",
    description: "Workshop presentation on implementing AI in digital health systems with focus on production-grade deployment. Demonstrated practical approaches to integrating machine learning in healthcare infrastructure.",
    institution: "Digital Health Forum",
    year: "2023",
    type: "Workshop Presentation"
  }
];

export default function Presentations(props) {
  return (
    <div className="presentations_main" id={props.light ? "lightid" : null}>
      <div className="presentations_header" id="presentations">
        <h2>Presentations & Workshops</h2>
        <p className="presentations_subtitle">Research presentations and technical workshop talks</p>
      </div>

      <div className="presentations_grid">
        {presentations.map((presentation) => (
          <div key={presentation.id} className="presentation_card">
            <div className="presentation_type_badge">{presentation.type}</div>
            
            <h3 className="presentation_title">{presentation.title}</h3>
            
            <p className="presentation_description">{presentation.description}</p>
            
            <div className="presentation_meta">
              <div className="presentation_institution">
                <span className="institution_icon">🏛️</span>
                {presentation.institution}
              </div>
              <div className="presentation_year">
                <span className="year_icon">📅</span>
                {presentation.year}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
