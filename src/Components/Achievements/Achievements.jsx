import React from "react";
import "./Achievements.css";

const achievements = [
  {
    id: 1,
    category: "🏆 Awards & Recognitions",
    items: [
      {
        title: "2nd Runner-Up, Cisco Intern Case Study Competition",
        description: "NLP-based supplier name standardization system improving data consistency across global supply chain operations",
        year: "2025"
      },
      {
        title: "NTSE State Scholar",
        description: "National Talent Search Examination - Rank 21 out of 151,000 participants",
        year: "2020"
      },
      {
        title: "Thayil Lonappan George Memorial Award",
        description: "For ranking third in AISSCE 2020",
        year: "2020"
      },
      {
        title: "Mr. G Chenthamarakshan Endowment Award",
        description: "Best Project in Computer Science",
        year: "2024"
      }
    ]
  },
  {
    id: 2,
    category: "🥇 Hackathons & Competitions",
    items: [
      {
        title: "Smart India Hackathon 2022",
        description: "Grand Finalist - Led team of 6 to build VIKAS (multimodal disaster response system), presented to NDRF",
        year: "2022"
      },
      {
        title: "Global Quantum Science & Technology Hackathon 2022",
        description: "Grand Finalist - Ranked among top 16 teams out of 1,600+ participants from 25+ countries",
        year: "2022"
      }
    ]
  },
  {
    id: 3,
    category: "🎓 Educational Programs & Scholarships",
    items: [
      {
        title: "ACM Winter School on Optimization for ML",
        description: "IIT Goa - Selected participant, Certification received",
        year: "2023"
      },
      {
        title: "Summer School on Dynamic Resource Allocation",
        description: "Center for Networked Intelligence, Indian Institute of Science Bengaluru",
        year: "2023"
      }
    ]
  },
  {
    id: 4,
    category: "🎤 Oral Presentations & Workshop Talks",
    items: [
      {
        title: "SatelTensor Workshop & IISc TCML Research Presentation",
        description: "Presented research on tensor-based satellite image processing and machine learning applications at Indian Institute of Science. Covered multimodal deep learning architectures for geospatial analysis.",
        year: "2023"
      },
      {
        title: "AI-Driven Digital Transformation",
        description: "Workshop presentation on implementing AI in digital health systems with focus on production-grade deployment",
        year: "2023"
      }
    ]
  },
  {
    id: 5,
    category: "🧠 Quizzing & Competitions",
    items: [
      {
        title: "TCS Regional Rural IT Quiz",
        description: "Achieved 3rd place in regional competition",
        year: "2019"
      },
      {
        title: "PCRA Saksham Quiz",
        description: "Represented Karnataka at national-level quiz conducted by Department of Oil and Natural Gas, Government of India",
        year: "2019"
      }
    ]
  }
];

export default function Achievements(props) {
  return (
    <div className="achievements_main" id={props.light ? "lightid" : null}>
      <div className="achievements_header" id="achievements">
        <h2>Achievements & Awards</h2>
        <p className="achievements_subtitle">Recognition for academic excellence, research, and professional contributions</p>
      </div>

      <div className="achievements_grid">
        {achievements.map((category) => (
          <div key={category.id} className="achievement_category">
            <h3 className="category_title">{category.category}</h3>
            
            <div className="achievement_items">
              {category.items.map((item, idx) => (
                <div key={idx} className="achievement_item">
                  <div className="achievement_item_header">
                    <h4 className="achievement_title">{item.title}</h4>
                    <span className="achievement_year">{item.year}</span>
                  </div>
                  <p className="achievement_description">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
