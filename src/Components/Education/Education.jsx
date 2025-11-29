import React from "react";
import "./Education.css";

const education = [
  {
    id: 1,
    level: "Bachelor of Technology (B.Tech)",
    institution: "Manipal Institute of Technology",
    location: "Manipal, Karnataka",
    field: "Computer Science and Engineering",
    duration: "2020 – 2024",
    cgpa: "8.91",
    specialization: "Minor Specialization: Big Data Analytics | AI & Quantum Computing Focus",
    details: [
      "AI/ML Engineer with strong foundation in Artificial Intelligence, Machine Learning, and Big Data Systems",
      "Advanced coursework: Quantum Computing, Deep Learning, Advanced Algorithms, MLOps, and Distributed Database Systems",
      "Research focus: Quantum Machine Learning for medical imaging and multimodal deep learning architectures",
      "Full stack capabilities: Python/FastAPI backends, Docker/Kubernetes orchestration, and cloud infrastructure"
    ]
  },
  {
    id: 2,
    level: "High School",
    institution: "Little Rock Indian School",
    location: "Brahmavar, Karnataka",
    field: "Science Stream",
    duration: "2008 – 2020",
    percentage: "95.60%",
    details: [
      "AISSCE 2020 - Recipient of Thayil Lonappan George Memorial Award for ranking third",
      "Recipient of Mr. G Chenthamarakshan Endowment Award for Best Project in Computer Science",
      "National Talent Search Examination (NTSE) State Scholar - Rank 21 out of 151,000 participants",
      "Consistent high performance across academics and extracurricular activities"
    ]
  }
];

export default function Education(props) {
  return (
    <div className="education_main" id={props.light ? "lightid" : null}>
      {/* Academic Education Section */}
      <div className="education_section" id="education">
        <div className="education_header">
          <h2>Education</h2>
          <p className="education_subtitle">Academic qualifications and achievements</p>
        </div>

        <div className="education_timeline">
          {education.map((edu) => (
            <div key={edu.id} className="education_card">
              <div className="education_card_marker"></div>
              
              <div className="education_card_content">
                <div className="education_card_header">
                  <div className="education_info">
                    <h3 className="education_level">{edu.level}</h3>
                    <p className="education_institution">{edu.institution}</p>
                  </div>
                  <div className="education_stats">
                    {edu.cgpa && (
                      <div className="stat_item">
                        <span className="stat_label">CGPA</span>
                        <span className="stat_value">{edu.cgpa}</span>
                      </div>
                    )}
                    {edu.percentage && (
                      <div className="stat_item">
                        <span className="stat_label">Percentage</span>
                        <span className="stat_value">{edu.percentage}</span>
                      </div>
                    )}
                  </div>
                </div>

                <p className="education_location">📍 {edu.location}</p>
                <p className="education_duration">{edu.duration}</p>
                <p className="education_field">{edu.field}</p>

                {edu.specialization && (
                  <p className="education_specialization">⭐ {edu.specialization}</p>
                )}

                <div className="education_details">
                  <h4 className="details_title">Highlights</h4>
                  <ul className="details_list">
                    {edu.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
