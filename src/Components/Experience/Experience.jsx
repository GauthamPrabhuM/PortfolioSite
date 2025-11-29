import React from "react";
import "./Experience.css";

const experiences = [
  {
    id: 1,
    position: "Software Engineer 2, AI Acceleration Team",
    company: "Cisco Systems Inc.",
    location: "Bengaluru, Karnataka",
    duration: "Aug 2025 – Present",
    highlights: [
      "Built AI agents that automate service requests and ServiceNow tickets for Cisco's supply chain infrastructure using natural language understanding",
      "Developed knowledge base systems using RAG to reduce mean time to resolution (MTTR) for production incidents",
      "Built a computer vision system to identify gaps and defects in Paladin edge connectors on manufacturing lines",
      "Integrated SplunkAI observability platform and modernized metrics and trace collection for monitoring and incident resolution"
    ],
    techStack: ["Python", "FastAPI", "Kubernetes", "Docker", "Splunk", "OpenCV", "LangChain", "LangGraph", "LangSmith"],
    isCurrent: true
  },
  {
    id: 2,
    position: "Software Engineer 1, Technology and Quality Systems Group",
    company: "Cisco Systems Inc.",
    location: "Bengaluru, Karnataka",
    duration: "Aug 2024 – Aug 2025",
    highlights: [
      "Converted legacy services to low-latency microservices on Kubernetes using FastAPI, Cassandra, and Redis",
      "Core contributor to Cisco's Quality Transformation Program, leading re-architecture of failure analysis workflows from monolithic to event-driven systems",
      "Built agentic AI solutions for failure analysis and predictive maintenance, incorporating ML models for anomaly detection",
      "Set up monitoring and alerting infrastructure using Prometheus and Grafana, including SLA tracking dashboards that improved incident response time"
    ],
    techStack: ["FastAPI", "Cassandra", "Redis", "Kubernetes", "Prometheus", "Grafana", "Python"],
    isCurrent: false
  },
  {
    id: 3,
    position: "Technical Intern, Supply Chain Organisation",
    company: "Cisco Systems Inc.",
    location: "Bengaluru, Karnataka",
    duration: "Jan 2024 – Jun 2024",
    highlights: [
      "Designed and deployed production-grade backend microservices with circuit breakers, retry logic, and graceful degradation patterns",
      "Automated CI/CD pipeline using Jenkins, Docker, and Kubernetes, reducing manual deployment time from 6 hours to under 2 minutes (99.45% reduction)",
      "Automated release note generation, improving cross-team collaboration and reducing manual effort"
    ],
    techStack: ["Python", "Flask", "Jenkins", "Docker", "Kubernetes", "REST APIs", "OpenAPI"],
    isCurrent: false
  }
];

const researchExperiences = [
  {
    id: 1,
    position: "Summer Research Intern, Medical Informatics Lab",
    company: "Indian Institute of Technology Kharagpur",
    location: "Kharagpur",
    duration: "Jun 2023 – Aug 2023",
    mentor: "Mentor: Dr. Subhamoy Mandal; Co-mentor: Ms. Pragya Gupta",
    highlights: [
      "Worked on multimodal analysis of OCT imaging for early detection of age-related macular degeneration (AMD)",
      "Built a cross-attention Vision Transformer that fused thermal OCT signatures with high-frequency OCT structural maps to capture inflammation patterns",
      "Designed a dual-encoder pipeline that processed thermal–OCT pairs and frequency-enhanced OCT inputs separately before attention-based fusion",
      "Evaluated the model on public OCT datasets to assess its ability to differentiate retinal-layer disruptions and lesion boundaries"
    ]
  },
  {
    id: 2,
    position: "Undergraduate Researcher, Cybersecurity and Quantum Computing Research Group",
    company: "Manipal Institute of Technology",
    location: "Manipal, Karnataka",
    duration: "Feb 2022 – Nov 2023",
    mentor: "Mentor: Dr. Vivekananda Bhat",
    highlights: [
      "Investigated quantum machine learning for automated multi-class classification of cardiovascular disease from ECG images",
      "Implemented and benchmarked QSVC, Pegasos QSVC, and a quanvolution-based QNN architecture",
      "Conducted ablation studies on quantum feature maps and circuit depth to understand entanglement structure",
      "Work published in IEEE Access (Q1) with 30+ citations. Supported by $10,200 research grant from MeitY (Govt. of India) and AWS"
    ]
  },
  {
    id: 3,
    position: "Undergraduate Research Assistant, Biometrics and Software Engineering Group",
    company: "Manipal Institute of Technology",
    location: "Manipal, Karnataka",
    duration: "Jul 2022 – Oct 2023",
    mentor: "Mentors: Dr. Srikanth Prabhu; Mr. Govardhan Hegde",
    highlights: [
      "Worked on retinal vessel segmentation for diabetic retinopathy screening, focusing on thin-vessel boundary preservation",
      "Built encoder–decoder architectures including attention-enhanced and residual U-Net variants",
      "Designed a preprocessing pipeline combining CLAHE, morphological filters, and edge enhancement",
      "Integrated encryption (Diffie-Hellman + AES-256) into the workflow, published in Springer CCIS / ATIS"
    ]
  }
];

export default function Experience(props) {
  return (
    <div className="experience_main" id={props.light ? "lightid" : null}>
      {/* Professional Experience Section */}
      <div className="experience_section">
        <div className="experience_section_header">
          <h2>Professional Experience</h2>
          <p className="experience_subtitle">Roles and responsibilities at Cisco Systems</p>
        </div>

        <div className="experience_timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className={`experience_card ${exp.isCurrent ? 'current' : ''}`}>
              <div className="experience_card_header">
                <div className="experience_info">
                  <h3 className="experience_position">{exp.position}</h3>
                  <p className="experience_company">{exp.company}</p>
                </div>
                <div className="experience_period">
                  <span className="period_badge">{exp.duration}</span>
                  {exp.isCurrent && <span className="current_badge">Current</span>}
                </div>
              </div>

              <p className="experience_location">📍 {exp.location}</p>

              <div className="experience_highlights">
                <h4 className="highlights_title">Key Contributions</h4>
                <ul className="highlights_list">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <div className="experience_tech">
                <span className="tech_label">Tech Stack:</span>
                <div className="tech_tags">
                  {exp.techStack.map((tech, idx) => (
                    <span key={idx} className="tech_tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Research Experience Section */}
      <div className="experience_section research_section">
        <div className="experience_section_header">
          <h2>Research Experience</h2>
          <p className="experience_subtitle">Academic research and internships</p>
        </div>

        <div className="experience_timeline">
          {researchExperiences.map((exp) => (
            <div key={exp.id} className="experience_card research_card">
              <div className="experience_card_header">
                <div className="experience_info">
                  <h3 className="experience_position">{exp.position}</h3>
                  <p className="experience_company">{exp.company}</p>
                </div>
                <span className="period_badge">{exp.duration}</span>
              </div>

              <p className="experience_location">📍 {exp.location}</p>
              {exp.mentor && <p className="experience_mentor">{exp.mentor}</p>}

              <div className="experience_highlights">
                <h4 className="highlights_title">Research Focus</h4>
                <ul className="highlights_list">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
