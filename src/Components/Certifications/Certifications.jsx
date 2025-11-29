import React from "react";
import "./Certifications.css";

const certifications = [
  {
    id: 1,
    title: "Big Data Specialization",
    issuer: "University of California, San Diego",
    platform: "Coursera",
    year: "2023"
  },
  {
    id: 2,
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    platform: "Coursera",
    year: "2022"
  },
  {
    id: 3,
    title: "Optimization for Machine Learning and Operations Research",
    issuer: "ACM Winter School, IIT Goa",
    type: "Workshop Certification",
    year: "2023"
  },
  {
    id: 4,
    title: "Summer School on Dynamic Resource Allocation Problem",
    issuer: "Center for Networked Intelligence, Indian Institute of Science Bengaluru",
    type: "Summer School",
    year: "2023"
  }
];

export default function Certifications(props) {
  return (
    <div className="certifications_main" id={props.light ? "lightid" : null}>
      <div className="certifications_header" id="certifications">
        <h2>Certifications & Professional Development</h2>
        <p className="certifications_subtitle">Specialized training and continuous learning</p>
      </div>

      <div className="certifications_grid">
        {certifications.map((cert) => (
          <div key={cert.id} className="certification_card">
            <div className="cert_icon">📜</div>
            
            <h3 className="cert_title">{cert.title}</h3>
            
            <p className="cert_issuer">{cert.issuer}</p>
            
            {cert.platform && (
              <p className="cert_platform">{cert.platform}</p>
            )}
            
            {cert.type && (
              <span className="cert_type">{cert.type}</span>
            )}
            
            <p className="cert_year">{cert.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
